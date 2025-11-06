const experiences = [
  {
    title: "Frontend Engineer Intern",
    company: "Appwrite",
    desc: "Worked on UI components and frontend optimization."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <ul className="space-y-6">
          {experiences.map((exp, idx) => (
            <li key={idx} className="bg-gray-800 rounded p-5">
              <h3 className="font-semibold text-xl">{exp.title}</h3>
              <span className="text-gray-400">{exp.company}</span>
              <p className="mt-2 text-gray-300">{exp.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
