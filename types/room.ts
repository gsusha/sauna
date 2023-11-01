import { GalleryData } from '~/types/gallery';

export interface RoomData {
  id: number;
  name: string;
  description: string;
  capacity: number;
  activity: boolean;
  gallery: GalleryData[];
}
