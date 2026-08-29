// *********************
// Role of the component: Simple H2 heading component
// Name of the component: Heading.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Heading title={title} />
// Input parameters: { title: string }
// Output: h2 heading title with some styles 
// *********************

import React from 'react'

const Heading = ({ title, dark } : { title: string; dark?: boolean }) => {
  return (
    <h2 className={`mt-8 text-center font-display text-5xl font-semibold max-lg:text-4xl ${dark ? "text-brand-ink" : "text-brand-cream"}`}>{ title }</h2>
  )
}

export default Heading