'use client';

import { useState } from 'react';
import { FaDiscord, FaGithub, FaTwitter, FaYoutube, FaCalendarAlt, FaUserFriends, FaQuestionCircle, FaCode, FaBook, FaComments, FaChartLine } from 'react-icons/fa';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions');
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Monthly Community Meetup',
      date: '2023-11-15',
      time: '14:00',
      type: 'virtual',
      description: 'Join our monthly community call to discuss the latest developments and upcoming features.',
      speaker: 'Community Lead',
      link: '#',
      tags: ['meetup', 'development', 'q&a']
    },
    {
      id: 2,
      title: 'Workshop: Custom Templates',
      date: '2023-11-22',
      time: '15:30',
      type: 'webinar',
      description: 'Learn how to create and customize templates to streamline your workflow.',
      speaker: 'Implementation Specialist',
      link: '#',
      tags: ['workshop', 'templates']
    },
  ];

  const communityStats = {
    members: '10,000+',
    countries: '150+',
    contributors: '500+',
    projects: '50+'
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">Community</h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
              Connect with users, contributors, and developers worldwide
            </p>
            
            {/* Community Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: 'Members', value: communityStats.members, icon: <FaUserFriends className="h-6 w-6 text-primary-600" /> },
                { label: 'Countries', value: communityStats.countries, icon: <FaChartLine className="h-6 w-6 text-blue-600" /> },
                { label: 'Contributors', value: communityStats.contributors, icon: <FaCode className="h-6 w-6 text-green-600" /> },
                { label: 'Commits', value: communityStats.commits, icon: <FaGithub className="h-6 w-6 text-purple-600" /> },
              ].map((stat, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                  <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {stat.icon}
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { id: 'discussions', name: 'Discussions', icon: <FaComments className="mr-2 h-5 w-5" /> },
              { id: 'events', name: 'Events', icon: <FaCalendarAlt className="mr-2 h-5 w-5" /> },
              { id: 'resources', name: 'Resources', icon: <FaBook className="mr-2 h-5 w-5" /> },
              { id: 'get-involved', name: 'Get Involved', icon: <FaUserFriends className="mr-2 h-5 w-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {activeTab === 'discussions' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Community Forums</h2>
                <div className="w-full sm:w-64">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Search discussions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    {
                      id: 'general',
                      title: 'General Discussion',
                      description: 'General questions and discussions about our platform',
                      icon: <FaComments className="h-6 w-6 text-blue-500" />,
                      threads: 1254,
                      latest: {
                        title: 'How to upgrade to the latest version?',
                        user: 'johndoe',
                        time: '2 hours ago'
                      }
                    },
                    {
                      id: 'installation',
                      title: 'Installation & Setup',
                      description: 'Get help with installing and configuring the platform',
                      icon: <FaCode className="h-6 w-6 text-green-500" />,
                      threads: 876,
                      latest: {
                        title: 'Docker installation issues',
                        user: 'techsupport',
                        time: '5 hours ago'
                      }
                    },
                  ].map((category) => (
                    <li key={category.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                      <a href={`#`} className="block hover:bg-gray-50 dark:hover:bg-gray-700">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              {category.icon}
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                                  {category.title}
                                </p>
                                <div className="ml-2 flex-shrink-0 flex">
                                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                    {category.threads} threads
                                  </p>
                                </div>
                              </div>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                {category.description}
                              </p>
                              <div className="mt-2 flex justify-between">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  Latest: <span className="font-medium text-gray-900 dark:text-gray-200">{category.latest.title}</span> by {category.latest.user} {category.latest.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {events.map((event) => (
                    <li key={event.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-center mr-6 w-16">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                              </p>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {new Date(event.date).getDate()}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {event.time}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                                {event.title}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {event.speaker}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                          >
                            {expandedEvent === event.id ? 'Show Less' : 'Learn More'}
                          </button>
                        </div>
                        
                        {expandedEvent === event.id && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {event.description}
                            </p>
                            <div className="mt-4">
                              <a
                                href={event.link}
                                className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
                              >
                                Register for this event <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learning Resources</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Documentation',
                    description: 'Comprehensive guides and references for using our platform',
                    icon: <FaBook className="h-8 w-8 text-blue-600" />,
                    link: '/docs'
                  },
                  {
                    title: 'Video Tutorials',
                    description: 'Step-by-step video guides for common tasks',
                    icon: <FaYoutube className="h-8 w-8 text-red-600" />,
                    link: '#'
                  },
                  {
                    title: 'Developer Guides',
                    description: 'Resources for developers working with our platform',
                    icon: <FaCode className="h-8 w-8 text-green-600" />,
                    link: '#'
                  },
                ].map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="flex flex-col bg-white dark:bg-gray-800 shadow rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-shrink-0">
                      {resource.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{resource.title}</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'get-involved' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get Involved</h2>
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                <div className="px-6 py-8 sm:p-10">
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: 'Contribute Code',
                        description: 'Help improve our platform by contributing code, fixing bugs, or adding new features.',
                        icon: <FaCode className="h-8 w-8 text-green-600" />,
                        link: '#'
                      },
                      {
                        title: 'Improve Documentation',
                        description: 'Help us create better documentation for users and developers.',
                        icon: <FaBook className="h-8 w-8 text-blue-600" />,
                        link: '#'
                      },
                      {
                        title: 'Report Bugs',
                        description: 'Found a bug? Let us know so we can fix it!',
                        icon: <FaQuestionCircle className="h-8 w-8 text-yellow-600" />,
                        link: '#'
                      },
                      {
                        title: 'Help Other Users',
                        description: 'Join the forums and help answer questions from other community members.',
                        icon: <FaUserFriends className="h-8 w-8 text-purple-600" />,
                        link: '#'
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                            {item.icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            <a href={item.link} className="hover:text-primary-600 dark:hover:text-primary-400">
                              {item.title}
                            </a>
                          </h3>
                          <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
