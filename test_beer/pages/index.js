import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import Beer from "../components/Beer/Beer";

const Home = ({ beers }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header>
        <form>
          <h1>Search a beer</h1>
          <input
            type="text"
            placeholder="Search a beer"
            className={styles.search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <div className={styles.beersCont}>
        {filteredBeers.map((beer) => {
          return (
            <Beer
              key={beer.id}
              name={beer.name}
              description={beer.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://api.punkapi.com/v2/beers");
  const data = await res.json();

  return {
    props: {
      beers: data,
    },
  };
};
