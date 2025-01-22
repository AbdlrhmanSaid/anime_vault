"use client";
import { useEffect, useState } from "react";
import { fetchAnimeItem, fetchAnmie } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import NotFound from "@/components/NotFound";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import LoadMore from "@/components/LoadMore";
import Loading from "@/components/Loading";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [anime, setAnime] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAnimeItem = async () => {
      try {
        const data = await fetchAnimeItem({ id });
        if (!data) {
          setAnime("Not found");
          return;
        }
        setAnime(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getAnimeItem();
  }, [id]);

  const handleToggleFavorite = ({ id }: { id: string }) => {
    setIsFavorite(!isFavorite);
    !isFavorite
      ? console.log(`item added to favorites id : ${id} `)
      : console.log(`item removed from favorites id : ${id} `);
  };

  if (loading) return <Loading />;
  if (anime === "Not found") return <NotFound />;

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-md my-4">
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div>
            <h1 className="text-3xl font-bold">
              {anime.name.length > 20
                ? `${anime.name.slice(0, 20)}...`
                : anime.name}
              (
              {anime.russian.length > 20
                ? `${anime.russian.slice(0, 20)}...`
                : anime.russian}
              )
            </h1>
            <p className="text-gray-400 text-sm">ID: {anime.id}</p>
            <div className="mt-4">
              <p>
                <strong>Rating:</strong> {anime.score}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {anime.status === "released" ? "Completed" : "Unknown"}
              </p>
              <p>
                <strong>Number of Episodes:</strong> {anime.episodes}
              </p>
              <p>
                <strong>Airing Date:</strong> {anime.aired_on}
              </p>
              <p>
                <strong>Release Date:</strong> {anime.released_on}
              </p>
              <p>
                <strong>Age Rating:</strong> {anime.rating}
              </p>
              <p>
                <strong>Duration:</strong> {anime.duration} minutes
              </p>
            </div>
          </div>
          <div className="m-auto">
            <Image
              src={
                anime.image.original.startsWith("http")
                  ? anime.image.original
                  : `https://shikimori.one/${anime.image.original}`
              }
              alt={anime.name}
              width={300}
              height={400}
              className="rounded-xl min-h-[400px] min-w-[]:"
            />
          </div>
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="mt-2 text-gray-300">{anime.description}</p>
          <p className="flex my-3 items-center gap-2 text-2xl">
            <span>Add to Favorite :</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                handleToggleFavorite({ id: anime.id });
              }}
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </span>
          </p>
        </div>
        <Link
          className="bg-blue-600 p-3 rounded"
          href={`${anime.videos[0]?.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trailer
        </Link>
      </div>
      <div className="py-16 px-8">
        <h2 className="text-3xl text-white font-bold text-center md:text-left m-4 ">
          More Anime
        </h2>
        <LoadMore />
      </div>
    </>
  );
};

export default Page;
