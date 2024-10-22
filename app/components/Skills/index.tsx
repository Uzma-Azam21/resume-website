// components/Skills/Skills.tsx

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-8">
          Proficient Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold text-gray-700">HTML</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold text-gray-700">CSS</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold text-gray-700">JavaScript</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold text-gray-700">React</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold text-gray-700">Next.js</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow">
            <p className="text-xl font-semibold text-gray-700">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
