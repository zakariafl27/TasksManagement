import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function Projects({ projects }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl capitalize font-bold leading-tight text-gray-950">
                        projects
                    </h2>

                    <button className='text-white capitalize bg-green-500 p-2 rounded'>
                        <a href="">add new</a>
                    </button>
                </div>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-slate-950 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">ID</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Images</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Name</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Status</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Create Date</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Due Date</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Created By</th>
                                            <th className="border-b-2 border-gray-500 uppercase px-4 py-2 text-left">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {projects.map((project) => (
                                            <tr key={project.id}>
                                                <td className="border-b px-4 py-2">{project.id}</td>
                                                <td className="border-b px-4 py-2">
                                                    {project.image_path ? (
                                                        <img src={`/storage/${project.image_path}`} alt="Project Image" className="w-16 h-16 object-cover" />
                                                    ) : (
                                                        <span>No Image</span>
                                                    )}
                                                </td>
                                                <td className="border-b px-4 py-2">{project.name}</td>
                                                <td className="border-b px-4 py-2">{project.status}</td>
                                                <td className="border-b px-4 py-2">{new Date(project.created_at).toLocaleDateString()}</td>
                                                <td className="border-b px-4 py-2">{project.due_date ? new Date(project.due_date).toLocaleDateString() : 'No due date'}</td>
                                                <td className="border-b px-4 py-2">{project.creator?.name || 'Unknown'}</td>
                                                <td className="border-b px-4 py-2">
                                                    <a href={`/project/edit/${project.id}`} className="text-blue-500">Edit</a> |
                                                    <form action={`/project/destroy/${project.id}`} method="POST" style={{ display: 'inline' }}>
                                                        <button type="submit" className="text-red-500">Delete</button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
