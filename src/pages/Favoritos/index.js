import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import { useFavoritosContext } from 'contexts/Favoritos';
import React from 'react';
import styles from  './Favoritos.module.css';

export default function Favoritos({id, titulo, capa}) {
  const { favorito } = useFavoritosContext();

  return (
    <>
    <Banner imagem="favoritos"></Banner>
    <Titulo>
      <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        {favorito.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
    </section>
    </>
  )
}