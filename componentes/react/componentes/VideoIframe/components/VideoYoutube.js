import React from 'react';
import styles from '../styles.css';

const VideoYoutube = ({plataform, videoId, width, height, autoplay, loop, mute, controls}) => {

    return (
        <div className={styles.ContainerIframe}>
            <iframe 
            className={styles.VideoIframe}
            width={width} 
            height={height} 
            src={`https://www.${plataform}.com/embed/${videoId}?version=3&loop=${loop ? '1' : '0'}&playlist=${videoId}&autoplay=${autoplay ? '1' : '0'}&mute=${mute ? '1' : '0'}&controls=${controls ? '1' : '0'}`}
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