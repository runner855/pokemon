export enum AppUrls {
  POKEDEX = `/ability`,
  MOVES = "/move",
  ABILITIES = "ability",
  ITEMS = "/item",
  LOCATIONS = "/location",
  TYPE_CHARTS = "type",
}

export enum LanguageEnum {
  EN = "en",
}

export interface PokedexProps {
  name: string;
  url: string;
}

export interface PokemonDetailsProps {
  effects_changes: [];
  effects_entries: [];
  flavour_text_entries: [];
  generation: PokemonDetailsGenerationProps;
  id: number;
  is_main_series: boolean;
  name: string;
  names: PokemonNamesProps[];
  pokemon: [];
}

export interface PokemonDetailsGenerationProps {
  name: string;
  url: string;
}

export interface PokemonNamesProps {
  language: PokemonLanguageProps;
  name: string;
}

export interface PokemonLanguageProps {
  name: string;
  url: string;
}

export interface PokemonArrayProps {
  is_hidden: boolean;
  pokemon: PokemonDetailsGenerationProps;
}
