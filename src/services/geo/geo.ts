import { Place } from "../../utils/types";

export interface GeoService {
  /**
   * Fetches restaurants from Foursquare based on a location name.
   *
   * @param location The name of the location to search for restaurants.
   * @returns A promise that resolves to an array of `Place` objects representing the restaurants.
   */
  getRestaurantsByLocationName(location: string): Promise<Place[]>;

  /**
   * Fetches restaurants from Foursquare based on provided coordinates.
   *
   * @param lat The latitude coordinate.
   * @param lon The longitude coordinate.
   * @returns A promise that resolves to an array of `Place` objects representing the restaurants.
   */
  getRestaurantsByCoordinates(lat: number, lon: number): Promise<Place[]>;
}