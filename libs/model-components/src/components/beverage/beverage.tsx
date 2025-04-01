import styled from '@emotion/styled';

import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import type { BeverageModel } from '@training-zero4/training-zero4-models';
import { useCallback } from 'react';
import { BaseContainer } from '../common/base-container';

const log = KosLog.createLogger({ name: 'beverage' });
log.debug('beverage component loaded');

interface Props {
  beverage: BeverageModel;
  onBeverageSelected?(beverage: BeverageModel): void;
  selected?: boolean;
}

/**
 * A simple component that can be used to display a beverage
 * It uses the AvailabilityModel provided by the CuiKit to display
 * the beverage name and icon which was mapped from the brandset data
 *
 * The component also includes a handler that can be used to select the beverage
 * which is mapped back to the CuiKit to update the current selection
 */
export const Beverage: React.FunctionComponent<Props> = kosComponent(
  ({ beverage, onBeverageSelected, selected }) => {
    const handleBeverageSelected = useCallback(() => {
      log.debug(`Beverage selected: ${beverage.rawId}`);
      if (onBeverageSelected) {
        onBeverageSelected(beverage);
      }
    }, [beverage]);
    return (
      <BeverageContainer
        onPointerDown={handleBeverageSelected}
        available={beverage.available}
        selected={selected}
        primary={beverage.data.colors?.primary}
        secondary={beverage.data.colors?.secondary}
      >
        <BeverageIcon imageUrl={beverage.data?.icon ?? ''} />
        <BeverageText>{beverage.note ?? 'No Name'}</BeverageText>
      </BeverageContainer>
    );
  }
);

/**
 * Styled component that is used to display the beverage icon.
 */
const BeverageIcon = styled.div<{ imageUrl: string }>`
  height: 50px;
  width: 50px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  position: absolute;
  top: calc(50% - 25px);
  left: 20px;
  transform: translateX(50%);
`;

/**
 * Styled component that is used to display the beverage text.
 */
const BeverageText = styled.div`
  font-size: 24px;
  font-family: sans-serif;
  color: #000000;
  position: absolute;

  right: 50%;
  transform: translateX(50%);
  text-align: center;
`;

/**
 * Styled component that is used to display the beverage.
 * It uses the colors defined in the brandset to display the beverage
 * and the icon that is used to display the beverage in the UI.
 * The component also includes a handler that can be used to select the beverage
 * which is mapped back to the CuiKit to update the current selection.
 */
const BeverageContainer = styled(BaseContainer)<{
  available?: boolean;
  selected?: boolean;
  primary?: string;
  secondary?: string;
}>`
  height: 70px;
  width: 400px;
  font-size: 24px;
  font-family: sans-serif;
  border-radius: 20px;
  color: #000000;
  position: relative;
  background: ${(props) => {
    if (props.available) {
      return `linear-gradient(135deg, ${props.primary ?? 'lightblue'}, ${
        props.secondary ?? props.primary ?? 'white'
      })`;
    }
    return `#cccccc`;
  }};

  ${(props) => {
    if (props.selected) {
      return `border: 10px solid black;`;
    }
    return `margin: 10px;`;
  }};
`;

export default Beverage;
