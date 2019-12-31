import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import ChatIcon from '@material-ui/icons/Chat';
import './card.scss'
import TransitionsModal from "../video/video-container";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 1:1
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
        height: '24.5px',
        width: '24.5px',
    },
}));

export default function HighlightCard(props) {

    let {highlights, highlight, hideFooter, isModal, closeDrawerFn} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    if (!Array.isArray(highlights)) {
        highlights = [highlights];
    }else {
        highlights = highlights.filter(e => e.key !== highlight.key);
        highlights = [highlight, ...highlights];
    }
    highlight = highlight || highlights[0];
    const modalOpenHandler = () => {
        if(isModal){
            return;
        }
        setOpen(!open);
    }
    const modalCloseHandler = () => {
        setOpen(false);
    }

    return (
        <div className="comment-card">
            {open ? <TransitionsModal highlights={highlights} closeDrawerFn={closeDrawerFn} closeFn={modalCloseHandler}  open={open}/> : ''}
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    component={
                        ((arg) => {
                            return (
                                <div className="card-media-image" onClick={modalOpenHandler}>
                                    <img src="highlight.png" alt=""/>
                                    <div className="overlay">
                                        <div className="play-icon">
                                            <PlayArrowRoundedIcon></PlayArrowRoundedIcon>
                                        </div>
                                        <h2 className="title">{arg.text}</h2>
                                        <div className="intro">
                                            <div className="title">The Joe Rogan Experience</div>
                                            <div className="description">#1309 - Naval Ravikant</div>
                                        </div>
                                    </div>
                                </div>)
                        }).bind(null, highlight)
                    }
                />
                {hideFooter ? '' : <CardContent>
                    <div className="card-content">
                        <div className="poster">
                            <img src="thumbnail_sample.png" alt=""/>
                            <div>{highlight.name}</div>
                        </div>
                        <div className="class-actions-wrapper">
                            <div className="class-actions">
                                <ChatIcon fontSize={"small"}></ChatIcon>
                                <Typography variant="caption" display="block" gutterBottom>
                                    {highlight.comments.length} Comments
                                </Typography>
                            </div>
                            <div className="class-actions">
                                <ChatIcon fontSize={"small"}></ChatIcon>
                                <Typography variant="caption" display="block" gutterBottom>
                                    {highlight.likes} Likes
                                </Typography>
                            </div>
                        </div>
                    </div>
                </CardContent>}
            </Card>
        </div>
    );
}
