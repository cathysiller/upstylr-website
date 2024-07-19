"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import { Raleway } from "next/font/google";
import Newsletter from "../components/newsletter/newsletter";

const playfairScript = Playfair_Display({ subsets: ["latin"] });
const ralewayScript = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          alt="Upstylr Logo"
          className={styles.logo}
          height={300}
          priority
          src="/logo-light-version.png"
          width={320}
        />
        <h2
          className={playfairScript.className}
          style={{
            color: "#224C4B",
          }}
        >
          Your clothing&apos;s next chapter
        </h2>
        <hr
          style={{
            borderColor: "#BF6A30",
            height: 1,
            marginTop: 32,
            width: 200,
          }}
        />
      </div>

      <div className={styles.form}>
        <Newsletter />
      </div>
    </main>
  );
}
