import gridBg from '../assets/grid-effect.svg';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-[80vh] overflow-hidden bg-black/90">
      <img
        src={gridBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        draggable="false"
      />
      <div className="absolute inset-0 bg-linear-to-br from-black via-transparent to-purple-900 opacity-80 z-10 pointer-events-none" />
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Transforming Concepts into <br />
          <span className="text-purple-400">Seamless User Experiences</span>
        </h1>
        <p className="mt-3 text-lg text-gray-200">
          Hi! I'm John Doe, a React.js Developer based in Russia
        </p>
        <button className="mt-8 px-6 py-2 rounded bg-purple-700 text-white hover:bg-purple-500 transition">
          See my work
        </button>
      </div>
    </section>
  );
}
