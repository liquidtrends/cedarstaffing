import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Hero />
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[1200px] h-[1200px] bg-gradient-to-r from-green-500 to-green-700 opacity-20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-green-800 opacity-20 rounded-full filter blur-2xl animate-spin-slow"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16">
          <div className="bg-gray-800 bg-opacity-70 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              To create meaningful employment for Indigenous people while delivering reliable, culturally safe staffing solutions.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-70 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              To become Western Canada’s leading Indigenous-led workforce provider.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Janitorial & Housing Support</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Emergency janitorial</li>
                <li>Building cleaning</li>
                <li>Suite turnovers</li>
                <li>Biohazard response</li>
                <li>Junk removal</li>
                <li>Housing maintenance</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Industrial & Skilled Trades</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>General laborers, flaggers, yard watch</li>
                <li>Pipefitters, millwrights, carpenters, welders</li>
                <li>Scaffolders & material handling</li>
                <li>Heavy equipment operators & safety officers</li>
                <li>Construction site administration</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Training & Certification</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>WHMIS, First Aid/CPR, Confined Space</li>
                <li>Fall Protection, Flagging, H2S Alive</li>
                <li>PPE & Biohazard Safety</li>
                <li>Indigenous cultural safety & workplace professionalism</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-green-800 text-white py-32 overflow-hidden">
        <div className="absolute -left-32 top-0 w-96 h-96 rounded-full bg-green-500 opacity-30 mix-blend-multiply"></div>
        <div className="absolute -left-16 top-64 w-72 h-72 rounded-full bg-green-400 opacity-30 mix-blend-multiply"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join Our Indigenous Workforce Today
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Be part of a culturally safe, reliable, and empowering work environment. Opportunities available across janitorial, industrial, and skilled trades.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="/apply"
                className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-800 transform transition duration-300 shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </main>
  );
}
