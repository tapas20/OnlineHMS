import React from 'react'
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
    <div className={styles.row}>
  
    <div className={styles.column}>
            <h4>PRODUCT</h4>
          </div>
          <div className={styles.column}>
            <h4>SOLUTION</h4>
          </div>
          <div className={styles.column}>
            <h4>RESOURCES</h4>
          </div>
          <div className={styles.column}>
            <h4>COMPANY</h4>
          </div>
      </div>
      <div className={styles['footer-bottom']}>
          <p>&copy; 2025 HealthCare, Inc. All rights reserved. Made By <a href="">CogniSmart Technology Pvt. Ltd.</a></p>
          <div className={styles['social-links']}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className={styles['footer-description']}>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, vel, minus rerum labore adipisci quidem itaque aliquid nostrum a nobis pariatur quod minima ducimus alias quibusdam assumenda. Itaque, consequatur nisi!
          </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer