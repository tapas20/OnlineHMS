import React from 'react'
import styles from './Landing.module.css'
import landingImg from '../../assets/hms1.jpg'
import About from '../About/About'
function Landing() {
  return (
    <>
    <div className={styles.landing}>
      <div className={styles.landingimg}>
        <img src={landingImg} alt="Healthcare Solution" />
        <div className={styles.overlayText}>
          <h1 className={styles.main}>Explore Comprehensive Cloud-Based Healthcare Software Solutions Tailored for Hospitals, Clinics, and Doctors</h1>
          <p className={styles.mainp}>Experience state-of-the-art digital solutions with DocPulse’s
            and HIMS(Hospital Integrated Management Software),
            CMS(Clinic Management Software), PMS(Patient Management Software),
            designed to meet the unique needs of doctors, clinics, and hospitals.</p>
        </div>
      </div>
        <div className={styles.landingText}>
          <span>
            Your <span className={styles.highlight1}>health</span> is our <span className={styles.highlight2}>priority</span>.
            We are committed to providing <span className={styles.highlight3}>high-quality</span> medical care
            with <span className={styles.highlight1}>advanced treatments</span>,
            <span className={styles.highlight2}>experienced doctors</span>, and a <span className={styles.highlight3}>patient-first approach</span>.
            From <span className={styles.highlight1}>routine check-ups</span> to
            <span className={styles.highlight2}>specialized care</span>, we ensure
            a <span className={styles.highlight3}>safe and healing environment</span> for you and your loved ones.
          </span>
        </div>
    </div>

    <h1>this is the aout page </h1>
    <About/>
    <div className={styles.boxx}>
        this is htre box
    </div>
    </>
  )
}

export default Landing