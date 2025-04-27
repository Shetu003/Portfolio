import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cpu, Layout } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

// Skill card component
const SkillCard = ({ icon: Icon, title, skills, color }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, showMore ? skills.length : 4).map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
                {skill.icon}
              </span>
              <span className="font-medium">{skill.name}</span>
            </Badge>
          ))}
        </div>
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 text-blue-400 hover:underline"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </CardContent>
    </Card>
  );
};

// Skills section component
const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Spring Boot", icon: <FaJava className="w-4 h-4 text-[#007396]" /> },
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#68A063]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "REST API", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#4F5B93]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      color: "text-yellow-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#306998]" /> },
        { name: "TensorFlow", icon: <FaGitAlt className="w-4 h-4 text-[#FF6F61]" /> },
        { name: "Scikit-learn", icon: <SiVercel className="w-4 h-4 text-[#000]" /> },
        { name: "Pandas", icon: <FaPython className="w-4 h-4 text-[#306998]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Cloud & DevOps",
      color: "text-gray-400",
      skills: [
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#0db7ed]" /> },
        { name: "Google Cloud", icon: <FaAws className="w-4 h-4 text-[#232F3E]" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F14E32]" /> },
      ],
    },
    {
      icon: BsGrid1X2,
      title: "Soft Skills",
      color: "text-purple-400",
      skills: [
        { name: "Problem Solving", icon: <FcWorkflow className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Effective Communication", icon: <FcWorkflow className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Collaboration", icon: <FcWorkflow className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Decision-Making", icon: <FcWorkflow className="w-4 h-4 text-[#61DAFB]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Tools and Technology",
      color: "text-teal-400",
      skills: [
        { name: "IntelliJ IDEA", icon: <TbBrandVscode className="w-4 h-4 text-[#2C3E50]" /> },
        { name: "VSCode", icon: <TbBrandVscode className="w-4 h-4 text-[#0078D4]" /> },
        { name: "Postman", icon: <SiPostgresql className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
        { name: "Jupyter Notebook", icon: <SiJest className="w-4 h-4 text-[#F5A500]" /> },
        { name: "Streamlit", icon: <SiVercel className="w-4 h-4 text-[#000]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(100, 100, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100, 100, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
