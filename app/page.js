import Head from 'next/head';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenEMR Clinic Platform - Free, Open-Source Healthcare Software</title>
        <meta name="description" content="Free, open-source clinic management software with scheduling, charting, e-prescriptions, billing, and patient portal. No license fees." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        {/* Additional sections will be added here */}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} OpenEMR Clinic Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
