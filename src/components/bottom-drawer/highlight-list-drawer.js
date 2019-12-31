import React from 'react';
import {Drawer} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import HighlightCard from "../card/card";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import './bottom-drawer.scss';

const drawerWidth = '100%';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#444444 !important',
        color: 'white !important',
        'border-top-left-radius': '12px',
        'border-top-right-radius': '12px',
        'box-shadow': '0px -4px 8px 0 rgba(0,0,0,.2)!important'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        background: '#444444 !important',
        // padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
        padding: '0px 8px',
        'border-bottom': '1px solid #CFCFCF',
        'margin-bottom': '18px',
        'min-height': "50px !important"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        background: 'red !important',
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
        background: 'red !important',
    },
}));
let resizeHandlerAttached = false;
let count = 0;
let stepCount = 0;
export function HighlightListDrawer({highlights}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let carousalWidth = 200;

    const myRef = React.createRef();
    const showLeft = React.createRef();
    const showRight = React.createRef();
    let $showLeft;
    let $showRight;
    let carouselContainer;

    let itemToShow = 0;
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const resizeHandler = () => {
        moveCarousel(null, true);
    };
    if (!resizeHandlerAttached) {
        window.addEventListener('resize', resizeHandler);
        resizeHandlerAttached = true;
    }
    React.useEffect(() => {
        initializeCarousalVar();
        checkControlVisibility()
    }, []);

    const checkControlVisibility = () => {
        if ($showLeft && $showRight) {
            if ((stepCount * -1 + 1) > count - itemToShow) {
                $showRight.style.display = 'none';
            } else {
                $showRight.style.display = 'block';
            }
            if (stepCount >= 0) {
                $showLeft.style.display = 'none';
            } else {
                $showLeft.style.display = 'block';
            }
        }
    };

    const initializeCarousalVar = () => {
        carouselContainer = carouselContainer || myRef.current;
        $showLeft = $showLeft || showLeft.current;
        $showRight = $showRight || showRight.current;
        if (carouselContainer) {
            const length = carouselContainer.querySelector('.item').clientWidth;
            const parentWidth = carouselContainer.parentElement.offsetWidth;
            count = carouselContainer.querySelectorAll('.item').length;
            itemToShow = Math.floor(parentWidth / (length + 16));
        }
    }

    const moveCarousel = (arg, reset = false) => {

        carouselContainer = carouselContainer || myRef.current;
        if(!carouselContainer){
            return;
        }
        $showLeft = showLeft.current;
        $showRight = showRight.current;
        initializeCarousalVar();
        if (stepCount + arg > 0) {
            return;
        }
        const length = carouselContainer.querySelector('.item').clientWidth;
        count = carouselContainer.querySelectorAll('.item').length;
        stepCount = stepCount + arg;
        carousalWidth = length;
        const offset = (carousalWidth + 16) * stepCount;
        if (reset === true) {
            carouselContainer.style.transform = `translateX(0px)`;
            $showLeft = carouselContainer.parentElement.querySelector('.control-right');
            $showRight = carouselContainer.parentElement.querySelector('.control-left');
            // $showLeft.style.display = "none";
            stepCount = 0;
            // count = 0;
        }
        else if (stepCount * -1 <= count - itemToShow) {
            carouselContainer.style.transform = `translateX(${offset}px)`;
        }
        setTimeout(() => {
            checkControlVisibility();
        }, 500);
        console.log(stepCount);

    };
    return (
        <div>
            <div className="fixed-drawer">
                <div className="top-highlights">
                    <div className="text">
                        SEE TOP HIGHLIGHTS
                    </div>
                </div>
                <Chip label="01:03" size="small"></Chip>
                <div className="drawerHeader-title">
                    <Typography variant="h6">
                        HIGHLIGHTS
                    </Typography>
                </div>
                <IconButton onClick={handleDrawerOpen} color={"primary"}>
                    <KeyboardArrowUpIcon/>
                </IconButton>
            </div>
            <Drawer
                elevation={3}
                className={classes.drawer}
                variant="persistent"
                anchor="bottom"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <div className="top-highlights">
                        SEE TOP HIGHLIGHTS
                    </div>
                    <div className="drawerHeader-title tab">
                        <Chip label="01:03" size="small"></Chip>
                        <div>
                            HIGHLIGHTS
                        </div>
                        <div className='bar'></div>
                    </div>
                    <IconButton onClick={handleDrawerClose} color={"primary"}>
                        <KeyboardArrowDownIcon/>
                    </IconButton>
                </div>
                <div className="card-carousal-wrapper">
                    <div className="card-carousal">
                        <div className="control control-left" ref={showRight}
                             onClick={moveCarousel.bind(null, -1)}>
                            <ChevronRightRoundedIcon></ChevronRightRoundedIcon>
                        </div>
                        <div className="control control-right" ref={showLeft}
                             onClick={moveCarousel.bind(null, 1)}>
                            <ChevronLeftRoundedIcon></ChevronLeftRoundedIcon>
                        </div>
                        <div className="card-carousal-inner" ref={myRef}>
                            {
                                highlights.map((highlight) => {
                                    return (
                                        <div
                                            key={highlight.key}
                                            className="item"><HighlightCard highlights={highlights}
                                                                            closeDrawerFn={handleDrawerClose}
                                                                            highlight={highlight}/></div>
                                    )
                                })
                            }
                            <div className="m-2"></div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

