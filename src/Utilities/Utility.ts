import { AppUrls } from "../Types/appTypes";
import { FAVORITES_LABEL, TYPE_CHARTS_LABEL } from "../Constants/Dictionary";
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
    color: "green",
  },
  {
    link_label: MOVES_LABEL,
    to: AppUrls.MOVES,
    color: "red",
  },
  {
    link_label: ABILITIES_LABEL,
    to: AppUrls.ABILITIES,
    color: "blue",
  },
  {
    link_label: ITEMS_LABEL,
    to: AppUrls.ITEMS,
    color: "yellow",
  },
  {
    link_label: LOCATIONS_LABEL,
    to: AppUrls.LOCATIONS,
    color: "purple",
  },
  {
    link_label: TYPE_CHARTS_LABEL,
    to: AppUrls.TYPE_CHARTS,
    color: "brown",
  },
  {
    link_label: FAVORITES_LABEL,
    to: AppUrls.FAVORITES,
    color: "green",
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

export const PokemonNews = [
  {
    date: "March 28,2023",
    category: "Video Games & Apps",
    title: "Lugia Pokémon GO Raid Battle Tips",
    content:
      "Lugia is a Psychic- and Flying-type Legendary Pokémon originally discovered in the Johto region. Lugia is said to be the guardian of the seas and is rumored to be seen on the night of a storm. Learn which Pokémon will be most effective in Raid Battles against Lugia, how to catch Lugia after winning a Raid Battle, and how best to use the Diving Pokémon after you've caught it.",
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/strategy/go/lugia/pokemon-go-169.jpg",
  },
  {
    date: "March 27,2023",
    category: "Play! Pokémon Events ",
    title: "2023 Pokémon Regional Championships Live Streaming",
    content:
      "Watch Pokémon Regional Championships featuring Pokémon TCG, VGC, and Pokémon GO events throughout the 2023 Championship Series season. All times approximate and subject to change.",
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/attend-events/_tiles/streaming/regionals/regionals-169.jpg",
  },
  {
    date: "March 21,2023",
    category: "Video Games & Apps ",
    title: "Incarnate Forme Thundurus Pokémon GO Raid Battle Tips",
    content:
      "Incarnate Forme Thundurus is a Electric- and Flying-type Legendary Pokémon originally discovered in the Unova region. Its tail discharges immense bolts of lightning as it flies. Learn which Pokémon will be most effective in Raid Battles against Thundurus, how to catch Thundurus after winning a Raid Battle, and how best to use the Bolt Strike Pokémon after you've caught it.",
    image:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/strategy/go/thundurus/incarnate-forme/pokemon-go-169.png",
  },
];
