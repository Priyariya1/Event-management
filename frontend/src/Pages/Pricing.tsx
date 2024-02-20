import React from 'react'
import { pricingPlans } from "./Planlist"

export const Pricing = () => {
  return (
    <div >
      <div className='flex flex-col items-center bg-blue-400 p-4'>
        <div className='mb-2 mt-6 text-center'>
          <h1 className='mb-4 text-4xl font-black text-black'>
            Pricing
          </h1>
          <p className='text-lg text-black'>
            Choose the right pakeage for you and get started enjoyin on your event
          </p>

        </div>
      </div >
      <div className='relative'>
        {/* <div className='absolute inset-0 bg-cyan-100'></div> */}
      <div className='mx-auto grid max-w-7xl grid-cols-3 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8'>
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className='rounded-2xl border border-slate-200 shadow-lg p-8 relative flex-col'>

            <h3 className='text-lg font-semibold leading-5'>
              {plan.name}
            </h3>
            {plan.mostPopular && (
              <p className='absolute top-0 -translate-y-1/2 bg-cyan-500 px-3 py-0.5 text-sm font-semibold tracking-wide text-white shadow-md rounded-full'>
                Most Popular
              </p>
            )}
            <p className='mt-4 text-slate-700'>
              {plan.description}
            </p>
            <div className='-mx-6 mt-4 rounded-lg bg-slate-50 p-6'>
              <p className='text-sm font-semibold text-slate-500 items-center'>
                <span>{plan.currency}</span>
                <span className='ml-3 text-4xl text-slate-900'>
                  {plan.price}
                </span>
              </p>
            </div>
            {/* Features */}
            <ul className='mt-6 space-y-4 flex-1'>
              {plan.features.map((feature) => (
                <li key={feature} className='text-sm leading-6 text-slate-700'>
                  {feature}
                </li>
              ))}
            </ul>
            {/* call to action */}
            <a href='#' className={`mt-8 block   px-6 py-4    text-sm font-semibold leading-4 text-center rounded-lg
            ${plan.mostPopular
                ? 'text-white bg-cyan-500 hover:bg-cyan-600  shadow-md'
                : ' text-cyan-700 bg-cyan-50 hover:bg-cyan-100'
              }
            
            `}
            >
              {plan.cta}
            </a>

          </div>
        ))}

      </div>
    </div>
    </div>
  )
}
