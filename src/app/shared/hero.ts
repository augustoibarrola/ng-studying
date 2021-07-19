// https://angular.io/tutorial/toh-pt1#create-a-hero-interface
import {Image} from './image';

export class Hero {
  id: number;
  imageSrc:string;
  name: string;
  alias:string;
  superpower:string;
  weakness:string;
  description:string;
  images: FormData;
}
