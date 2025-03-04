// import React, { useState } from "react";
// import styles from "./Header.module.css";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [modalType, setModalType] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleModal = (type) => {
//     if (modalType === type) {
//       setModalType(null);
//     } else {
//       setModalType(type);
//     }
//   };

//   const closeModal = () => setModalType(null);

//   return (
//     <>
//       {modalType && (
//         <div className={styles.modal} onClick={closeModal}>
//           <div
//             className={styles["modal-dialog"]}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className={styles["modal-header"]}>
//               {modalType === "login" ? (
//                 <>
//                   <h6 className={styles["modal-title"]}>
//                     <NavLink to="/logindoctor" onClick={closeModal}>
//                       Login as a Doctor
//                     </NavLink>
//                   </h6>
//                   <h6 className={styles["modal-title"]}>
//                     <NavLink to="/loginpatient" onClick={closeModal}>
//                       Login as a Patient
//                     </NavLink>
//                   </h6>
//                 </>
//               ) : (
//                 <>
//                   <h6 className={styles["modal-title"]}>
//                     <NavLink to="/signupdoctor" onClick={closeModal}>
//                       SignUp as a Doctor
//                     </NavLink>
//                   </h6>
//                   <h6 className={styles["modal-title"]}>
//                     <NavLink to="/signuppatient" onClick={closeModal}>
//                       SignUp as a Patient
//                     </NavLink>
//                   </h6>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//       <nav className={styles.navbar}>
//         <div className={styles["navbar-brand"]}>
//           <img
//             src="./Images/HealthCare.png"
//             className={styles.logo}
//             alt="Health Logo"
//           />
//         </div>

//         <div className={styles["menu-toggle"]} onClick={toggleMenu}>
//           {isMenuOpen ? "✖" : "☰"}
//         </div>

//         <ul
//           className={`${styles["navbar-nav"]} ${
//             isMenuOpen ? styles.active : ""
//           }`}
//         >
//           <li className={styles["nav-item"]}>
//             <a className={styles.active} href="/">
//               Home
//             </a>
//           </li>
//           <li className={styles["nav-item"]}>
//             <a href="#">About Us</a>
//           </li>
//           <li className={styles["nav-item"]}>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) =>
//                 isActive ? styles.active : styles.disabled
//               }
//             >
//               ContactUs
//             </NavLink>
//           </li>
//         </ul>

//         <form className={styles["button-form"]}>
//           <button type="button" onClick={() => toggleModal("signup")}>
//             SignUp
//           </button>
//           <button type="button" onClick={() => toggleModal("login")}>
//             Login
//           </button>
//         </form>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [modalType, setModalType] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      {/* Modal for Login/Signup Options */}
      {modalType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-11/12 max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              {modalType === "login" ? (
                <>
                  <h6 className="text-lg font-semibold text-gray-800 border-b pb-2">Login Options</h6>
                  <NavLink to="/logindoctor" onClick={closeModal} className="block p-3 border rounded-md hover:bg-blue-50">
                    Login as a Doctor
                  </NavLink>
                  <NavLink to="/loginpatient" onClick={closeModal} className="block p-3 border rounded-md hover:bg-green-50">
                    Login as a Patient
                  </NavLink>
                </>
              ) : (
                <>
                  <h6 className="text-lg font-semibold text-gray-800 border-b pb-2">SignUp Options</h6>
                  <NavLink to="/signupdoctor" onClick={closeModal} className="block p-3 border rounded-md hover:bg-blue-50">
                    SignUp as a Doctor
                  </NavLink>
                  <NavLink to="/signuppatient" onClick={closeModal} className="block p-3 border rounded-md hover:bg-green-50">
                    SignUp as a Patient
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-gray-100 shadow-lg w-full px-6 py-4 flex justify-between items-center relative z-40 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="./Images/HealthCare.png" className="h-16 md:h-20" alt="Health Logo" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="text-2xl cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:flex md:space-x-8 p-4 md:p-0 shadow-md md:shadow-none rounded-md md:rounded-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block p-3 font-semibold rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition-all`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className="block p-3 font-semibold text-gray-800 hover:text-blue-600">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `block p-3 font-semibold rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-800"
                } hover:text-blue-600 transition-all`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => toggleModal("signup")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            SignUp
          </button>
          <button
            onClick={() => toggleModal("login")}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all"
          >
            Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
