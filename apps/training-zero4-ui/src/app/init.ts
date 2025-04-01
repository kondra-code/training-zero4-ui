import {
  DISPENSE_GROUP_BEVERAGE,
  initializeCuiKit,
} from '@kosdev-code/kos-dispense-sdk';
import type { TrainingBeverage } from '@training-zero4/training-zero4-models';

const [useCuiKitContext, CuiKit] = initializeCuiKit<
  never,
  TrainingBeverage,
  never
>({
  initialGroup: DISPENSE_GROUP_BEVERAGE,
  options: {},
});

export { CuiKit, useCuiKitContext };
