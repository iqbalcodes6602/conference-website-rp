import React from 'react'

function OptionsCard({ index, category }) {
  return (
    <div key={index} className='p-6 sx:p-3 rounded-md hover:bg-[rgba(0,0,0,0.1)] hover:text-black hover:cursor-pointer'>
      <div className='flex justify-between'>
        <h3 className="mb-2 text-xl font-bold dark:text-white">{category.title}</h3>
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-gray-500 dark:text-gray-400">
        {category.description}
      </p>
    </div>
  )
}

export default OptionsCard