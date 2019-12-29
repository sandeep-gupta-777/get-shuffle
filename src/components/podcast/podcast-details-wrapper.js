import React from 'react';
import {PodcastIntro} from "./podcast-intro-description";
import {PodcastGuestDetails} from "./podcast-guest-details";
import "./podcast-details-wrapper.scss";
import Divider from '@material-ui/core/Divider';

export function PodcastDetails(props) {

    return (
        <div className="podcast-details">
            <PodcastIntro podcast={props.podcast} />
            <Divider></Divider>
            <div className="podcast-guest-details">
                <PodcastGuestDetails guest={props.podcast.guest}></PodcastGuestDetails>
            </div>
        </div>

    )
}