import React from "react";
import styled from "styled-components";

import Logo from "../assets/Images/Logo Mg 2.png";
import Logo2 from "../assets/Images/Logo.png";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }
  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait) {
    img {
      width: 50%;
      height: 25%;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  ${"" /* border:1px solid red; */}
  padding: 0.5rem 0;
  margin: 0 10rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);

    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img
          style={{
            width: "10em",
            height: "10em",
          }}
          data-scroll
          data-scroll-speed="2"
          src={Logo}
          alt="Mukhi Garments"
        />
        <h3 data-scroll data-scroll-speed="-1">
          <img
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100px",
            }}
            data-scroll
            data-scroll-speed="2"
            src={Logo2}
            alt="Mukhi Garments"
          />
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>home</li>
          <li onClick={() => handleScroll(".about")}>about</li>
          <li onClick={() => handleScroll("#shop")}>shop</li>
          <li onClick={() => handleScroll("#new-arrival")}>new arrival</li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
            style={{
              marginTop: "45px",
            }}
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Connect With Us :
            <span
              style={{
                marginLeft: "10px",
                // marginBottom: "-10px",
                fontSize: "50px",
              }}
            >
              <a
                href="https://instagram.com/mukhigarments?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </span>
            <span style={{ marginLeft: "10px" }}>
              <a
                href="https://www.facebook.com/MUKHIGARMENTS/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
            </span>
            <span style={{ marginLeft: "10px" }}>
              <a
                href="https://wa.me/message/GEQDSUP3MUQCC1"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
              </a>
            </span>
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
