// import React from 'react'
// import styles from './Landing.module.css'
// import landingImg from '../../assets/hms1.jpg'
// import About from '../About/About'
// function Landing() {
//   return (
//     <>
//     <div className={styles.landing}>
//       <div className={styles.landingimg}>
//         <img src={landingImg} alt="Healthcare Solution" />
//         <div className={styles.overlayText}>
//           <h1 className={styles.main}>Explore Comprehensive Cloud-Based Healthcare Software Solutions Tailored for Hospitals, Clinics, and Doctors</h1>
//           <p className={styles.mainp}>Experience state-of-the-art digital solutions with DocPulse’s
//             and HIMS(Hospital Integrated Management Software),
//             CMS(Clinic Management Software), PMS(Patient Management Software),
//             designed to meet the unique needs of doctors, clinics, and hospitals.</p>
//         </div>
//       </div>
//         <div className={styles.landingText}>
//           <span>
//             Your <span className={styles.highlight1}>health</span> is our <span className={styles.highlight2}>priority</span>.
//             We are committed to providing <span className={styles.highlight3}>high-quality</span> medical care
//             with <span className={styles.highlight1}>advanced treatments</span>,
//             <span className={styles.highlight2}>experienced doctors</span>, and a <span className={styles.highlight3}>patient-first approach</span>.
//             From <span className={styles.highlight1}>routine check-ups</span> to
//             <span className={styles.highlight2}>specialized care</span>, we ensure
//             a <span className={styles.highlight3}>safe and healing environment</span> for you and your loved ones.
//           </span>
//         </div>
//     </div>

//     <h1>this is the aout page </h1>
//     <About/>
//     <div className={styles.boxx}>
//         this is htre box
//     </div>
//     </>
//   )
// }

// export default Landing


import React from 'react';
import landingImg from '../../assets/hms1.jpg';
import About from '../About/About';

function Landing() {
  return (
    <>
      {/* Landing Section */}
      <div className="min-h-screen">
        {/* Image with Overlay Text */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden shadow-lg">
          <img
            src={landingImg}
            alt="Healthcare Solution"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 - left-1/2 transform -translate-x-1/2 lg:-translate-x-3/3 -translate-y-1/2 w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
              Explore Comprehensive Cloud-Based Healthcare Software Solutions Tailored for Hospitals, Clinics, and Doctors
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Experience state-of-the-art digital solutions with DocPulse’s HIMS (Hospital Integrated Management Software), CMS (Clinic Management Software), PMS (Patient Management Software), designed to meet the unique needs of doctors, clinics, and hospitals.
            </p>
          </div>
        </div>

        {/* Landing Text Section */}
        <div className="w-full flex justify-center items-center text-center p-4 md:p-6">
          <span className="max-w-4xl text-sm sm:text-lg md:text-xl">
            Your <span className="text-[#db806c]">health</span> is our{' '}
            <span className="text-[#28a745]">priority</span>. We are committed to providing{' '}
            <span className="text-[#007bff]">high-quality</span> medical care with{' '}
            <span className="text-[#db806c]">advanced treatments</span>,{' '}
            <span className="text-[#28a745]">experienced doctors</span>, and a{' '}
            <span className="text-[#007bff]">patient-first approach</span>. From{' '}
            <span className="text-[#db806c]">routine check-ups</span> to{' '}
            <span className="text-[#28a745]">specialized care</span>, we ensure a{' '}
            <span className="text-[#007bff]">safe and healing environment</span> for you and your loved ones.
          </span>
        </div>
      </div>

      {/* About Section */}
      <h1 className="text-center text-xl sm:text-2xl font-bold my-6 sm:my-8">This is the About Page</h1>
      <About />

      {/* Box Section */}
      <div className="h-32 sm:h-40 md:h-48 w-60 sm:w-64 md:w-72 bg-yellow-300 text-red-600 flex justify-center items-center mx-auto my-6 sm:my-8 rounded-lg shadow-md">
        This is the box
      </div>
    </>
  );
}

export default Landing;
