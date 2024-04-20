import styles from "../styles/Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src="/logo.svg" alt="Home" className={styles.logo} />
      <h1 className={styles.title}>We make your music sound extraordinary.</h1>
      <p className={styles.description}>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade
        parametric EQ & volume mixer. Control bass, mids, treble, gain control,
        reverb, and more!
      </p>
    </section>
  );
};
