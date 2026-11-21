import React from "react";

const STATUS_STYLES = {
  Pending: "bg-amber-100 text-amber-800 border-amber-200",
  Confirmed: "bg-sky-100 text-sky-800 border-sky-200",
  CheckedIn: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Cancelled: "bg-rose-100 text-rose-800 border-rose-200",
};

export default function StatusBadge({ status }) {
  const label = status || "Pending";
  const styleClass =
    STATUS_STYLES[label] || "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styleClass}`}
    >
      {label === "CheckedIn" ? "Checked In" : label}
    </span>
  );
}