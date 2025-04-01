import {
  DispenseExtensionManager,
  KosModelRegistry,
} from '@kosdev-code/kos-dispense-sdk';

import { initKosProvider } from '@kosdev-code/kos-ui-sdk';
import {
  beverageContextLoader,
  pourableRequestMapper,
  trainingBeverageDataMapper,
} from '@training-zero4/training-zero4-models';

KosModelRegistry.dispense.models();

const dispenseExtensionManager = new DispenseExtensionManager();
dispenseExtensionManager.registerSelectedPourableDataMapper(
  pourableRequestMapper
);

dispenseExtensionManager.registerAvailabilityLoader(beverageContextLoader);
dispenseExtensionManager.registerAvailabilityDataMapper(
  trainingBeverageDataMapper
);

const { KosCoreContextProvider } = initKosProvider();

export { KosCoreContextProvider };
