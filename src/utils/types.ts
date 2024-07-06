export type Location = {
  address: string;
  country: string;
  formatted_address: string;
  locality: string;
  region: string;
}

export type Place = {
  distance: number,
  name: string,
  location: Location,
}
