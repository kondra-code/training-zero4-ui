import styled from '@emotion/styled';

import type { NozzlePourResponse } from '@kosdev-code/kos-dispense-sdk';
import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import type { BeverageModel } from '@training-zero4/training-zero4-models';
import { BaseContainer } from '../common/base-container';

const log = KosLog.createLogger({ name: 'pour-button' });
log.debug('pour-button component loaded');

interface Props {
  pour: NozzlePourResponse;
  pourable?: BeverageModel | null;
}

/**
 * A button that can be used to pour a beverage
 * It uses the pour data provided by the CuiKit including the
 * current status of the pour (inProgress etc) and whether or not
 * pouring is allowed based on the selected beverage
 *
 * The pour data also includes a set of handlers that can be mapped over
 * most DOM object to allow for touch support interacting with
 * the backend nozzle services.
 */
export const PourButton: React.FunctionComponent<Props> = kosComponent(
  ({ pour, pourable }) => {
    const { status, handlers } = pour;
    const displayStatus =
      status?.canPour && !!pourable
        ? `Pour ${pourable.data.name ?? pourable.note}`
        : status?.isPouring
        ? 'Pouring...'
        : 'No Beverage Selected';
    return (
      <PourButtonContainer
        canPour={!!status?.canPour}
        isPouring={!!status?.isPouring}
        primary={pourable?.data.colors?.primary}
        secondary={pourable?.data.colors?.secondary}
        {...handlers()}
      >
        {displayStatus}
      </PourButtonContainer>
    );
  }
);

const PourButtonContainer = styled(BaseContainer)<{
  canPour: boolean;
  isPouring: boolean;
  primary?: string;
  secondary?: string;
}>`
  height: 120px;
  width: 300px;
  font-size: 24px;
  border-radius: 30px;
  font-family: sans-serif;

  color: ${({ isPouring }) => (isPouring ? 'black' : 'white')};
  display: flex;
  justify-content: center;
  user-select: none;
  border: 10px solid ${({ color }) => color ?? 'black'};

  background: ${({ canPour, isPouring, primary, secondary }) => {
    if (isPouring) {
      const primaryColor = primary ?? 'blue';
      const secondaryColor = secondary ?? 'white';
      return `linear-gradient(135deg,  ${primaryColor}, ${secondaryColor})`;
    }
    return canPour ? 'black' : 'grey';
  }};
`;

export default PourButton;
