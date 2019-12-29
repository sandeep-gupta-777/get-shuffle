import React from 'react';
import './transcript-details.wrapper.scss';
import {TranscriptDialogItem} from "./transcript-dialog-item";

export function TranscriptDialogList(props) {

    return (
        <div className="transcript-dialog-list">
            {
                props.transcript.map((transcriptItem)=>{
                    return (
                        <TranscriptDialogItem key={transcriptItem.key} transcriptItem={transcriptItem}></TranscriptDialogItem>
                    )
                })
            }

        </div>
    )
}