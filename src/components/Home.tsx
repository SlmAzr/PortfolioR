import React from 'react';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="home h-[910px] flex items-center justify-center "
    >
      <div className=" text-center px-4">
        <p className="text-2xl font-semibold mb-4 neon-glow-white neon-flicker text-white">
          Salut, je suis
        </p>
        <h2 className="text-4xl font-bold neon-glow-blue neon-flicker text-[#3ba6a6] mb-1">
          AMMAD Salem
        </h2>
        <h3 className="text-2xl font-bold neon-glow-white neon-flicker text-white mb-6">
          Développeur Web
        </h3>
        <p className="lil-pres text-2xl text-[#dce2f0] mb-6 max-w-3xl mx-auto ">
          Je suis un développeur web passionné par la programmation et l’innovation. <br />
          Je suis actuellement en recherche d'une alternance pour poursuivre mon bac + 4 chez{' '}
          <a
            href="https://cloud-campus.fr/"
            className="text-[#3ba6a6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud Campus
          </a>.
        </p>

        <div className="CV space-x-4 flex flex-wrap justify-center">
          <a
            href="./assets/CV_AMMAD_Salemdsp.pdf"
            className="bg-[#1a1a1f] text-[#3ba6a6] px-5 py-2 rounded border border-[#3ba6a6] shadow-neon hover:bg-[#3ba6a6] hover:text-black transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
          <a
            href="#about"
            className="bg-[#1a1a1f] text-white px-5 py-2 rounded border border-white shadow-neon hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            À propos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
