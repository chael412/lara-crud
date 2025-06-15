import React, { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const CreateStudent = () => {
    const [data, setData] = useState({
        student_no: "",
        fullname: "",
    });
    const [processing, setProcessing] = useState(false);
    const { errors } = usePage().props;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            await router.post("/post_student", data);
            window.location.href = "/admin/dashboard";
        } catch (err) {
            console.log(err + "system error");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Student</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Student No</label>
                    <input
                        type="text"
                        name="student_no"
                        value={data.student_no}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors?.student_no && (
                        <div className="text-red-500 text-sm">
                            {errors.student_no}
                        </div>
                    )}
                </div>
                <div>
                    <label>Fullname</label>
                    <input
                        type="text"
                        name="fullname"
                        value={data.fullname}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    {errors?.fullname && (
                        <div className="text-red-500 text-sm">
                            {errors.fullname}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {processing ? "Saving..." : "Save"}
                </button>
            </form>
        </div>
    );
};

export default CreateStudent;
