import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import HeaderIMG from "../../StacksImages/HeaderIMG";
import Handshake from "../../StacksImages/Handshake";
import ReslienciaImg from "../../StacksImages/ReslienciaImg";
import CriatividadeImg from "../../StacksImages/CriatividadeImg";
import AutoaprendizadoIMG from "../../StacksImages/AutoaprendizadoIMG";

import "./_softSkillStacks.sass";

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

const SoftSkillsStacks = () => {
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
    hidden: { y: 1400, opacity: 0 }, // posição inicial fora da tela (à direita)
    visible: { y: 0, transition: { duration: 1 }, opacity: 1 }, // posição final (x: 0) com duração de 1 segundo
    exit: { y: 10, transition: { duration: 0.5 } }, // posição ao sair da tela (à esquerda) com duração de 0.5 segundos
  };
  return (
    <div className="firstDivSSkills">
      <h2 className="h2Stack2SSkills">Soft Skills</h2>
      <motion.div
        className="divStacksContent2SSkills"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div
          className="divStackUnit2SSkills"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <HeaderIMG />
        </motion.div>
        <motion.div
          className="divStackUnit2SSkills"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <Handshake />
        </motion.div>
        <motion.div
          className="divStackUnit2SSkills"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <ReslienciaImg />
        </motion.div>
        <motion.div
          className="divStackUnit2SSkills"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <CriatividadeImg />
        </motion.div>
        <motion.div
          className="divStackUnit2SSkills"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <AutoaprendizadoIMG />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SoftSkillsStacks;
