import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import "./styles.scss";

const Contact = () => {
  const contacts = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="contact__icon" />,
      link: "https://wa.me/59174217884",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="contact__icon" />,
      link: "https://www.linkedin.com/in/raylgonzalesaldana/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="contact__icon" />,
      link: "https://www.instagram.com/railgonzalesaldana/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="contact__icon" />,
      link: "https://www.facebook.com/rail.gonzales.aldana.2025",
    },
    {
      name: "TikTok",
      icon: <FaTiktok className="contact__icon" />,
      link: "https://www.tiktok.com/@railgonzalesaldana", // tu usuario real
    },
    {
      name: "Correo Electrónico",
      icon: <BsInfoCircleFill className="contact__icon" />,
      link: "mailto:railgonzalesaldana603@gmail.com",
    },
  ];

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contacto"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="contact__cards">
        {contacts.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="contact__card"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
