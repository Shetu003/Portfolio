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
                  src="/images/hero.jpg" // Path relative to the public folder
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I’m Shetu.
              </p>
              <p>
                I am an aspiring Software Engineer & Developer with a deep passion for coding and problem-solving. I enjoy building something new every day—whether it's an innovative project, a handy tool, or a creative solution to a challenge. Beyond writing code, I bring curiosity, adaptability, and a strong work ethic, allowing me to contribute effectively to teams and projects. I'm always eager to take on new challenges, refine my skills, and explore fresh ideas.
              </p>
              <p>
                Thank you for visiting my portfolio and taking the time to explore my work!
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
