import { DINING_AND_DRINKING_FOURSQUARE, OPTIONS_FOURSQUARE, URL_FOURSQUARE } from "../../utils/constants";
import { GeoService } from "./geo.impl";
import fetch from 'node-fetch';
import { isArray, map } from 'lodash';
import { Place } from "../../utils/types";
import { LoggerService } from "../logger/logger";
import loggerServiceImpl from "../logger/logger.impl";

class GeoServiceImpl implements GeoService {
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  async getRestaurantsByCoordinates(lat: number, lon: number): Promise<Place[]> {
    const url = `${URL_FOURSQUARE}search?ll=${lat}%2C${lon}&categories=${DINING_AND_DRINKING_FOURSQUARE}`;
    return fetch(url, OPTIONS_FOURSQUARE)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        if (isArray(json?.results)) {
          const places = json?.results;
          return map(
            places,
            (place) => ({
              distance: place.distance,
              name: place.name,
              location: place.location,
            })
          )
        }
        return [];
      })
      .catch(err => {
        this.logger.error(err)
        return [];
      });
  }

  async getRestaurantsByLocationName(location: string): Promise<Place[]> {
    const url = `${URL_FOURSQUARE}search?query=${location}&categories=${DINING_AND_DRINKING_FOURSQUARE}`;
    return fetch(url, OPTIONS_FOURSQUARE)
      .then(res => res.json())
      .then(json => {
        if (isArray(json?.results)) {
          const places = json?.results;
          return map(
            places,
            (place) => ({
              distance: place.distance,
              name: place.name,
              location: place.location,
            })
          )
        }
        return [];
      })
      .catch(err => {
        this.logger.error(err)
        return [];
      });
  }
}

const geoService = new GeoServiceImpl(
  loggerServiceImpl,
);

export default geoService;
