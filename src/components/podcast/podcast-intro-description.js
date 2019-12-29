import React from 'react';
import Grid from '@material-ui/core/Grid';
import './podcast-intro-description.scss'
import {AudioPlayerControls} from "../audio-player/audio-player-controls";

function scrollFunction() {
    const $controls = document.getElementById("audio-controls");
    const isHidden = $controls.getBoundingClientRect().top < 0;
    if (isHidden) {
        $controls.classList.add('fix-on-top');
    } else {
        $controls.classList.remove('fix-on-top');
    }
}

export function PodcastIntro(props) {
    window.onscroll = function () {
        scrollFunction();
    };
    const podcast = props.podcast;
    return (
        <div className='audio-description' id="header">
            <Grid container>
                <Grid item md={4} xs={12}>
                    <div className="audio-thumbnail">
                        <img src={podcast.img} alt=""/>
                    </div>
                </Grid>
                <Grid container item md={8} xs={12}>
                    <div className="text-container">
                        <div className="host-name">
                            By {podcast.host}
                        </div>
                        <div className="podcast-title">
                            {podcast.name}
                        </div>
                        <div className="podcast-episode">
                            {podcast.episode}
                        </div>
                        <AudioPlayerControls/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}


