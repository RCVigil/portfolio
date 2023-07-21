import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import Javascript from "../../StacksImages/Javascript";
import HTML from "../../StacksImages/HTML";
import CSS from "../../StacksImages/CSS";
import ReactImg from "../../StacksImages/ReactImg";
import RtestingL from "../../StacksImages/RtestingL";
import JEST from "../../StacksImages/JEST";
import REDUX from "../../StacksImages/REDUX";
import VITE from "../../StacksImages/VITE";
import MATERIALUI from "../../StacksImages/MATERIALUI";
import TYPESCRIPT from "../../StacksImages/TYPESCRIPT";

import "./_frontend.sass";

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

const FrontEndStacks = () => {
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

  const imageAnimation = {
    hidden: { x: -800, opacity: 0 }, // posição inicial fora da tela (à direita)
    visible: { x: 0, transition: { duration: 1 }, opacity: 1 }, // posição final (x: 0) com duração de 1 segundo
    exit: { y: 10, transition: { duration: 0.5 } }, // posição ao sair da tela (à esquerda) com duração de 0.5 segundos
  };

  return (
    <div className="firstDivStackContent">
      <h2 className="h2Stack">Front-end</h2>
      <motion.div
        className="divStacksContent"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <HTML />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <CSS />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={3}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <Javascript />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={4}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <VITE />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={5}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <ReactImg />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={6}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <TYPESCRIPT />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={7}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <REDUX />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={8}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <RtestingL />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={9}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <JEST />
        </motion.div>
        <motion.div
          className="divStackUnitFront"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={10}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <MATERIALUI />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FrontEndStacks;
