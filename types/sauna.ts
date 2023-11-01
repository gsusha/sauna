import { GalleryData } from '~/types/gallery';

export interface SaunaData {
  id: number;
  name: string;
  description: string;
  address: string;
  phone: string;
  status: string;
  gallery: GalleryData[];
}