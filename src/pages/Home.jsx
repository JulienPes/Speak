import React from 'react';
import { UserProfilePage } from '../components';

const Home = () => {

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap ">
          <div>
            <UserProfilePage />
          </div>
      </div>
    </div>
  );
};

export default Home;
