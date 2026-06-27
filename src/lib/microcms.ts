import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "6xa8e3o87j",
  apiKey: "YbmkW8FIY1wKqqa4a6OG2Ekn4y9f3dIU82u4",
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
