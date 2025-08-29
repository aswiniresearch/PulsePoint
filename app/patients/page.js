'use client';

import { useState } from 'react';
import { FaUserCircle, FaCalendarAlt, FaFileMedical, FaPills, FaFileInvoiceDollar, FaEnvelope, FaLock, FaDownload, FaVideo, FaNotesMedical } from 'react-icons/fa';

export default function PatientsPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const portalFeatures = [
    { id: 'overview', title: 'Overview', icon: <FaUserCircle className="h-5 w-5" /> },
    { id: 'appointments', title: 'Appointments', icon: <FaCalendarAlt className="h-5 w-5" /> },
    { id: 'medical-records', title: 'Medical Records', icon: <FaFileMedical className="h-5 w-5" /> },
    { id: 'prescriptions', title: 'Prescriptions', icon: <FaPills className="h-5 w-5" /> },
    { id: 'billing', title: 'Billing', icon: <FaFileInvoiceDollar className="h-5 w-5" /> },
    { id: 'messages', title: 'Messages', icon: <FaEnvelope className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Patient Portal</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-300">Welcome, John Doe</span>
              <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <FaUserCircle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 mb-8 lg:mb-0">
            <nav className="space-y-1">
              {portalFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full group rounded-md px-3 py-3 flex items-center text-sm font-medium ${
                    activeTab === feature.id
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200'
                      : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="truncate flex items-center">
                    <span className="mr-3">{feature.icon}</span>
                    {feature.title}
                  </span>
                </button>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full group rounded-md px-3 py-3 flex items-center text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
                  <FaLock className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300" />
                  Sign Out
                </button>
              </div>
            </nav>

            <div className="mt-8 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">Need Help?</h3>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                Contact our support team if you have any questions about using the portal.
              </p>
              <div className="mt-3">
                <button className="text-sm font-medium text-blue-700 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200">
                  Contact Support <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {portalFeatures.find(f => f.id === activeTab)?.title || 'Dashboard'}
                </h2>
                
                {activeTab === 'overview' && <OverviewTab />}
                {activeTab === 'appointments' && <AppointmentsTab />}
                {activeTab === 'medical-records' && <MedicalRecordsTab />}
                {activeTab === 'prescriptions' && <PrescriptionsTab />}
                {activeTab === 'billing' && <BillingTab />}
                {activeTab === 'messages' && <MessagesTab />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Tab Components
function OverviewTab() {
  const [appointments] = useState([
    { id: 1, date: '2025-09-10', time: '10:00 AM', doctor: 'Dr. Smith', type: 'Follow-up' },
  ]);

  const [messages] = useState([
    { id: 1, from: 'Dr. Smith', subject: 'Test Results', date: '2025-08-20', read: false },
  ]);

  const [prescriptions] = useState([
    { id: 1, name: 'Lisinopril', dosage: '10mg', refills: 3, date: '2025-07-15', status: 'Active' },
  ]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">Next Appointment</h3>
          {appointments.length > 0 ? (
            <div className="mt-2">
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {appointments[0].date}
              </p>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {appointments[0].time} with {appointments[0].doctor}
              </p>
            </div>
          ) : (
            <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">No upcoming appointments</p>
          )}
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Active Prescriptions</h3>
          <p className="mt-2 text-2xl font-bold text-green-900 dark:text-green-100">
            {prescriptions.length}
          </p>
          <p className="text-sm text-green-800 dark:text-green-200">
            {prescriptions.length === 1 ? '1 active prescription' : `${prescriptions.length} active prescriptions`}
          </p>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-purple-800 dark:text-purple-200">Unread Messages</h3>
          <p className="mt-2 text-2xl font-bold text-purple-900 dark:text-purple-100">
            {messages.filter(m => !m.read).length}
          </p>
          <p className="text-sm text-purple-800 dark:text-purple-200">
            {messages.filter(m => !m.read).length === 1 ? '1 unread message' : `${messages.filter(m => !m.read).length} unread messages`}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaCalendarAlt className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Schedule Appointment</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaFileMedical className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">View Records</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaVideo className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Start Video Visit</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <FaEnvelope className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Message Provider</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function AppointmentsTab() {
  const [appointments] = useState([
    { id: 1, date: '2025-09-10', time: '10:00 AM', doctor: 'Dr. Smith', type: 'Follow-up' },
    { id: 2, date: '2025-09-24', time: '2:30 PM', doctor: 'Dr. Johnson', type: 'Annual Checkup' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Upcoming Appointments</h3>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Schedule New Appointment
        </button>
      </div>

      {appointments.length > 0 ? (
        <div className="space-y-4">
          {appointments.map((appt) => (
            <div key={appt.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{appt.type}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">with {appt.doctor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{appt.date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{appt.time}</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  Reschedule
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Cancel
                </button>
                <button className="ml-auto inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <FaVideo className="mr-1.5 h-4 w-4" />
                  Start Video Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <FaCalendarAlt className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No upcoming appointments</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Schedule an appointment to get started.</p>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Schedule Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MedicalRecordsTab() {
  const [testResults] = useState([
    { id: 1, date: '2025-08-05', test: 'Complete Blood Count', status: 'Completed', download: true },
    { id: 2, date: '2025-07-20', test: 'Lipid Panel', status: 'Completed', download: true },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Test Results</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Test
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Download</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {testResults.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {result.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {result.test}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {result.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {result.download && (
                      <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                        <FaDownload className="h-5 w-5" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PrescriptionsTab() {
  const [prescriptions] = useState([
    { id: 1, name: 'Lisinopril', dosage: '10mg', refills: 3, date: '2025-07-15', status: 'Active' },
    { id: 2, name: 'Metformin', dosage: '500mg', refills: 2, date: '2025-07-15', status: 'Active' },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Current Medications</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Medication
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Dosage
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Refills
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {prescriptions.map((rx) => (
                <tr key={rx.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {rx.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {rx.dosage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {rx.refills}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {rx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                      Request Refill
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function BillingTab() {
  const [billing] = useState([
    { id: 1, date: '2025-08-15', description: 'Annual Physical', amount: '$150.00', status: 'Paid' },
    { id: 2, date: '2025-08-10', description: 'Lab Work', amount: '$85.50', status: 'Pending' },
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Account Balance</h3>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Current Balance</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$235.50</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Pending Insurance</p>
            <p className="mt-1 text-2xl font-bold text-blue-900 dark:text-blue-100">$150.00</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
            <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Patient Responsibility</p>
            <p className="mt-1 text-2xl font-bold text-yellow-900 dark:text-yellow-100">$85.50</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">Paid This Year</p>
            <p className="mt-1 text-2xl font-bold text-green-900 dark:text-green-100">$1,245.75</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            Make a Payment
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Billing History</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {billing.map((bill) => (
                <tr key={bill.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {bill.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {bill.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {bill.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      bill.status === 'Paid' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MessagesTab() {
  const [messages] = useState([
    { id: 1, from: 'Dr. Smith', subject: 'Test Results', date: '2025-08-20', read: false, body: 'Your recent test results are now available in your patient portal. Overall, your results look good. Your cholesterol levels have improved since your last visit. Please continue with your current medication and lifestyle changes.' },
    { id: 2, from: 'Billing Dept', subject: 'Payment Confirmation', date: '2025-08-18', read: true, body: 'We have received your payment of $150.00 for your recent visit. Thank you for your prompt payment. A receipt has been sent to your email address on file.' },
  ]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Messages</h3>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            New Message
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {messages.length > 0 ? (
          messages.map((message) => (
            <div 
              key={message.id} 
              className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${!message.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
              onClick={() => setSelectedMessage(selectedMessage?.id === message.id ? null : message)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <div className="h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                    <FaUserCircle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm font-medium ${!message.read ? 'text-blue-800 dark:text-blue-200' : 'text-gray-900 dark:text-white'}`}>
                      {message.from}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{message.date}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {message.subject}
                  </p>
                  {selectedMessage?.id === message.id && (
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {message.body}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center">
            <FaEnvelope className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No messages</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              You don't have any messages yet.
            </p>
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <FaEnvelope className="-ml-1 mr-2 h-5 w-5" />
                New Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
