"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import Script from "next/script";

const POSTHOG_KEY = "phc_aJRMgtAD1FWl349tmYoxt1jBSfZwJnRdwikPDoR0Z2A";
const POSTHOG_HOST = "https://us.i.posthog.com";
const CRISP_WEBSITE_ID = "11e6e4bd-b3df-4e47-8a9f-7fbde1d448a8";

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
