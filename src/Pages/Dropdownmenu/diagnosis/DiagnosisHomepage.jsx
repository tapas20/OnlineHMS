import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaVial,
  FaHeartbeat,
  FaLungsVirus,
  FaMicroscope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const tests = [
  {
    name: "Complete Blood Count",
    icon: <FaVial className="text-3xl text-indigo-500" />,
    desc: "Detect infections, anemia & more",
  },
  {
    name: "Heart Checkup",
    icon: <FaHeartbeat className="text-3xl text-indigo-500" />,
    desc: "ECG, cholesterol, and cardiac risk",
  },
  {
    name: "Lung Function",
    icon: <FaLungsVirus className="text-3xl text-indigo-500" />,
    desc: "COVID-19, asthma, and lung tests",
  },
  {
    name: "Advanced Lab Panel",
    icon: <FaMicroscope className="text-3xl text-indigo-500" />,
    desc: "Liver, kidney, thyroid & more",
  },
];

const DiagnosisHeroV2 = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* ⬤ Blob animations */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-120px] right-[-80px] w-[500px] h-[500px] bg-cyan-400 opacity-30 blur-2xl rounded-full animate-ping-fast"></div>

        {/* ⭕ Pulse rings */}
        <div className="absolute w-96 h-96 rounded-full border border-white/10 animate-pulse-slow"></div>
        <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-pulse-slower"></div>

        {/* Hero Content */}
        <motion.div
          className="z-10 text-center text-white px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <FaStethoscope className="text-6xl text-cyan-300 drop-shadow-xl" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 backdrop-blur-sm drop-shadow-xl mb-4">
            Smart Diagnostics for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              a Healthier You
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            India’s most trusted diagnostic center. Instant booking, accurate
            results, certified labs.
          </p>

          <Link to="/diagnosisbooking">
            <button className="relative bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold px-7 py-3 rounded-full text-lg shadow-lg transition duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-full"></span>
              Book Your Nearest Center
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Popular Tests Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-blue-100 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-indigo-800">
          Our Popular Tests
        </h2>
        <p className="text-indigo-600 mb-12 max-w-xl mx-auto text-base font-medium">
          Trusted diagnostics tailored to your health. Explore our most
          requested test packages.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {tests.map((test, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl border border-indigo-100 transition-transform duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{test.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {test.name}
              </h3>
              <p className="text-indigo-600 text-sm">{test.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHeroV2;
