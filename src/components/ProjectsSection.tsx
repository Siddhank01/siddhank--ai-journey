import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import projectFraud from "@/assets/project-fraud.jpg";
import projectVehicle from "@/assets/project-vehicle.jpg";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    description: "ML-based fraud detection system achieving over 99% anomaly detection accuracy using Isolation Forest, PCA, and RobustScaler.",
    image: projectFraud,
    tech: ["Python", "Scikit-learn", "PCA", "Isolation Forest"],
    github: "https://github.com/Siddhank01/Credit-Card-Fraud-Detection-using-Unsupervised-Learning",
  },
  {
    title: "Real-Time Vehicle Tracking & Routing",
    description: "Vehicle tracking system using Random Forest, Logistic Regression, and Decision Trees achieving ~90% accuracy.",
    image: projectVehicle,
    tech: ["Python", "ML", "Random Forest", "Decision Trees"],
    github: "https://github.com/Siddhank01/real_time_vehcile_tracking_system",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Featured work and technical explorations">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="glass rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300"
        >
          <div className="relative overflow-hidden h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
          </div>
          <div className="p-6">
            <h3 className="font-display font-semibold text-xl text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              <Github size={16} /> View on GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
