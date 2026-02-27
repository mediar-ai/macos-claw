export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ───────────────────── NAV ───────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="/" className="font-mono text-lg font-semibold tracking-tight text-foreground">
            macos-use
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mediar-ai/mcp-server-macos-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
            </a>
            <a
              href="#install"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-zinc-950 transition-all hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ───────────────────── HERO ───────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2">
          <div className="h-[600px] w-[900px] rounded-full bg-cyan-500/[0.07] blur-[120px] animate-glow-pulse" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              MCP Server for macOS Automation
            </div>

            <h1 className="animate-fade-in-up delay-100 text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Give AI agents{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
                hands
              </span>{" "}
              on macOS
            </h1>

            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              An MCP server that lets Claude control any macOS application
              through accessibility APIs. Structured data from the
              accessibility tree&nbsp;&mdash; not screenshots.
            </p>

            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#install"
                className="group relative inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-6 text-base font-medium text-zinc-950 transition-all hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://github.com/mediar-ai/mcp-server-macos-use"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-border px-6 text-base font-medium text-foreground transition-all hover:border-muted hover:bg-surface"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Terminal mockup */}
          <div className="animate-fade-in-up delay-500 mx-auto mt-20 max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/50">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-muted">claude — macos-use</span>
              </div>
              {/* Terminal body */}
              <div className="p-6 font-mono text-sm leading-7">
                <p className="text-muted">
                  <span className="text-accent">$</span> claude &quot;Open Safari and search for MCP servers&quot;
                </p>
                <p className="mt-4 text-zinc-400">
                  <span className="text-cyan-300">&#9656; open_application</span>{" "}
                  <span className="text-zinc-600">&mdash;</span> Opening Safari...
                </p>
                <p className="text-zinc-400">
                  <span className="text-emerald-400">&#10003;</span> Safari launched{" "}
                  <span className="text-zinc-600">(PID 1847)</span>
                </p>
                <p className="mt-2 text-zinc-400">
                  <span className="text-cyan-300">&#9656; click_and_traverse</span>{" "}
                  <span className="text-zinc-600">&mdash;</span> Clicking address bar at (580, 52)
                </p>
                <p className="text-zinc-400">
                  <span className="text-emerald-400">&#10003;</span> Diff: +1 focused,{" "}
                  <span className="text-zinc-600">3 modified</span>
                </p>
                <p className="mt-2 text-zinc-400">
                  <span className="text-cyan-300">&#9656; type_and_traverse</span>{" "}
                  <span className="text-zinc-600">&mdash;</span> Typing &quot;MCP servers macOS&quot;
                </p>
                <p className="text-zinc-400">
                  <span className="text-emerald-400">&#10003;</span> 14 chars typed,{" "}
                  <span className="text-zinc-600">+8 suggestions</span>
                </p>
                <p className="mt-2 text-zinc-400">
                  <span className="text-cyan-300">&#9656; press_key_and_traverse</span>{" "}
                  <span className="text-zinc-600">&mdash;</span> Pressing Return
                </p>
                <p className="text-zinc-400">
                  <span className="text-emerald-400">&#10003;</span> Page loaded{" "}
                  <span className="text-zinc-600">&mdash; 47 elements, saved to /tmp/macos-use/safari_1847.json</span>
                </p>
                <p className="mt-4 text-muted">
                  <span className="animate-terminal-blink inline-block h-4 w-2 bg-accent" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── FEATURES ───────────────────── */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Tools
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Six tools. Full control.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                  </svg>
                ),
                title: "Open App",
                desc: "Launch any app by name, bundle ID, or path",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                  </svg>
                ),
                title: "Click",
                desc: "Click at precise coordinates, see what changed",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                  </svg>
                ),
                title: "Type",
                desc: "Type text into any field",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
                title: "Press Key",
                desc: "Keyboard shortcuts with modifier support",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                  </svg>
                ),
                title: "Scroll",
                desc: "Scroll in any direction",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
                  </svg>
                ),
                title: "Refresh",
                desc: "Re-read current UI state",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="group rounded-xl border border-border bg-surface/50 p-6 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="mb-4 inline-flex rounded-lg border border-border bg-background p-2.5 text-accent transition-colors group-hover:border-accent/30">
                  {tool.icon}
                </div>
                <h3 className="mb-1.5 font-semibold tracking-tight">{tool.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── DIFFERENTIATORS ───────────────────── */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Why macos-use
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built different
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Accessibility tree, not screenshots",
                desc: "Structured semantic data instead of pixels. Faster, more reliable, and uses less tokens.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
              },
              {
                title: "File-based responses",
                desc: "Compact JSON summaries instead of dumping full trees into context. Your agent stays focused.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: "Diff tracking",
                desc: "See exactly what changed after each action — added, removed, and modified elements.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                ),
              },
              {
                title: "Works with any macOS app",
                desc: "Safari, Slack, Xcode, Finder, Terminal — if it has a UI, macos-use can control it.",
                icon: (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl border border-border bg-surface/50 p-8 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="mb-4 inline-flex rounded-lg border border-border bg-background p-2 text-accent">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── HOW IT WORKS ───────────────────── */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Setup
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Three steps to automation
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Build",
                desc: "Clone the repo and build the Swift binary",
              },
              {
                step: "02",
                title: "Configure",
                desc: "Add the server to your Claude Desktop config",
              },
              {
                step: "03",
                title: "Ask Claude",
                desc: "Tell Claude to open apps, click buttons, fill forms — anything",
              },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                {i < 2 && (
                  <div className="pointer-events-none absolute top-8 right-0 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent sm:block" />
                )}
                <div className="relative rounded-xl border border-border bg-surface/50 p-8">
                  <span className="font-mono text-3xl font-bold text-accent/30">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── INSTALLATION ───────────────────── */}
      <section id="install" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium tracking-widest text-accent uppercase">
              Installation
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Up and running in minutes
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Install via npm */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="text-sm font-medium text-muted">Install via npm</span>
                <span className="font-mono text-xs text-zinc-600">bash</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
                <code>
                  <span className="text-muted">$</span>{" "}
                  <span className="text-foreground">npm install</span>{" "}
                  <span className="text-cyan-300">mcp-server-macos-use</span>
                </code>
              </pre>
              <div className="border-t border-border px-5 py-3">
                <p className="text-xs text-zinc-500">Requires Xcode &amp; Swift. Builds automatically on install.</p>
              </div>
            </div>

            {/* Claude Desktop config */}
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="text-sm font-medium text-muted">Claude Desktop config</span>
                <span className="font-mono text-xs text-zinc-600">JSON</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
                <code>
                  <span className="text-zinc-500">{"{"}</span>
                  {"\n"}
                  {"  "}<span className="text-cyan-300">&quot;mcpServers&quot;</span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-zinc-500">{"{"}</span>
                  {"\n"}
                  {"    "}<span className="text-cyan-300">&quot;macos-use&quot;</span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-zinc-500">{"{"}</span>
                  {"\n"}
                  {"      "}<span className="text-cyan-300">&quot;command&quot;</span>
                  <span className="text-zinc-500">:</span>{" "}
                  <span className="text-amber-400">&quot;npx mcp-server-macos-use&quot;</span>
                  {"\n"}
                  {"    "}<span className="text-zinc-500">{"}"}</span>
                  {"\n"}
                  {"  "}<span className="text-zinc-500">{"}"}</span>
                  {"\n"}
                  <span className="text-zinc-500">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Build from source (collapsible) */}
          <details className="mt-6 rounded-xl border border-border bg-surface">
            <summary className="cursor-pointer px-5 py-3 text-sm font-medium text-muted hover:text-foreground transition-colors">
              Or build from source
            </summary>
            <pre className="overflow-x-auto border-t border-border p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-muted">$</span>{" "}
                <span className="text-foreground">git clone</span>{" "}
                <span className="text-cyan-300">https://github.com/mediar-ai/mcp-server-macos-use</span>
                {"\n"}
                <span className="text-muted">$</span>{" "}
                <span className="text-foreground">cd</span>{" "}
                <span className="text-cyan-300">mcp-server-macos-use</span>
                {"\n"}
                <span className="text-muted">$</span>{" "}
                <span className="text-foreground">swift build</span>{" "}
                <span className="text-amber-400">-c release</span>
              </code>
            </pre>
          </details>
        </div>
      </section>

      {/* ───────────────────── FOOTER ───────────────────── */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <span className="text-sm text-muted">
            Built by{" "}
            <a
              href="https://mediar.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground transition-colors hover:text-accent"
            >
              Mediar
            </a>
          </span>

          <div className="flex items-center gap-6 text-sm text-muted">
            <a
              href="https://github.com/mediar-ai/mcp-server-macos-use"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Discord
            </a>
            <a
              href="mailto:i@m13v.com"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
