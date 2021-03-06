import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { motion } from "framer-motion";
import logo from "../assets/Images/Logo Mg 2.png";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

// const Text = styled(motion.span)`
//   font-size: ${(props) => props.theme.fontlg};
//   color: ${(props) => props.theme.text};
//   padding-bottom: 0.5rem;
// `;

// const Text2 = styled(motion.span)`
//   font-size: ${(props) => props.theme.fontsm};
//   color: ${(props) => props.theme.text};
//   padding-bottom: 0.5rem;
// `;

// const textVariants = {
//   hidden: {
//     opacity: 0,
//     x: -50,
//   },
//   visible: {
//     opacity: 1,
//     x: -5,

//     transition: {
//       duration: 2, // 2
//       delay: 5,
//       ease: "easeInOut",
//     },
//   },
// };

// const pathVariants = {
//   hidden: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,

//     transition: {
//       duration: 2,
//       delay: 3,
//       ease: "easeInOut",
//     },
//   },
// };

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g></g>
          <g>
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg> */}
        {/* <Text>MG</Text> */}
        {/* <Text variants={textVariants} initial="hidden" animate="visible">
          Mukhi Garments
        </Text> */}
        {/* <br /> */}

        <img
          src={logo}
          alt="logo"
          style={{
            height: "120px",
            width: "120px",
            marginTop: "-10px",
            // marginLeft: "-40px",
            // position: "absolute",
            // top: "0",
            // left: "0",
          }}
        ></img>
      </Link>
      {/* <Text2 variants={textVariants} initial="hidden" animate="visible">
        All Types of Ladies Garments
      </Text2> */}
    </Container>
  );
};

export default Logo;
