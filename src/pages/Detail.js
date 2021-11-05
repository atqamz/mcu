import React from "react";
import { useParams } from "react-router-dom";
import data from "../dummyData";

export default function Detail() {
  const { id } = useParams();

  return (
    <>
      {data.results
        .filter((movie) => movie.id == id)
        .map((movie) => {
          return (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path == null ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
                className='detail-jumbotron img-fluid w-100'
              />
              <div className='container-fluid p-5 row'>
                <div className='col-md-9'>
                  <h1>{movie.title}</h1>
                  <p>Popularity: {movie.popularity}</p>
                  <p>{movie.overview}</p>
                </div>
                <div className='col-md-3'>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className='img-fluid rounded'
                  />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
