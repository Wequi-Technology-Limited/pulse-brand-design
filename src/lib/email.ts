export type ContactMessage = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

const DEFAULT_ENDPOINT = "/api/send-email";

export async function sendContactEmail(payload: ContactMessage) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || DEFAULT_ENDPOINT;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let errorText = "Unable to send message";
    try {
      const data = await response.json();
      if (data?.error) errorText = data.error;
    } catch {
      // ignore parse errors; fall back to generic message
    }
    throw new Error(errorText);
  }
}
