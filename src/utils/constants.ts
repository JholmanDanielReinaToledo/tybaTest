/**
 * API Key for Foursquare API access (Retrieved from environment variable).
 */
export const API_KEY_FOURSQUARE = process.env.FOURSQUARE_API_KEY;

/**
 * Base URL for Foursquare Places API.
 */
export const URL_FOURSQUARE = 'https://api.foursquare.com/v3/places/';

/**
 * Foursquare category ID for dining and drinking venues.
 */
export const DINING_AND_DRINKING_FOURSQUARE = 13000;

/**
 * Request options for Foursquare API calls.
 */
export const OPTIONS_FOURSQUARE = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY_FOURSQUARE || '',
  }
};

/**
 * Secret key used for signing JWT tokens (Retrieved from environment variable).
 */
export const JWT_SECRET = process.env.JWT_SECRET || '';

/**
 * Number of salt rounds used for password hashing (Retrieved from environment variable, defaults to 10).
 */
export const SALT_ROUNDS = process.env.SALT_ROUNDS || '10';

/**
 * Database host address (Retrieved from environment variable).
 */
export const DB_HOST = process.env.DB_HOST || '';

/**
 * Database username (Retrieved from environment variable).
 */
export const DB_USERNAME = process.env.DB_USERNAME || '';

/**
 * Database password (Retrieved from environment variable).
 * **Note:** Consider storing this securely, not directly in environment variables.
 */
export const DB_PASSWORD = process.env.DB_PASSWORD || '';

/**
 * Database name (Retrieved from environment variable).
 */
export const DB_DATABASE = process.env.DB_DATABASE || '';

/**
 * Database port number (Retrieved from environment variable, defaults to 0).
 */
export const DB_PORT = Number(process.env.DB_PORT) || 0;

/**
 * Server port number (Retrieved from environment variable, defaults to 3000).
 */
export const SERVER_PORT = Number(process.env.PORT) || 3000;