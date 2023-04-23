import Link from "next/link";
import React from "react";

export default function About() {
  //throw new Error("on purpose..");
  return (
    <>
      <p>About Page</p>
      <Link href="/">Go to main page</Link>
    </>
  );
}
