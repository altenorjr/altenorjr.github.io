import React, { PureComponent } from 'react';
import MediaQuery from 'react-responsive';

import FullSizeContainer from '../FullSizeContainer';
import CenteredContent from '../CenteredContent';
import Carousel from '../Carousel';
import Highlight from '../Highlight';
import DescriptionText from '../DescriptionText';
import JamBadge from '../JamBadge';

export default class DreamWalk7 extends PureComponent {
    images = [
        "/img/asialinks-lp-4.png",
        "/img/asialinks-lp-5.png",
        "/img/asialinks-lp-1.png",
        "/img/asialinks-lp-2.png",
        "/img/asialinks-lp-3.png",
        "/img/asialinks-lp-4.png",
        "/img/asialinks-lp-5.png",
        "/img/asialinks-lp-1.png",
        "/img/asialinks-lp-2.png",
        "/img/asialinks-lp-3.png"        
    ]

    render = () => {
        const smallImage = { width: '90%' };

        return (
            <FullSizeContainer
                bgColor="#FFF"
                bgImage="/img/asialinks-ipad-bottom.png"
                bgImageSm="/img/asialinks-ipad.png"
                bgPosition="center top"
                bgSize="1300px"
                bgSizeSm="150%"
                bgPositionSm="center 10%">
                <CenteredContent
                    width={100}
                    widthSm={100}
                    widthUnit="%"
                    height={270}
                    heightSm={215}
                    style={{
                        top: 'auto',
                        bottom: '10%'
                    }}
                    styleSm={{
                        top: 'auto',
                        bottom: '7.5%'
                    }}>
                    <MediaQuery minDeviceWidth={640}>
                        <Carousel viewsToShow={(window.innerWidth/270) - 2} align={0.75}>
                            {
                                this.images.map((img, i) => 
                                    (<img src={img} key={i} alt="" />))
                            }
                        </Carousel>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={639}>
                        <Carousel
                            viewsToShow={1.5}
                            align={0.6}
                            margin={20}>
                            {
                                this.images.map(
                                    (img, i) => <img style={smallImage} src={img} key={i} alt="" />
                                )
                            }
                        </Carousel>
                    </MediaQuery>
                </CenteredContent>
            </FullSizeContainer>
        );
    }
}