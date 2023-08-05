import React from 'react';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

/*
import { userProfileData } from '../data/dummy';
*/
const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="z-[100] absolute top-16 bg-white dark:bg-[#42464D] p-10 rounded-lg w-1/2">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Mon profil</p>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="Profil"
        />
        <div className= "w-50">
          <p className="font-semibold text-xl dark:text-gray-200 w-40"> John Doe </p>
          <p className="text-black-500 text-sm font-semibold dark:text-gray-400 w-50"> Prochain shooting prévu le :</p>
          <p className="font-semibold text-gray-500 text-sm dark:text-green-400"> 09 Octobre 2023 </p>
          
        </div>
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
