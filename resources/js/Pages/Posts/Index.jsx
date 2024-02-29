import React from 'react';
// import Authenticated from '@/Layouts/Authenticated';
import { Head, usePage } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';
  
export default function PostDashboard(props) {
    const { posts } = usePage().props
  
    return (
            <><Head title="Laravel 9 React JS Pagination Example with Vite - ItSolutionStuff.com" /><div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">

                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 w-20">No.</th>
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts?.data.map(({ id, title, body }) => (
                                    <tr key={id}>
                                        <td className="border px-4 py-2">{id}</td>
                                        <td className="border px-4 py-2">{title}</td>
                                        <td className="border px-4 py-2">{body}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Pagination class="mt-6" links={posts?.links} />

                    </div>
                </div>
            </div>
        </div></>
    );
}