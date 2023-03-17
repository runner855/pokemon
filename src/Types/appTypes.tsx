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

export interface PokedexProps {
  name: string;
  url: string;
}

export interface PokemonDetailsProps {
  abilities: PokemonAbilitiesProps[];
  base_experience: number;
  forms: PokemonNameUrlProps[];
  game_indices: GameIndicesProps[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMovesProps[];
  name: string;
  order: number;
  past_types: [];
  species: PokemonNameUrlProps;
  sprites: PokemonSpritesProps;
  stats: PokemonStatsProps[];
  types: [];
  weight: number;
}

export interface PokemonNameUrlProps {
  name: string;
  url: string;
}

export interface PokemonAbilitiesProps {
  ability: PokemonNameUrlProps;
  is_hidden: boolean;
  slot: number;
}

export interface GameIndicesProps {
  game_index: number;
  version: PokemonNameUrlProps;
}

export interface PokemonMovesProps {
  move: PokemonNameUrlProps;
  version_group_details: PokemonVersionGroupArrayProps[];
}

export interface PokemonVersionGroupArrayProps {
  move_learn_method: PokemonNameUrlProps;
  version_ground: PokemonNameUrlProps;
}

export interface PokemonSpritesProps {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: PokemonSpritesOtherProps;
  versions: object;
}

export interface PokemonSpritesOtherProps {
  dream_world: PokemonSpritesOtherDreamWorldProps;
  home: PokemonSpritesOtherHomeProps;
  "official-artwork": PokemonSpritesOtherOffArtProps;
}

export interface PokemonSpritesOtherDreamWorldProps {
  front_default: string;
  front_female: string;
}

export interface PokemonSpritesOtherHomeProps {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonSpritesOtherOffArtProps {
  front_default: string;
  front_shiny: string;
}

export interface PokemonSpritesVersionsProps {
  "generation-i": PokemonSpritesVersionGeneration_i;
  "generation-ii": PokemonSpritesVersionGeneration_ii;
  "generation-iii": PokemonSpritesVersionGeneration_iii;
  "generation-iv": PokemonSpritesVersionGeneration_iv;
  "generation-v": PokemonSpritesVersionGeneration_v;
  "generation-vi": PokemonSpritesVersionGeneration_vi;
  "generation-vii": PokemonSpritesVersionGeneration_vii;
  "generation-viii": object;
}

export interface PokemonSpritesVersionGeneration_i {
  "red-blue": SpritesColorProps;
  yellow: SpritesColorProps;
}

export interface PokemonSpritesVersionGeneration_ii {
  crystal: SpritesCrystalProps;
  gold: SpritesGoldProps;
  silver: SpritesGoldProps;
}

export interface PokemonSpritesVersionGeneration_iii {
  emerald: SpritesEmeraldProps;
  "firered-leafgreen": SpriteLeafGreenProps;
  "ruby-sapphire": SpriteLeafGreenProps;
}
export interface PokemonSpritesVersionGeneration_iv {
  "diamond-pearl": PokemonSpritesdiamondPearlProps;
  "heartgold-soulsilver": PokemonSpritesdiamondPearlProps;
  platinum: PokemonSpritesdiamondPearlProps;
}
export interface PokemonSpritesVersionGeneration_v {
  "black-white": PokemonSpritesBlackandwhiteProps;
  animated: PokemonSpritesBlackandwhiteProps;
}

export interface PokemonSpritesVersionGeneration_vi {
  "omegaruby-alphasapphire": PokemonSpritesOtherHomeProps;
  "x-y": PokemonSpritesOtherHomeProps;
}

export interface PokemonSpritesVersionGeneration_vii {
  icons: PokemonSpritesOtherDreamWorldProps;
  "ultra-sun-ultra-moon": PokemonSpritesOtherHomeProps;
}

export interface PokemonSpritesVersionGeneration_viii {
  icons: PokemonSpritesOtherDreamWorldProps;
}

export interface PokemonSpritesBlackandwhiteProps {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface PokemonSpritesdiamondPearlProps {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface SpritesEmeraldProps {
  front_default: string;
  front_shiny: string;
}
export interface SpriteLeafGreenProps {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface SpritesCrystalProps {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface SpritesGoldProps {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface SpritesColorProps {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface PokemonStatsProps {
  base_stat: number;
  effort: number;
  stat: PokemonNameUrlProps;
}

export interface PokemonTypesProps {
  slot: number;
  type: PokemonNameUrlProps;
}
