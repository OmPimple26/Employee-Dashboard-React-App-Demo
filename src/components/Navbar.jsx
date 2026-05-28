// import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="bg-slate-900 text-white shadow-lg">

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Employee Dashboard
        </h2>

        <ul className="flex gap-6 text-lg">
          <li className="hover:text-blue-400 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Employees
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            About
          </li>
        </ul>

      </div>

    </nav>
    </>
  )
}

export default Navbar