export enum AppUrls {
  POKEDEX = `/pokemon`,
  MOVES = "/move",
  ABILITIES = "ability",
  ITEMS = "/item",
  LOCATIONS = "/location",
  TYPE_CHARTS = "type",
}

export enum LanguageEnum {
  EN = "en",
}

export interface PokemonGroupProps {
  name: string;
  url: string;
}

export interface PokemonAbilitiesProps {
  ability: PokemonGroupProps;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonResponse {
  data: SinglePokemonDetailsProps;
}

export interface SinglePokemonDetailsProps {
  url: any;
  abilities: PokemonAbilitiesProps[];
  base_experience: number;
  forms: PokemonGroupProps[];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_types: [];
  species: PokemonGroupProps;
  sprites: PokemonSpritesProps;
  stats: StatsProps[];
  types: PokemonTypesProps[];
  weight: number;
}

export interface PokemonTypesProps {
  slot: number;
  type: PokemonGroupProps;
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: PokemonGroupProps;
}

export interface PokemonSpritesProps {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  other: PokemonSpritesOtherProps;
}

export interface PokemonSpritesOtherProps {
  dream_world: Dream_WorldProps;
  home: HomeProps;
  "official-artwork": Official_ArtworkProps;
}

export interface Dream_WorldProps {
  front_default: string;
  front_female: string;
}

export interface HomeProps {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface Official_ArtworkProps {
  front_default: string;
  front_shiny: string;
}
