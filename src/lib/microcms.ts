import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

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
