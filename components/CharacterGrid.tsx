import React from "react";
import CharacterCard from "./CharacterCard";
import { Character } from "@/types";

interface CharacterGridProps {
  characters: Character[] | undefined;
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {characters?.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            characterImage={character.image}
            characterName={character.name}
          />
        );
      })}
    </div>
  );
};

export default CharacterGrid;
