export enum AppUrls {
  POKEDEX = "/Pokedex",
  MOVES = "/Moves",
  ABILITIES = "Ability",
  ITEMS = "/Items",
  LOCATIONS = "/Locations",
  TYPE_CHARTS = "Type Chart",
}

export enum LanguageEnum {
  EN = "en",
}

export interface PokedexProps {
  name: string;
  url: string;
}
