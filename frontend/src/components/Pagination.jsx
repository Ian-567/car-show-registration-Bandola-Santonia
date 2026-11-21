import React from "react";

const PAGE_SIZES = [5, 10, 20];

export default function Pagination({
  page = 1,
  pageSize = 10,
  totalCount = 0,
  totalPages = 1,
  loading = false,
  onPageChange,
  onPageSizeChange,
}) {
  const startItem = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalCount);
  const pageNumbers = Array.from({ length: Math.max(1, totalPages) }, (_, idx) => idx + 1);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm text-slate-600">
        Showing <span className="font-semibold text-slate-900">{startItem}-{endItem}</span> of{" "}
        <span className="font-semibold text-slate-900">{totalCount}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label htmlFor="page-size" className="text-xs font-medium text-slate-600">
          Per page
        </label>
        <select
          id="page-size"
          value={pageSize}
          disabled={loading}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none disabled:bg-slate-100"
        >
          {PAGE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={loading || page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Prev
        </button>

        {pageNumbers.map((num) => {
          const isActive = num === page;
          return (
            <button
              key={num}
              type="button"
              disabled={loading}
              onClick={() => onPageChange(num)}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition ${
                isActive
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              } disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {num}
            </button>
          );
        })}

        <button
          type="button"
          disabled={loading || page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}