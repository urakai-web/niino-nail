const SERVICE_DOMAIN = "6xa8e3o87j";
const API_KEY = "YbmkW8FIY1wKqqa4a6OG2Ekn4y9f3dIU82u4";
const BASE_URL = `https://${SERVICE_DOMAIN}.microcms.io/api/v1`;

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
  tags: Tag | Tag[];
};

export function getTags(item: GalleryItem): Tag[] {
  if (!item.tags) return [];
  return Array.isArray(item.tags) ? item.tags : [item.tags];
}

type ListResponse<T> = {
  contents: T[];
  totalCount: number;
};

export async function fetchList<T>(endpoint: string, limit = 50): Promise<ListResponse<T>> {
  const res = await fetch(`${BASE_URL}/${endpoint}?limit=${limit}`, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
