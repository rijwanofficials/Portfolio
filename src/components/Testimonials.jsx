const testimonials = [
  {
    name: "Jane Smith",
    text: "Working with John was a great experience. Always available and super professional.",
    avatar: "/avatar1.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-950 text-white" id="testimonials">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-800 rounded p-6 shadow">
              <p className="text-gray-200">"{t.text}"</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} className="w-10 h-10 rounded-full" alt={t.name}/>
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
