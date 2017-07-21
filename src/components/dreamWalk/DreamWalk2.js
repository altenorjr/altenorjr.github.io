import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';
import Youtube from 'react-youtube';

import Logo from '../Logo';
import Highlight from '../Highlight';
import DescriptionText from '../DescriptionText';
import JamBadge from '../JamBadge';
import withDimensions, { atLeast, atMost, is, width, height } from '../hoc/withDimensions';
import { sparkScrollFactory, SparkScroll } from '../Spark';

import styles from './DreamWalk2.css';

@sparkScrollFactory
@withDimensions
export default class DreamWalk2 extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }    
    
    state = {
        loadingVideo: true
    }

    onVideoReady = (event) => {
        this.videoPlayer = event.target;
        this.videoPlayer.setVolume(0);
        this.videoPlayer.playVideo();
        setTimeout(() => {
            this.videoPlayer.pauseVideo();

            this.setState(() => ({ loadingVideo: false }));
        }, 300);
    }

    onVideoEnd = (event) => {
        event.target.seekTo(22);
        event.target.playVideo();
    }

    frameWidth = () => width(this);
    frameHeight = () => atLeast('md', this) ? width(this) / (16 / 9) : height(this);
    iphoneHeight = () => atMost('sm', this) ? this.frameWidth() / (640 / 1305) : 1305;
    iphoneHeightOffset = () => this.frameHeight() > 650 ? 125 : 0;
    contentBoxHeight = () => this.frameHeight() + this.iphoneBoxHeight();
    iphoneBoxHeight = () => this.iphoneHeight() - this.iphoneHeightOffset();
    iphoneBoxHeightOffset = () => this.frameHeight() - this.iphoneHeightOffset();

    playVideo = (play, up) => {
        if (this.state.loadingVideo) {
            return;
        }

        this.props.setTopBarLightMode(!play && up);
        
        this.videoPlayer && this.videoPlayer[`${play ? 'play' : 'pause'}Video`]();
    }

    render = () => (
        <Flexbox
            flexDirection="column"
            alignItems="center"
            height={`${this.contentBoxHeight()}px`}
            minHeight={`${this.contentBoxHeight()}px`}
            className={styles.container}>
            {
                atLeast('md', this) && (
                    <SparkScroll.div
                        className={styles.video}
                        timeline={{
                            [`topBottom+1`]: {
                                onDown: () => this.playVideo(true, false),
                                onUp: () => this.playVideo(false, true)
                            },
                            [`bottomTop`]: {
                                onDown: () => this.playVideo(false, false),
                                onUp: () => this.playVideo(true, true)
                            }
                        }}>
                        <Youtube
                            videoId="K8kQB88HtQg"
                            onReady={this.onVideoReady}
                            onEnd={this.onVideoEnd}
                            opts={{
                                width: this.frameWidth(),
                                height: this.frameHeight(),
                                playerVars: {
                                    modestbranding: true,
                                    controls: 0,
                                    showinfo: 0,
                                    rel: 0,
                                    autoplay: 0,
                                    disablekb: 1,
                                    loop: 1,
                                    start: 22,
                                    end: 70,
                                    iv_load_policy: 3,
                                    stretch: "16:9"
                                }
                            }} />
                    </SparkScroll.div>
                )
            }
            <Flexbox
                className={styles.content}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width={`${this.frameWidth()}px`}
                height={`${this.frameHeight()}px`}>
                <Logo
                    src="/img/jam-logo-1.png"
                    style={{ marginTop: is('md', this) ? '20px' : '0' }} />
                <Highlight
                    line1="JAM for iPhone:"
                    line2="Become a Rockstar!"
                    lightMode={true}
                    margin="30px 0 30px 0"
                    invert={true} />
                <JamBadge lightMode={true} />
                <DescriptionText
                    width={atMost('md', this) ? '100%' : '865px'}
                    lightMode={true}>
                    Since it’s recent release, Jam has been the the number one music app in 26 countries on iTunes, including Australia, New Zealand, USA and Canada.
                </DescriptionText>
            </Flexbox>
            <div>
                <img src="/img/jam-iphone.png"
                    className={styles.iphone}
                    style={{
                        top: `${this.iphoneBoxHeightOffset()}px`
                    }}
                    alt="" />
            </div>
        </Flexbox>
    )
}