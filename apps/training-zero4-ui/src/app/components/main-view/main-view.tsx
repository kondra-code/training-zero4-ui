import styled from '@emotion/styled';
import { DISPENSE_GROUP_BEVERAGE } from '@kosdev-code/kos-dispense-sdk';
import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import {
  BaseContainer,
  BeverageList,
  PourButton,
} from '@training-zero4/model-components';
import { CuiKit, useCuiKitContext } from '../../init';

const log = KosLog.createLogger({ name: 'main-view' });
log.debug('main-view component loaded');

/**
 * NozzleView is a component that displays the beverage selection and pour button for
 * a nozzle in the dispenser. It uses the CUIKit to get the list of available beverages
 */
const NozzleView = kosComponent(() => {
  // Get the CUI Kit from the context
  const kit = useCuiKitContext();
  if (!kit) {
    return null;
  }

  // Grab the lis of active beverages and the current selection from the kit.
  //  The CuiKit provides a pour function that can be used to dispense the selected beverage.
  //  The CUIKit has been optimized for legacy plus dispensers and can support
  // Brand -> Beverage -> Flavor relationships
  //  In this case are are using a flat list of beverages
  const { beverages, pour, selections, nav } = kit;
  const showBeverages = (nav.currentGroup = DISPENSE_GROUP_BEVERAGE);
  return (
    <NozzleContainer>
      {showBeverages ? (
        <>
          <BeverageList
            onBeverageSelected={beverages.handlers.onSelected}
            selectedModel={selections[DISPENSE_GROUP_BEVERAGE]}
            beverages={beverages.models}
          />
          <div>
            <PourButton
              pour={pour}
              pourable={selections[DISPENSE_GROUP_BEVERAGE]}
            ></PourButton>
          </div>
        </>
      ) : (
        <div>
          <h1>{nav.currentGroup}</h1>
        </div>
      )}
    </NozzleContainer>
  );
});

export const MainView: React.FunctionComponent = kosComponent(() => {
  return (
    <Main>
      <CuiKit>{() => <NozzleView />}</CuiKit>
    </Main>
  );
});

const Main = styled(BaseContainer)`
  height: 1024px;
`;

const NozzleContainer = styled(BaseContainer)`
  flex-direction: column;
  height: 100%;
  padding: 16px;
  gap: 16px;
  justify-content: space-around;
`;
