import styles from "./page.module.css";
import { LexendDeca, montserrat } from "../fonts";
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
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
            {/* <div className={styles.form_desc}>
            Intelligent Lecture Feedback System
            </div> */}
            <div className={styles.form_input_wrapper}>
              <input
                className={LexendDeca.className}
                type="text"
                placeholder="Username"
              />
              <input
                className={LexendDeca.className}
                type="text"
                placeholder="Password"
              />
            </div>
            <div className={styles.forgetpass_btn_wrapper}>
              <button id="forgetPass" type="button">
                Forgot Password?
              </button>
            </div>
            <div className={styles.login_btn_wrapper}>
              <button id="login" type="submit">
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
