import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link ,NavLink} from "react-router-dom";

const Header = () => {
  const [modalType, setModalType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = (type) => {
    if (modalType === type) {
      setModalType(null);
    } else {
      setModalType(type);
    }
  };

  const closeModal = () => setModalType(null);

  return (
    <>
      {modalType && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles["modal-dialog"]} onClick={(e) => e.stopPropagation()}>
            <div className={styles["modal-header"]}>
              {modalType === "login" ? (
                <>
                  <h6 className={styles["modal-title"]}>
                    <Link to="/logindoctor" onClick={closeModal}>
                      Login as a Doctor
                    </Link>
                  </h6>
                  <h6 className={styles["modal-title"]}>
                    <Link to="/loginpatient" onClick={closeModal}>
                      Login as a Patient
                    </Link>
                  </h6>
                </>
              ) : (
                <>
                  <h6 className={styles["modal-title"]}>
                    <Link to="/signupdoctor" onClick={closeModal}>
                      SignUp as a Doctor
                    </Link>
                  </h6>
                  <h6 className={styles["modal-title"]}>
                    <Link to="/signuppatient" onClick={closeModal}>
                      SignUp as a Patient
                    </Link>
                  </h6>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <nav className={styles.navbar}>
        <div className={styles["navbar-brand"]}>
          <img src="./Images/HealthCare.png" className={styles.logo} alt="Health Logo" />
        </div>

<div className={styles["navbar-brand-0"]}>
  <ul className={`${styles["navbar-nav"]} ${isMenuOpen ? styles.active : ''}`}>
       
          <li className={styles["nav-item"]}>
            <a className={styles.active} href="#">Home</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#">About Us</a>
          </li>
          <li className={styles["nav-item"]}>
<<<<<<< HEAD
            <a className={styles.disabled} href="#">Contact Us</a>
          </li>   
=======
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : styles.disabled
              }
            >
              ContactUs
            </NavLink>
          </li>
          </ul>

>>>>>>> a8ed413cdf1e4c4bca6dc8a8d8e9dcdab323c9be
          
          
         <form className={styles["button-form"]}>
          <button type="button" onClick={() => toggleModal("signup")}>
            SignUp
          </button>
          <button type="button" onClick={() => toggleModal("login")}>
            Login
          </button>
        </form>
          </ul>
</div>
        
          

        <div className={styles["menu-toggle"]} onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </div>
      

      
      </nav>
    </>
  );
};

export default Header;
