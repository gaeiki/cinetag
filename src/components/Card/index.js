import { useFavoritosContext } from "contexts/Favoritos";
import React from "react";
import styles from "./Card.module.css";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Card({ id, capa, titulo }) {
  const { favorito, adicionarFavorito } = useFavoritosContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      {ehFavorito ? (
        <FcLike
          alt="Favoritar filme"
          className={styles.favoritar}
          onClick={() => adicionarFavorito({ id, titulo, capa })}
        />
      ) : (
        <AiOutlineHeart
          alt="Favoritar filme"
          className={styles.favoritar}
          onClick={() => adicionarFavorito({ id, titulo, capa })}
        />
      )}

      {/* <img  
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      /> */}
    </div>
  );
}
