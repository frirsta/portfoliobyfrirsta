"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

export default function ContactFormError({ message, onClose }) {
  return (
    <motion.div
      className="fixed inset-x-0 top-0 flex items-center justify-center px-4 py-6 pointer-events-none sm:p-6 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <div className="max-w-sm w-full bg-[#E8E8E8] shadow-lg rounded-lg pointer-events-auto">
        <div className="rounded-lg shadow-xs overflow-hidden">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <XCircle className="h-6 w-6 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm leading-5 font-medium text-gray-900">
                  Error
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-500">
                  {message}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XCircle className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
