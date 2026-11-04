import { Employee } from "@/types/Employee";

export async function shareCard(employee: Employee, id: string) {
  const url = `${typeof window !== "undefined" ? window.location.origin : ""}/landing/${id}`;
  const shareData = {
    title: `Tarjeta virtual de ${employee.fullName}`,
    text: `${employee.fullName} - ${employee.rol} en Edelco SAS`,
    url,
  };

  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share(shareData);
      return { ok: true, copied: false };
    } catch (err) {
      if (err instanceof Error && err.name !== "AbortError") {
        return copyToClipboard(url);
      }
      return { ok: false, copied: false };
    }
  }

  return copyToClipboard(url);
}

export async function copyToClipboard(text: string) {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return { ok: true, copied: true };
    }
    return { ok: false, copied: false };
  } catch {
    return { ok: false, copied: false };
  }
}
