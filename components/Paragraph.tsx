import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import styles from "./paragraph.module.scss";

interface ParagraphProps {
  paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} scrollYProgress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, scrollYProgress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className={styles.word}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char
            key={`c_${i}`}
            scrollYProgress={scrollYProgress}
            range={[start, end]}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, scrollYProgress, range }) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);

  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
