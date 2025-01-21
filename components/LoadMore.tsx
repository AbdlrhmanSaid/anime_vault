"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchAnmie } from "@/utils/actions";
import AnimeCard, { AnimeProp } from "./AnimeCard";
import Link from "next/link";

function LoadMore({ filteredData }: any) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (inView) {
      fetchAnmie(page).then((res) => {
        setData([...data, ...res]);
        setPage(page + 1);
      });
    }
  }, [inView, data, page]);
  return (
    <>
      <section
        className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 
                    place-items-center sm:place-items-stretch"
      >
        {data.map((item: AnimeProp, index: number) => (
          <Link key={item.id || index} href={`/anime/${item.id}`}>
            <AnimeCard anime={item} index={index} />
          </Link>
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
