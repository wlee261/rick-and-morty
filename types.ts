export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: CharacterLocation;
  name: string;
  origin: CharacterOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface ApiCallReturnInfo {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface ApiCallReturn {
  info: ApiCallReturnInfo;
  results: Character[];
}
