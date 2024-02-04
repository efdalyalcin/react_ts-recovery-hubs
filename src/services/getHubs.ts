import { HubT } from '@/types/hubs.type';

const HUBS_API_URL = 'https://marketplace-demo.cleanhub.com/api/public/hubs';

export const getHubs = () => {
  return new Promise<HubT[]>((resolve, reject) => {
    fetch(HUBS_API_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        // Check if the data is an array and has at least one valid item
        if (Array.isArray(res) && res.length > 0) {
          resolve(res);
        } else {
          resolve([]);
        }
      })
      .catch((error) => reject(error));
  });
};
