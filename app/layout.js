import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenEMR Clinic Platform - Free, Open-Source Healthcare Software',
  description: 'Comprehensive clinic management solution with scheduling, charting, e-prescriptions, billing, and patient portal. No license fees.',
  metadataBase: new URL('https://openemr-clinic.org'),
  openGraph: {
    title: 'OpenEMR Clinic Platform',
    description: 'Free, Open-Source Clinic Software Powered by OpenEMR',
    url: 'https://openemr-clinic.org',
    siteName: 'OpenEMR Clinic Platform',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenEMR Clinic Platform',
    description: 'Free, Open-Source Clinic Software Powered by OpenEMR',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
