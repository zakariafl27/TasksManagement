import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react'

export default function Task() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl capitalize font-bold leading-tight text-gray-950">
                    task
                </h2>
                
                <button className='text-white capitalize bg-green-500 p-2 rounded'>
                    <a href="">add new</a>
                </button>
                </div>
                
            }
        >
            <Head title="Task" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-slate-950 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">id</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">images</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">project name</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">name</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Status</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">create date</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">due date</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">created by</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">action</th>
                                        </tr>
                                        
                                    </thead>

                                    <tbody>

                                        <tr>
                                            <td className="px-4 border-b border-gray-500 py-2">1</td>
                                            <td className="px-4 border-b border-gray-500 py-2">John Doe</td>
                                            <td className="px-4 border-b border-gray-500 py-2">John Doe</td>
                                            <td className="px-4 border-b border-gray-500 py-2">john@example.com</td>
                                            <td className="px-4 border-b border-gray-500 py-2">Admin</td>
                                            <td className="px-4 border-b border-gray-500 py-2">Admin</td>
                                            <td className="px-4 border-b border-gray-500 py-2">Admin</td>
                                            <td className="px-4 border-b border-gray-500 py-2">Admin</td>


                                            <td className="px-4 border-b border-gray-500 py-2 text-center">

                                                <button className="text-white p-2 rounded-xl bg-blue-500 mx-4">
                                                    <a href="#">Edit</a>
                                                </button>

                                                <button className="text-white p-2 rounded-xl bg-red-500">
                                                    <a href="#">Delete</a>
                                                </button>
                                            </td>
                                            
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
