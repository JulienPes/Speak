import React from 'react';

import { Location } from '.';
import locations from '../data/data.json';

const HomePicturesSection = () => (
  <section className="location-section">
    <div className="location-section-div">
        {locations.map(location => {
          return <Location location={location} key={location.id}/> 
        })}
      </div>
    </section>
  )

export default HomePicturesSection