// This interface defines the basic properties of a city
// Used as a base structure for city data throughout the application
export interface BaseCity{
  // Name of the city
  name: string;
  // State/province where the city is located
  state: string;
  // Country code where the city is located
  country: string;
  // Geographical latitude coordinate
  lat: number;
  // Geographical longitude coordinate  
  lon: number;
}