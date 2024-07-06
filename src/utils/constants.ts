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

export const DB_HOST = process.env.DB_HOST || '';
export const DB_USERNAME = process.env.DB_USERNAME || ''; 
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_DATABASE = process.env.DB_DATABASE || '';
