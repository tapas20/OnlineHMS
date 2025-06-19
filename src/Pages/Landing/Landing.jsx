// Tailwind version of the Landing page with responsive enhancements

import React from "react";
import landingImg from "../../assets/Landingpage.jpg";
import box1 from "../../assets/hmsBox11.jpg";
import box2 from "../../assets/hmsBox2.jpg";
import box3 from "../../assets/hmsBox3.jpg";

function Landing() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-100 font-poppins animate-fadeIn">
        <div className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
          {/* Background Image with Gradient Overlay */}
          <img
            src={landingImg}
            alt="Healthcare"
            className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] via-[#0f172acc] to-[#00000080]"></div>

          {/* Glassy Content Box */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-4 sm:px-6 md:px-16 text-left">
            <div className="backdrop-blur-lg bg-white/10 p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl border border-white/30 animate-fadeInUp transition-all duration-1000 ease-out">
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Revolutionize Healthcare with <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                  Smart Cloud Software
                </span>
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-4">
                One solution for hospitals, clinics, and doctors — secure,
                scalable, and built to save lives.
              </p>
              <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white rounded-lg text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="bg-gradient-to-br from-white via-blue-50 to-white py-16 px-4 sm:px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeInUp">
            {/* Text Section */}
            <div className="max-w-xl space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                Committed to a{" "}
                <span className="text-blue-600">Healthier Tomorrow</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our mission is to deliver smarter, faster and compassionate
                healthcare experiences by combining{" "}
                <span className="text-teal-600 font-medium">technology</span>{" "}
                with
                <span className="text-rose-500 font-medium"> expert care</span>.
                Whether you’re a doctor, a hospital or a patient — we’re with
                you every step.
              </p>

              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
                <li>Instant appointment booking</li>
                <li>Real-time medical records access</li>
                <li>Scalable hospital management software</li>
              </ul>

              <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
                Know More
              </button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/doctor-online-medical-consultation-illustration_23-2148885207.jpg"
                alt="Healthcare AI Illustration"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-br from-white to-cyan-50 py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-photo/healthcare-innovations-illustration_23-2150870966.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20 blur-[2px]"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-blue-900 mb-16 tracking-tight drop-shadow-lg">
            A Platform Trusted by the World
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {[
              {
                icon: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
                count: "3,000+",
                label: "Verified Doctors",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
                count: "300+",
                label: "Global Clients Served",
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/2097/2097281.png",
                count: "5M+",
                label: "Appointments Annually",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/20 border border-white/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl text-center transform transition duration-500 hover:scale-105"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6"
                />
                <h3 className="text-3xl sm:text-5xl font-bold text-blue-800 drop-shadow">
                  {stat.count}
                </h3>
                <p className="text-base sm:text-lg text-gray-800 mt-2 sm:mt-3 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-blue-900 mb-10 sm:mb-12 flex items-center justify-center gap-2">
          <span className="text-3xl sm:text-4xl">📰</span> Latest Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4 sm:px-6">
          {[box1, box2, box3].map((img, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={img}
                alt="Blog"
                className="w-full h-48 sm:h-56 object-cover hover:opacity-90 transition"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-2 sm:mb-3 line-clamp-2">
                  {i === 2
                    ? "Hospital Management Software for NABH Compliance"
                    : "How Hospital Billing Software Enhances Patient Experience"}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                  Discover how digital transformation in healthcare simplifies
                  patient care, billing, and compliance with ease.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:shadow-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
