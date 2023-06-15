import React from "react";
import Image from "next/image";

interface CharacterCardProps {
  characterImage: string;
  characterName: string;
}

const CharacterCard = ({
  characterImage,
  characterName,
}: CharacterCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative px-4 overflow-hidden rounded-lg w-60 h-60">
        <Image
          className="rounded-lg"
          src={characterImage}
          alt={characterName}
          fill
          sizes="240px"
        />
      </div>
      <span>{characterName}</span>
    </div>
  );
};

export default CharacterCard;
