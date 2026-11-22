const SAMPLE_BASE = [
  { name: "Juan Dela Cruz", contact: "09171234567", email: "juan@example.com", address: "123 Rizal St., Naga City", car: "Toyota Supra MK4", plate: "ABC 1234", type: "Competitor", status: "Confirmed", fee: 2500, paid: 1000 },
  { name: "Maria Santos", contact: "09182345678", email: "maria@example.com", address: "45 Magsaysay Ave., Legazpi City", car: "Honda Civic Type R", plate: "DEF 5678", type: "Exhibitor", status: "CheckedIn", fee: 3500, paid: 3500 },
  { name: "Carlo Mendoza", contact: "09193456789", email: "carlo@example.com", address: "88 Quezon St., Sorsogon City", car: "Nissan GT-R R35", plate: "GHI 9012", type: "VIP", status: "Confirmed", fee: 5000, paid: 5000 },
  { name: "Angela Reyes", contact: "09204567890", email: "angela@example.com", address: "12 Bonifacio St., Iriga City", car: "Mazda RX-7 FD", plate: "JKL 3456", type: "Competitor", status: "Pending", fee: 2500, paid: 0 },
  { name: "Paolo Bautista", contact: "09215678901", email: "paolo@example.com", address: "77 Peñaranda St., Daraga", car: "Mitsubishi Lancer Evo IX", plate: "MNO 7890", type: "Competitor", status: "CheckedIn", fee: 2500, paid: 2500 },
  { name: "Nicole Ramos", contact: "09226789012", email: "nicole@example.com", address: "301 Gen. Luna St., Naga City", car: "Subaru WRX STI", plate: "PQR 2468", type: "Exhibitor", status: "Confirmed", fee: 3500, paid: 2000 },
  { name: "Marco Villanueva", contact: "09237890123", email: "marco@example.com", address: "54 Burgos St., Bulan", car: "Ford Mustang GT", plate: "STU 1357", type: "VIP", status: "CheckedIn", fee: 5000, paid: 5000 },
  { name: "Katrina Aquino", contact: "09248901234", email: "katrina@example.com", address: "90 Taft Ave., Tabaco City", car: "Toyota GR86", plate: "VWX 9753", type: "Exhibitor", status: "Pending", fee: 3500, paid: 0 },
  { name: "Ramon Castillo", contact: "09259012345", email: "ramon@example.com", address: "18 Lapu-Lapu St., Gubat", car: "BMW M3 E46", plate: "YZA 8642", type: "Competitor", status: "Cancelled", fee: 2500, paid: 0 },
  { name: "Sofia Navarro", contact: "09260123456", email: "sofia@example.com", address: "62 Mabini St., Matnog", car: "Porsche 911 Carrera", plate: "BCD 4321", type: "VIP", status: "Confirmed", fee: 5000, paid: 2500 },
  { name: "Dexter Cruz", contact: "09271112233", email: "dexter@example.com", address: "105 Sampaguita St., Pilar", car: "Honda S2000", plate: "EFG 6789", type: "Competitor", status: "CheckedIn", fee: 2500, paid: 2500 },
  { name: "Camille Torres", contact: "09282223344", email: "camille@example.com", address: "29 Del Pilar St., Castilla", car: "Audi RS3", plate: "HIJ 1029", type: "Exhibitor", status: "Confirmed", fee: 3500, paid: 3500 },
  { name: "Jayson Rivera", contact: "09293334455", email: "jayson@example.com", address: "14 Osmeña St., Irosin", car: "Nissan Silvia S15", plate: "KLM 3847", type: "Competitor", status: "Pending", fee: 2500, paid: 1250 },
  { name: "Patricia Gomez", contact: "09304445566", email: "patricia@example.com", address: "73 Quirino Ave., Ligao City", car: "Mercedes-AMG C63", plate: "NOP 5647", type: "VIP", status: "Confirmed", fee: 5000, paid: 5000 },
  { name: "Bryan Morales", contact: "09315556677", email: "bryan@example.com", address: "84 Roxas St., Bacon", car: "Hyundai Elantra N", plate: "QRS 7485", type: "Exhibitor", status: "CheckedIn", fee: 3500, paid: 3500 },
  { name: "Clarisse Flores", contact: "09326667788", email: "clarisse@example.com", address: "19 Gomez St., Casiguran", car: "Volkswagen Golf GTI", plate: "TUV 9182", type: "Competitor", status: "Confirmed", fee: 2500, paid: 2500 },
  { name: "Jerome Valdez", contact: "09337778899", email: "jerome@example.com", address: "41 Zamora St., Juban", car: "Chevrolet Camaro ZL1", plate: "WXY 3049", type: "VIP", status: "Pending", fee: 5000, paid: 0 },
  { name: "Bianca Garcia", contact: "09348889900", email: "bianca@example.com", address: "67 Laurel St., Prieto Diaz", car: "Toyota Corolla Levin AE86", plate: "ZAB 5829", type: "Exhibitor", status: "Cancelled", fee: 3500, paid: 0 },
  { name: "Kenneth Lim", contact: "09359990011", email: "kenneth@example.com", address: "112 Aguinaldo St., Donsol", car: "Lexus LC 500", plate: "CDE 7192", type: "VIP", status: "CheckedIn", fee: 5000, paid: 3000 },
  { name: "Daphne Ong", contact: "09361011121", email: "daphne@example.com", address: "55 Luna St., Barcelona", car: "Mini John Cooper Works", plate: "FGH 8374", type: "Exhibitor", status: "Confirmed", fee: 3500, paid: 3500 },
  { name: "Francis Tan", contact: "09372022232", email: "francis@example.com", address: "98 Burgos St., Magallanes", car: "Subaru BRZ", plate: "IJK 9465", type: "Competitor", status: "Pending", fee: 2500, paid: 0 },
  { name: "Hanna Mercado", contact: "09383033343", email: "hanna@example.com", address: "23 Mabini St., Sta. Magdalena", car: "Mazda MX-5 Miata", plate: "LMN 1593", type: "Exhibitor", status: "Confirmed", fee: 3500, paid: 1750 },
  { name: "Kevin Pascual", contact: "09394044454", email: "kevin@example.com", address: "76 Rizal St., Matnog", car: "Dodge Charger R/T", plate: "OPQ 2684", type: "Competitor", status: "Cancelled", fee: 2500, paid: 0 },
  { name: "Lorraine Castro", contact: "09455055565", email: "lorraine@example.com", address: "130 Quezon St., Sorsogon City", car: "BMW M4 Competition", plate: "RST 3795", type: "VIP", status: "Confirmed", fee: 5000, paid: 5000 },
  { name: "Nathaniel Soriano", contact: "09466066676", email: "nathaniel@example.com", address: "8 Quezon Ave., Legazpi City", car: "Honda Integra Type R DC2", plate: "UVW 4806", type: "Competitor", status: "Pending", fee: 2500, paid: 1000 },
];

function computePaymentStatus(fee, paid) {
  if (paid <= 0) return "Unpaid";
  if (paid < fee) return "Partial";
  return "Paid";
}

export const SAMPLE_REGISTRATIONS = SAMPLE_BASE.map((item, idx) => {
  const num = String(idx + 1).padStart(4, "0");
  const day = String((idx % 28) + 1).padStart(2, "0");
  const hour = String(8 + (idx % 10)).padStart(2, "0");
  return {
    id: `3f2c9a1e-2027-4b8a-9c10-${String(idx + 1).padStart(12, "0")}`,
    registrationNumber: `CS27-${num}`,
    registrationDate: `2027-02-${day}T${hour}:30:00Z`,
    participantName: item.name,
    contactNumber: item.contact,
    email: item.email,
    address: item.address,
    carMakeModel: item.car,
    plateNumber: item.plate,
    registrationType: item.type,
    status: item.status,
    registrationFee: item.fee,
    amountPaid: item.paid,
    paymentStatus: computePaymentStatus(item.fee, item.paid),
  };
});

export async function getRegistrations({
  participantName = "",
  type = "",
  status = "",
  page = 1,
  pageSize = 10,
} = {}) {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const search = participantName.trim().toLowerCase();
  const filtered = SAMPLE_REGISTRATIONS.filter((row) => {
    const matchesName =
      !search || row.participantName.toLowerCase().includes(search);
    const matchesType = !type || type === "All" || row.registrationType === type;
    const matchesStatus =
      !status || status === "All" || row.status === status;
    return matchesName && matchesType && matchesStatus;
  });

  const safePageSize = Math.max(1, Number(pageSize) || 10);
  const totalCount = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / safePageSize));
  const safePage = Math.min(Math.max(1, Number(page) || 1), totalPages);
  const startIndex = (safePage - 1) * safePageSize;
  const items = filtered.slice(startIndex, startIndex + safePageSize);

  return {
    items,
    page: safePage,
    pageSize: safePageSize,
    totalCount,
    totalPages,
  };
}

export async function getSummary() {
  await new Promise((resolve) => setTimeout(resolve, 200));

  const totalRegistrations = SAMPLE_REGISTRATIONS.length;
  const confirmed = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "Confirmed"
  ).length;
  const checkedIn = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "CheckedIn"
  ).length;
  const pending = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "Pending"
  ).length;
  const cancelled = SAMPLE_REGISTRATIONS.filter(
    (r) => r.status === "Cancelled"
  ).length;
  const totalFees = SAMPLE_REGISTRATIONS.reduce(
    (sum, r) => sum + Number(r.registrationFee || 0),
    0
  );
  const totalPayments = SAMPLE_REGISTRATIONS.reduce(
    (sum, r) => sum + Number(r.amountPaid || 0),
    0
  );
  const uncollectedPayments = Math.max(0, totalFees - totalPayments);

  return {
    totalRegistrations,
    confirmed,
    checkedIn,
    pending,
    cancelled,
    totalFees,
    totalPayments,
    uncollectedPayments,
  };
}