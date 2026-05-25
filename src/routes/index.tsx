import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import vivekImg from "@/assets/vivek.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vivek Kumar Rapaka — Backend Dev | Player 1" },
      { name: "description", content: "Gamified portfolio of Vivek Kumar Rapaka — Java backend engineer specialising in UPI, REST APIs, and GIS automation tooling." },
    ],
  }),
});

/* ---------- Reusable bits ---------- */

function PixelPanel({
  children,
  className = "",
  color = "text-primary",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`relative bg-card border-2 border-border ${color} ${className}`}
      style={{
        clipPath:
          "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))",
      }}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  num,
  title,
  sub,
}: { num: string; title: string; sub?: string }) {
  return (
    <div className="flex items-end gap-4 mb-8 border-b-2 border-dashed border-border pb-3">
      <span className="font-pixel text-xs text-neon-yellow neon-glow">{num}</span>
      <h2 className="font-pixel text-lg md:text-2xl text-primary neon-glow">{title}</h2>
      {sub && <span className="font-arcade text-xl text-muted-foreground ml-auto hidden md:block">{sub}</span>}
    </div>
  );
}

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="font-mono text-xs">
      <div className="flex justify-between mb-1">
        <span className="uppercase tracking-wider">{label}</span>
        <span className="text-muted-foreground">{value}/100</span>
      </div>
      <div className="h-3 bg-secondary border border-border relative overflow-hidden">
        <div
          className="h-full fill-bar"
          style={{ width: `${value}%`, background: color, boxShadow: `0 0 10px ${color}` }}
        />
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

function Index() {
  const [boot, setBoot] = useState("");
  const bootText = "> initializing player.profile ... OK\n> loading skills.json ... OK\n> ready_";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setBoot(bootText.slice(0, i++));
      if (i > bootText.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen text-foreground">
      {/* Top HUD */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b-2 border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between font-pixel text-[10px]">
          <div className="flex items-center gap-3">
            <span className="text-neon-pink neon-glow">★</span>
            <span className="text-primary">VIVEK.exe</span>
            <span className="hidden md:inline text-muted-foreground">v3.0</span>
          </div>
          <nav className="hidden md:flex gap-5 text-[9px]">
            {["STATS", "QUESTS", "BOSSES", "INVENTORY", "TROPHIES", "CONTACT"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-neon-yellow transition-colors">
                {s}
              </a>
            ))}
          </nav>
          <div className="text-neon-yellow text-[9px]">HP <span className="text-primary">100</span> / MP <span className="text-accent">∞</span></div>
        </div>
      </header>

      {/* HERO — Player Card */}
      <section className="relative max-w-6xl mx-auto px-4 pt-12 pb-16 scanlines">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Avatar */}
          <PixelPanel className="p-3 floaty" color="text-neon-pink">
            <div
              className="relative aspect-square overflow-hidden border-2 border-neon-pink"
              style={{ imageRendering: "pixelated" }}
            >
              <img src={vivekImg} alt="Vivek Kumar Rapaka" className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none mix-blend-overlay"
                   style={{ background: "repeating-linear-gradient(0deg, rgba(0,0,0,.25) 0 1px, transparent 1px 3px)" }} />
            </div>
            <div className="mt-3 font-pixel text-[9px] text-center text-neon-pink">PLAYER 1</div>
            <div className="font-arcade text-center text-2xl text-primary leading-none mt-1">LVL 27</div>
          </PixelPanel>

          {/* Info */}
          <div>
            <div className="font-pixel text-[10px] text-neon-yellow mb-2">⚔ NOW PLAYING ⚔</div>
            <h1 className="font-pixel text-2xl md:text-4xl text-primary neon-glow leading-relaxed">
              VIVEK KUMAR<br />RAPAKA
            </h1>
            <p className="font-arcade text-2xl md:text-3xl text-accent mt-3">
              Backend Mage · Java Class · UPI Specialization
            </p>
            <pre className="mt-5 font-mono text-xs text-muted-foreground whitespace-pre-wrap min-h-[5rem] border-l-2 border-primary pl-3">
{boot}<span className="blink">█</span>
            </pre>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[11px]">
              {[
                { k: "CLASS", v: "Backend Dev" },
                { k: "GUILD", v: "Olive Crypto" },
                { k: "REGION", v: "Hyderabad, IN" },
                { k: "XP", v: "3+ years" },
              ].map((s) => (
                <div key={s.k} className="bg-card border border-border px-3 py-2">
                  <div className="text-[9px] text-muted-foreground font-pixel">{s.k}</div>
                  <div className="text-primary mt-1">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 font-pixel text-[10px]">
              <a href="mailto:vivekkumar.rapaka@gmail.com"
                 className="bg-primary text-primary-foreground px-4 py-3 hover:translate-y-[2px] transition-transform pulse-glow">
                ▶ START QUEST
              </a>
              <a href="https://www.linkedin.com/in/vivek-rapaka-728593200/" target="_blank" rel="noreferrer"
                 className="border-2 border-accent text-accent px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors">
                ⌬ LINKEDIN
              </a>
              <a href="#contact" className="border-2 border-neon-pink text-neon-pink px-4 py-3 hover:bg-neon-pink hover:text-background transition-colors">
                ✉ +91 79930 80796
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="01" title="CHARACTER STATS" sub="// passive abilities" />
        <div className="grid md:grid-cols-2 gap-8">
          <PixelPanel className="p-6 space-y-4">
            {[
              { l: "Java / Spring Boot", v: 92, c: "#84ffaf" },
              { l: "REST API Design", v: 90, c: "#7ad6ff" },
              { l: "RDBMS (Oracle / MySQL)", v: 85, c: "#ffe066" },
              { l: "Debugging / Production Fire-fight", v: 95, c: "#ff7ab8" },
              { l: "Messaging (Kafka / MQ)", v: 70, c: "#c79bff" },
              { l: "Microservices", v: 65, c: "#84ffaf" },
            ].map((s) => (
              <StatBar key={s.l} label={s.l} value={s.v} color={s.c} />
            ))}
          </PixelPanel>

          <PixelPanel className="p-6" color="text-neon-purple">
            <div className="font-pixel text-[11px] text-neon-purple mb-4">⚡ SPECIAL MOVES</div>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex gap-3"><span className="text-neon-yellow">🤖</span><span><b className="text-primary">AI-Powered Combo:</b> Shipped an entire internal app built with AI tools — now in active use across the company. Active learner, always grinding the next meta. 🚀</span></li>
              <li className="flex gap-3"><span className="text-neon-yellow">🛡️</span><span><b className="text-primary">Uptime Guardian:</b> 70% reduction in project downtime through real-time issue triage. 💪</span></li>
              <li className="flex gap-3"><span className="text-neon-yellow">⚙️</span><span><b className="text-primary">API Smith:</b> 20% faster client onboarding via streamlined REST endpoints. 🔧</span></li>
              <li className="flex gap-3"><span className="text-neon-yellow">🧪</span><span><b className="text-primary">Test Alchemist:</b> JUnit + Mockito coverage → 20% fewer post-deploy bugs. 🧬</span></li>
              <li className="flex gap-3"><span className="text-neon-yellow">🎨</span><span><b className="text-primary">Curiosity +99:</b> Loves exploring new tech, breaking things, then rebuilding cleaner. ✨🌈</span></li>
            </ul>
          </PixelPanel>
        </div>
      </section>

      {/* QUESTS — Experience */}
      <section id="quests" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="02" title="MAIN QUESTS" sub="// experience log" />
        <div className="grid md:grid-cols-2 gap-6">
          <PixelPanel className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="font-pixel text-[10px] text-primary">▶ ACTIVE QUEST</span>
              <span className="font-mono text-[10px] text-neon-yellow">MAR 2024 — NOW</span>
            </div>
            <h3 className="font-pixel text-base text-neon-yellow neon-glow mb-1">SDE-2 @ OLIVE CRYPTO</h3>
            <p className="font-arcade text-xl text-accent mb-3">Realm: Unified Payments Interface</p>
            <ul className="font-mono text-sm space-y-2 text-muted-foreground">
              <li>▸ UPI projects for <span className="text-primary">Kotak Mahindra, Union Bank, C-edge</span>. Agile SDLC. +25% project efficiency.</li>
              <li>▸ REST APIs for client integration — <span className="text-primary">-20% onboarding time</span>.</li>
              <li>▸ Tuned Oracle / MySQL / Postgres — <span className="text-primary">+20% DB perf</span>.</li>
              <li>▸ Tomcat setup, deployments, and production firefighting (100% uptime for bank customers).</li>
              <li>▸ Features: payment processing, txn monitoring, auth.</li>
            </ul>
          </PixelPanel>

          <PixelPanel className="p-6" color="text-accent">
            <div className="flex items-center justify-between mb-3">
              <span className="font-pixel text-[10px] text-accent">▣ COMPLETED</span>
              <span className="font-mono text-[10px] text-neon-yellow">DEC 2021 — JUL 2023</span>
            </div>
            <h3 className="font-pixel text-base text-neon-yellow neon-glow mb-1">DESIGN SPECIALIST @ CYIENT</h3>
            <p className="font-arcade text-xl text-accent mb-3">Realm: GIS &amp; Telecom Network Design</p>
            <ul className="font-mono text-sm space-y-2 text-muted-foreground">
              <li>▸ Built custom <span className="text-primary">GIS automation tools in Java</span> — cut manual data processing <span className="text-primary">-30%</span> for telecom network design.</li>
              <li>▸ Authored <span className="text-primary">QGIS plugins</span> for FTTH / FTTX planning — faster map creation, feature editing &amp; error detection.</li>
              <li>▸ Robust exception handling, logging, config management.</li>
              <li>▸ OOP &amp; inheritance to extend base classes for task-specific automation behaviour.</li>
              <li>▸ SQL integration + JUnit/Mockito → <span className="text-primary">-20% post-deploy bugs</span>.</li>
            </ul>
          </PixelPanel>
        </div>
      </section>

      {/* BOSSES — UPI Projects */}
      <section id="bosses" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="03" title="BOSS BATTLES" sub="// UPI projects defeated" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              tag: "BOSS · S-RANK",
              name: "NPCI Operating Circulars",
              hp: "OC82 · OC185 · OC181A · OC207 · OC200",
              loot: "+35% customer & merchant transactions for Kotak.",
              color: "text-neon-pink",
            },
            {
              tag: "BOSS · A-RANK",
              name: "Mandate Intent & QR",
              hp: "Intent link + QR mandate creation flow",
              loot: "+10% onboarding lift at Kotak Mahindra Bank.",
              color: "text-neon-yellow",
            },
            {
              tag: "BOSS · A-RANK",
              name: "Kotak 811",
              hp: "REST APIs powering UPI onboarding in the mobile app",
              loot: "Seamless UPI txns → boosted digital adoption.",
              color: "text-accent",
            },
            {
              tag: "BOSS · ENDLESS",
              name: "Production Support",
              hp: "Live incidents, deploy windows, customer-facing systems",
              loot: "90% reduction in downtime. Zero panic mode.",
              color: "text-neon-purple",
            },
          ].map((b) => (
            <PixelPanel key={b.name} className="p-6" color={b.color}>
              <div className={`font-pixel text-[10px] ${b.color} mb-2`}>{b.tag}</div>
              <h3 className="font-pixel text-base text-primary neon-glow mb-3">{b.name}</h3>
              <div className="font-mono text-xs text-muted-foreground mb-1">ATTACK PATTERN</div>
              <div className="font-arcade text-xl text-foreground mb-4">{b.hp}</div>
              <div className="font-mono text-xs text-muted-foreground mb-1">LOOT DROPPED</div>
              <div className="font-mono text-sm text-primary">💎 {b.loot}</div>
            </PixelPanel>
          ))}
        </div>
      </section>

      {/* SIDE QUEST — GIS spotlight */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="04" title="SIDE QUEST: GIS LAB" sub="// before the bank wars" />
        <PixelPanel className="p-6 md:p-8" color="text-neon-yellow">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="font-pixel text-[10px] text-neon-yellow mb-2">🗺️ MAP TOOLS</div>
              <p className="font-mono text-sm text-muted-foreground">
                Hand-rolled GIS automation in Java for telecom network design — automating the boring parts so designers could focus on the network.
              </p>
            </div>
            <div>
              <div className="font-pixel text-[10px] text-neon-yellow mb-2">🔌 QGIS PLUGINS</div>
              <p className="font-mono text-sm text-muted-foreground">
                Project-specific plugins for FTTH / FTTX — faster map creation, feature editing, error detection.
              </p>
            </div>
            <div>
              <div className="font-pixel text-[10px] text-neon-yellow mb-2">📉 IMPACT</div>
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">-30%</span> manual processing time. <span className="text-primary">-20%</span> post-deploy bugs.
              </p>
            </div>
          </div>
        </PixelPanel>
      </section>

      {/* INVENTORY — Tech */}
      <section id="inventory" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="05" title="INVENTORY" sub="// tech stack equipped" />
        <div className="grid md:grid-cols-3 gap-4 font-mono text-sm">
          {[
            { t: "LANGUAGES", items: ["Java 8", "Java 17"], c: "text-primary" },
            { t: "FRAMEWORKS", items: ["Spring", "Spring Boot", "Hibernate", "JPA", "JWT", "OAuth 2.0", "Spring Batch", "JUnit", "Mockito"], c: "text-accent" },
            { t: "DATABASES", items: ["Oracle SQL", "MySQL", "PostgreSQL"], c: "text-neon-yellow" },
            { t: "MESSAGING", items: ["Apache Kafka", "ActiveMQ", "RabbitMQ"], c: "text-neon-pink" },
            { t: "API / WEB", items: ["REST", "Swagger"], c: "text-neon-purple" },
            { t: "TOOLS", items: ["Git", "JIRA", "Bitbucket", "Docker", "Postman", "Linux", "PuTTY"], c: "text-accent" },
          ].map((cat) => (
            <PixelPanel key={cat.t} className="p-5" color={cat.c}>
              <div className={`font-pixel text-[10px] ${cat.c} mb-3`}>▣ {cat.t}</div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((i) => (
                  <li key={i} className="border border-border bg-secondary px-2 py-1 text-xs text-foreground hover:border-primary transition-colors">
                    {i}
                  </li>
                ))}
              </ul>
            </PixelPanel>
          ))}
        </div>
      </section>

      {/* GITHUB ARENA */}
      <section id="github" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="06" title="GITHUB ARENA" sub="// open-source builds" />
        <PixelPanel className="p-6" color="text-neon-pink">
          <p className="font-mono text-sm text-muted-foreground mb-5">
            🎮 Drop your GitHub repo links below to mount them into the arena. Until then — here are placeholder slots ready to be filled.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "upi-toolkit", desc: "Helpers, validators, and OC-style flows extracted from UPI work.", lang: "Java" },
              { name: "gis-automation", desc: "QGIS plugin samples for FTTH/FTTX network design.", lang: "Python" },
              { name: "ai-internal-app", desc: "AI-assisted internal tool — now used in production at the company.", lang: "TS / Java" },
            ].map((p) => (
              <a
                key={p.name}
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="block bg-secondary border-2 border-border hover:border-neon-pink p-4 transition-colors"
              >
                <div className="flex items-center justify-between font-pixel text-[10px]">
                  <span className="text-neon-pink">▰ REPO</span>
                  <span className="text-muted-foreground">{p.lang}</span>
                </div>
                <div className="font-arcade text-xl text-primary mt-2">{p.name}</div>
                <p className="font-mono text-xs text-muted-foreground mt-2">{p.desc}</p>
                <div className="font-pixel text-[9px] mt-4 text-accent">VIEW ON GITHUB →</div>
              </a>
            ))}
          </div>
        </PixelPanel>
      </section>

      {/* TROPHIES */}
      <section id="trophies" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader num="07" title="TROPHY ROOM" sub="// achievements unlocked" />
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: "🥉", title: "Bronze MVP Award", desc: "For contributions to internal tooling." },
            { icon: "🏦", title: "UPI Delivered: Kotak", desc: "Milestones hit, 95% stakeholder satisfaction." },
            { icon: "⚡", title: "API Speedrunner", desc: "-20% REST response times across services." },
            { icon: "🚒", title: "Downtime Slayer", desc: "-90% downtime through real-time triage." },
            { icon: "🤖", title: "AI Builder", desc: "Shipped an internal AI app — now actively used in production." },
            { icon: "🎓", title: "MCA — Chaitanya University", desc: "Hanamkonda, Warangal · Aug 2023." },
          ].map((t) => (
            <PixelPanel key={t.title} className="p-4 flex gap-4 items-center">
              <div className="text-4xl">{t.icon}</div>
              <div>
                <div className="font-pixel text-[11px] text-neon-yellow">{t.title}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{t.desc}</div>
              </div>
            </PixelPanel>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader num="08" title="JOIN THE PARTY" sub="// say hello" />
        <PixelPanel className="p-8 text-center" color="text-primary">
          <div className="font-pixel text-[10px] text-neon-pink blink mb-4">▶ PRESS ANY KEY TO CONNECT</div>
          <div className="font-pixel text-base md:text-2xl text-primary neon-glow break-all">
            vivekkumar.rapaka@gmail.com
          </div>
          <div className="font-arcade text-2xl text-accent mt-3">+91 79930 80796</div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 font-pixel text-[10px]">
            <a href="mailto:vivekkumar.rapaka@gmail.com" className="bg-primary text-primary-foreground px-4 py-3 hover:translate-y-[2px] transition-transform">
              ✉ SEND EMAIL
            </a>
            <a href="https://www.linkedin.com/in/vivek-rapaka-728593200/" target="_blank" rel="noreferrer"
               className="border-2 border-accent text-accent px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors">
              ⌬ LINKEDIN
            </a>
          </div>
        </PixelPanel>
      </section>

      <footer className="border-t-2 border-border mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-2 font-pixel text-[9px] text-muted-foreground">
          <span>© {new Date().getFullYear()} VIVEK.exe — All quests reserved.</span>
          <span className="text-neon-yellow">INSERT COIN TO CONTINUE <span className="blink">▮</span></span>
        </div>
      </footer>
    </main>
  );
}
