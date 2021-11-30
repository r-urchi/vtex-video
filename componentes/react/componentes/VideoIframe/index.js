import React, { useMemo } from 'react';
import VideoYoutube from './components/VideoYoutube';
import VideoVimeo from './components/VideoVimeo'
import styles from './styles.css';

const VideoIframe = ({isShow, plataform, videoId, width, height, autoplay, loop, mute, controls}) => {

    const plataformLowerCase = plataform.toLowerCase();

    return useMemo(() =>{
        return (
                <div>
                {
                    isShow ?
                        <>{plataformLowerCase === 'youtube' ?
                            <VideoYoutube 
                            plataform={plataformLowerCase}
                            videoId={videoId}
                            width={width} 
                            height={height} 
                            autoplay={autoplay}
                            loop={loop}
                            mute={mute}
                            controls={controls}/> 
                        : 
                        <>{plataformLowerCase === 'vimeo' ?
                            <VideoVimeo
                            plataform={plataformLowerCase}
                            videoId={videoId}
                            width={width} 
                            height={height} 
                            autoplay={autoplay}
                            loop={loop}
                            mute={mute}/>               
                        : <></>
                        }</>
                    }</> : <div>Ingresa un video de youtube o vimeo</div>
                }
                </div>
        )
    },[isShow, plataform, videoId, width, height, autoplay, loop, mute, controls])
}

VideoIframe.schema = {
    title: 'Video Iframe',
    type: 'object',
    properties: {
        isShow: {
            title: 'Mostrar / Ocultar',
            type: 'boolean',
            default: true,
        },
        plataform: {
            title: 'Youtube / Vimeo',
            type: 'string',
            default: ''
        },
        videoId:{
            title: 'Video ID',
            type: 'string',
            default: ''
        },
        width: {
            title: 'Ancho (%, px)',
            type: 'string',
            default: ''
        },
        height: {
            title: 'Alto (%, px)',
            type: 'string',
            default: ''
        },
        autoplay: {
            title: 'Autoplay',
            type: 'boolean',
            default: true
        },
        loop: {
            title: 'Loop',
            type: 'boolean',
            default: true
        },
        mute: {
            title: 'Mute',
            type: 'boolean',
            default: true
        },
        controls: {
            title: 'Controles',
            type: 'boolean',
            default: false
        }
    },
}

VideoIframe.defaultProps = {
    isShow: true,
    plataform: 'vimeo',
    videoId: '511229946',
    width: '100%',
    height: '800px',
    autoplay: true,
    loop: true,
    mute: true,
    controls: false
}

export default VideoIframe;
