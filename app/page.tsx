"use client";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { fetchAnmie, fetchAnimeItemByName } from "../utils/actions";
import Hero from "@/components/Hero";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState<AnimeProp[]>([]);
  const [filteredData, setFilteredData] = useState<AnimeProp[]>([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAnime = async () => {
      const anime = await fetchAnmie(1);
      setData(anime);
      setFilteredData(anime);
    };
    getAnime();
  }, []);

  const getAnimeByName = async () => {
    if (searchItem === "") {
      setFilteredData(data);
      return;
    }
    if (searchItem.trim()) {
      const anime = await fetchAnimeItemByName({ name: searchItem });
      setFilteredData(anime || []);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(() => {
    getAnimeByName();
  }, [getAnimeByName]);

  return (
    <>
      <Hero />
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <div className="m-auto w-[50%] ">
          <input
            type="search"
            placeholder="Search"
            className="bg-white text-black p-3 w-full rounded "
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
        <section
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 
                    place-items-center sm:place-items-stretch"
        >
          {filteredData.map((item: AnimeProp, index: number) => (
            <Link href={`/anime/${item.id}`} key={item.id}>
              <AnimeCard anime={item} index={index} />
            </Link>
          ))}
        </section>
        <LoadMore />
      </main>
    </>
  );
}

export default Home;
