export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Aspiring Software Engineer & Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                {/* Updated image source path */}
                <img
                  src="/images/hero.jpeg" // Path relative to the public folder
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white"> Hi, I’m Shetu. </p>{" "}
              <p>
                {" "}
                I’m a Software Engineer and IT Developer with experience
                building enterprise applications, backend services, and
                AI-driven solutions. I enjoy turning complex problems into
                scalable, practical, and user-focused software.{" "}
              </p>{" "}
              <p>
                {" "}
                My experience spans Java, Spring Boot, REST APIs, SQL,
                Salesforce development with Apex and LWC, and cloud-based
                enterprise platforms. I’ve also worked on AI/ML projects
                involving semantic search, knowledge graphs, RAG, and
                intelligent applications, and I’m currently exploring agentic AI
                and LLM-powered systems.{" "}
              </p>{" "}
              
              <p>
                {" "}
                Thanks for visiting my portfolio — feel free to explore my
                projects and experience.{" "}
              </p>
              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white"></cite>
                    <div className="flex items-center gap-2"></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
