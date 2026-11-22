import React, { useCallback, useEffect, useState } from "react";
import { getRegistrations, getSummary } from "../api/registrationsApi";
import { useDebounce } from "../hooks/useDebounce";
import KpiCards from "../components/KpiCards";
import RegistrationFilters from "../components/RegistrationFilters";
import RegistrationTable from "../components/RegistrationTable";
import Pagination from "../components/Pagination";

export default function RegistrationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [items, setItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [summary, setSummary] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [listData, summaryData] = await Promise.all([
        getRegistrations({
          participantName: debouncedSearch,
          type: typeFilter,
          status: statusFilter,
          page,
          pageSize,
        }),
        getSummary(),
      ]);

      setItems(Array.isArray(listData?.items) ? listData.items : []);
      setTotalCount(Number(listData?.totalCount ?? 0));
      setTotalPages(Math.max(1, Number(listData?.totalPages ?? 1)));
      setSummary(summaryData || null);
    } catch (err) {
      setError(err?.message || "Cannot reach the API...");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch, typeFilter, statusFilter, page, pageSize]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleTypeChange = (value) => {
    setTypeFilter(value);
    setPage(1);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setTypeFilter("All");
    setStatusFilter("All");
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Car Show 2027 — Registrations
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Sorsogon City Coliseum event staff dashboard for registrations and payments.
          </p>
        </header>

        <KpiCards summary={summary} loading={loading} />

        <RegistrationFilters
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          type={typeFilter}
          onTypeChange={handleTypeChange}
          status={statusFilter}
          onStatusChange={handleStatusChange}
          onClear={handleClearFilters}
          disabled={loading}
        />

        <RegistrationTable
          items={items}
          loading={loading}
          error={error}
          onRetry={loadDashboard}
          onClearFilters={handleClearFilters}
        />

        <Pagination
          page={page}
          pageSize={pageSize}
          totalCount={totalCount}
          totalPages={totalPages}
          loading={loading}
          onPageChange={setPage}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </main>
  );
}