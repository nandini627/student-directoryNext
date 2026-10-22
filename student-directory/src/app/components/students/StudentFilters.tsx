"use client";

import type { ChangeEvent } from "react";

export default function StudentFilters({
  value,
  department,
  departments,
  onSearchChange,
  onDepartmentChange,
}: {
  value: string;
  department: string;
  departments: string[];
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
}) {
  return (
    <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
      <label className="flex-1">
        <span className="mb-2 block text-sm font-medium text-slate-700">Search</span>
        <input
          type="search"
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onSearchChange(event.target.value)
          }
          placeholder="Search by name or student ID"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
        />
      </label>

      <label className="md:w-64">
        <span className="mb-2 block text-sm font-medium text-slate-700">Department</span>
        <select
          value={department}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            onDepartmentChange(event.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white"
        >
          <option value="all">All departments</option>
          {departments.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
