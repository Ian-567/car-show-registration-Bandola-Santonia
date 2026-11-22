import {
  getRegistrations as getSampleRegistrations,
  getSummary as getSampleSummary,
} from "./sample-data";

const BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/+$/, "");
const USE_SAMPLE_DATA =
  String(import.meta.env.VITE_USE_SAMPLE_DATA || "").toLowerCase() === "true";

async function parseErrorMessage(response, fallbackMessage) {
  try {
    const body = await response.json();
    if (body?.errors && typeof body.errors === "object") {
      const messages = Object.values(body.errors).flat().filter(Boolean);
      if (messages.length > 0) return messages.join(" ");
    }
    if (body?.detail) return body.detail;
    if (body?.title) return body.title;
  } catch {
    // Ignore non-JSON error body
  }
  return `${fallbackMessage} (HTTP ${response.status})`;
}

export async function getRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  if (USE_SAMPLE_DATA || !BASE_URL) {
    return getSampleRegistrations({
      participantName,
      type,
      status,
      page,
      pageSize,
    });
  }

  const params = new URLSearchParams();
  if (participantName && participantName.trim()) {
    params.set("participantName", participantName.trim());
  }
  if (type && type !== "All") {
    params.set("type", type);
  }
  if (status && status !== "All") {
    params.set("status", status);
  }
  params.set("page", String(page));
  params.set("pageSize", String(pageSize));

  const response = await fetch(
    `${BASE_URL}/api/registrations?${params.toString()}`
  );
  if (!response.ok) {
    const message = await parseErrorMessage(
      response,
      "Cannot reach the API to load registrations."
    );
    throw new Error(message);
  }

  return response.json();
}

export async function getSummary() {
  if (USE_SAMPLE_DATA || !BASE_URL) {
    return getSampleSummary();
  }

  const response = await fetch(`${BASE_URL}/api/registrations/summary`);
  if (!response.ok) {
    const message = await parseErrorMessage(
      response,
      "Cannot reach the API to load summary totals."
    );
    throw new Error(message);
  }

  return response.json();
}