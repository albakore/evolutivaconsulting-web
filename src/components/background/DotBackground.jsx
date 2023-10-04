import React from 'react';
import estilo from './dotBackground.module.css';

const backgroundDot = {
  width: '1vmin',
  height: '1vmin',
  borderRadius: '1vmin',
  backfaceVisibility: 'hidden',
  position: 'absolute',
  animation: 'move',
  animationDuration: 15,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
};

export default function DotBackground({ cantidad = 20 }) {

  const puntos = Array.from({ length: cantidad }, (_, index) => index);

  return (
    <div className={estilo.background}>
      {puntos.map((punto, index) => {
		const numRandom = Math.random() * 50
        const estiloPunto = {
		  width: `${numRandom}vmin`,
		  height: `${numRandom}vmin`,
		  borderRadius: `${numRandom}vmin`,
          color: '#bee3f8',
          top:`${Math.random()*100}%`,
          left: `${Math.random()*100}%`,
          animationDuration: `${Math.random()*100}s`,
          animationDelay: `${-314 * index}s`, // Ajustar el retardo para cada punto
          transformOrigin: '9vw -5vh',
          boxShadow: `-50vmin 0 1.7401954773023416vmin currentColor`,
		  opacity: '0.2'
        };

        return <span className={estilo.dotBackground} style={estiloPunto} key={index}></span>;
      })}
    </div>
  );
}
