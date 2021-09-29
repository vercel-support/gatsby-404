import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Notfound() {
  return (
    <main>
      <Helmet>
        <title>404 page</title>
      </Helmet>
      <h1>Not found</h1>
      <h2>
        Default 404 page
      </h2>
    </main>
  );
}

export default Notfound;
