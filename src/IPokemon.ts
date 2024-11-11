import { Attaque } from "./IAttaque";
import { Type } from "./Type";

export interface Pokemon {
  nom: string;
  type: Type;
  pv: number;
  pvMax: number;
  attaque: number;
  defense: number;
  vitesse: number;
  attaques: Attaque[];
}
