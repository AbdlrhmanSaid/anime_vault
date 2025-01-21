"use client";
import { useEffect, useState } from "react";
import { fetchAnimeItem, fetchAnmie } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [anime, setAnime] = useState<any>(null);
  const [moreAnime, setMoreAnime] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  useEffect(() => {
    const getMoreAnime = async () => {
      try {
        const data = await fetchAnmie(1);
        if (!data) {
          setMoreAnime("Not found");
          return;
        }
        setMoreAnime(data);
      } catch (e) {
        console.error(e);
      }
    };
    getMoreAnime();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-t  w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  if (anime === "Not found") return <p>Anime not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-md my-4">
      <div className="flex items-center">
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
      </div>
      <Link
        className="bg-blue-600 p-3 rounded"
        href={`{anime.videos[0]?.url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Trailer
      </Link>
    </div>
  );
};

export default Page;
