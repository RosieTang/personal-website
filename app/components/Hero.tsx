import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-28 pb-20"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
        {/* Profile photo */}
        <div className="shrink-0">
          <Image
            src="https://github.com/RosieTang.png"
            alt="Rosie Tang"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-md"
            priority
          />
        </div>

        {/* Intro text */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
            Rosie Tang {/* TODO: Update your name if needed */}
          </h1>
          <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
            {/* TODO: Replace with your tagline */}
            Software engineer · Builder · Problem solver
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="mt-10 max-w-2xl">
        <p className="text-base text-gray-500 leading-relaxed">
          {/* TODO: Replace with your self-introduction */}
          Hi! I&apos;m a software engineer passionate about building clean, user-friendly
          products. I enjoy working across the full stack — from crafting intuitive
          interfaces to designing robust backend systems. When I&apos;m not coding,
          you can find me [your hobbies / interests here].
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#projects"
          className="px-6 py-3 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-300 text-gray-700 text-sm rounded-lg hover:border-gray-500 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
