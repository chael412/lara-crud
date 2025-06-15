<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function postStudent(Request $request)
    {
        $validated = $request->validate([
            'student_no' => 'required|string|max:255|unique:students,student_no',
            'fullname'   => 'required|string|max:255',
        ]);

        try {
            Student::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Student created successfully!',
            ], 200);
        } catch (\Exception $e) {

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while creating the student.',
            ], 500);
        }
    }

    public function createForm()
    {
        return Inertia::render('Admin/CreateStudent');
    }


    public function getStudent()
    {
        $students = Student::all();

        return Inertia::render('Admin/Dashboard', [
            'students' => $students,
        ]);
    }











    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        //
    }
}
