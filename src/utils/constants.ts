export const API_KEY_FOURSQUARE = process.env.FOURSQUARE_API_KEY;
export const URL_FOURSQUARE = 'https://api.foursquare.com/v3/places/';
export const DINING_AND_DRINKING_FOURSQUARE = 13000;
export const OPTIONS_FOURSQUARE = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY_FOURSQUARE || '',
  }
};

export const JWT_SECRET = process.env.JWT_SECRET || '';
export const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
