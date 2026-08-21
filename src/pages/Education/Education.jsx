
import React, { useState } from "react";

import {
  Calendar,
  BookOpen,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree:
        "B.E in Information Science and Engineering",
      school: "Nitte Meenakshi Institute of Technology, Bengaluru",
      mascot: "📘",
      year: "2022 - 2026",
      grade: "9.39 CGPA",
      description: "",
    },
    {
      degree: "Senior Secondary School Certificate - CBSE",
      school: "St. Thomas High School, Jharkhand",
      mascot: "📗",
      year: "2022",
      grade: "88.4%",
      description: "",
    },
    {
      degree: "Secondary School Certificate - CBSE",
      school: "Shivam School, Bihar",
      mascot: "📘",
      year: "2020",
      grade: "90.4%",
      description: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />

        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Education
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Take a look at my academic background, including the institutions
            I’ve attended and the degrees I’ve completed.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  {/* Degree */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">
                      {edu.mascot}
                    </span>

                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  {/* School */}
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>

                  {/* Year */}
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>

                  {/* Grade */}
                  <p className="text-gray-300 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-teal-400" />
                    <span className="font-medium text-white">
                      {edu.grade}
                    </span>
                  </p>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
