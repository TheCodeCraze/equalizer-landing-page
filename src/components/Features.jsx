import styles from "../styles/Features.module.css";

export const Features = () => {
  return (
    <section className={styles.features}>
      <img
        src="/illustration-app.png"
        alt="App illustration"
        className={styles.image}
      />
      <div className={styles.text}>
        <h2 className={styles.title}>Premium EQ</h2>
        <p className={styles.description}>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <p className={styles.price}>
          <span>$4</span>/ month
        </p>
        <button className={styles["cta-ios"]}>
          <img
            src="/icon-apple.svg"
            alt="Download iOS application"
            className={styles.icon}
          />
          iOS Download
        </button>
        <button className={styles["cta-android"]}>
          <img
            src="/icon-android.svg"
            alt="Download android application"
            className={styles.icon}
          />
          Android Download
        </button>
      </div>
    </section>
  );
};
