
import Navbar from '@/components/Navbar'


import './globals.css'


export const metadata={
  title: 'Hookbank',
  description: 
  'HookBank your favorite and secure bank',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>            
   <div className='w-full h-full'>
        {children}
        </div>
        </body>
    </html>
  )
}
