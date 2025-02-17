import { Airtable } from "airtable-ofetch";

export const airtableClient = new Airtable({
  apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
}).base("appCZbt6cXs0oldYt");

export * from "airtable-ofetch";
