"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const EASE = [0.22, 1, 0.36, 1] as const;

function buildVariants(direction: Direction, distance: number): Variants {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction];

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };
}

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

/** Envuelve contenido para animarlo al entrar en viewport (scroll reveal). */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 28,
  once = true,
  className,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={buildVariants(direction, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Contenedor que revela a sus hijos <StaggerItem/> en cascada. */
export function Stagger({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren, staggerChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
