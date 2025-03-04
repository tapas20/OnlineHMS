import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

 function RegisterModal({ isOpen, closeModal }) {
  const navigate = useNavigate();

  const handleDoctorRegister = () => {
    closeModal();
    navigate('/signupdoctor');
  };

  const handlePatientRegister = () => {
    closeModal();
    navigate('/signuppatient');
  };

  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full max-w-md rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-2xl border-2 border-blue-100"
          >
            <div className="p-6">
              <Dialog.Title className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Register with MedConnect
              </Dialog.Title>

              {/* Doctor Register Button */}
              <div
                onClick={handleDoctorRegister}
                className="group flex items-center justify-center p-4 mb-4 rounded-lg border-2 border-blue-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-900 transition-colors">
                    Doctor Registration
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    Join our network of healthcare professionals
                  </p>
                </div>
              </div>

              {/* Patient Register Button */}
              <div
                onClick={handlePatientRegister}
                className="group flex items-center justify-center p-4 mb-4 rounded-lg border-2 border-green-200 bg-white hover:border-green-500 hover:bg-green-50 transition-all cursor-pointer"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-green-800 group-hover:text-green-900 transition-colors">
                    Patient Registration
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                    Manage your health with ease
                  </p>
                </div>
              </div>

              {/* Back to Login Link */}
              <button
                onClick={closeModal}
                className="w-full text-center text-blue-600 hover:text-blue-700 text-sm underline"
              >
                Already have an account? Login
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Dialog>
  );
}

export default RegisterModal;