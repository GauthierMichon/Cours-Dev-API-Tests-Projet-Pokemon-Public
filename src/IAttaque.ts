import { Type } from "./Type";

export interface Attaque {
  nom: string;
  puissance: number;
  type: Type;
  soin?: boolean;
}
