import { motion } from "framer-motion";
import { GraduationCap, Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const resumeFilePath = "/resume.pdf";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science (AI & ML)",
    period: "2023 – Present",
  },
  {
    institution: "Vidyapati +2 High School",
    degree: "Intermediate (74.6%)",
    period: "Completed",
  },
  {
    institution: "St. Joseph's Public School",
    degree: "Matriculation (80.2%)",
    period: "Completed",
  },
];

const ResumeSection = () => (
  <SectionWrapper id="resume" title="Resume" subtitle="Academic background and education">
    <div className="max-w-3xl mx-auto space-y-6 mb-10">
      {education.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ x: i % 2 === 0 ? -40 : 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass rounded-xl p-6 flex items-start gap-4 hover:shadow-glow transition-shadow duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">{edu.institution}</h3>
            <p className="text-sm text-primary">{edu.degree}</p>
            <p className="text-xs text-muted-foreground">{edu.period}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <a
        href={resumeFilePath}
        download
        className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-glow"
      >
        <Download size={18} /> Download Resume
      </a>
    </motion.div>
  </SectionWrapper>
);

export default ResumeSection;
