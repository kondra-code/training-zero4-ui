/**
 * Brandset data types
 */

// represents the shape of the data defined in the
// UI brandset.
// This represents the UI specific data that serves as a
// companion to the raw brandset data and represents the data
// that is used to render beverage data in the UI.
export interface BrandsetBeverageData {
  // the raw id of the beverage.  Aligns with the data in the brandset.json
  // and is used to identify the beverage in the UI.
  id: string;

  // the name of the beverage.  This is the name that is displayed in the UI.
  name: string;

  // the URL of the image that is used to display the beverage in the UI.
  // This is the image that is displayed in the beverage list.
  // THe URL here is relative to the application origin.
  icon?: string;

  // the colors that are used to display the beverage in the UI.
  colors: {
    // the dominant color used as the background color for the beverage in the UI
    primary: string;

    // optional secondary color that might be used in cases where
    // a beverage is a mix of two distinct flavors or ingredients.
    secondary?: string;

    // optional text color that can used to ensure contrast is maintained
    // when displaying text over the primary color.
    text?: string;
  };
}

// represent the shape of the ui.json file that is used to define the
// UI specific data for the brandset.  This is used to define the
export interface BrandsetUIData {
  beverages: BrandsetBeverageData[];
}
