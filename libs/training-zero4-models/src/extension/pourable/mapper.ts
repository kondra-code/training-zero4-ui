import type { SelectedPourable } from '@kosdev-code/kos-dispense-sdk';

export const pourableRequestMapper = async (data: SelectedPourable) => {
  return {
    bevId: data.beverage?.rawId,
  };
};
