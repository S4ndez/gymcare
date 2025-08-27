// src/utils/maintenance.js

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function addMonths(date, months) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

export function computeNextMaintenanceDate(fromDate = new Date(), schedule) {
  switch (schedule) {
    case "WEEKLY":
      return addDays(fromDate, 7);
    case "MONTHLY":
      return addMonths(fromDate, 1);
    case "QUARTERLY":
      return addMonths(fromDate, 3);
    case "HALF_YEARLY":
      return addMonths(fromDate, 6);
    case "YEARLY":
      return addMonths(fromDate, 12);
    default:
      return null; // if unknown schedule
  }
}
