import { Type } from "./Type";

export const tableTypes: Record<Type, Record<Type, number>> = {
  Feu: {
    Feu: 0.5,
    Eau: 0.5,
    Plante: 2,
    Électrik: 1,
    Roche: 0.5,
    Sol: 1,
    Vol: 1,
    Psy: 1,
    Glace: 2,
    Dragon: 0.5,
  },
  Eau: {
    Feu: 2,
    Eau: 0.5,
    Plante: 0.5,
    Électrik: 1,
    Roche: 2,
    Sol: 2,
    Vol: 1,
    Psy: 1,
    Glace: 1,
    Dragon: 0.5,
  },
  Plante: {
    Feu: 0.5,
    Eau: 2,
    Plante: 0.5,
    Électrik: 1,
    Roche: 2,
    Sol: 2,
    Vol: 0.5,
    Psy: 1,
    Glace: 1,
    Dragon: 0.5,
  },
  Électrik: {
    Feu: 1,
    Eau: 2,
    Plante: 0.5,
    Électrik: 0.5,
    Roche: 1,
    Sol: 0,
    Vol: 2,
    Psy: 1,
    Glace: 1,
    Dragon: 0.5,
  },
  Roche: {
    Feu: 2,
    Eau: 1,
    Plante: 1,
    Électrik: 1,
    Roche: 0.5,
    Sol: 0.5,
    Vol: 2,
    Psy: 1,
    Glace: 2,
    Dragon: 1,
  },
  Sol: {
    Feu: 2,
    Eau: 1,
    Plante: 0.5,
    Électrik: 2,
    Roche: 2,
    Sol: 1,
    Vol: 0,
    Psy: 1,
    Glace: 1,
    Dragon: 1,
  },
  Vol: {
    Feu: 1,
    Eau: 1,
    Plante: 2,
    Électrik: 0.5,
    Roche: 0.5,
    Sol: 1,
    Vol: 1,
    Psy: 1,
    Glace: 1,
    Dragon: 1,
  },
  Psy: {
    Feu: 1,
    Eau: 1,
    Plante: 1,
    Électrik: 1,
    Roche: 1,
    Sol: 1,
    Vol: 1,
    Psy: 0.5,
    Glace: 1,
    Dragon: 1,
  },
  Glace: {
    Feu: 0.5,
    Eau: 0.5,
    Plante: 2,
    Électrik: 2,
    Roche: 1,
    Sol: 2,
    Vol: 2,
    Psy: 1,
    Glace: 0.5,
    Dragon: 2,
  },
  Dragon: {
    Feu: 1,
    Eau: 1,
    Plante: 1,
    Électrik: 1,
    Roche: 1,
    Sol: 1,
    Vol: 1,
    Psy: 1,
    Glace: 1,
    Dragon: 2,
  },
};