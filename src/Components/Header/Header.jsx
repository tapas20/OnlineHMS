import React, { useState } from "react";
import styles from "./Header.module.css";


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

  return (
    <>
      {modalType && (
        <div className={styles.modal}>
          <div className={styles["modal-dialog"]}>
            <div className={styles["modal-header"]}>
              {modalType === "login" ? (
                <>
                  <h6 className={styles["modal-title"]}>
                  <a href="">Login as a Doctor</a>
                  </h6>
                  <h6 className={styles["modal-title"]}>
                    <a href="#">Login as a Patient </a>
                  </h6>
                </>
              ) : (
                <>
                  <h6 className={styles["modal-title"]}>
                    <a href="#">SignUp as a Doctor</a>
                  </h6>
                  <h6 className={styles["modal-title"]}>
                    <a href="#">SignUp as a Patient</a>
                  </h6>
                </>
              )}
              <button 
                type="button" 
                className={styles["btn-secondary"]} 
                onClick={() => setModalType(null)}
              >
                x
              </button>
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
