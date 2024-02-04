import { getHubs } from '@/services/getHubs';
import { describe, expect, it, vi } from 'vitest';

describe('getHubs', () => {
  it('should return a promise that resolves to an array of HubT objects when the API call is successful', () => {
    return getHubs().then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('uuid');
      expect(result[0]).toHaveProperty('state');
      expect(result[0]).toHaveProperty('category');
      expect(result[0]).toHaveProperty('stage');
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('displayName');
      expect(result[0]).toHaveProperty('slug');
      expect(result[0]).toHaveProperty('type');
      expect(result[0]).toHaveProperty('location');
      expect(result[0]).toHaveProperty('recoveredQuantity');
      expect(result[0]).toHaveProperty('recoveredQuantityUnit');
      expect(result[0]).toHaveProperty('totalRecoveredQuantity');
      expect(result[0]).toHaveProperty('collectionAndSortingParagraph');
      expect(result[0]).toHaveProperty('hubUnassignedRecoveryList');
      expect(result[0]).toHaveProperty('parentHubName');
      expect(result[0]).toHaveProperty('logo');
      expect(result[0]).toHaveProperty('cardDescription');
      expect(result[0]).toHaveProperty('cardImage');
      expect(result[0]).toHaveProperty('thankYouNote');
      expect(result[0]).toHaveProperty('portfolioAssignedQuantityPercentage');
      expect(result[0]).toHaveProperty('unassignedQuantityPercentage');
      expect(result[0]).toHaveProperty('unassignedQuantityTotal');
      expect(result[0]).toHaveProperty('assignable');
      expect(result[0]).toHaveProperty('formattedRecoveredQuantity');
      expect(result[0]).toHaveProperty('formattedTotalRecoveredQuantity');
    });
  });

  it('should handle HTTP response status codes 404', () => {
    globalThis.fetch = vi
      .fn()
      .mockImplementation(() => Promise.resolve({ ok: false, status: 404 }));

    return getHubs().catch((error) => {
      expect(error).toBeDefined();
    });
  });

  it('should resolve the promise with an empty array when the API returns an empty response', () => {
    globalThis.fetch = vi
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
      );

    return getHubs().then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  it('should reject the promise when the API call fails', () => {
    // Mock the fetch function to throw an error
    globalThis.fetch = vi
      .fn()
      .mockImplementation(() => Promise.reject(new Error('API call failed')));

    return getHubs().catch((error) => {
      expect(error).toBeDefined();
    });
  });

  it('should resolve the promise with an empty array when the API returns a response with other data', () => {
    globalThis.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    return getHubs().then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });
});
