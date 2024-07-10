import Image from "next/image";
import styles from "./page.module.css";
import { Playfair_Display } from "next/font/google";
import { Raleway } from "next/font/google";

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
          src="/logo.png"
          width={320}
        />
        <h2 className={playfairScript.className}>
          Your clothing's next chapter
        </h2>
        <hr
          style={{
            borderColor: "#BF6A30",
            marginTop: 32,
            height: 1,
            width: 200,
          }}
        />
      </div>

      <div className={styles.form}>
        <form className="" action="#" method="POST">
          <label htmlFor="email" className={ralewayScript.className}>
            Get notified when we launch!
          </label>
          <div className={styles.formInput}>
            <input
              autoComplete="email"
              className=""
              id="email"
              name="email"
              placeholder="Email address"
              required
              type="email"
            />
            <button className={styles.formButton}>Subscribe</button>
          </div>
        </form>
      </div>
    </main>
  );
}
