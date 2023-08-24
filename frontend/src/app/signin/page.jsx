"use client";

import styles from "./page.module.css";
import { LexendDeca, montserrat } from "../fonts";
import { getCsrfToken, signIn } from "next-auth/react";
import { useRef, useState } from "react";

export default function SignIn({ csrfToken }) {
  const userName = useRef("");
  const password = useRef("");

  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let user = userName.current;
      let pass = password.current;

      const res = await signIn("credentials", {
        user,
        pass,
        redirect: false,
        // callbackUrl: "/",
      });

      if (res.error) {
        setError("Invalid Creds");
        console.log(res.error);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={`${styles.container} ${LexendDeca.className}`}>
        <div className={styles.waves}>
          <img src="/waves-vector.png" alt="waves" />
        </div>
        <div className={styles.form_wrapper}>
          <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className={styles.form_heading}>Sign in</div>
            {error && <div className={styles.form_desc}>{error}</div>}
            <div className={styles.form_input_wrapper}>
              <input
                className={LexendDeca.className}
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  userName.current = e.target.value;
                }}
              />
              <input
                className={LexendDeca.className}
                type="text"
                placeholder="Password"
                onChange={(e) => {
                  password.current = e.target.value;
                }}
              />
            </div>
            <div className={styles.forgetpass_btn_wrapper}>
              <button id="forgetPass" type="button">
                Forgot Password?
              </button>
            </div>
            <div className={styles.login_btn_wrapper}>
              <button id="login" type="submit" onClick={onSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
