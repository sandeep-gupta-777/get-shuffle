import React from 'react';
import './podcast-guest-details.scss'
export function PodcastGuestDetails(props) {
    const summary = props.guest.summary;

    return (
        <div className="podcast-guest-details">
            {summary}
        </div>
    )
}