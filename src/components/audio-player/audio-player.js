import React from 'react';
import {PodcastIntro} from "../podcast/podcast-intro-description";
import {AudioPlayerControls} from "./audio-player-controls";

export function AudioPlayer() {
    return (
        <div>
            <PodcastIntro/>
            <AudioPlayerControls/>
        </div>
    )
}