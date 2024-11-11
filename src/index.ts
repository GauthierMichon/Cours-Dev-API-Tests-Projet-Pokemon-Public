import { Combat } from "./Combat";
import { pokemons } from "./Pokemons";

const monPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
const adversaireAleatoire =
  pokemons[Math.floor(Math.random() * pokemons.length)];
const combat = new Combat(monPokemon, adversaireAleatoire);
combat.simulerCombat();
