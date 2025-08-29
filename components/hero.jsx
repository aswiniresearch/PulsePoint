'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaUserMd, FaFileMedical, FaPills, FaFileInvoiceDollar, FaChartLine, FaUserInjured, FaVideo } from 'react-icons/fa';

export default function Hero() {
  const features = [
    { icon: <FaCalendarAlt className="h-6 w-6" />, name: 'Appointment Scheduling' },
    { icon: <FaFileMedical className="h-6 w-6" />, name: 'Medical Charting' },
    { icon: <FaPills className="h-6 w-6" />, name: 'E-Prescriptions' },
    { icon: <FaFileInvoiceDollar className="h-6 w-6" />, name: 'Billing' },
    { icon: <FaChartLine className="h-6 w-6" />, name: 'Reports' },
    { icon: <FaUserInjured className="h-6 w-6" />, name: 'Patient Portal' },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              >
                <span className="block">Free, Open-Source</span>
                <span className="block text-primary-600 dark:text-primary-400">Clinic Software</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Appointments, charting, e-prescriptions, billing, reports & patient portal — no license fees, no restrictions.
                Built on the trusted OpenEMR platform.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-md shadow"
                >
                  <Link
                    href="/demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Try the Live Demo
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <Link
                    href="/deploy"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-100 dark:hover:bg-primary-800 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                  >
                    Deploy Free
                  </Link>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 opacity-20 rounded-l-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-32 w-32 md:h-36 md:w-36 lg:h-40 lg:w-40"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
