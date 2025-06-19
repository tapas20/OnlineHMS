import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-900 to-blue-950 text-white pt-12 pb-6 font-poppins">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Grid Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
          {["PRODUCT", "SOLUTION", "RESOURCES", "COMPANY"].map((item) => (
            <div key={item}>
              <h4 className="text-lg font-semibold mb-3 tracking-wider hover:text-cyan-400 transition">
                {item}
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:underline hover:text-white">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-white">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline hover:text-white">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            &copy; 2025 HealthCare, Inc. All rights reserved. Made by{" "}
            <a
              href="#"
              className="text-cyan-400 hover:text-white underline transition"
            >
              CogniSmart Technology Pvt. Ltd.
            </a>
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Footer Description */}
        <div className="mt-6 text-center text-gray-300 text-sm leading-relaxed max-w-3xl mx-auto">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vel,
            minus rerum labore adipisci quidem itaque aliquid nostrum a nobis
            pariatur quod minima ducimus alias quibusdam assumenda. Itaque,
            consequatur nisi!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
