import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./_footerCenter.sass";

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

const item = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export default function FooterCenter() {
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.5, // Altere o valor conforme necessário
  });

  const [animationVisible, setAnimationVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setAnimationVisible(true);
    } else {
      setAnimationVisible(false);
    }
  }, [inView]);

  useEffect(() => {
    if (animationVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, animationVisible]);

  const currentPath = window.location.pathname;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const redirectToHome = () => {
    window.location.replace("/");
  };

  const handleMenuItemClick = (sectionId) => {
    if (currentPath === "/") {
      scrollToSection(sectionId);
    } else {
      redirectToHome();
    }
  };

  return (
    <div className="listFooter">
      {/* Itens do menu */}
      <motion.ul
        className="listUlFooter"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.li
          className="liItemsMenuFooter"
          variants={item}
          custom={1}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            className="linkItemsMenuFooter"
            onClick={() => handleMenuItemClick("home")}
          >
            <div className="divSvgFooter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <path
                  fill="#7431F9"
                  d="M 20 2.03125 C 19.449219 2.03125 19 2.480469 19 3.03125 L 19 7.8125 L 13.71875 2.53125 C 13.328125 2.140625 12.671875 2.140625 12.28125 2.53125 L 0.5625 14.28125 C 0.171875 14.671875 0.171875 15.296875 0.5625 15.6875 C 0.953125 16.078125 1.578125 16.078125 1.96875 15.6875 L 13 4.65625 L 24.0625 15.71875 C 24.257813 15.914063 24.523438 16.03125 24.78125 16.03125 C 25.039063 16.03125 25.273438 15.914063 25.46875 15.71875 C 25.859375 15.328125 25.859375 14.703125 25.46875 14.3125 L 22 10.84375 L 22 3.03125 C 22 2.480469 21.550781 2.03125 21 2.03125 Z M 13 6.5 L 2 17.5 L 2 23 C 2 24.65625 3.34375 26 5 26 L 21 26 C 22.65625 26 24 24.65625 24 23 L 24 17.5 Z M 11 16 L 15 16 C 15.550781 16 16 16.449219 16 17 L 16 23 C 16 23.550781 15.550781 24 15 24 L 11 24 C 10.449219 24 10 23.550781 10 23 L 10 17 C 10 16.449219 10.449219 16 11 16 Z"
                ></path>
              </svg>
            </div>
            <div className="divParagFooterCenter">Home</div>
          </Link>
        </motion.li>
        {/* Itens adicionais do menu */}
        <motion.li
          className="liItemsMenuFooter"
          variants={item}
          custom={2}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            className="linkItemsMenuFooter"
            onClick={() => handleMenuItemClick("sobre")}
          >
            <div className="divSvgFooter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#7431F9"
                  d="M 11.423828 2 C 11.179828 2 10.969688 2.1769687 10.929688 2.4179688 L 10.646484 4.1230469 C 10.159736 4.2067166 9.689176 4.3360771 9.2363281 4.5039062 L 8.1347656 3.1679688 C 7.9797656 2.9789688 7.7100469 2.9297344 7.4980469 3.0527344 L 6.5019531 3.6289062 C 6.2899531 3.7509062 6.1972031 4.0083281 6.2832031 4.2363281 L 6.8886719 5.8535156 C 6.513238 6.1663963 6.1663963 6.513238 5.8535156 6.8886719 L 4.2363281 6.2832031 C 4.0083281 6.1972031 3.7509062 6.2899531 3.6289062 6.5019531 L 3.0527344 7.4980469 C 2.9297344 7.7100469 2.9789688 7.9797656 3.1679688 8.1347656 L 4.5039062 9.2363281 C 4.3360771 9.689176 4.2067166 10.159736 4.1230469 10.646484 L 2.4179688 10.929688 C 2.1769687 10.970688 2 11.178828 2 11.423828 L 2 12.576172 C 2 12.820172 2.1769687 13.030312 2.4179688 13.070312 L 4.1230469 13.353516 C 4.2067166 13.840264 4.3360771 14.310824 4.5039062 14.763672 L 3.1679688 15.865234 C 2.9789687 16.020234 2.9307344 16.289953 3.0527344 16.501953 L 3.6289062 17.498047 C 3.7509062 17.710047 4.0083281 17.802797 4.2363281 17.716797 L 5.8535156 17.111328 C 6.1663963 17.486762 6.513238 17.833604 6.8886719 18.146484 L 6.2832031 19.763672 C 6.1972031 19.992672 6.2909531 20.249094 6.5019531 20.371094 L 7.4980469 20.947266 C 7.7100469 21.069266 7.9797656 21.020031 8.1347656 20.832031 L 9.234375 19.496094 C 9.6877476 19.664236 10.15912 19.793178 10.646484 19.876953 L 10.929688 21.582031 C 10.970688 21.823031 11.178828 22 11.423828 22 L 12.576172 22 C 12.820172 22 13.030312 21.823031 13.070312 21.582031 L 13.353516 19.876953 C 13.840264 19.793283 14.310824 19.663923 14.763672 19.496094 L 15.865234 20.832031 C 16.020234 21.021031 16.289953 21.069266 16.501953 20.947266 L 17.498047 20.371094 C 17.710047 20.249094 17.802797 19.991672 17.716797 19.763672 L 17.111328 18.146484 C 17.486762 17.833604 17.833604 17.486762 18.146484 17.111328 L 19.763672 17.716797 C 19.992672 17.802797 20.249094 17.709047 20.371094 17.498047 L 20.947266 16.501953 C 21.069266 16.289953 21.020031 16.020234 20.832031 15.865234 L 19.496094 14.765625 C 19.664236 14.312252 19.793178 13.84088 19.876953 13.353516 L 21.582031 13.070312 C 21.823031 13.029312 22 12.821172 22 12.576172 L 22 11.423828 C 22 11.179828 21.823031 10.969688 21.582031 10.929688 L 19.876953 10.646484 C 19.793283 10.159736 19.663923 9.689176 19.496094 9.2363281 L 20.832031 8.1347656 C 21.021031 7.9797656 21.069266 7.7100469 20.947266 7.4980469 L 20.371094 6.5019531 C 20.249094 6.2899531 19.991672 6.1972031 19.763672 6.2832031 L 18.146484 6.8886719 C 17.833604 6.513238 17.486762 6.1663963 17.111328 5.8535156 L 17.716797 4.2363281 C 17.802797 4.0073281 17.709047 3.7509062 17.498047 3.6289062 L 16.501953 3.0527344 C 16.289953 2.9307344 16.020234 2.9799687 15.865234 3.1679688 L 14.765625 4.5039062 C 14.312252 4.3357635 13.84088 4.2068225 13.353516 4.1230469 L 13.070312 2.4179688 C 13.029312 2.1769687 12.821172 2 12.576172 2 L 11.423828 2 z M 11 6.0898438 L 11 9.1738281 A 3 3 0 0 0 9 12 A 3 3 0 0 0 9.0507812 12.548828 L 6.3789062 14.089844 C 6.1382306 13.438833 6 12.736987 6 12 C 6 9.0161425 8.1553612 6.5637988 11 6.0898438 z M 13 6.0898438 C 15.844639 6.5637988 18 9.0161425 18 12 C 18 12.737875 17.86037 13.440133 17.619141 14.091797 L 14.947266 12.546875 A 3 3 0 0 0 15 12 A 3 3 0 0 0 13 9.1757812 L 13 6.0898438 z M 13.947266 14.277344 L 16.628906 15.826172 C 15.530388 17.156023 13.868625 18 12 18 C 10.131375 18 8.4696124 17.156023 7.3710938 15.826172 L 10.050781 14.279297 A 3 3 0 0 0 12 15 A 3 3 0 0 0 13.947266 14.277344 z"
                ></path>
              </svg>
            </div>
            <div className="divParagFooterCenter">Sobre</div>
          </Link>
        </motion.li>
        <motion.li
          className="liItemsMenuFooter"
          variants={item}
          custom={3}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            className="linkItemsMenuFooter"
            onClick={() => handleMenuItemClick("PProjetos")}
          >
            <div className="divSvgFooter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-bookmark-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </div>
            <div className="divParagFooterCenter">Principais Projetos</div>
          </Link>
        </motion.li>
        <motion.li
          className="liItemsMenuFooter"
          variants={item}
          custom={4}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            className="linkItemsMenuFooter"
            onClick={() => handleMenuItemClick("principaisStacks")}
          >
            <div className="divSvgFooter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-stack"
                viewBox="0 0 16 16"
              >
                <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
                <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
              </svg>
            </div>
            <div className="divParagFooterCenter">Principais Stacks</div>
          </Link>
        </motion.li>
        <motion.li
          className="liItemsMenuFooter"
          variants={item}
          custom={5}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link className="linkItemsMenuFooter" to="/projetosFull">
            <div className="divSvgFooter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-journal-code"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </svg>
            </div>
            <div className="divParagFooterCenter">Todos Projetos</div>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}
