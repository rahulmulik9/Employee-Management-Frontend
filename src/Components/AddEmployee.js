import React from 'react'

export const AddEmployee = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 ">
                <label className="block text-gray-600 text-sm font-normal">
                    First Name
                </label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2  "></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 ">
                <label className="block text-gray-600 text-sm font-normal">
                    Last Name
                </label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2  "></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4 ">
                <label className="block text-gray-600 text-sm font-normal">
                    Email Name
                </label>
                <input type="email" className="h-10 w-96 border mt-2 px-2 py-2  "></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4  space-x-4 py-4">
               <button className="rounded text-white font-semibold bg-green-500 py-2 px-6 hover:bg-green-700">
                Save
               </button>
               <button className="rounded text-white font-semibold bg-red-500 py-2 px-6 hover:bg-red-700">
                Clear
               </button>
            </div>
        </div>
        
        </div>
  )
}
