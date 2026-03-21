import { motion } from "framer-motion";
import { Code2, Layout, GitBranch, Users } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layout,
    skills: [
      { name: "React.js", level: 75 },
      { name: "Django", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Leadership", level: 85 },
      { name: "Communication", level: 90 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies and competencies I work with">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass rounded-xl p-6 hover:shadow-glow transition-shadow duration-300"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <cat.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground">{cat.title}</h3>
          </div>
          <div className="space-y-4">
            {cat.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-secondary-foreground">{skill.name}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
