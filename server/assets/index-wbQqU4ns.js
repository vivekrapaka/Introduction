import { Q as reactExports, I as jsxRuntimeExports } from "./server-BeW2pQde.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const vivekImg = "/Introduction/assets/vivek-DdWFsRV8.png";
function PixelPanel({
  children,
  className = "",
  color = "text-primary"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative bg-card border-2 border-border ${color} ${className}`, style: {
    clipPath: "polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))"
  }, children });
}
function SectionHeader({
  num,
  title,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-4 mb-8 border-b-2 border-dashed border-border pb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-pixel text-xs text-neon-yellow neon-glow", children: num }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-pixel text-lg md:text-2xl text-primary neon-glow", children: title }),
    sub && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-arcade text-xl text-muted-foreground ml-auto hidden md:block", children: sub })
  ] });
}
function StatBar({
  label,
  value,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between mb-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-wider", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        value,
        "/100"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 bg-secondary border border-border relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full fill-bar", style: {
      width: `${value}%`,
      background: color,
      boxShadow: `0 0 10px ${color}`
    } }) })
  ] });
}
function Index() {
  const [boot, setBoot] = reactExports.useState("");
  const bootText = "> initializing player.profile ... OK\n> loading skills.json ... OK\n> ready_";
  reactExports.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setBoot(bootText.slice(0, i++));
      if (i > bootText.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 backdrop-blur bg-background/80 border-b-2 border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between font-pixel text-[10px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-pink neon-glow", children: "★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "VIVEK.exe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-muted-foreground", children: "v3.0" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex gap-5 text-[9px]", children: ["STATS", "QUESTS", "BOSSES", "INVENTORY", "TROPHIES", "CONTACT"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${s.toLowerCase()}`, className: "hover:text-neon-yellow transition-colors", children: s }, s)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-neon-yellow text-[9px]", children: [
        "HP ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "100" }),
        " / MP ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "∞" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative max-w-6xl mx-auto px-4 pt-12 pb-16 scanlines", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[280px_1fr] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-3 floaty", color: "text-neon-pink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden border-2 border-neon-pink", style: {
          imageRendering: "pixelated"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: vivekImg, alt: "Vivek Kumar Rapaka", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none mix-blend-overlay", style: {
            background: "repeating-linear-gradient(0deg, rgba(0,0,0,.25) 0 1px, transparent 1px 3px)"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-pixel text-[9px] text-center text-neon-pink", children: "PLAYER 1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-arcade text-center text-2xl text-primary leading-none mt-1", children: "LVL 27" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[10px] text-neon-yellow mb-2", children: "⚔ NOW PLAYING ⚔" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-pixel text-2xl md:text-4xl text-primary neon-glow leading-relaxed", children: [
          "VIVEK KUMAR",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "RAPAKA"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-arcade text-2xl md:text-3xl text-accent mt-3", children: "Backend Mage · Java Class · UPI Specialization" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "mt-5 font-mono text-xs text-muted-foreground whitespace-pre-wrap min-h-[5rem] border-l-2 border-primary pl-3", children: [
          boot,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "█" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-[11px]", children: [{
          k: "CLASS",
          v: "Backend Dev"
        }, {
          k: "GUILD",
          v: "Olive Crypto"
        }, {
          k: "REGION",
          v: "Hyderabad, IN"
        }, {
          k: "XP",
          v: "3+ years"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground font-pixel", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary mt-1", children: s.v })
        ] }, s.k)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 font-pixel text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:vivekkumar.rapaka@gmail.com", className: "bg-primary text-primary-foreground px-4 py-3 hover:translate-y-[2px] transition-transform pulse-glow", children: "▶ START QUEST" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/vivek-rapaka-728593200/", target: "_blank", rel: "noreferrer", className: "border-2 border-accent text-accent px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors", children: "⌬ LINKEDIN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "border-2 border-neon-pink text-neon-pink px-4 py-3 hover:bg-neon-pink hover:text-background transition-colors", children: "✉ +91 79930 80796" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "stats", className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "01", title: "CHARACTER STATS", sub: "// passive abilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PixelPanel, { className: "p-6 space-y-4", children: [{
          l: "Java / Spring Boot",
          v: 92,
          c: "#84ffaf"
        }, {
          l: "REST API Design",
          v: 90,
          c: "#7ad6ff"
        }, {
          l: "RDBMS (Oracle / MySQL)",
          v: 85,
          c: "#ffe066"
        }, {
          l: "Debugging / Production Fire-fight",
          v: 95,
          c: "#ff7ab8"
        }, {
          l: "Messaging (Kafka / MQ)",
          v: 70,
          c: "#c79bff"
        }, {
          l: "Microservices",
          v: 65,
          c: "#84ffaf"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatBar, { label: s.l, value: s.v, color: s.c }, s.l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-6", color: "text-neon-purple", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[11px] text-neon-purple mb-4", children: "⚡ SPECIAL MOVES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 font-mono text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-yellow", children: "🤖" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-primary", children: "AI-Powered Combo:" }),
                " Shipped an entire internal app built with AI tools — now in active use across the company. Active learner, always grinding the next meta. 🚀"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-yellow", children: "🛡️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-primary", children: "Uptime Guardian:" }),
                " 70% reduction in project downtime through real-time issue triage. 💪"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-yellow", children: "⚙️" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-primary", children: "API Smith:" }),
                " 20% faster client onboarding via streamlined REST endpoints. 🔧"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-yellow", children: "🧪" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-primary", children: "Test Alchemist:" }),
                " JUnit + Mockito coverage → 20% fewer post-deploy bugs. 🧬"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-yellow", children: "🎨" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("b", { className: "text-primary", children: "Curiosity +99:" }),
                " Loves exploring new tech, breaking things, then rebuilding cleaner. ✨🌈"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "quests", className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "02", title: "MAIN QUESTS", sub: "// experience log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-pixel text-[10px] text-primary", children: "▶ ACTIVE QUEST" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-neon-yellow", children: "MAR 2024 — NOW" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-pixel text-base text-neon-yellow neon-glow mb-1", children: "SDE-2 @ OLIVE CRYPTO" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-arcade text-xl text-accent mb-3", children: "Realm: Unified Payments Interface" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "font-mono text-sm space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "▸ UPI projects for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Kotak Mahindra, Union Bank, C-edge" }),
              ". Agile SDLC. +25% project efficiency."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "▸ REST APIs for client integration — ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "-20% onboarding time" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "▸ Tuned Oracle / MySQL / Postgres — ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "+20% DB perf" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "▸ Tomcat setup, deployments, and production firefighting (100% uptime for bank customers)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "▸ Features: payment processing, txn monitoring, auth." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-6", color: "text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-pixel text-[10px] text-accent", children: "▣ COMPLETED" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-neon-yellow", children: "DEC 2021 — JUL 2023" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-pixel text-base text-neon-yellow neon-glow mb-1", children: "DESIGN SPECIALIST @ CYIENT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-arcade text-xl text-accent mb-3", children: "Realm: GIS & Telecom Network Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "font-mono text-sm space-y-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "▸ Built custom ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "GIS automation tools in Java" }),
              " — cut manual data processing ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "-30%" }),
              " for telecom network design."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "▸ Authored ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "QGIS plugins" }),
              " for FTTH / FTTX planning — faster map creation, feature editing & error detection."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "▸ Robust exception handling, logging, config management." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "▸ OOP & inheritance to extend base classes for task-specific automation behaviour." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "▸ SQL integration + JUnit/Mockito → ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "-20% post-deploy bugs" }),
              "."
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "bosses", className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "03", title: "BOSS BATTLES", sub: "// UPI projects defeated" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [{
        tag: "BOSS · S-RANK",
        name: "NPCI Operating Circulars",
        hp: "OC82 · OC185 · OC181A · OC207 · OC200",
        loot: "+35% customer & merchant transactions for Kotak.",
        color: "text-neon-pink"
      }, {
        tag: "BOSS · A-RANK",
        name: "Mandate Intent & QR",
        hp: "Intent link + QR mandate creation flow",
        loot: "+10% onboarding lift at Kotak Mahindra Bank.",
        color: "text-neon-yellow"
      }, {
        tag: "BOSS · A-RANK",
        name: "Kotak 811",
        hp: "REST APIs powering UPI onboarding in the mobile app",
        loot: "Seamless UPI txns → boosted digital adoption.",
        color: "text-accent"
      }, {
        tag: "BOSS · ENDLESS",
        name: "Production Support",
        hp: "Live incidents, deploy windows, customer-facing systems",
        loot: "90% reduction in downtime. Zero panic mode.",
        color: "text-neon-purple"
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-6", color: b.color, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-pixel text-[10px] ${b.color} mb-2`, children: b.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-pixel text-base text-primary neon-glow mb-3", children: b.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-1", children: "ATTACK PATTERN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-arcade text-xl text-foreground mb-4", children: b.hp }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mb-1", children: "LOOT DROPPED" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-sm text-primary", children: [
          "💎 ",
          b.loot
        ] })
      ] }, b.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "04", title: "SIDE QUEST: GIS LAB", sub: "// before the bank wars" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PixelPanel, { className: "p-6 md:p-8", color: "text-neon-yellow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[10px] text-neon-yellow mb-2", children: "🗺️ MAP TOOLS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: "Hand-rolled GIS automation in Java for telecom network design — automating the boring parts so designers could focus on the network." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[10px] text-neon-yellow mb-2", children: "🔌 QGIS PLUGINS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground", children: "Project-specific plugins for FTTH / FTTX — faster map creation, feature editing, error detection." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[10px] text-neon-yellow mb-2", children: "📉 IMPACT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "-30%" }),
            " manual processing time. ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "-20%" }),
            " post-deploy bugs."
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "inventory", className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "05", title: "INVENTORY", sub: "// tech stack equipped" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 font-mono text-sm", children: [{
        t: "LANGUAGES",
        items: ["Java 8", "Java 17"],
        c: "text-primary"
      }, {
        t: "FRAMEWORKS",
        items: ["Spring", "Spring Boot", "Hibernate", "JPA", "JWT", "OAuth 2.0", "Spring Batch", "JUnit", "Mockito"],
        c: "text-accent"
      }, {
        t: "DATABASES",
        items: ["Oracle SQL", "MySQL", "PostgreSQL"],
        c: "text-neon-yellow"
      }, {
        t: "MESSAGING",
        items: ["Apache Kafka", "ActiveMQ", "RabbitMQ"],
        c: "text-neon-pink"
      }, {
        t: "API / WEB",
        items: ["REST", "Swagger"],
        c: "text-neon-purple"
      }, {
        t: "TOOLS",
        items: ["Git", "JIRA", "Bitbucket", "Docker", "Postman", "Linux", "PuTTY"],
        c: "text-accent"
      }].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-5", color: cat.c, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `font-pixel text-[10px] ${cat.c} mb-3`, children: [
          "▣ ",
          cat.t
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-2", children: cat.items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "border border-border bg-secondary px-2 py-1 text-xs text-foreground hover:border-primary transition-colors", children: i }, i)) })
      ] }, cat.t)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "github", className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "06", title: "GITHUB ARENA", sub: "// open-source builds" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-6", color: "text-neon-pink", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-sm text-muted-foreground mb-5", children: "🎮 Drop your GitHub repo links below to mount them into the arena. Until then — here are placeholder slots ready to be filled." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [{
          name: "upi-toolkit",
          desc: "Helpers, validators, and OC-style flows extracted from UPI work.",
          lang: "Java"
        }, {
          name: "gis-automation",
          desc: "QGIS plugin samples for FTTH/FTTX network design.",
          lang: "Python"
        }, {
          name: "ai-internal-app",
          desc: "AI-assisted internal tool — now used in production at the company.",
          lang: "TS / Java"
        }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/", target: "_blank", rel: "noreferrer", className: "block bg-secondary border-2 border-border hover:border-neon-pink p-4 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-pixel text-[10px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-pink", children: "▰ REPO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.lang })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-arcade text-xl text-primary mt-2", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground mt-2", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[9px] mt-4 text-accent", children: "VIEW ON GITHUB →" })
        ] }, p.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "trophies", className: "max-w-6xl mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "07", title: "TROPHY ROOM", sub: "// achievements unlocked" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [{
        icon: "🥉",
        title: "Bronze MVP Award",
        desc: "For contributions to internal tooling."
      }, {
        icon: "🏦",
        title: "UPI Delivered: Kotak",
        desc: "Milestones hit, 95% stakeholder satisfaction."
      }, {
        icon: "⚡",
        title: "API Speedrunner",
        desc: "-20% REST response times across services."
      }, {
        icon: "🚒",
        title: "Downtime Slayer",
        desc: "-90% downtime through real-time triage."
      }, {
        icon: "🤖",
        title: "AI Builder",
        desc: "Shipped an internal AI app — now actively used in production."
      }, {
        icon: "🎓",
        title: "MCA — Chaitanya University",
        desc: "Hanamkonda, Warangal · Aug 2023."
      }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-4 flex gap-4 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: t.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[11px] text-neon-yellow", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-muted-foreground mt-1", children: t.desc })
        ] })
      ] }, t.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "max-w-6xl mx-auto px-4 py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { num: "08", title: "JOIN THE PARTY", sub: "// say hello" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PixelPanel, { className: "p-8 text-center", color: "text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-[10px] text-neon-pink blink mb-4", children: "▶ PRESS ANY KEY TO CONNECT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-pixel text-base md:text-2xl text-primary neon-glow break-all", children: "vivekkumar.rapaka@gmail.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-arcade text-2xl text-accent mt-3", children: "+91 79930 80796" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3 font-pixel text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:vivekkumar.rapaka@gmail.com", className: "bg-primary text-primary-foreground px-4 py-3 hover:translate-y-[2px] transition-transform", children: "✉ SEND EMAIL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/vivek-rapaka-728593200/", target: "_blank", rel: "noreferrer", className: "border-2 border-accent text-accent px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors", children: "⌬ LINKEDIN" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t-2 border-border mt-12 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-2 font-pixel text-[9px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " VIVEK.exe — All quests reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon-yellow", children: [
        "INSERT COIN TO CONTINUE ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
