import React from "react";

function Dashboard({ students }) {
    console.log(students);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Student No</th>
                            <th className="py-2 px-4 border-b">Full Name</th>
                            <th className="py-2 px-4 border-b">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">
                                    {student.id}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {student.student_no}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {student.fullname}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {student.created_at ?? "N/A"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
