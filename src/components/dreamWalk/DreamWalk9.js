import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import MediaQuery from 'react-responsive';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FullSizeContainer from '../FullSizeContainer';
import CenteredContent from '../CenteredContent';
import Logo from '../Logo';
import Highlight from '../Highlight';
import DescriptionText from '../DescriptionText';
import SmallTitle from '../SmallTitle';
import HorizontalCenter from '../HorizontalCenter';
import VerticalAlign from '../VerticalAlign';
import Carousel from '../Carousel';

import withDimensions, { is, atLeast } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withDimensions(class DreamWalk9 extends PureComponent {

    images = [
        "/img/all-lps-1.png",
        "/img/all-lps-2.png",
        "/img/all-lps-3.png",
        "/img/all-lps-5.png",
        "/img/all-lps-6.png",
        "/img/all-lps-8.png",
        "/img/all-lps-9.png",
        "/img/all-lps-1.png",
        "/img/all-lps-2.png",
        "/img/all-lps-3.png",
        "/img/all-lps-5.png",
        "/img/all-lps-6.png",
        "/img/all-lps-8.png",
        "/img/all-lps-9.png",
        // "/img/all-lps-4.png",
        // "/img/all-lps-7.png",
        // "/img/all-lps-10.png"
    ]

    render = () => {
        const all = { 
            width: '1000px',
            marginTop: '100px'
        };

        const imgStyle = { height: '300px' };

        return (
            <Flexbox
                flexDirection="column"
                alignItems="center"
                paddingTop={ is('sm', this) ? '75px' : '150px' }
                paddingBottom={ is('sm', this) ? '25px' : '50px' }
                style={{
                    backgroundColor: "#FFF"
                }}>

                <Highlight
                    line1="JAM for iPhone:"
                    line2="Become a Rockstar!"
                    invert={true}
                    margin={0} />
                <SmallTitle
                    margin={10}
                    align="center">
                    #1 Music App Worldwide
                    </SmallTitle>

                <DescriptionText>
                    Since it’s recent release, Jam has been the the number one music app in 26 countries on iTunes, including Australia, New Zealand, USA and Canada.
                    </DescriptionText>

                {
                    atLeast('md', this) && (
                        <img style={all} src="/img/all-lps-all.png" />
                    )
                }
                {
                    is('sm', this) && (
                        <Carousel
                            margin={20}
                            viewsToShow={1.5}
                            align={0.6}>
                            {this.images.map((image, i) => <img style={imgStyle} key={i} src={image} />)}
                        </Carousel>
                    )
                }
            </Flexbox>
        );


    }
}))