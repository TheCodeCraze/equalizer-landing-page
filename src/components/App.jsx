import styles from "../styles/App.module.css";
import { Features } from "./Features";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <main className={styles.main}>
      <Features />
      <Footer />
    </main>
  );
};

// We make your music sound extraordinary.

// A system audio equalizer specifically designed for Android and iOS. Freely tune the
// way your music sounds with a professional grade parametric EQ & volume mixer. Control
// bass, mids, treble, gain control, reverb, and more!
