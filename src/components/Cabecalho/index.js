import React from 'react';
import styles from './Cabecalho.module.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import CabecalhoLink from '../CabecalhoLink';

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to="/">
            <img src={logo} alt="Logo da Cinetag" />
        </Link>
        <nav>
            <CabecalhoLink url="/" children="Home"/>
            <CabecalhoLink url="/favoritos" children="Favoritos"/>
        </nav>
    </header>
  )
}
