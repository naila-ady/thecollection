// sanityClient.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId:'3tebpdg7', // Replace with your project ID
  dataset:'production',        // Or your dataset name
  apiVersion:'2024-01-04',     // Today's date or latest API version
  useCdn:false,                // Disable CDN for real-time updates
  token:'skTzsJyNW1kGGEs8Fr272oyOJxVVt2pgnUx9SETrTHTPngOLaZ5DXGYzjw8P54gzf7VMysyvfoAFNRUzvnUrsC7duH2oOOoMzvjUjaORIUsdVm3kbO7OdmlWAP0DsjA8tIZaH23R2B8EcvhfJaprPxMpiCLEShDBX6LidaZfQ8NwMZMCRsrh',
});