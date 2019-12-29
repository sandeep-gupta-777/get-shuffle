import React from 'react';
import './App.scss';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from "@material-ui/core";
import {PodcastDetails} from "./components/podcast/podcast-details-wrapper";
import {TranscriptDetailsWrapper} from "./components/transcript/transcript-details.wrapper";
import Divider from '@material-ui/core/Divider';
import {HighlightListDrawer} from "./components/bottom-drawer/highlight-list-drawer";
import {podcast} from './podcast-data'
/*
* Overriding the default theme
* */
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF4B41',
        },
        secondary: {
            main: '#888888',
        },
    },
});


function App() {
    return (
        /*apply the theme for whole application*/
        <ThemeProvider theme={theme}>
            <div className="App">
                <div className="App-container">
                    <div className="audio-player-wrapper">
                        <PodcastDetails podcast={podcast}></PodcastDetails>
                        <Divider/>
                        <TranscriptDetailsWrapper transcript={podcast.transcript}></TranscriptDetailsWrapper>
                        <Divider/>
                    </div>
                </div>
                <HighlightListDrawer highlights={podcast.highlights}/>
            </div>
        </ThemeProvider>
    );
}

export default App;