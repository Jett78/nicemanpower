import React from 'react'

const Errorpage = () => {
  return (
   <main className='h-screen flex justify-center items-center'>
  <div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

    <p className="mt-4 text-gray-500">We can't find that page.</p>

    <a
      href="/"
      className="mt-6 inline-block rounded bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 ease-in-out duration-200 focus:outline-none focus:ring"
    >
      Go Back Home
    </a>
  </div>
</div>
   </main>
  )
}

export default Errorpage