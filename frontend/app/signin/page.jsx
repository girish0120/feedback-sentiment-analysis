import styles from "./page.module.css";
import { LexendDeca, montserrat } from "../fonts";

export default function SignIn() {
  return (
    <>
      <div className={`${styles.container} ${LexendDeca.className}`}>
        <div className={styles.waves}>
          <img src="/waves-vector.png" alt="waves" />
        </div>
        <div className={styles.form_wrapper}>
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
            <button id="login" type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
