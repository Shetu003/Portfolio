import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Chit-Chat: A Real Time Chat Application",
    description:
      "Chit-Chat is a real-time messaging application that enables users to send and receive messages instantly. It features user authentication, dynamic chat rooms, and seamless communication powered by WebSocket technology.",
    src: "/images/chit-chat-image.jpg",
    link: "",
    color: "#5196fd",
    githubLink: "https://github.com/Shetu003/Chit-Chat-Real-Time-Chat-App",
    liveLink: "https://realtimechat-l5pk.onrender.com",
  },
  {
    title: "MedEase: A healthcare Recommendation System",
    description:
      "MedEase is an AI-powered healthcare recommendation system that suggests medicines, workouts, predicted diseases, and diets based on user-provided symptoms. It leverages intelligent algorithms to offer personalized healthcare solutions.",
    src: "/images/med-ease-image.jpg",
    link: "",
    color: "#8f89ff",
    githubLink: "https://github.com/Shetu003/Medical-Recommendation-System",
    liveLink: "https://medical-recommendation-system-jhgmgawyblncafmwjz5g99.streamlit.app/",
  },
  {
    title: "Smart Email Assistant",
    description:
      "Smart Email Assistant is a Chrome extension integrated with Gmail that helps users reply to emails in their desired tone, such as professional, friendly, or casual. This extension uses AI to craft replies, making email communication faster and more contextually appropriate.",
    src: "/images/reply.png", // Add your image here in the public/images folder
    link: "",
    color: "#ff8a00",
    githubLink: "https://github.com/Shetu003/Smart-Email-Assistant",
    liveLink: "", // Live link removed
  },
  {
    title: "ChargeX: EV Charging Station Finder",
    description:
      "ChargeX is an app that helps users find nearby EV charging stations in real-time, helping electric vehicle owners locate convenient charging spots. The app offers a user-friendly interface with map integration and station availability updates.",
    src: "/images/ev.jpg", // Add your image here in the public/images folder
    link: "",
    color: "#4caf50",
    githubLink: "https://github.com/Shetu003/Smart-Charging-For-EVs",
    liveLink: "", // Live link removed
  }
];

export default function Projects1() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink} // Removed live link for the projects without a live demo
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src,
  color,
  githubLink,
  liveLink,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={src} // <-- Correct now
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Removed Live button for ChargeX */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
