import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="home py-16">
      <div className="incipit text-center">
        <p className="neon-border text-2xl font-semibold mb-4 text-[#dce2f0]">Salut, je m'appelle</p>
        <h2 className="text-4xl font-bold text-[#dce2f0] mb-6">AMMAD Salem</h2>
        <p className="lil-pres text-2xl text-[#dce2f0] mb-6">
          Je suis un développeur web passionné par la programmation et l’innovation. <br />
          Je suis actuellement en recherche d'une alternance pour poursuivre mon bac + 4 chez{' '}
          <a
            href="https://cloud-campus.fr/"
            className="text-white hover:text-gray-700 "
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloud Campus
          </a>.
        </p>

        <div className="CV space-x-4">
          <a
            href="./assets/CV_AMMAD_Salemdsp.pdf"
            className="bg-gray-500 text-[#dce2f0] px-4 py-2 rounded hover:bg-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger mon CV
          </a>
          <a
            href="#about"
            className="bg-gray-500 text-[#dce2f0] px-4 py-2 rounded hover:bg-gray-400"
          >
            À propos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
