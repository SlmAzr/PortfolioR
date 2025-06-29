import React, { useState } from "react";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("experience-pro");

  const openTab = (tabName: any) => {
    setActiveTab(tabName);
    console.log("tabName", tabName);
  };

  return (
    <div className="w-full  h-[500px]"> 
    <section
      id="experience"
      className="py-10 #text-[#1e293b] flex flex-col justify-between w-[800px] m-auto"

    >
      <div className="title text-center">
        <h1 className="text-3xl font-bold mb-3 text-white neon-glow-white">Experiences</h1>
      </div>

      <div className="tabs flex flex-row justify-around mb-6 text-white mt-4 ">
        <button
          className={`tablink text-3xl w-full cursor-pointer ${
            activeTab === "experience-pro" ? "active border-b-3" : ""
          }`}
          onClick={() => openTab("experience-pro")}
        >
          Expérience Pro
        </button>

        <button
          className={`tablink text-3xl w-full cursor-pointer ${
            activeTab === "formation" ? "active border-b-3 " : ""
          }`}
          onClick={() => openTab("formation")}
        >
          Formation
        </button>
      </div>

      <div className="flex justify-center h-[250px]">
        <div className="">
          {activeTab === "experience-pro" && (
            <div
              id="experience-pro"
              className={`tabcontent  ${
                activeTab === "experience-pro" ? "active" : "display-none"
              }`}
            >
              <div className="mb-4">
                <h3 className="font-bold text-2xl text-white">
                  Développeur Full-Stack | Dépanizy | Alternance 2024-2025
                </h3>
                <p className="text-xl text-[#e0dbdb]">

                  Création d'interfaces en React.js, d'une application mobile
                  multiplateforme en React Native, et manipulation de bases de
                  données tout en intégrant des APIs pour la gestion des
                  données.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-2xl text-white">
                  Développeur web | CNAM CEDRIC | Stage 2023-2024
                </h3>
                <p className="text-xl text-[#e0dbdb]">
                  Développement et traduction de code en JavaScript, conception
                  de sites web en HTML, CSS et JavaScript.
                </p>
              </div>
            </div>
          )}

          {activeTab === "formation" && (
            <div
              id="formation"
              className={`tabcontent ${
                activeTab === "formation" ? "active" : ""
              }`}
            >
              <div className="mb-4">
                <h3 className="font-bold text-2xl text-white">
                  Bac +4 Développeur Full Stack en alternance | Cloud Campus |
                  2024-2026
                </h3>
                <p className="text-xl text-[#e0dbdb]">
                  site web: <a href="https://cloud-campus.fr/">Cloud Campus</a>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-2xl text-white">
                  BAC+2 Développeur Web | OpenClassrooms | 2022-2023
                </h3>
                <p className="text-xl text-[#e0dbdb]">
                  Développement de sites web responsives et dynamiques, création
                  d'API et de bases de données, l'optimisation des performances
                  et la gestion complète des projets web.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="font-bold text-2xl text-white">
                  BAC+1 informatique et numérique - Intégration web | Cnam |
                  2021-2022
                </h3>
                <p></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Experiences;
