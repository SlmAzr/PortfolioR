import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaPhp,
  FaWordpress,
  FaNodeJs,
  FaUsers,
  FaUserCheck,
  FaComments,
  FaUserTie,
  FaUserClock,
  FaLightbulb,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

function Skills() {
  const techSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#f97316] neon-glow-orange" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#3b82f6] neon-glow-blue" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#eab308] neon-glow-yellow" /> },
    { name: "Java", icon: <FaJava className="text-[#ef4444] neon-glow-red" /> },
    { name: "React", icon: <FaReact className="text-[#06b6d4] neon-glow-cyan" /> },
    { name: "PHP", icon: <FaPhp className="text-[#6366f1] neon-glow-indigo" /> },
    { name: "WordPress", icon: <FaWordpress className="text-[#1e40af] neon-glow-blue-dark" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#16a34a] neon-glow-green" /> },
    { name: "Express", icon: <SiExpress className="text-[#4b5563] neon-glow-gray" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#22c55e] neon-glow-green-light" /> },
  ];

  const softSkills = [
    { name: "Adaptabilité", icon: <FaUserClock className="text-[#a855f7] neon-glow-purple" /> },
    { name: "Autonome", icon: <FaUserCheck className="text-[#22c55e] neon-glow-green-light" /> },
    { name: "Rigoureux", icon: <FaUserTie className="text-[#4b5563] neon-glow-gray" /> },
    { name: "Communication", icon: <FaComments className="text-[#60a5fa] neon-glow-blue-light" /> },
    { name: "Esprit d'équipe", icon: <FaUsers className="text-[#ec4899] neon-glow-pink" /> },
    { name: "Sérieux", icon: <FaLightbulb className="text-[#eab308] neon-glow-yellow" /> },
  ];

  const SkillCard = ({ skill }: any) => (
    <div className="w-40  bg-[#1e293b] rounded-2xl px-4 py-3 text-center text-sm font-medium text-white hover:shadow-neon-glow transition flex flex-col items-center justify-center">
      <div className="text-3xl mb-2">{skill.icon}</div>
      <div className="font-semibold">{skill.name}</div>
    </div>
  );

  return (
    <div
      className="pb-5 w-full min-h-[700px] mx-auto pt-20"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-white neon-glow-white">
        Compétences
      </h2>
      <div className="max-w-6xl w-full flex flex-col mx-auto justify-center align-center px-6">
        <div className="mb-14">
          <h3 className="text-2xl font-semibold mb-6 text-white text-center ">
            Compétences techniques
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-white  ">
            Compétences générales
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
