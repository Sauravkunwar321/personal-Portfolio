"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import awsIcon from "../src/assets/aws.png";
import fastApiIcon from "../src/assets/fastapi.png";
import firebaseIcon from "../src/assets/firebase.png";
import githubIcon from "../src/assets/github.png";
import javascriptIcon from "../src/assets/javascript.png";
import mysqlIcon from "../src/assets/MYSQL.png";
import nextIcon from "../src/assets/nextjs.png";
import nodeIcon from "../src/assets/node.png";
import pythonIcon from "../src/assets/python.png";
import reactIcon from "../src/assets/react.png";
import tailwindIcon from "../src/assets/tailwind.png";
import tanstackIcon from "../src/assets/tanstack.png";
import typescriptIcon from "../src/assets/Typescript.png";
import zodIcon from "../src/assets/zod.png";
import zustandIcon from "../src/assets/zustand.png";

const stripeIcon = "/stripe.avif";

const tools = [
  {
    slug: "nextjs",
    name: "Next.js",
    type: "Full-stack framework",
    icon: nextIcon,
    detail: "App Router products, route handlers, server rendering, and production dashboards.",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    type: "Language",
    icon: typescriptIcon,
    detail: "Typed product features, API contracts, validation, and safer refactoring across large codebases.",
  },
  {
    slug: "react",
    name: "React",
    type: "Interface library",
    icon: reactIcon,
    detail: "Responsive interfaces, multi-step workflows, reusable components, and complex application state.",
  },
  {
    slug: "nodejs",
    name: "Node.js",
    type: "Runtime",
    icon: nodeIcon,
    detail: "API integrations, backend workflows, scripts, webhooks, and scheduled operational jobs.",
  },
  {
    slug: "firebase",
    name: "Firebase",
    type: "Backend platform",
    icon: firebaseIcon,
    detail: "Authentication, Firestore data, storage, and real-time product workflows across HomeInsight.",
  },
  {
    slug: "stripe",
    name: "Stripe",
    type: "Payments",
    icon: stripeIcon,
    detail: "Subscriptions, invoices, payment intents, receipts, Connect accounts, and webhook synchronization.",
  },
  {
    slug: "tanstack-query",
    name: "TanStack Query",
    type: "Server state",
    icon: tanstackIcon,
    detail: "Reliable API fetching, caching, mutations, loading states, and data refresh workflows.",
  },
  {
    slug: "zustand",
    name: "Zustand",
    type: "State management",
    icon: zustandIcon,
    detail: "Focused client state for multi-step forms, payments, property data, and editor workflows.",
  },
  {
    slug: "zod",
    name: "Zod",
    type: "Validation",
    icon: zodIcon,
    detail: "Runtime validation and safer data contracts for forms, APIs, and TypeScript applications.",
  },
  {
    slug: "javascript",
    name: "JavaScript",
    type: "Language",
    icon: javascriptIcon,
    detail: "The foundation for browser experiences, application logic, integrations, and tooling.",
  },
  {
    slug: "tailwind",
    name: "Tailwind CSS",
    type: "Styling",
    icon: tailwindIcon,
    detail: "Fast, consistent responsive UI implementation across dashboards, forms, and portals.",
  },
  {
    slug: "mysql",
    name: "MySQL",
    type: "Database",
    icon: mysqlIcon,
    detail: "Relational data modeling, querying, and application data workflows.",
  },
  {
    slug: "python",
    name: "Python",
    type: "Language",
    icon: pythonIcon,
    detail: "Backend development, automation, data processing, and service integrations.",
  },
  {
    slug: "fastapi",
    name: "FastAPI",
    type: "API framework",
    icon: fastApiIcon,
    detail: "Typed Python APIs and backend services with clear validation and fast iteration.",
  },
  {
    slug: "aws",
    name: "AWS",
    type: "Cloud services",
    icon: awsIcon,
    detail: "Cloud-backed application services, including transactional email delivery with SES.",
  },
  {
    slug: "github",
    name: "Git & GitHub",
    type: "Collaboration",
    icon: githubIcon,
    detail: "Daily version control, code review, team delivery, and maintaining production repositories.",
  },
];

export default function TechMarquee() {
  const trackRef = useRef(null);
  const offsetRef = useRef(null);
  const speedRef = useRef(26);
  const slowRef = useRef(false);
  const [activeSlug, setActiveSlug] = useState(null);
  const activeTool = tools.find((tool) => tool.slug === activeSlug);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let frame;
    let previous = performance.now();

    const animate = (now) => {
      const elapsed = Math.min(now - previous, 40);
      previous = now;
      const halfWidth = track.scrollWidth / 2;

      if (offsetRef.current === null) offsetRef.current = -halfWidth;

      const targetSpeed = slowRef.current ? 5 : 26;
      speedRef.current += (targetSpeed - speedRef.current) * Math.min(1, elapsed / 240);
      offsetRef.current += (speedRef.current * elapsed) / 1000;

      if (offsetRef.current >= 0) offsetRef.current -= halfWidth;
      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const showTool = (slug) => {
    slowRef.current = true;
    setActiveSlug(slug);
  };

  const clearTool = () => {
    slowRef.current = false;
    setActiveSlug(null);
  };

  return (
    <div className="tech-marquee">
      <div className="marquee-viewport">
        <div className="marquee-track" ref={trackRef}>
          {[0, 1].map((copy) => (
            <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
              {tools.map((tool) => (
                <button
                  className={`tech-item ${activeSlug === tool.slug ? "is-active" : ""}`}
                  key={`${copy}-${tool.slug}`}
                  type="button"
                  tabIndex={copy === 1 ? -1 : 0}
                  onMouseEnter={() => showTool(tool.slug)}
                  onMouseLeave={clearTool}
                  onFocus={() => showTool(tool.slug)}
                  onBlur={clearTool}
                  aria-describedby="stack-detail"
                >
                  <span className="tech-icon"><Image src={tool.icon} alt="" width={44} height={44} sizes="44px" /></span>
                  <span><strong>{tool.name}</strong><small>{tool.type}</small></span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={`stack-detail ${activeTool ? "has-tool" : ""}`} id="stack-detail" aria-live="polite">
        <span>{activeTool ? activeTool.type : ""}</span>
        <strong>{activeTool ? activeTool.name : ""}</strong>
        <p>{activeTool ? activeTool.detail : ""}</p>
      </div>
    </div>
  );
}
