import { Employee } from "@/types/Employee";

export function generateVCard(employee: Employee): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${employee.lastName};${employee.firstName};;;`,
    `FN:${employee.fullName}`,
    `ORG:Edelco SAS`,
    `TITLE:${employee.rol}`,
    `TEL;TYPE=CELL:${employee.phoneCard}`,
    `EMAIL:${employee.email}`,
    employee.website ? `URL:${employee.website}` : null,
    "END:VCARD",
  ];
  return lines.filter(Boolean).join("\n");
}

export function downloadVCard(employee: Employee) {
  const vCard = generateVCard(employee);
  const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${employee.fullName.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
