import React from "react";
import StatusBadge from "./StatusBadge";
import PaymentBadge from "./PaymentBadge";

function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function formatPhp(amount) {
  return `₱${Number(amount ?? 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function RegistrationTable({
  items = [],
  loading = false,
  error = "",
  onRetry,
  onClearFilters,
}) {
  if (loading) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-600">
          Loading registrations...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-rose-800">
          Cannot reach the API...
        </p>
        <p className="mt-1 text-xs text-rose-700">{error}</p>
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-4 rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-700"
          >
            Try again
          </button>
        ) : null}
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-slate-800">
          No registrations match your filters
        </p>
        {onClearFilters ? (
          <button
            type="button"
            onClick={onClearFilters}
            className="mt-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Clear filters
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600">
          <tr>
            <th className="px-4 py-3">Registration No.</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Participant</th>
            <th className="px-4 py-3">Car</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-right">Fee / Paid</th>
            <th className="px-4 py-3">Payment</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((row) => (
            <tr key={row.id || row.registrationNumber} className="hover:bg-slate-50/80">
              <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">
                {row.registrationNumber}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                {formatDate(row.registrationDate)}
              </td>
              <td className="px-4 py-3">
                <div className="font-medium text-slate-900">
                  {row.participantName}
                </div>
                <div className="text-xs text-slate-500">
                  {row.contactNumber || row.email}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="font-medium text-slate-900">
                  {row.carMakeModel}
                </div>
                <div className="text-xs text-slate-500">{row.plateNumber}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                {row.registrationType}
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                <StatusBadge status={row.status} />
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-slate-800">
                {formatPhp(row.registrationFee)} / {formatPhp(row.amountPaid)}
              </td>
              <td className="whitespace-nowrap px-4 py-3">
                <PaymentBadge paymentStatus={row.paymentStatus} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}