'use client';

import { useState } from 'react';
import { FaSearch, FaBook, FaFileAlt, FaVideo, FaDownload, FaCode, FaServer, FaMobileAlt, FaShieldAlt, FaUsers, FaUserMd, FaUser, FaChartLine, FaFileInvoiceDollar, FaPills, FaCalendarAlt, FaLaptopMedical } from 'react-icons/fa';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSections, setExpandedSections] = useState({});

  const categories = [
    { id: 'all', name: 'All Documentation', icon: <FaBook className="h-5 w-5" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <FaBook className="h-5 w-5" /> },
    { id: 'user-guides', name: 'User Guides', icon: <FaUser className="h-5 w-5" /> },
    { id: 'admin-guides', name: 'Administration', icon: <FaUserMd className="h-5 w-5" /> },
    { id: 'developer', name: 'Developer', icon: <FaCode className="h-5 w-5" /> },
    { id: 'api', name: 'API Reference', icon: <FaServer className="h-5 w-5" /> },
  ];

  const docs = [
    {
      id: 'quick-start',
      title: 'Quick Start Guide',
      category: 'getting-started',
      description: 'Get up and running with OpenEMR in minutes',
      icon: <FaBook className="h-6 w-6 text-primary-600" />,
      content: [
        {
          title: 'System Requirements',
          content: 'Minimum requirements for running OpenEMR: 2GB RAM, 20GB disk space, PHP 7.4+, MySQL 5.7+ or MariaDB 10.3+',
        },
        {
          title: 'Installation',
          content: 'Step-by-step installation guide for various platforms including Windows, macOS, and Linux',
        },
        {
          title: 'Initial Setup',
          content: 'Configure your practice settings, users, and preferences after installation',
        },
      ],
    },
    {
      id: 'patient-management',
      title: 'Patient Management',
      category: 'user-guides',
      description: 'Comprehensive guide to managing patient records',
      icon: <FaUser className="h-6 w-6 text-blue-600" />,
      content: [
        {
          title: 'Adding New Patients',
          content: 'How to create and manage patient demographics and medical records',
        },
        {
          title: 'Patient Dashboard',
          content: 'Overview of the patient dashboard and its features',
        },
        {
          title: 'Medical History',
          content: 'Documenting and reviewing patient medical history',
        },
      ],
    },
    {
      id: 'scheduling',
      title: 'Appointment Scheduling',
      category: 'user-guides',
      description: 'Manage appointments and provider schedules',
      icon: <FaCalendarAlt className="h-6 w-6 text-green-600" />,
      content: [
        {
          title: 'Calendar Overview',
          content: 'Understanding the scheduling interface and views',
        },
        {
          title: 'Booking Appointments',
          content: 'How to schedule, reschedule, and cancel appointments',
        },
        {
          title: 'Appointment Reminders',
          content: 'Setting up and managing automated appointment reminders',
        },
      ],
    },
    {
      id: 'ehr',
      title: 'Electronic Health Records',
      category: 'user-guides',
      description: 'Documenting and managing patient encounters',
      icon: <FaLaptopMedical className="h-6 w-6 text-purple-600" />,
      content: [
        {
          title: 'SOAP Notes',
          content: 'Creating and managing SOAP notes for patient encounters',
        },
        {
          title: 'Templates',
          content: 'Using and customizing note templates',
        },
        {
          title: 'Clinical Decision Support',
          content: 'Leveraging CDS tools for better patient care',
        },
      ],
    },
    {
      id: 'e-prescribing',
      title: 'E-Prescribing',
      category: 'user-guides',
      description: 'Electronic prescribing of medications',
      icon: <FaPills className="h-6 w-6 text-yellow-600" />,
      content: [
        {
          title: 'Setting Up E-Prescribing',
          content: 'Configuration and requirements for e-prescribing',
        },
        {
          title: 'Writing Prescriptions',
          content: 'How to create and send electronic prescriptions',
        },
        {
          title: 'Medication History',
          content: 'Viewing and managing patient medication history',
        },
      ],
    },
    {
      id: 'billing',
      title: 'Medical Billing',
      category: 'user-guides',
      description: 'Billing and claims management',
      icon: <FaFileInvoiceDollar className="h-6 w-6 text-red-600" />,
      content: [
        {
          title: 'Insurance Setup',
          content: 'Configuring insurance providers and plans',
        },
        {
          title: 'Creating Claims',
          content: 'How to generate and submit insurance claims',
        },
        {
          title: 'Payment Posting',
          content: 'Recording payments and managing accounts receivable',
        },
      ],
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      category: 'admin-guides',
      description: 'Generating and customizing reports',
      icon: <FaChartLine className="h-6 w-6 text-indigo-600" />,
      content: [
        {
          title: 'Standard Reports',
          content: 'Overview of available standard reports',
        },
        {
          title: 'Custom Reports',
          content: 'Creating and saving custom reports',
        },
        {
          title: 'Data Export',
          content: 'Exporting data for external analysis',
        },
      ],
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      category: 'admin-guides',
      description: 'HIPAA compliance and security settings',
      icon: <FaShieldAlt className="h-6 w-6 text-gray-600" />,
      content: [
        {
          title: 'User Access Control',
          content: 'Configuring roles and permissions',
        },
        {
          title: 'Audit Logs',
          content: 'Reviewing system activity and access logs',
        },
        {
          title: 'HIPAA Compliance',
          content: 'Ensuring your setup meets HIPAA requirements',
        },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile Access',
      category: 'user-guides',
      description: 'Using OpenEMR on mobile devices',
      icon: <FaMobileAlt className="h-6 w-6 text-blue-500" />,
      content: [
        {
          title: 'Mobile App',
          content: 'Download and setup the official mobile app',
        },
        {
          title: 'Mobile Browser Access',
          content: 'Using OpenEMR in mobile browsers',
        },
        {
          title: 'Offline Mode',
          content: 'Working with limited or no internet connection',
        },
      ],
    },
    {
      id: 'api-developer',
      title: 'API Documentation',
      category: 'developer',
      description: 'Developer resources and API reference',
      icon: <FaCode className="h-6 w-6 text-green-700" />,
      content: [
        {
          title: 'REST API',
          content: 'Documentation for the RESTful API endpoints',
        },
        {
          title: 'OAuth2 Authentication',
          content: 'Setting up and using OAuth2 for API access',
        },
        {
          title: 'Webhooks',
          content: 'Configuring and using webhooks for event notifications',
        },
      ],
    },
  ];

  const toggleSection = (docId) => {
    setExpandedSections(prev => ({
      ...prev,
      [docId]: !prev[docId]
    }));
  };

  const filteredDocs = docs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">Documentation</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Comprehensive guides and resources to help you get the most out of OpenEMR Clinic Platform
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Categories</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center space-x-2 ${
                      activeCategory === category.id
                        ? 'bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-white font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="text-gray-500 dark:text-gray-400">{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8">
                <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Resources</h2>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaVideo className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
                    Video Tutorials
                  </a>
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaDownload className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
                    Download PDF Guides
                  </a>
                  <a
                    href="#"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaUsers className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
                    Community Forums
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {searchQuery && (
              <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                {filteredDocs.length} results for "{searchQuery}" in {activeCategory === 'all' ? 'all categories' : getCategoryName(activeCategory)}
              </div>
            )}

            {filteredDocs.length === 0 ? (
              <div className="text-center py-12">
                <FaSearch className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No documentation found</h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredDocs.map((doc) => (
                  <div key={doc.id} className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
                    <button
                      onClick={() => toggleSection(doc.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      aria-expanded={expandedSections[doc.id]}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 pt-0.5">
                          {doc.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{doc.title}</h3>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{doc.description}</p>
                        </div>
                      </div>
                      <div className="ml-6 flex-shrink-0">
                        <svg
                          className={`h-5 w-5 transform transition-transform ${expandedSections[doc.id] ? 'rotate-180' : ''}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </button>

                    {expandedSections[doc.id] && (
                      <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <div className="prose dark:prose-invert max-w-none">
                          <ul className="space-y-4">
                            {doc.content.map((item, index) => (
                              <li key={index} className="border-l-4 border-primary-200 dark:border-primary-800 pl-4 py-1">
                                <h4 className="text-base font-medium text-gray-900 dark:text-white">{item.title}</h4>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.content}</p>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4">
                            <a
                              href={`/docs/${doc.id}`}
                              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              View full documentation
                              <svg
                                className="ml-1 h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Popular Topics */}
            <div className="mt-12">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Popular Topics</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: 'How to set up your practice', category: 'Getting Started' },
                  { title: 'User roles and permissions', category: 'Administration' },
                  { title: 'Customizing the patient chart', category: 'User Guides' },
                  { title: 'API integration guide', category: 'Developer' },
                ].map((topic, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 bg-white dark:bg-gray-800 shadow rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <h3 className="text-base font-medium text-primary-600 dark:text-primary-400">{topic.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{topic.category}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
