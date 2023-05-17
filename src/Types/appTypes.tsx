export enum AppUrls {
  POKEDEX = `/pokemon`,
  MOVES = "/move",
  ABILITIES = "ability",
  ITEMS = "/item",
  LOCATIONS = "/location",
  TYPE_CHARTS = "type",
  FAVORITES = "/favorites",
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
  url: string;
  abilities: PokemonAbilitiesProps[];
  base_experience: number;
  forms: PokemonGroupProps[];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonGroupProps[];
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

export interface PokemonAboutProps {
  effect_changes: [];
  effect_entries: EffectEntriesProps[];
  flavor_text_entries: [];
  generation: Object;
  id: number;
  is_main_series: boolean;
  name: string;
  names: NamesProps[];
  pokemon: PokemonProps[];
}

export interface EffectEntriesProps {
  effect: string;
  language: PokemonGroupProps;
  short_effect: string;
}

export interface NamesProps {
  language: PokemonGroupProps;
  name: string;
}

export interface PokemonProps {
  is_hiddden: boolean;
  pokemon: PokemonGroupProps;
  slot: number;
}

export interface EggGroupProps {
  id: number;
  name: string;
  names: EggGroupNamesProps[];
  pokemon_species: PokemonGroupProps[];
}

export interface EggGroupNamesProps {
  language: PokemonGroupProps;
  name: string;
}

export interface PokemonGenderProps {
  id: number;
  name: string;
  pokemon_species_details: [];
  required_for_evolution: [];
}

export interface PokemonEvolutionChainProps {
  baby_trigger_item: null;
  chain: PokemonChainProps;
  id: number;
}

export interface PokemonChainProps {
  evolution_details: [];
  evolves_to: EvolvesToProps[];
  is_baby: boolean;
  species: SpeciesProps;
}

export interface EvolvesToProps {
  evolution_details: EvolutionDetailsProps[];
  evolves_to: EvolvesToProps[];
  is_baby: boolean;
  species: SpeciesProps;
}

export interface EvolutionDetailsProps {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: Object;
  turn_upside_down: boolean;
}

export interface EvolvesToProps {
  evolution_details: EvolutionDetailsProps[];
  evolves_to: EvolvesToProps[];
  is_baby: boolean;
  species: SpeciesProps;
}

export interface SpeciesProps {
  name: string;
  url: string;
}

export interface EvolutionChainProps {
  url: string;
}

export interface VarietiesProps {
  is_default: boolean;
  pokemon: VarietiesPokemonProps;
}

export interface VarietiesPokemonProps {
  name: string;
  url: string;
}
export interface SpeciesDetailsProps {
  base_happiness: number;
  capture_rate: number;
  color: SpeciesProps;
  egg_groups: SpeciesProps[];
  evolution_chain: EvolutionChainProps;
  evolves_from_species: SpeciesProps;
  flavor_text_entries: [];
  form_descriptions: [];
  form_switchable: boolean;
  gender_rate: number;
  genera: [];
  generation: SpeciesProps;
  growth_rate: SpeciesProps;
  habitat: SpeciesProps;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: [];
  order: number;
  pal_park_encounters: [];
  pokedex_numbers: [];
  shape: SpeciesProps;
  varieties: VarietiesProps[];
}

export interface StatsDataProps {
  country: string;
  hot_dog: number;
  hot_dogColor: string;
  burger: number;
  burgerColor: string;
  sandwich: number;
  sandwichColor: string;
  kebab: number;
  kebabColor: string;
  fries: number;
  friesColor: string;
  donut: number;
  donutColor: string;
}
