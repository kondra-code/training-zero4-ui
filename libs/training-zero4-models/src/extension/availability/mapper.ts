import type { NozzleServices } from '@kosdev-code/kos-dispense-sdk';
import type { BrandsetBeverageData } from '../../types/brandset';
import type { TrainingBeverage } from '../../types/training-zero4-models';
import type { BeverageContext } from './loader';

// transform the icon url into a fully qualified url
const extractIconUrl = (beverageData?: BrandsetBeverageData): string => {
  if (!beverageData) {
    return '';
  }
  return encodeURI(`http://localhost:8081${beverageData.icon}`);
};

const extractBeverageName = (
  beverageData?: BrandsetBeverageData
): string | null => {
  if (!beverageData) {
    return null;
  }
  return beverageData.name;
};

const extractColors = (beverageData?: BrandsetBeverageData) => {
  if (!beverageData) {
    return { primary: 'lightblue', text: 'black' };
  }
  return beverageData.colors;
};
export const trainingBeverageDataMapper = async (
  data: NozzleServices.BeverageResponse,
  context: BeverageContext
): Promise<TrainingBeverage> => {
  const id = data.id;
  const beverageData = context.beverages[id];
  const iconUrl = extractIconUrl(beverageData);
  const name = extractBeverageName(beverageData) ?? data.note ?? 'Unknown';
  const colors = extractColors(beverageData);
  return {
    name,
    colors,
    icon: iconUrl,
  };
};
