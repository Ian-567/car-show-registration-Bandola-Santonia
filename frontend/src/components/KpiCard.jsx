import React from "react";

export default function KpiCard({ title, value, subtitle, accentClass = "" }) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 ${accentClass}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      {subtitle ? (
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      ) : null}
    </div>
  );
}