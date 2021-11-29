import React from 'react';
import styles from '../styles.css';

const VideoYoutube = ({plataform, videoId, width, height, autoplay, loop, mute, controls}) => {

    return (
        <div >
            <iframe 
            width={width} 
            height={height} 
            src={`https://www.${plataform}.com/embed/${videoId}?loop=${loop ? '1' : '0'}&autoplay=${autoplay ? '1' : '0'}&mute=${mute ? '1' : '0'}&controls=${controls ? '1' : '0'}`}
            title="Video player" 
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            >   
            </iframe>
        </div>
    )
}

export default VideoYoutube;