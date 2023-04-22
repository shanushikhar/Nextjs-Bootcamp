import React from "react";
import styles from "./about.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "About page desc",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About Layout</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
