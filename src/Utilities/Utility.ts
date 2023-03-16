import { AppUrls } from "../Types/appTypes";
import { TYPE_CHARTS_LABEL } from "../Constants/Dictionary";
import {
  ABILITIES_LABEL,
  ITEMS_LABEL,
  LOCATIONS_LABEL,
  MOVES_LABEL,
  POKEDEX_LABEL,
} from "../Constants/Dictionary";

export const NavBarLinks = [
  {
    link_label: POKEDEX_LABEL,
    to: AppUrls.POKEDEX,
  },
  {
    link_label: MOVES_LABEL,
    to: AppUrls.MOVES,
  },
  {
    link_label: ABILITIES_LABEL,
    to: AppUrls.ABILITIES,
  },
  {
    link_label: ITEMS_LABEL,
    to: AppUrls.ITEMS,
  },
  {
    link_label: LOCATIONS_LABEL,
    to: AppUrls.LOCATIONS,
  },
];

export const FiltersArray = [
  { filter: POKEDEX_LABEL },
  { filter: MOVES_LABEL },
  { filter: ABILITIES_LABEL },
  { filter: ITEMS_LABEL },
  { filter: LOCATIONS_LABEL },
  { filter: TYPE_CHARTS_LABEL },
];
