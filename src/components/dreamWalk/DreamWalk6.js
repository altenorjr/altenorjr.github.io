import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import FullSizeContainer from '../FullSizeContainer';
import CenteredContent from '../CenteredContent';
import Logo from '../Logo';
import Highlight from '../Highlight';
import DescriptionText from '../DescriptionText';
import JamBadge from '../JamBadge';
import Carousel from '../Carousel';
import withDimensions, { atLeast, atMost, is, width, height } from '../hoc/withDimensions';
import { sparkScrollFactory } from '../Spark';

export default sparkScrollFactory(withDimensions(class DreamWalk6 extends PureComponent {
    ipad = { height: '100vh' }
    img = {
        width: '90%'
    }
    render = () => (
        <Flexbox
            flexDirection="column"
            alignItems="center"
            paddingTop={is('sm', this) ? '75px' : '125px'}
            paddingBottom={is('sm', this) ? '25px' : '50px'}
            width="100vw"
            style={{
                boxSizing: "box-border"
            }}>
            <Logo src="/img/asialinks-logo-1.png" />
            <Highlight
                line1="JAM for iPhone:"
                line2="Become a Rockstar!"
                margin={`0 0 ${atMost('md', this) ? 20 : 50} 0`}
                invert={true} />
            <JamBadge lightMode={false} />
            <DescriptionText>
                Since it’s recent release, Jam has been the the number one music app in 26 countries on iTunes, including Australia, New Zealand, USA and Canada.
            </DescriptionText>
            <img src="/img/asialinks-ipad.png" style={this.ipad} alt="" />
            <Carousel
                margin={atMost('md', this) ? 20 : 50}
                viewsToShow={atMost('sm', this) ? 1.5 : (width(this) / 270) - 2}
                align={atMost('md', this) ? 0.5 : 0.75}>
                <img style={this.img} src="/img/asialinks-lp-1.png" />
                <img style={this.img} src="/img/asialinks-lp-2.png" />
                <img style={this.img} src="/img/asialinks-lp-3.png" />
                <img style={this.img} src="/img/asialinks-lp-4.png" />
                <img style={this.img} src="/img/asialinks-lp-5.png" />
                <img style={this.img} src="/img/asialinks-lp-1.png" />
                <img style={this.img} src="/img/asialinks-lp-2.png" />
                <img style={this.img} src="/img/asialinks-lp-3.png" />
                <img style={this.img} src="/img/asialinks-lp-4.png" />
                <img style={this.img} src="/img/asialinks-lp-5.png" />                
            </Carousel>            
        </Flexbox>
    )
}))