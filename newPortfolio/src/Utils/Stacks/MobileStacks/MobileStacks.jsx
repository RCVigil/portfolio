import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import "./_mobileStacks.sass";

import RactNativeImages from "../../StacksImages/RactNativeImages";

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

const MobileStacks = () => {
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
    <div className="firstDivMobile">
      <h2 className="h2Stack2Mobile">Mobile</h2>
      <motion.div
        className="divStacksContent2Mobile"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div
          className="divStackUnit2Mobile"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <RactNativeImages />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileStacks;
