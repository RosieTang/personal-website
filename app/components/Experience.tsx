import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24 bg-gray-50/50">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
      <p className="text-gray-400 mb-12">Where I&apos;ve worked</p>

      <div className="flex flex-col gap-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 pb-12 last:pb-0">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 last:hidden" />
            {/* Timeline dot */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-gray-400" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-sm text-gray-500">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-400 shrink-0">{exp.period}</span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              {exp.description}
            </p>

            {exp.tags && (
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-white border border-gray-200 text-gray-500 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
