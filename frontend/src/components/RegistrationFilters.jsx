import React from "react";

const REGISTRATION_TYPES = ["All", "Exhibitor", "Competitor", "VIP"];
const REGISTRATION_STATUSES = [
  "All",
  "Pending",
  "Confirmed",
  "CheckedIn",
  "Cancelled",
];

export default function RegistrationFilters({
  searchTerm,
  onSearchChange,
  type,
  onTypeChange,
  status,
  onStatusChange,
  onClear,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-end md:justify-between">
      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <label
            htmlFor="search-participant"
            className="block text-xs font-medium text-slate-700"
          >
            Participant Name
          </label>
          <input
            id="search-participant"
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search participant name..."
            disabled={disabled}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-slate-100"
          />
        </div>

        <div>
          <label
            htmlFor="filter-type"
            className="block text-xs font-medium text-slate-700"
          >
            Registration Type
          </label>
          <select
            id="filter-type"
            value={type}
            onChange={(e) => onTypeChange(e.target.value)}
            disabled={disabled}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-slate-100"
          >
            {REGISTRATION_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-status"
            className="block text-xs font-medium text-slate-700"
          >
            Status
          </label>
          <select
            id="filter-status"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            disabled={disabled}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:bg-slate-100"
          >
            {REGISTRATION_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={onClear}
        disabled={disabled}
        className="rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400/30 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Clear filters
      </button>
    </div>
  );
}