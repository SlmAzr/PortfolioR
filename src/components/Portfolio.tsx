import React from "react";
import imgKasa from "../assets/Optimized-kasa.png";
import imgBooki from "../assets/Optimized-booki.png";
import imgBibli from "../assets/Optimized-bibli.png";
import imgPortfolio from "../assets/sophie.png";

const projects = [
  {
    title: "Application de réservation",
    description:
      "J'ai créé une application web de location immobilière en utilisant React. Cette réalisation a impliqué le développement de l'interface utilisateur, la gestion des fonctionnalités de location, et l'intégration de React pour une expérience utilisateur optimale.",
    image: imgKasa,
    ressources: ["React", "SCSS", "Javascript"],
  },
  {
    title: "Application de bibliothèque",
    description:
      "J'ai géré le développement backend du site, incluant l'authentification, la gestion des livres (ajout/suppression), la notation des livres, et la base de données.",
    image: imgBibli,
    ressources: ["Node.js", "HTML/CSS", "Javascript"],
  },
  {
    title: "Application de voyage",
    description:
      "J'ai créé la page d'accueil d'une agence de voyage en utilisant HTML et CSS, offrant aux utilisateurs la possibilité de rechercher des hébergements et des activités dans la ville de leur choix.",
    image: imgBooki,
    ressources: ["HTML/CSS", "Javascript", "API"],
  },
  {
    title: "Portfolio interactif",
    description:
      "J'ai conçu un site web de portfolio approprié pour Sophie Bluel, une conceptrice d'intérieur, en privilégiant l'expérience utilisateur et l'attrait visuel.",
    image: imgPortfolio,
    ressources: ["HTML/CSS", "Javascript"],
  },
];

const Portfolio = () => {
  return (
    <section
      id="experience"
      className="py-10 px-4 text-[#dce2f0] flex flex-col items-center m-auto"
    >
      <h2 className="text-3xl font-bold mb-10">Mes Projets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
