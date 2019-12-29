import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./video-container.scss";
import HighlightCard from "../card/card";
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";
import MessageIcon from '@material-ui/icons/Message';
import CloseIcon from '@material-ui/icons/Close';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal(props) {
    const classes = useStyles();
    const highlights = props.highlights;
    let openProp = props.open;
    const myRef = React.createRef();
    console.log(openProp);
    const [open, setOpen] = React.useState(true);
    const [count, setCount] = React.useState(props.count || 0);
    const [item, setItem] = React.useState(0);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
        if(props.closeFn){
            props.closeFn();
        }
    };
    const moveCarousel = (arg) => {

        const el = myRef.current;
        const itemCount = el.querySelectorAll(".item").length
        setItem(itemCount);
        const offset = el.querySelector(".item").offsetWidth * (count - arg);
        el.style.transform = `translateX(${offset}px)`;
        setCount(count - arg);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className='modal-content-wrapper'>
                        <div className="modal-control modal-control-close" onClick={handleClose}>
                            <CloseIcon></CloseIcon>
                        </div>
                        {count*-1 > 0 ?
                            <div className="modal-control modal-control-right" onClick={moveCarousel.bind(null, -1)}>
                                <ChevronLeftIcon></ChevronLeftIcon>
                            </div>
                            : ""
                        }
                        {
                            (count === 0 || ((count*-1)) < item-1) ?
                                <div className="modal-control modal-control-left" onClick={moveCarousel.bind(null, 1)}>
                                    <ChevronRightIcon></ChevronRightIcon>
                                </div>
                                : ""
                        }
                        <div className='modal-content'>
                            <div className="modal-content-inner" ref={myRef}>
                                {
                                    highlights.map((highlight)=>{
                                        return (
                                            <div className="item" key={highlight.key}>
                                                <div className="video-content"><HighlightCard highlights={highlight}
                                                                                              highlight={highlight}
                                                                                              isModal={true}
                                                                                              hideFooter={true}/></div>
                                                <div className="right">
                                                    <div className="row">
                                                        <img src={highlight.pic} alt=""/>
                                                        <div className="user-name">
                                                            {highlight.name}
                                                        </div>
                                                        <div className="count">50</div>
                                                    </div>
                                                    <div className="comment-divider">
                                                        <span className="comment-count">{highlight.comments.length} Comments</span>
                                                        <Divider/>
                                                    </div>
                                                    {
                                                        highlight.comments.map((highlightItem)=>{
                                                            return (<div className="comment-item" key={highlightItem.key}>
                                                                <div className="intro">
                                                                    <img src={highlightItem.pic} alt=""/>
                                                                    <Typography variant="subtitle1">
                                                                        {highlightItem.name}
                                                                    </Typography>
                                                                    <div className="date">
                                                                        {highlightItem.date}
                                                                    </div>
                                                                </div>
                                                                <div className="comment-text">
                                                                    {highlightItem.text}
                                                                </div>
                                                                <div className="comment-info">
                                                                    <MessageIcon></MessageIcon>
                                                                    <div>
                                                                        Reply
                                                                    </div>
                                                                </div>
                                                            </div>)
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

