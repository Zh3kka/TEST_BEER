import React, { useState } from "react";
import styles from "../styles/Home.module.scss";
import Paginate from "./components/Paginate/Paginate";

function Home({ beers, page }) {
  const [search, setSearch] = useState("");

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
      <div className={styles.beersContainer}>
        {filteredBeers.map((beer) => {
          return (
            <div key={beer.id} className={styles.beerCard}>
              <img src={beer.image_url} width={65} height={210} />
              <div>
                <h3>
                  {beer.id}. {beer.name}
                </h3>
                <p className={styles.beerText}>{beer.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Paginate page={page}/>
    </div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=16`);
  const data = await res.json();

  return {
    props: {
      beers: data,
      page: +page,
    },
  };
}

export default Home;
