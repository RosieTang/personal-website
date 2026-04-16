import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
      <p className="text-gray-400 mb-12">Technologies I work with</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-gray-700 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}