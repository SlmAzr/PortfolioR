import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 text-[#dce2f0] ]">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white neon-glow-white">
          À propos
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-6 text-white">
          <p className="text-lg ">
            Bonjour, je m'appelle <span className="text-[#3ba6a6] font-semibold">Salem</span>, et je suis passionné par le développement web. Depuis que j'ai
            découvert la programmation, j'ai toujours eu envie de créer de nouvelles choses. J'aime relever des défis
            techniques et expérimenter avec de nouvelles technologies pour construire des applications et des sites
            qui apportent de la valeur.
          </p>
          <p className="text-lg ">
            Apprendre est une de mes grandes passions, que ce soit dans le domaine de la programmation ou dans d'autres
            domaines. J'aime explorer de nouvelles idées, me perfectionner constamment et découvrir comment les choses
            fonctionnent. Cette curiosité me pousse à toujours aller plus loin dans mes projets et à chercher des
            solutions innovantes à chaque problème.
          </p>
          <p className="text-lg ">
            En dehors de la programmation, j'aime aussi explorer d'autres domaines créatifs, car je crois que chaque
            expérience peut enrichir ma façon de penser et d'aborder les défis du quotidien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
