import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>AI EMR Platform</title>
        <meta name="description" content="AI-powered Electronic Medical Records Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Welcome to AI EMR Platform
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link href="/doctors">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Doctors</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Access doctor dashboard and patient records</p>
            </div>
          </Link>
          
          <Link href="/patients">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Patients</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">View your medical records and appointments</p>
            </div>
          </Link>
          
          <Link href="/community">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Community</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Connect with healthcare professionals</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
