export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-tr from-gray-950 to-gray-900 text-white">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <form className="bg-gray-800 p-8 rounded shadow text-left space-y-5">
          <div>
            <label className="block mb-2">Your Name</label>
            <input className="w-full p-2 rounded bg-gray-900 text-white" type="text" required />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input className="w-full p-2 rounded bg-gray-900 text-white" type="email" required />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea className="w-full p-2 rounded bg-gray-900 text-white" required />
          </div>
          <button type="submit" className="bg-purple-600 rounded py-2 px-6 hover:bg-purple-500 transition">Send Message</button>
        </form>
      </div>
    </section>
  );
}
