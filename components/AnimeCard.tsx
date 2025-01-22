import Image from "next/image";
import MotionDiv from "./MotionDiv";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

function AnimeCard({ anime }: Prop) {
  return (
    <MotionDiv>
      <div className="relative w-full h-[37vh]">
        <Image
          src={
            anime.image.original.startsWith("http")
              ? anime.image.original
              : `https://shikimori.one/${anime.image.original}`
          }
          alt={anime.name}
          width={150}
          height={150}
          className="rounded-xl m-auto"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full text-center">
            {anime.name.length > 15
              ? `${anime.name.slice(0, 10)}...`
              : anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center w-fit m-auto">
          <div className="flex flex-row gap-2 items-center">
            <Image src="/episodes.svg" alt="episodes" width={20} height={20} />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center justify-center">
            <Image src="/star.svg" alt="star" width={18} height={18} />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;
