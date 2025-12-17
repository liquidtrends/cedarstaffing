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
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">Our Services</h2>
          <p className="text-center mb-14">At Cedar Staffing We Provide Indigenous Manpower & Staffing Solutions To:</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">Community & Social Services</h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Social & supportive housing</li>
                <li className="text-gray-700 leading-relaxed">Indigenous housing authorities</li>
                <li className="text-gray-700 leading-relaxed">Emergency & transitional housing</li>
                <li className="text-gray-700 leading-relaxed">Shelters & outreach programs</li>
                <li className="text-gray-700 leading-relaxed">Community health & wellness centres</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Construction & Infrastructure
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Major infrastructure projects</li>
                <li className="text-gray-700 leading-relaxed">Roads, bridges & transportation</li>
                <li className="text-gray-700 leading-relaxed">Civil construction & utilities</li>
                <li className="text-gray-700 leading-relaxed">Modular & remote construction camps</li>
                <li className="text-gray-700 leading-relaxed">Urban & rural development projects</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Energy & Natural Resources
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Oil & gas (upstream, midstream & downstream)</li>
                <li className="text-gray-700 leading-relaxed">LNG facilities & terminals</li>
                <li className="text-gray-700 leading-relaxed">Mining (surface & underground)</li>
                <li className="text-gray-700 leading-relaxed">Forestry & timber operations</li>
                <li className="text-gray-700 leading-relaxed">Renewable energy (wind, solar, hydro & biomass)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Industrial & Skilled Trades
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">General labour & site support</li>
                <li className="text-gray-700 leading-relaxed">Welders, pipefitters & millwrights</li>
                <li className="text-gray-700 leading-relaxed">Carpenters & scaffolders</li>
                <li className="text-gray-700 leading-relaxed">Heavy equipment operators</li>
                <li className="text-gray-700 leading-relaxed">Shutdowns, turnarounds & maintenance crews</li>
                <li className="text-gray-700 leading-relaxed">Safety watch, flagging & traffic control</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Facilities & Property Services
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Commercial & industrial buildings</li>
                <li className="text-gray-700 leading-relaxed">Property management firms</li>
                <li className="text-gray-700 leading-relaxed">Janitorial & environmental services</li>
                <li className="text-gray-700 leading-relaxed">Site services & grounds maintenance</li>
                <li className="text-gray-700 leading-relaxed">Waste management & recycling</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Logistics, Transportation & Camps
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Warehousing & distribution</li>
                <li className="text-gray-700 leading-relaxed">Yard watch & security support</li>
                <li className="text-gray-700 leading-relaxed">Camp services (housekeeping, janitorial & kitchen support)</li>
                <li className="text-gray-700 leading-relaxed">Drivers & fleet support</li>
                <li className="text-gray-700 leading-relaxed">Remote & fly-in / fly-out operations</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Commercial & Private Sector
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Manufacturing & processing plants</li>
                <li className="text-gray-700 leading-relaxed">Retail distribution centres</li>
                <li className="text-gray-700 leading-relaxed">Hospitality & tourism</li>
                <li className="text-gray-700 leading-relaxed">Airports, ports & marine operations</li>
                <li className="text-gray-700 leading-relaxed">Events & short-term projects</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-800">
                Workforce Models Offered
              </h3>
              <ul className="space-y-4 border-l-2 border-[#7C9E3E]/40 pl-6">
                <li className="text-gray-700 leading-relaxed">Temporary & on-call staffing</li>
                <li className="text-gray-700 leading-relaxed">Project-based crews</li>
                <li className="text-gray-700 leading-relaxed">Rapid-response labour deployment</li>
                <li className="text-gray-700 leading-relaxed">Indigenous employment & training programs</li>
                <li className="text-gray-700 leading-relaxed">Workforce transition & community hiring initiatives</li>
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
