import React from 'react';
import './styles.css';
import reading from '../assets/reading.svg';

export default function Home() {
  return (
        <div>
            <h1 className="title">Ler++</h1>
            <div class="caixa">
               <input className="codigo" type="text" placeholder="Insira seu código"/>
            </div>
            <img className="img" src={reading} alt="reading"/> 
        </div>  
  );
}

