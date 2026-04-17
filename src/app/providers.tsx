"use client";

import { useEffect, useState, createContext, useContext } from "react";
import type { PostHog } from "posthog-js";
import Script from "next/script";

const POSTHOG_KEY = "phc_TmJqKnDNWV7IBhayQBuMfuMVBjCPNbt4lDG93XbCDB9";
const POSTHOG_HOST = "https://us.i.posthog.com";
const CRISP_WEBSITE_ID = "7d3318a0-dcce-4508-928e-530b74adc7fc";

let posthogInstance: PostHog | null = null;

const PostHogContext = createContext<PostHog | null>(null);

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

function CrispChat() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
  }, []);

  return (
    <Script
      id="crisp-widget"
      strategy="lazyOnload"
      src="https://client.crisp.chat/l.js"
    />
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [ph, setPh] = useState<PostHog | null>(null);

  useEffect(() => {
    const ric =
      window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));
    const cic = window.cancelIdleCallback ?? clearTimeout;
    const id = ric(
      () => {
        import("posthog-js").then((mod) => {
          const posthogLib = mod.default;
          posthogLib.init(POSTHOG_KEY, {
            api_host: POSTHOG_HOST,
            capture_pageview: true,
            capture_pageleave: true,
            person_profiles: "always",
          });
          posthogInstance = posthogLib;
          setPh(posthogLib);
        });
      },
      { timeout: 3000 }
    );
    return () => cic(id);
  }, []);

  return (
    <PostHogContext.Provider value={ph}>
      {children}
      {/* <CrispChat /> */}
    </PostHogContext.Provider>
  );
}

export function usePostHog() {
  return useContext(PostHogContext);
}

export const posthog = {
  capture: (...args: [string, Record<string, unknown>?]) => {
    posthogInstance?.capture(args[0], args[1]);
  },
};
