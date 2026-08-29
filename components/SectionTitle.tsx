import React from 'react'

const SectionTitle = ({title, path} : {title: string; path: string}) => {
  return (
    <div className="border-b border-brand-cream bg-brand-ink px-4 py-10">
        <h1 className="mb-2 text-center font-display text-5xl text-brand-cream max-sm:text-4xl">{ title }</h1>
        <p className="text-center text-base text-white/80">{ path }</p>
    </div>
  )
}

export default SectionTitle
