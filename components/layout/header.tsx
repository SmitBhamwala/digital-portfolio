"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const el = linkRefs.current[activeSection];
    if (el && listRef.current) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [activeSection]);

  return (
    <header className="z-999 relative">
      <motion.div
        className="fixed top-4 lg:top-6 p-0 h-[3.25rem] w-[90vw] lg:w-[48.5rem] rounded-full 
        border border-white/40 bg-slate-100/80 shadow-lg shadow-black/[0.15] 
        backdrop-blur-[0.5rem] dark:bg-gray-950/80 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

      <nav className="flex fixed top-[1.2rem] lg:top-[1.7rem] h-[2.875rem] -translate-x-1/2 py-0">
        <ul
          ref={listRef}
          className="flex w-[85vw] lg:w-[47.5rem] overflow-x-auto scrollbar-none flex-nowrap items-center justify-start lg:justify-center text-[0.9rem] font-medium text-gray-500 md:gap-2 scroll-smooth">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}>
              <Link
                ref={(el) => {
                  linkRefs.current[link.name] = el;
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-200",
                  {
                    "text-gray-950 dark:text-gray-200!":
                      activeSection === link.name
                  }
                )}
                href={link.hash}
                replace
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}>
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30
                    }}></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
