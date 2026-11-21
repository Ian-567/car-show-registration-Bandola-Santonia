import React from "react";

const PAYMENT_STYLES = {
  Paid: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Partial: "bg-amber-100 text-amber-800 border-amber-200",
  Unpaid: "bg-rose-100 text-rose-800 border-rose-200",
};

export default function PaymentBadge({ paymentStatus }) {
  const label = paymentStatus || "Unpaid";
  const styleClass =
    PAYMENT_STYLES[label] || "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styleClass}`}
    >
      {label}
    </span>
  );
}