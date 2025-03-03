import React from 'react'
import styles from './About.module.css'
function About() {
  return (
    <>
      <div className={styles.aboutParent}>
          <div className={styles.top}>
            <h3>DocPulse Quantitative Over View</h3>
            <span> Founder in 2025 with a foot print spaning across india ,the Middle East and Africa</span>
            
            
          </div>
          <div className={styles.secondTop}>
          <h3>3,000+</h3>
            <p>Doctors are growing</p>
            <h3>300+</h3>
            <p>clients</p>
          </div>
          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <h4>Our Vison</h4>
              <p>Empower healthcare enterprises to deliver
                 exceptional healthcare
                 services and enhance patient care worldwide
                  through the utilization of advanced technology.</p>
            </div>
            <div className={styles.box}>
              <h4>Our Mission</h4>
              <p>Provide an affordable and secure healthcare 
                platform for doctors, clinics, 
                and hospitals, delivering exceptional value at 
                a competitive price for optimized healthcare solutions.</p>
            </div>
          </div>
          <div className={styles.valueContent}>
            <h3>
              Value
            </h3>
            <p>Our core values shape our identity and serve as a 
              stabilizing force during challenging times.
               Our organizational culture prioritizes customer focus,
                ongoing enhancement, and dedicated customer service.</p>
          </div>
      </div>
    </>
  )
}

export default About