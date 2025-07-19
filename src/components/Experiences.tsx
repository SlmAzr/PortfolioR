import { useState } from "react";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("experience-pro");

  const openTab = (tabName: string) => {
    setActiveTab(tabName);
    console.log("tabName", tabName);
  };

  return (
    <div className="w-full">
      <section
        id="experience"
        className="py-10 text-[#1e293b] flex flex-col justify-between max-w-[800px] w-full mx-auto px-4"
      >
        <div className="title text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white neon-glow-white">
            Experiences
          </h1>
        </div>

        <div className="tabs flex flex-col sm:flex-row justify-around mb-6 text-white gap-2 sm:gap-0">
          <button
            className={`tablink text-lg sm:text-2xl w-full sm:w-1/2 cursor-pointer py-2 ${
              activeTab === "experience-pro" ? "border-b-4 border-white" : ""
            }`}
            onClick={() => openTab("experience-pro")}
          >
            Expérience Pro
          </button>

          <button
            className={`tablink text-lg sm:text-2xl w-full sm:w-1/2 cursor-pointer py-2 ${
              activeTab === "formation" ? "border-b-4 border-white" : ""
            }`}
            onClick={() => openTab("formation")}
          >
            Formation
          </button>
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            {activeTab === "experience-pro" && (
              <div id="experience-pro" className="tabcontent">
                <div className="mb-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    Développeur Full-Stack | Dépanizy | Alternance 2024-2025
                  </h3>
                  <p className="text-base sm:text-xl text-[#e0dbdb] mt-2">
                    Création d'interfaces en React.js, d'une application mobile
                    multiplateforme en React Native, et manipulation de bases de
                    données tout en intégrant des APIs pour la gestion des
                    données.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    Développeur web | CNAM CEDRIC | Stage 2023-2024
                  </h3>
                  <p className="text-base sm:text-xl text-[#e0dbdb] mt-2">
                    Développement et traduction de code en JavaScript, conception
                    de sites web en HTML, CSS et JavaScript.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "formation" && (
              <div id="formation" className="tabcontent">
                <div className="mb-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    Bac +4 Développeur Full Stack en alternance | Cloud Campus | 2024-2026
                  </h3>
                  <p className="text-base sm:text-xl text-[#e0dbdb] mt-2">
                    site web: <a className="underline text-blue-300" href="https://cloud-campus.fr/">Cloud Campus</a>
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    BAC+2 Développeur Web | OpenClassrooms | 2022-2023
                  </h3>
                  <p className="text-base sm:text-xl text-[#e0dbdb] mt-2">
                    Développement de sites web responsives et dynamiques, création
                    d'API et de bases de données, optimisation des performances
                    et gestion complète des projets web.
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold text-xl sm:text-2xl text-white">
                    BAC+1 informatique et numérique - Intégration web | Cnam | 2021-2022
                  </h3>
                  <p className="text-base sm:text-xl text-[#e0dbdb] mt-2">
                    Introduction aux bases de l'informatique, intégration web, et programmation.
                  </p>
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
