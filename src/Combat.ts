import { Attaque } from "./IAttaque";
import { Pokemon } from "./IPokemon";
import { tableTypes } from "./tableTypes";

export class Combat {
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  // Méthode pour calculer les dégâts
  private calculerDegats(
    attaquant: Pokemon,
    defenseur: Pokemon,
    attaque: Attaque
  ): number {
    const degatsBase =
      attaque.puissance * (attaquant.attaque / defenseur.defense);
    const multiplicateurType = tableTypes[attaque.type][defenseur.type] || 1;
    const critique = Math.random() < 0.1 ? 0.5 : 1;
    return Math.round(degatsBase * multiplicateurType * critique);
  }

  // Méthode pour soigner un Pokémon
  private soigner(pokemon: Pokemon): void {
    let quantite = Math.floor(pokemon.pvMax);
    pokemon.pv += quantite;
    console.log(`${pokemon.nom} se soigne de ${quantite} PV !`);
  }

  // Méthode pour simuler le combat entre deux Pokémons
  public simulerCombat(): void {
    console.log(`${this.pokemon1.nom} VS ${this.pokemon2.nom}`);

    let attaquant =
      this.pokemon1.vitesse >= this.pokemon2.vitesse
        ? this.pokemon1
        : this.pokemon2;
    let defenseur = attaquant === this.pokemon1 ? this.pokemon2 : this.pokemon1;
    let tours = 0;

    while (this.pokemon1.pv > 0 && this.pokemon2.pv > 0) {
      const attaque =
        attaquant.attaques[
          Math.floor(Math.random() * attaquant.attaques.length)
        ];

      if (attaque.soin) {
        this.soigner(attaquant);
      } else {
        const degats = this.calculerDegats(attaquant, defenseur, attaque);
        defenseur.pv -= degats;
        console.log(
          `${attaquant.nom} utilise ${attaque.nom} et inflige ${degats} dégâts à ${defenseur.nom} !`
        );

        if (defenseur.pv <= 0) {
          console.log(
            `${defenseur.nom} est KO après ${tours + 1} tours ! ${
              attaquant.nom
            } gagne !`
          );
          break;
        }
      }

      // Tour suivant
      [attaquant, defenseur] = [defenseur, attaquant];
      tours++;
    }
  }
}
