import { Footer, Nav, Provider } from '@/components'
import './globals.css'
import { Suspense } from 'react'

export const metadata = {
  title: 'PromptBuddy',
  description: 'Discover, Craft & Share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider>
            <div className='main' >
              <div className='gradient' />
            </div>
            <main className='app'>
              <Nav />
              {children}
              <Footer />
            </main>
          </Provider>
        </Suspense>
      </body>
    </html>
  )
}
