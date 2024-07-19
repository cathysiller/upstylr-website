import React, { useRef, useState } from "react";
function Subscribe() {
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
    //inputEl.current?.value = "";
    setMessage("Success! 🔥🔥🚀🚀 You are now subscribed to the newsletter.");
  };
  return (
    <form onSubmit={subscribe}>
      <h3>Subscribe to Headless.Team newsletter</h3>
      <label htmlFor="email-input">{/* {'Email Address'} */}</label>
      <input
        id="email-input"
        name="email"
        placeholder="you@awesome.com"
        ref={inputEl}
        required
        type="email"
      />
      <div>
        {message
          ? message
          : `Subscribe to our newsletter and don't miss our future projects or articles!`}
      </div>
      <button type="submit">{"Subscribe"}</button>
    </form>
  );
}
export default Subscribe;
