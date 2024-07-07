import { GeoServiceImpl } from "../services/geo/geo.impl";
import { DINING_AND_DRINKING_FOURSQUARE, OPTIONS_FOURSQUARE, URL_FOURSQUARE } from "../utils/constants";

// Mock para LoggerService
class MockLoggerService {
  error(error: any) {
    // Implementación del mock según sea necesario
  }
}

// Mock para fetch
const mockFetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({
    results: [
      { distance: 100, name: 'Restaurant 1', location: 'Location 1' },
      { distance: 200, name: 'Restaurant 2', location: 'Location 2' },
    ]
  })
});

global.fetch = mockFetch as any;

describe('GeoServiceImpl Tests', () => {
  let geoService: GeoServiceImpl;

  beforeAll(() => {
    const mockLogger = new MockLoggerService() as any;
    geoService = new GeoServiceImpl(mockLogger);
  });

  test('getRestaurantsByCoordinates should fetch restaurants correctly', async () => {
    const lat = 37.7749;
    const lon = -122.4194;

    const places = await geoService.getRestaurantsByCoordinates(lat, lon);

    expect(places).toBeDefined();

    places.forEach(place => {
      expect(place).toHaveProperty('distance');
      expect(place).toHaveProperty('name');
      expect(place).toHaveProperty('location');
    });
  });

  test('getRestaurantsByLocationName should fetch restaurants correctly', async () => {
    const location = 'Bogota';

    const places = await geoService.getRestaurantsByLocationName(location);

    expect(places).toBeDefined();

    // Asserting the structure of each place object
    places.forEach(place => {
      expect(place).toHaveProperty('distance');
      expect(place).toHaveProperty('name');
      expect(place).toHaveProperty('location');
    });
  });
});
