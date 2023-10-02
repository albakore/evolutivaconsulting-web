import React from 'react'
import estilo from './dotBackground.module.css'

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
}

export default function DotBackground({cantidad = 20}) {
  return (
	<div class="background">
		{
			Array.from(cantidad).forEach(punto => {
				estilo = {
					color: '#282c7d',
					top: '77%',
					left: '44%',
					animationDuration: '38s',
					animationDelay: '-314s',
					transformOrigin: '9vw -5vh',
					boxShadow: '-2vmin 0 0.7401954773023416vmin currentColor',
				}
				return (
					<span className={css.dotBackground} style={estilo}></span>
				)
			})
		}
	</div>
  )
}
