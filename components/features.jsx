'use client';

import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaUserMd,
  FaFileMedical,
  FaPills,
  FaFileInvoiceDollar,
  FaChartLine,
  FaUserInjured,
  FaVideo,
} from 'react-icons/fa';

const features = [
  {
    name: 'Scheduling & Calendar',
    description:
      'Efficiently manage appointments with an intuitive calendar interface. Reduce no-shows with automated reminders and easy rescheduling options.',
    icon: FaCalendarAlt,
  },
  {
    name: 'Patient Demographics',
    description:
      'Comprehensive patient profiles with medical history, insurance information, and contact details all in one place for quick access.',
    icon: FaUserMd,
  },
  {
    name: 'Encounters & Notes',
    description:
      'Streamlined clinical documentation with customizable templates, voice-to-text support, and easy access to patient history.',
    icon: FaFileMedical,
  },
  {
    name: 'E-Prescriptions',
    description:
      'Send prescriptions directly to pharmacies, check for drug interactions, and access patient medication history.',
    icon: FaPills,
  },
  {
    name: 'Billing & Invoices',
    description:
      'Integrated medical billing with support for multiple insurance providers, claim tracking, and patient billing.',
    icon: FaFileInvoiceDollar,
  },
  {
    name: 'Reports & Analytics',
    description:
      'Generate detailed reports on practice performance, patient outcomes, and financial metrics with customizable dashboards.',
    icon: FaChartLine,
  },
  {
    name: 'Patient Portal',
    description:
      'Secure online access for patients to view records, schedule appointments, and communicate with providers.',
    icon: FaUserInjured,
  },
  {
    name: 'Telehealth',
    description:
      'Integrated video consultations with secure messaging and file sharing for remote patient care.',
    icon: FaVideo,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          >
            Everything You Need to Run Your Practice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto"
          >
            A comprehensive solution designed by healthcare professionals to streamline your clinic's operations and
            improve patient care.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white text-center">
                      {feature.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
