import styled from '@emotion/styled';

import { kosComponent, KosLog } from '@kosdev-code/kos-ui-sdk';
import type { BeverageModel } from '@training-zero4/training-zero4-models';
import Beverage from '../beverage/beverage';
import { BaseContainer } from '../common/base-container';
const log = KosLog.createLogger({ name: 'beverage-list' });
log.debug('beverage-list component loaded');

interface Props {
  beverages?: BeverageModel[];
  onBeverageSelected?(beverage: BeverageModel): void;
  selectedModel: BeverageModel | null;
}

/**
 * A simple component that can be used to display a list of beverages
 * It uses the beverages provided by the CuiKit.
 */
export const BeverageList: React.FunctionComponent<Props> = kosComponent(
  ({ beverages, onBeverageSelected, selectedModel }) => {
    const items = beverages?.map((beverage) => {
      return (
        <Beverage
          onBeverageSelected={onBeverageSelected}
          selected={selectedModel === beverage}
          beverage={beverage}
          key={beverage.id}
        />
      );
    });
    return <BeverageListContainer>{items}</BeverageListContainer>;
  }
);

const BeverageListContainer = styled(BaseContainer)`
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  align-content: start;
  justify-content: start;
  gap: 15px;
`;

export default BeverageList;
