import React, { useState } from "react";
import * as MatIco from "@material-ui/icons";
import data from "../dummyData";

export default function Home(props) {
  let searchTerm = props.search;

  const [wishlist, setWishlist] = useState([]);

  function handleClick(id) {
    setWishlist([...wishlist, { movieId: id }]);
    console.log(wishlist);
  }

  function handleDelete(id) {
    setWishlist(wishlist.filter((data) => data.movieId !== id));
    console.log(wishlist);
  }

  return (
    <>
      <div className='row container-fluid py-3'>
        <h1 className='display-5 p-5 fw-bold col-md-8 d-flex align-items-center'>
          Search for Your favorite MCU movies
        </h1>
        <img
          className='col-md-4'
          src='./assets/marvel-cinematic-universe.png'
          alt='Marvel Cinematic Universe'
          width='350'
        />
      </div>

      <div id='wishlist' className='row container-fluid p-5'>
        <h1>Wishlist</h1>
        {data.results
          .filter((movie) => {
            return wishlist.find((data) => {
              return data.movieId === movie.id;
            });
          })
          .map((movie) => {
            return (
              <div className='col-md-2 movie-list d-flex flex-column mb-4'>
                <button className='btn btn-danger' onClick={() => handleDelete(movie.id)}>
                  <MatIco.Delete />
                </button>
                <a href={`/movie/${movie.id}`} key={movie.id} id={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className='img-fluid'
                  />
                </a>
                <p class='text-center p-3'>{movie.title}</p>
              </div>
            );
          })}
      </div>

      <div id='movies' className='row container-fluid p-5'>
        <h1>Movie List</h1>
        {data.results
          .filter((movie) => {
            if (searchTerm === "") {
              return movie;
            } else if (
              movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return movie;
            }
          })
          .map((movie) => {
            return (
              <div className='col-md-2 movie-list d-flex flex-column mb-4'>
                <button className='btn btn-danger' onClick={() => handleClick(movie.id)}>
                  <MatIco.AddCircle />
                </button>
                <a href={`/movie/${movie.id}`} key={movie.id} id={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className='img-fluid'
                  />
                </a>
                <p class='text-center p-3'>{movie.title}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
