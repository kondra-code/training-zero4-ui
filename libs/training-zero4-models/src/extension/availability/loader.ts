import { KosLog } from '@kosdev-code/kos-ui-sdk';
import type {
  BrandsetBeverageData,
  BrandsetUIData,
} from '../../types/brandset';

const BEVERAGE_UI_DATA_URL = 'http://localhost:8081/system/brandset/ui.json';

export interface BeverageContext {
  beverages: Record<string, BrandsetBeverageData>;
}

const DEFAULT_CONTEXT: BeverageContext = {
  beverages: {},
};

/**
 * Loads the beverage context from the brandset ui.json file.
 * @returns {Promise<BeverageContext>} The beverage context that can be used in the
 * mapper
 */

export const beverageContextLoader = async (): Promise<BeverageContext> => {
  // fetch the ui.json file from the brandset
  const response = await fetch(BEVERAGE_UI_DATA_URL);
  if (response.status !== 200) {
    KosLog.error(
      'Failed to load beverage context. Returning the default context.'
    );
    return DEFAULT_CONTEXT;
  }

  const json: BrandsetUIData | null = await response.json();

  // normalize the data into a map of beverage data to make
  // it easier for random access in the mapping
  const beverages =
    json?.beverages?.reduce((acc, beverage) => {
      acc[beverage.id] = beverage;
      return acc;
    }, {} as Record<string, BrandsetBeverageData>) || {};
  return { beverages };
};
