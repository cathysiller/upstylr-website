import React, { useRef, useState } from "react";
import styles from "../../app/page.module.css";

import { Raleway } from "next/font/google";
const ralewayScript = Raleway({ subsets: ["latin"] });

function Newsletter() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");

  const subscribe = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputEl.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      setMessage(error);
      return;
    }
    setMessage("Thank you for subscribing 🔥");
  };

  return (
    <div className={styles.form}>
      <form onSubmit={subscribe}>
        <label
          htmlFor="email"
          className={ralewayScript.className}
          style={{
            color: "#224C4B",
          }}
        >
          Get notified when the Upstylr app launches!
        </label>
        <div className={styles.formInput}>
          <input
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            ref={inputEl}
            required
            style={{
              borderColor: "#F2F2F2",
              borderRadius: 4,
              borderStyle: "solid",
              borderWidth: 1,
              outline: "none",
            }}
            type="email"
          />
          <button className={styles.formButton}>Subscribe</button>
        </div>
        <div
          className={ralewayScript.className}
          style={{
            color: "#224C4B",
            fontWeight: 500,
            marginTop: 36,
          }}
        >
          {message && message}
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
