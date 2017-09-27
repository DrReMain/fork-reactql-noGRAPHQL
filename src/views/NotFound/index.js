import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => {
  return (
    <section>
      <Helmet title={'404 not found'}/>
      <h1>Oops... 404 Page!</h1>
    </section>
  );
};

export default NotFound;
