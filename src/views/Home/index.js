import React from 'react';
import Helmet from 'react-helmet';
import style from './index.css'

const Home = () => (
  <section className={style.home}>
    <Helmet title={'HOME'}/>
    <hr/>
    <h1 className={style.title}>HOME</h1>
  </section>
);

export default Home;
