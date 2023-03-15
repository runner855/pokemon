import { AppUrls } from "../Types/appTypes";
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
