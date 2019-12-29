import React from 'react';
import Chip from '@material-ui/core/Chip';
import './transcript-details.wrapper.scss';
import {TranscriptDialogList} from "./transcript-dialog-list.wrapper";

export function TranscriptDetailsWrapper(props) {
    return (
        <div className="transcript-details">
            <div className="transcript-details-header">
                <div className="transcript-details-header-title">
                    Transcript
                </div>
                <div className="transcript-details-header-current">
                    <span className="text-label">Now</span>
                    <Chip size='small' label="05:00" variant="outlined"/>
                </div>
            </div>
            <div>
                <TranscriptDialogList transcript={props.transcript}/>
            </div>
        </div>

    )
}