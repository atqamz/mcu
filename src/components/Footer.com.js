import React from "react";
import * as MatIco from "@material-ui/icons";

export default function Footer() {
  return (
    <div className='row container-fluid text-center'>
      <div className='col-md-6 mb-4 text-md-start'>
        <img
          src='/assets/marvel-cinematic-universe.png'
          alt='Marvel Cinematic Universe'
          width='500'
          height='400'
        />
      </div>
      <div className='col-md-6 my-auto text-md-end'>
        <p>
          marvel-natael
          <span className='mx-2'>
            <MatIco.GitHub fontSize='large' />
          </span>
        </p>
        <p>
          natanpilip@gmail.com
          <span className='mx-2'>
            <MatIco.Email fontSize='large' />
          </span>
        </p>
        <p>
          marvelnaths
          <span className='mx-2'>
            <MatIco.Instagram fontSize='large' />
          </span>
        </p>
      </div>
    </div>
  );
}
