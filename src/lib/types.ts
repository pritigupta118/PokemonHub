export interface DetailedPokemon {
  name: string;
  url: string;
}

export interface PokemonData {
  count: number;
  next: string;
  previous: string | null;
  results: DetailedPokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  cries: {
    latest: string
    legacy: string
  };
  sprites: {
    front_default: string;
    other: {
      'dream_world': {
        front_default: string
      },
      'official-artwork': {
        front_default: string;
      };
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}