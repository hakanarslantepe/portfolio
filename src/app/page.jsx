"use client";
import Button from "@/components/Button/Button";
import Hero from "public/hero.png";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      className={styles.container}
    >
      <div className={styles.item}>
        <h1 className={styles.title}>Hey I am Hakan Arslantepe</h1>
        <p className={styles.desc}>
          I am a front-end web developer, react developer
        </p>
        <Button url="/portfolio" text="See My Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </motion.div>
  );
}
