import { createClient } from "microcms-js-sdk";

const serviceDomain = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN || "";
const apiKey = import.meta.env.VITE_MICROCMS_API_KEY || "";

export const client = serviceDomain && apiKey
  ? createClient({ serviceDomain, apiKey })
  : null;

export type Tag = {
  id: string;
  name: string;
};

export type GalleryItem = {
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  description?: string;
  tags: Tag[];
};
