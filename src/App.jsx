import React from 'react'
import Hero from './components/Hero'
import BubbleMenu from './reactbits/BubbleMenu'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills';
import Certificates from './components/Certificates'
import Contact from './components/Contact'
export default function App() {
  return (
    <div className='min-h-screen bg-[#1a1a1a]'>
      <BubbleMenu
        onMenuClick={() => { }}
        className='bg-transparent'
        style={{ backgroundColor: 'transparent' }}
        menuAriaLabel='Toggle navigation'
        menuBg='rgba(15,23,42,0.85)'
        menuContentColor='white'
        useFixedPosition={true}
        items={[
          {
            label: 'hero',
            href: '#top',
            ariaLabel: 'Back to top',
            rotation: -6,
            hoverStyles: { bgColor: '#22c55e', textColor: '#0f172a' },
          },
          {
            label: 'experience',
            href: '#experience',
            ariaLabel: 'Experience',
            rotation: -4,
            hoverStyles: { bgColor: '#3b82f6', textColor: '#0f172a' },
          },
          {
            label: 'skills',
            href: '#skills',
            ariaLabel: 'Skills',
            rotation: 2,
            hoverStyles: { bgColor: '#06b6d4', textColor: '#0f172a' },
          },
          {
            label: 'projects',
            href: '#projects',
            ariaLabel: 'Projects',
            rotation: 6,
            hoverStyles: { bgColor: '#f59e0b', textColor: '#0f172a' },
          },
          {
            label: 'certificates',
            href: '#certificates',
            ariaLabel: 'Certificates',
            rotation: -2,
            hoverStyles: { bgColor: '#a855f7', textColor: '#0f172a' },
          },
          {
            label: 'contact',
            href: '#contact',
            ariaLabel: 'Contact',
            rotation: 4,
            hoverStyles: { bgColor: '#ef4444', textColor: '#0f172a' },
          },
        ]}
      />

      <Hero />

      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <footer className='text-center text-gray-500 text-sm py-4 '>
        <p>Copyright © 2025 Ahmed Refaat. All rights reserved.</p>
      </footer>






    </div>
  )
}
