import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-light pb-1 mt-4">
      <Container>
        <p className="text-center">
          &copy; {currentYear}{" "}
          <a
            className="text-light font-weight-bold text-decoration-none"
            href="https://tungpham42.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Phạm Tùng
          </a>
          {", "}
          <a
            href="https://github.com/tungpham42/boi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light text-decoration-none"
          >
            <FontAwesomeIcon icon={faGithub} className="me-1" />
            MIT License
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
