'use client';

import { useState } from 'react';
import { FaPlay, FaPause, FaExpand, FaCompress, FaUserMd, FaUser, FaLock, FaArrowRight } from 'react-icons/fa';

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const demoFeatures = [
    {
      id: 'overview',
      title: 'Platform Overview',
      description: 'A quick tour of the main features and interface',
      duration: '2:45',
      thumbnail: '/demo/overview-thumb.jpg',
    },
    {
      id: 'scheduling',
      title: 'Appointment Scheduling',
      description: 'How to book, reschedule, and manage appointments',
      duration: '1:30',
      thumbnail: '/demo/scheduling-thumb.jpg',
    },
    {
      id: 'charting',
      title: 'Patient Charting',
      description: 'Documenting patient encounters and medical history',
      duration: '2:15',
      thumbnail: '/demo/charting-thumb.jpg',
    },
    {
      id: 'eprescribing',
      title: 'E-Prescribing',
      description: 'Sending prescriptions electronically',
      duration: '1:45',
      thumbnail: '/demo/eprescribing-thumb.jpg',
    },
    {
      id: 'billing',
      title: 'Billing & Invoicing',
      description: 'Managing payments and insurance claims',
      duration: '2:00',
      thumbnail: '/demo/billing-thumb.jpg',
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      description: 'Generating insights and practice metrics',
      duration: '1:15',
      thumbnail: '/demo/reports-thumb.jpg',
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Healthcare Management System Demo</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Experience our healthcare management system
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/deploy"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Deploy Your Own
              </a>
              <a
                href="https://demo.openemr.io/openemr/interface/login/login.php?site=default"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-700 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-100 dark:hover:bg-primary-800"
              >
                Live Demo <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isLoggedIn ? (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="p-8 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30">
                <FaLock className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">Demo Login Required</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Enter your demo credentials to access the interactive demo
              </p>
              
              <form className="mt-8 space-y-6 max-w-md mx-auto" onSubmit={handleLogin}>
                <div className="rounded-md shadow-sm space-y-4">
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white rounded-md"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Sign in to Demo
                  </button>
                </div>
              </form>
              
              <div className="mt-8 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Demo Credentials</h3>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  <p>Username: <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">demo_user</span></p>
                  <p className="mt-1">Password: <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">demo123</span></p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Video Player Section */}
            <div className={`bg-black rounded-lg overflow-hidden shadow-xl ${isFullscreen ? 'fixed inset-0 z-50 m-0' : 'relative'}`}>
              {/* Video Placeholder */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 mb-4">
                    <FaUserMd className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white">OpenEMR Clinic Platform Demo</h3>
                  <p className="mt-1 text-sm text-gray-400">Interactive demo will play here</p>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="text-white hover:text-gray-300 focus:outline-none"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <FaPause className="h-5 w-5" />
                      ) : (
                        <FaPlay className="h-5 w-5" />
                      )}
                    </button>
                    
                    <div className="flex items-center text-sm text-gray-300">
                      <span>{formatTime(currentTime)}</span>
                      <span className="mx-1">/</span>
                      <span className="text-gray-400">
                        {demoFeatures.find(f => f.id === activeTab)?.duration || '0:00'}
                      </span>
                    </div>
                    
                    <div className="h-1 bg-gray-700 rounded-full flex-1 max-w-md">
                      <div
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${(currentTime / 180) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={toggleFullscreen}
                      className="text-gray-300 hover:text-white focus:outline-none"
                      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                    >
                      {isFullscreen ? (
                        <FaCompress className="h-5 w-5" />
                      ) : (
                        <FaExpand className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {isFullscreen && (
                <button
                  onClick={toggleFullscreen}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                  aria-label="Exit fullscreen"
                >
                  <FaCompress className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Demo Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoFeatures.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    setActiveTab(feature.id);
                    setCurrentTime(0);
                    setIsPlaying(false);
                  }}
                  className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-200 text-left ${
                    activeTab === feature.id ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center">
                        <FaPlay className="h-5 w-5 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {feature.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Demo Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Explore More</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="https://demo.openemr.io/openemr/interface/login/login.php?site=default"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    Try Live Demo
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Experience the full OpenEMR platform with sample data
                  </p>
                </a>
                
                <a
                  href="/deploy"
                  className="group block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    Deploy Your Own
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Get started with your own OpenEMR instance in minutes
                  </p>
                </a>
                
                <a
                  href="/docs"
                  className="group block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    Documentation
                  </h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Learn how to use and customize OpenEMR for your practice
                  </p>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
