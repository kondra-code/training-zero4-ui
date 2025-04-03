import styled from '@emotion/styled';
import {
  DISPENSE_GROUP_BEVERAGE,
  useDefaultCuiKitLifecycle,
} from '@kosdev-code/kos-dispense-sdk';
import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import {
  Ambient,
  AreYouThere,
  Attract,
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

  // initialize the dispense kit to use the default lifecycle
  // this includes and idle timeout to handle the case where the user walks away
  // and an "are you there" timeout to handle the case where the user is present
  // but not interacting with the dispenser
  // the idle timeout is set to 15 seconds and the are you there timeout is set to 10 seconds
  // which means the user will be prompted to confirm they are still present if there are 10
  // seconds left in the idle timeout
  const {
    showAreYouThere,
    areYouThereCountdown,
    clearAreYouThere,
    showAmbientScreen,
    showAttractScreen,
    pauseScreenTimer,
  } = useDefaultCuiKitLifecycle({
    kit,
    inactivity: {
      idleTimeout: 15,
      areYouThereTimeoutOffset: 10,
    },
    pour: {
      idleTimeout: 10,
      areYouThereTimeoutOffset: 5,
    },
    screens: {
      attractTimeout: 20,
      ambientTimeoutOffset: 10,
    },
  });
  if (!kit) {
    return null;
  }

  const { beverages, pour, selections, nav } = kit;

  const showBeverages = (nav.currentGroup = DISPENSE_GROUP_BEVERAGE);

  return (
    <NozzleContainer>
      {showAmbientScreen && <Ambient onReset={pauseScreenTimer} />}
      {showAttractScreen && <Attract onReset={pauseScreenTimer} />}
      <AreYouThere
        countdown={areYouThereCountdown}
        show={showAreYouThere}
        onClose={clearAreYouThere}
      ></AreYouThere>
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

MainView.displayName = 'MainView';

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
