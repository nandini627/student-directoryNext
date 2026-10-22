"use client";

import { useMemo, useState } from "react";
import { students } from "../../lib/data/students";
import Pagination from "../../components/students/Pagination";
import StudentCard from "../../components/students/StudentCard";
import StudentFilters from "../../components/students/StudentFilters";

const ITEMS_PER_PAGE = 4;

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const departmentOptions = useMemo(
    () => Array.from(new Set(students.map((student) => student.department))),
    [],
  );

  const filteredStudents = useMemo(() => {
    const normalizedQuery = search.trim().toLowerCase();

    return students.filter((student) => {
      const matchesQuery =
        !normalizedQuery ||
        student.name.toLowerCase().includes(normalizedQuery) ||
        student.id.toLowerCase().includes(normalizedQuery);

      const matchesDepartment =
        selectedDepartment === "all" || student.department === selectedDepartment;

      return matchesQuery && matchesDepartment;
    });
  }, [search, selectedDepartment]);

  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / ITEMS_PER_PAGE));

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudents.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredStudents]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Directory
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Students</h1>
        </div>
        <p className="text-slate-600">{filteredStudents.length} records</p>
      </div>

      <StudentFilters
        value={search}
        department={selectedDepartment}
        departments={departmentOptions}
        onSearchChange={(nextSearch) => {
          setSearch(nextSearch);
          setCurrentPage(1);
        }}
        onDepartmentChange={(nextDepartment) => {
          setSelectedDepartment(nextDepartment);
          setCurrentPage(1);
        }}
      />

      {currentItems.length > 0 ? (
        <>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {currentItems.map((student) => (
              <li key={student.id}>
                <StudentCard student={student} />
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h2 className="text-xl font-semibold text-slate-900">No students found</h2>
          <p className="mt-2 text-slate-600">
            Try updating your search or selecting a different department.
          </p>
        </div>
      )}
    </div>
  );
}