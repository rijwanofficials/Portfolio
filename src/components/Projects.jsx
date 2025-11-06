const projects = [
  {
    title: "3D Solar System Planets to Explore",
    desc: "3D simulation of our solar system using Three.js.",
    url: "#",
    image: "earth-sim.jpg"
  },
  {
    title: "Yoom - Video Conferencing App",
    desc: "Simplify HD online conferencing calls with Yoom.",
    url: "#",
    image: "yoom.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a href={project.url} key={idx} className="block bg-gray-800 rounded-lg shadow hover:scale-105 transition p-6" target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="rounded mb-4 w-full h-40 object-cover"/>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
