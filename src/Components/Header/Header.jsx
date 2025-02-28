import React, { useState } from 'react';
import styles from './Header.module.css'; 
import Login from '../../Pages/Authentcation/Login/Login';

function Header({ onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.navbarBrand}>MyWebsite</div>

       
        <div
          className={`${styles.navbarToggle} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <span>dfgddf</span>
          <span>fdfdf</span>
          <span>dfdfdf</span>
        </div>

        
        <ul className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      
    </header>
    <div className={styles.btnContainer}>
        <Login/>
      </div>

      <button onClick={onLoginClick}>Login</button>
      {/*  adding a comments 
      */}
    </>

    
  );
}

export default Header;