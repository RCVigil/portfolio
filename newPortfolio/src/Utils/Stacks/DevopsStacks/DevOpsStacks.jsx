import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import GIT from "../../StacksImages/GIT";
import GITHUB from "../../StacksImages/GITHUB";
import VERCELL from "../../StacksImages/VERCELL";
import BITBUCKET from "../../StacksImages/BITBUCKET";
import JIRA from "../../StacksImages/JIRA";

import "./_devops.sass";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.5,
    },
  },
};

const DevOpsStacks = () => {
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

  return (
    <div className="firstDivDevops">
      <h2 className="h2Stack2Devops">DevOps</h2>
      <motion.div
        className="divStacksContent2Devops"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div
          className="divStackUnit2Devops"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GIT />
        </motion.div>
        <motion.div
          className="divStackUnit2Devops"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GITHUB />
        </motion.div>
        <motion.div
          className="divStackUnit2Devops"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <VERCELL />
        </motion.div>
        <motion.div
          className="divStackUnit2Devops"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <BITBUCKET />
        </motion.div>
        <motion.div
          className="divStackUnit2Devops"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <JIRA />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DevOpsStacks;
