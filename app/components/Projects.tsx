import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
      <p className="text-gray-400 mb-12">Things I&apos;ve built</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-500 flex-1 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-900 transition-colors"
                >
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}