import React from "react";
import KpiCard from "./KpiCard";

function formatNumber(val) {
  return Number(val ?? 0).toLocaleString("en-US");
}

function formatPhp(val) {
  return `₱${Number(val ?? 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function KpiCards({ summary, loading }) {
  const totalFees = Number(summary?.totalFees ?? 0);
  const totalPayments = Number(summary?.totalPayments ?? 0);
  const collectionRate =
    totalFees > 0 ? ((totalPayments / totalFees) * 100).toFixed(1) : "0.0";

  const cards = [
    {
      title: "Total Registrations",
      value: loading ? "..." : formatNumber(summary?.totalRegistrations),
      subtitle: `${formatNumber(summary?.pending)} Pending · ${formatNumber(summary?.cancelled)} Cancelled`,
    },
    {
      title: "Total Payments",
      value: loading ? "..." : formatPhp(summary?.totalPayments),
      subtitle: `${collectionRate}% collection rate`,
    },
    {
      title: "Uncollected Payments",
      value: loading ? "..." : formatPhp(summary?.uncollectedPayments),
      subtitle: `Out of ${formatPhp(summary?.totalFees)} total fees`,
    },
    {
      title: "Confirmed",
      value: loading ? "..." : formatNumber(summary?.confirmed),
      subtitle: "Confirmed entries",
    },
    {
      title: "Checked In",
      value: loading ? "..." : formatNumber(summary?.checkedIn),
      subtitle: "Arrived at coliseum",
    },
  ];

  return (
    <section
      aria-label="Key Performance Indicators"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
    >
      {cards.map((card) => (
        <KpiCard
          key={card.title}
          title={card.title}
          value={card.value}
          subtitle={card.subtitle}
        />
      ))}
    </section>
  );
}