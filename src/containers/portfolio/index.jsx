import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { portfolioData } from "./utils";
import "./styles.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        {portfolioData.map((project, index) => (
          <div key={index} className="portfolio__card">
            <div className="portfolio__media-wrapper">
              {project.video ? (
                <iframe
                  width="100%"
                  height="200"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img src={project.image} alt={project.title} />
              )}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                className="portfolio__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Proyecto
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
