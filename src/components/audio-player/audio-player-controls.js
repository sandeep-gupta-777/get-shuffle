import React from 'react';
import Slider from "@material-ui/core/Slider";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Forward5Icon from '@material-ui/icons/Forward5';
import Replay5Icon from '@material-ui/icons/Replay5';
import {withStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import './audio-player-controls.scss'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ShareIcon from '@material-ui/icons/Share';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';

const PrettoSlider = withStyles({
    root: {},
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -10,
        marginLeft: -12,
        display: 'none',
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 4,
        // borderRadius: 2,
    },
    rail: {
        height: 4,
        // borderRadius: 2,
    },
})(Slider);

export function AudioPlayerControls() {
    const marks = [
        {
            value: 0,
            label: '34:00',
        },
        {
            value: 100,
            label: '2:11:56',
        },
    ];
    return (
        <div className="audio-controls" id="audio-controls">
            <div className="mode-normal">
                <div className="audio-slider">
                    <PrettoSlider
                        aria-label="custom thumb label"
                        defaultValue={20}
                        marks={marks}
                    />
                </div>
                <div className="play-button-lg">
                    <PlayCircleFilledIcon color="primary"></PlayCircleFilledIcon>
                </div>
                <div className="control-wrapper-lg">
                    <Replay5Icon></Replay5Icon>
                    <Forward5Icon></Forward5Icon>
                    <Chip className='control-speed' size="small" label="1.25x" variant={"outlined"}/>
                    <VolumeUpOutlinedIcon></VolumeUpOutlinedIcon>
                    <div className="ml-auto"></div>
                    <span className="control-time">34:00 | 2:11:56</span>
                    <ShareIcon></ShareIcon>
                </div>
                <div className="control-wrapper">
                    <Replay5Icon color="primary"></Replay5Icon>
                    <PlayCircleFilledIcon className="play-button" color="primary"></PlayCircleFilledIcon>
                    <Forward5Icon color="primary"></Forward5Icon>
                    <Chip className='control-speed' size="small" label="1.25x"/>
                </div>
            </div>
            <div className="mode-fix">
                <div className="control-container">
                    <div className="thumbnail">
                        <img src="thumbnail_sample.png" alt=""/>
                    </div>
                    <div className="play">
                        <PlayCircleFilledIcon className="play-button" color="primary"></PlayCircleFilledIcon>
                    </div>
                    <div className="title">
                        <div className="title">The Joe Rogan experience</div>
                        <div className="number">#1309 - Naval Ravikant</div>
                    </div>
                    <div className="play-big">
                        <div className="play-big-container">
                            <div className="time">
                                12:00 / 14:00
                            </div>
                            <Replay5Icon color="primary"></Replay5Icon>
                            <PlayCircleFilledIcon className="play-button" color="primary"></PlayCircleFilledIcon>
                            <Forward5Icon color="primary"></Forward5Icon>
                            <Chip className='control-speed' size="small" label="1.25x"/>
                        </div>
                    </div>
                    <div className="control-big">
                        <div className="control-volume">
                            <VolumeUpIcon color='primary'></VolumeUpIcon>
                        </div>
                        <Slider value={60} aria-labelledby="continuous-slider"/>
                        <div className="control-volume">
                            <ShareIcon color="primary"></ShareIcon>
                        </div>
                    </div>
                    <div className="controls">
                        <Replay5Icon color="primary"></Replay5Icon>
                        <Forward5Icon color="primary"></Forward5Icon>
                    </div>
                </div>
                <div>
                    <div className="audio-slider">
                        <PrettoSlider
                            aria-label="custom thumb label"
                            defaultValue={20}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}