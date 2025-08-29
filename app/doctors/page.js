'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUserMd, FaNotesMedical, FaPills, FaFileInvoiceDollar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function DoctorsWorkflow() {
  const [activeTab, setActiveTab] = useState('scheduling');
  const [demoCredentials] = useState({
    username: 'demo_doctor',
    password: 'demo1234',
    url: 'https://demo.openemr.io/openemr/interface/login/login.php?site=default'
  });

  const workflowSteps = [
    {
      id: 'scheduling',
      title: '1. Appointment Scheduling',
      icon: <FaCalendarAlt className="h-6 w-6" />,
      description: 'Efficiently manage your patient appointments with an intuitive calendar interface.',
      features: [
        'Drag-and-drop appointment scheduling',
        'Automated appointment reminders',
        'Recurring appointments',
        'Waitlist management',
        'Resource allocation'
      ],
      image: '/images/doctor-scheduling.jpg',
      alt: 'Doctor scheduling interface'
    },
    {
      id: 'charting',
      title: '2. Patient Charting',
      icon: <FaNotesMedical className="h-6 w-6" />,
      description: 'Comprehensive and customizable electronic health records for better patient care.',
      features: [
        'SOAP notes templates',
        'Voice-to-text dictation',
        'Customizable templates',
        'Problem list management',
        'Medication history'
      ],
      image: '/images/doctor-charting.jpg',
      alt: 'Doctor charting interface'
    },
    {
      id: 'eprescribing',
      title: '3. E-Prescribing',
      icon: <FaPills className="h-6 w-6" />,
      description: 'Safe and efficient electronic prescribing with built-in drug interaction checks.',
      features: [
        'eRx with Surescripts integration',
        'Drug interaction checking',
        'Formulary checking',
        'Medication history',
        'Prior authorization support'
      ],
      image: '/images/doctor-eprescribing.jpg',
      alt: 'E-prescribing interface'
    },
    {
      id: 'billing',
      title: '4. Billing & Coding',
      icon: <FaFileInvoiceDollar className="h-6 w-6" />,
      description: 'Streamlined medical billing and coding for faster reimbursements.',
      features: [
        'ICD-10/CPT coding',
        'Claims management',
        'ERA/EOB processing',
        'Payment posting',
        'Financial reporting'
      ],
      image: '/images/doctor-billing.jpg',
      alt: 'Medical billing interface'
    }
  ];

  const activeStep = workflowSteps.find(step => step.id === activeTab) || workflowSteps[0];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Streamlined Clinical Workflow
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl">
              Everything you need to manage your practice efficiently and provide excellent patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Workflow Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          {workflowSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === step.id
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">{step.icon}</span>
                <span>{step.title.split(' ')[0]}</span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Workflow Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 p-2 rounded-lg">
                  {activeStep.icon}
                </div>
                <h2 className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                  {activeStep.title}
                </h2>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {activeStep.description}
              </p>
              <ul className="mt-6 space-y-3">
                {activeStep.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={demoCredentials.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Try {activeStep.title.split('. ')[1]} in Demo
                  <FaArrowRight className="ml-2 -mr-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 bg-gray-100 dark:bg-gray-700 p-8 flex items-center justify-center">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-20 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl w-full h-full flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-500 text-lg">
                      {activeStep.alt} Preview
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Credentials */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Demo Access</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-300">
                <p>Use these credentials to explore the full demo:</p>
              </div>
              <div className="mt-3 text-sm">
                <div className="font-medium text-gray-900 dark:text-white">Username: 
                  <span className="ml-2 font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    {demoCredentials.username}
                  </span>
                </div>
                <div className="mt-1 font-medium text-gray-900 dark:text-white">Password: 
                  <span className="ml-2 font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">
                    {demoCredentials.password}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <a
                  href={demoCredentials.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Launch Demo
                  <FaArrowRight className="ml-2 -mr-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
