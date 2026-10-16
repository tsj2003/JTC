import { incentives } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Incentives = () => {
  return (
    <section className="bg-brand-paper py-12">
      <h2 className="px-4 text-center font-display text-4xl text-brand-ink sm:text-5xl">Why shop at Juneja</h2>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {incentives.map((incentive) => (
            <div key={incentive.name} className="border border-brand-ink/10 bg-white p-6 text-center">
              <Image width={48} height={48} className="mx-auto" src={incentive.imageSrc} alt="" />
              <h3 className="mt-4 font-semibold text-brand-ink">{incentive.name}</h3>
              <p className="mt-2 text-sm text-brand-soot">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Incentives
