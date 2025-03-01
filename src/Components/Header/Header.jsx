import React, { useState } from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom"


const Header = () => {
  // modalType can be "login" or "signup" or null (closed)
  const [modalType, setModalType] = useState(null);

  const toggleModal = (type) => {
    // if the same type is clicked again, close the modal
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
        <div className={styles.modal}>
          <div className={styles["modal-dialog"]}>
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
        <ul className={styles["navbar-nav"]}>
          <li className={styles["nav-item"]}>
            <a className={styles.active} href="#">Home</a>
          </li>
          <li className={styles["nav-item"]}>
            <a href="#">AboutUs</a>
          </li>
          <li className={styles["nav-item"]}>
            <a className={styles.disabled} href="#">ContactUs</a>
          </li>
        </ul>
        <form className={styles["button-form"]}>
          <button type="button" onClick={() => toggleModal("signup")}>
            SignUp
          </button>
          <button type="button" onClick={() => toggleModal("login")}>
            Login
          </button>
        </form>
      </nav>
    </>
  );
};

export default Header;
