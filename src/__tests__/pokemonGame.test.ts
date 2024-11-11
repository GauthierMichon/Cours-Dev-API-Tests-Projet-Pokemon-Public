import { Combat } from "../Combat";
import { Pokemon } from "../IPokemon";
import { tableTypes } from "../tableTypes";

describe("Pokemon Combat", () => {
  let florizarre: Pokemon;
  let dracaufeu: Pokemon;
  let combat: Combat;

  beforeEach(() => {
    florizarre = {
      nom: "Florizarre",
      type: "Plante",
      pv: 80,
      pvMax: 80,
      attaque: 82,
      defense: 83,
      vitesse: 80,
      attaques: [
        { nom: "Lance-Soleil", puissance: 120, type: "Plante" },
        { nom: "Soin", puissance: 0, type: "Plante", soin: true },
      ],
    };

    dracaufeu = {
      nom: "Dracaufeu",
      type: "Feu",
      pv: 78,
      pvMax: 78,
      attaque: 84,
      defense: 78,
      vitesse: 100,
      attaques: [
        { nom: "Lance-Flammes", puissance: 90, type: "Feu" },
        { nom: "Crocs Feu", puissance: 65, type: "Feu" },
      ],
    };

    combat = new Combat(florizarre, dracaufeu);
  });

  it("La simulation de combat se termine quand un Pokémon est KO", () => {
    // Étant donné un espion sur le console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    // Quand on simule le combat
    combat.simulerCombat();

    // Alors un des deux pokémon est K.O.
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("KO"));
    expect(florizarre.pv <= 0 || dracaufeu.pv <= 0).toBe(true);

    consoleSpy.mockRestore();
  });

  it("Florizarre utilise l'attaque soin et augmente ses PVs", () => {
    // Étant donné que Florizarre a des PV réduits
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    florizarre.pv = 40;
    const initialPV = florizarre.pv;
    const attaque = florizarre.attaques.find((a) => a.soin);

    // Quand il utilise une attaque soin
    if (attaque) {
      combat["soigner"](florizarre);
    }

    // Alors ses PVs devraient augmenter, et un message de soin est affiché
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("se soigne")
    );
    expect(florizarre.pv).toBeGreaterThanOrEqual(initialPV);
    consoleSpy.mockRestore();
  });

  it("La valeur des PV diminue après une attaque", () => {});

  it("Un Pokémon atteint zéro PV ou moins lorsqu'il est KO", () => {});
});
