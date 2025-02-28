import React from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
function Login({ onClose }) {
    const navigate = useNavigate()
    
    return (
        <>
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h2>Select Login Type</h2>
                    <button onClick={() => navigate('/login/admin')}>Login as Admin</button>
                    <button onClick={() => navigate('/login/doctor')}>Login as Doctor</button>
                    <button onClick={() => navigate('/login/patient')}>Login as Patient</button>
                    <button className={styles.closeButton} onClick={onClose}>Close</button>
                    
                </div>
            </div>
            
            <button className={styles.LoginBtn}>Login /Sign Up</button>
        </>
    )
}

export default Login