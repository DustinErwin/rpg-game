import React from "react";

const PlayerContext = React.createContext({
  name: "",
  playerResources: {
    maxHP: 0,
    maxMP: 0,
    currentHP: 0,
    currentMP: 0,
    hpRegen: 0,
    mpRegen: 0,
  },
  skills: [],
  spells: [],
  stats: {
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    wisdom: 0,
    awareness: 0,
    constitution: 0,
  },
  damage: {
    damageType: "",
    attackSpeed: 0,
    hitChance: 0,
    critChance: 0,
    critDamage: 0,
  },
  defense: {
    dodge: 0,
    block: 0,
    parry: 0,
  },
});

export default PlayerContext;
