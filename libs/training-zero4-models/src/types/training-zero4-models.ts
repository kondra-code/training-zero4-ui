import { AvailabilityModel } from '@kosdev-code/kos-dispense-sdk';

// represents the beverage data as it appears in the
// Availability Model after data loading and mapping
// this is the data that will be used throughout the application
//
// while in this case the data structure is very similar to the data
// structure in the ui.json file, it is a good practice to keep them separate
// as the need for data transformation may arise in the future
//
// The data represents the additional brandset data that in the format that it will
// be used in the application as part of the availability model and CUI Kit.
export interface TrainingBeverage {
  // the name of the beverage.  This is the name that is displayed in the UI.
  name: string;

  // the fully qualified URL of the image that is used to display the beverage in the UI.
  icon: string;

  // the colors that are used to display the beverage in the UI.
  colors: {
    primary: string;
    secondary?: string;
    text?: string;
  };
}

// This is a utility type that is used to define the shape of the
// beverage data as it appears in the availability model.
export type BeverageModel = AvailabilityModel<TrainingBeverage>;
