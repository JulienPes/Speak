import React from 'react';
import {HomeLocationSection} from '../components'
import { Header } from '../components';

const Pictures = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 bg-white rounded-3xl">
      <Header category="Vos" title="Photos" />
        <div>
          <HomeLocationSection/>
        </div>
    </div>
  );
};
export default Pictures;
