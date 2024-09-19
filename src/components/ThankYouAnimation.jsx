"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function ThankYouAnimation({ onClose }) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const timer = setTimeout(() => setShowMessage(true), 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#0d0d23] rounded-lg p-8 max-w-md w-full text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Thank You!
        </motion.h2>
        {showMessage && (
          <motion.p
            className="text-[#E8E8E8]/80 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I'll respond as soon as possible!
          </motion.p>
        )}
        <motion.button
          className="bg-[#D4ADFC] hover:bg-[#D4ADFC]/80 font-bold py-2 px-4 rounded"
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
