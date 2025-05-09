import {
  DISPENSE_GROUP_BEVERAGE,
  initializeCuiKit,
} from '@kosdev-code/kos-dispense-sdk';
import type { TrainingBeverage } from '@training-zero4/training-zero4-models';

const [useCuiKitContext, CuiKit] = initializeCuiKit<any, TrainingBeverage, any>(
  {
    initialGroup: DISPENSE_GROUP_BEVERAGE,
    options: {},
  }
);

(CuiKit as any).displayName = 'CuiKit';
export { CuiKit, useCuiKitContext };
