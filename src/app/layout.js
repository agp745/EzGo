import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from '../components/provider'
import { ReduxProvider } from '../lib/reduxStore/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EzGo',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </body>
      </Provider>
    </html>
  )
}
