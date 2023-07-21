import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import NODEJS from "../../StacksImages/NODEJS";
import NESTJS from "../../StacksImages/NESTJS";
import TYPESCRIPT from "../../StacksImages/TYPESCRIPT";
import DOCKERIMG from "../../StacksImages/DOCKERIMG";

import "./_backend.sass";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const BackEndStacks = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1, // Defina um threshold adequado
  });

  React.useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView, isVisible]);

  // React.useEffect(() => {
  //   setIsVisible(inView);
  // }, [inView]);

  const imageAnimation = {
    hidden: { y: -1400, opacity: 0 }, // posição inicial fora da tela (à direita)
    visible: { y: 0, transition: { duration: 1 }, opacity: 1 }, // posição final (x: 0) com duração de 1 segundo
    exit: { y: 10, transition: { duration: 0.5 } }, // posição ao sair da tela (à esquerda) com duração de 0.5 segundos
  };
  return (
    <div className="firstDivStackContentBack">
      <h2 className="h2StackBack">Back-end</h2>
      <motion.div
        className="divStacksContentBack"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div
          className="divStackUnitBack"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <TYPESCRIPT />
        </motion.div>
        <motion.div
          className="divStackUnitBack"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <DOCKERIMG />
        </motion.div>
        <motion.div
          className="divStackUnitBack"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={3}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <NODEJS />
        </motion.div>
        <motion.div
          className="divStackUnitBack"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={4}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <NESTJS />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BackEndStacks;
