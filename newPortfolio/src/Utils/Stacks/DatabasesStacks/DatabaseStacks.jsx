import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import MySqlImage from "../../StacksImages/MySqlImage";
import MongodbImages from "../../StacksImages/MongodbImages";

import "./_databases.sass";

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

const DatabaseStacks = () => {
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
    hidden: { x: 800, opacity: 0 }, // posição inicial fora da tela (à direita)
    visible: { x: 0, transition: { duration: 1 }, opacity: 1 }, // posição final (x: 0) com duração de 1 segundo
    exit: { y: 10, transition: { duration: 0.5 } }, // posição ao sair da tela (à esquerda) com duração de 0.5 segundos
  };
  return (
    <div className="firstDivStackContentDB">
      <h2 className="h2StackDB">Database</h2>
      <motion.div
        className="divStacksContentDB"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div
          className="divStackUnitDB"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={1}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <MySqlImage />
        </motion.div>
        <motion.div
          className="divStackUnitDB"
          initial={isVisible ? "visible" : "hidden"}
          animate={isVisible ? "visible" : "hidden"}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          variants={imageAnimation}
        >
          <MongodbImages />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DatabaseStacks;
