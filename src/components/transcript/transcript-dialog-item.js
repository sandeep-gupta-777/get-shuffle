import React from 'react';
import Chip from '@material-ui/core/Chip';
import './transcript-dialog-item.scss';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export function TranscriptDialogItem({transcriptItem}) {
    const classes = useStyles();
    return (
        <div className={classes.root + " transcript-dialog-item"}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2} md={1}>
                    <Chip size='small' variant="default"  color={"default"} label={transcriptItem.time}/>
                </Grid>
                <Grid item xs={12} sm={10} md={11}>
                    <span className="transcript-dialog-item-speaker">
                        {transcriptItem.speaker}
                    </span>
                    <span>: </span>
                    <p className="transcript-dialog-item-dialog">
                        {transcriptItem.summary}
                    </p>
                </Grid>
            </Grid>
        </div>

    )
}