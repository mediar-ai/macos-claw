"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import Script from "next/script";

const POSTHOG_KEY = "phc_TmJqKnDNWV7IBhayQBuMfuMVBjCPNbt4lDG93XbCDB9";
const POSTHOG_HOST = "https://us.i.posthog.com";
const CRISP_WEBSITE_ID = "7d3318a0-dcce-4508-928e-530b74adc7fc";

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
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      person_profiles: "always",
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      {children}
      <CrispChat />
    </PHProvider>
  );
}
