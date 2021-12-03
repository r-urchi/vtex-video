import React from 'react';
import styles from '../styles.css';

const VideoVimeo = ({plataform, videoId, width, height, autoplay, loop, mute}) => {

    return (
        <div className={styles.ContainerIframe}>
            <iframe 
            className={styles.VideoIframe}
            width={width} 
            height={height} 
            src={`https://player.${plataform}.com/video/${videoId}?loop=${loop ? '1' : '0'}?&autoplay=${autoplay ? '1' : '0'}&muted=${mute ? '1' : '0'}`}
            title="Video player" 
            frameborder="0"
            allow="autoplay; fullscreen"
            >   
            </iframe>

        </div>
    )
}

export default VideoVimeo;