import { Place } from "../../utils/types";

export interface GeoService {
  getRestaurantsByLocationName(location: string): Promise<Place[]>;
  getRestaurantsByCoordinates(lat: number, lon: number): Promise<Place[]>;
}