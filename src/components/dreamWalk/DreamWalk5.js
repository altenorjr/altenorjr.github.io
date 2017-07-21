import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import Logo from '../Logo';
import Highlight from '../Highlight';
import DescriptionText from '../DescriptionText';
import Title from '../Title';
import Carousel from '../Carousel';
import withDimensions, { atLeast, is } from '../hoc/withDimensions';

import styles from './DreamWalk5.css';

@withDimensions
export default class DreamWalk5 extends PureComponent {

    images = [
        "/img/pubs-lp-1.png",
        "/img/pubs-lp-2.png",
        "/img/pubs-lp-3.png"
    ]

    render = () => {
        const iphone = {
            width: '300px'
        };

        const lpStyle = { height: '300px' };

        return (
            <Flexbox
                flexDirection="column"
                alignItems="center"
                paddingTop={is('sm', this) ? '150px' : '75px'}
                paddingBottom={is('sm', this) ? '50px' : '100px'}
                className={styles.container}>
                <Flexbox
                    width={is('sm', this) ? '90vw' : '80vw'}
                    flexDirection={is('sm', this) ? 'column' : 'row'}
                    alignItems="center">
                    <Flexbox
                        order={is('sm', this) ? 2 : 1}
                        flexBasis={is('sm', this) ? '40%' : 'auto'}
                        justifyContent="flex-end"
                        alignItems="center"
                        paddingRight={is('sm', this) ? '0' : '50px'}
                        style={{
                            boxSizing: 'border-box'
                        }}>
                        <img src="/img/pubs-iphone.png" alt="" style={iphone} />
                    </Flexbox>
                    <Flexbox
                        order={is('sm', this) ? 1 : 2}
                        flexBasis={is('sm', this) ? '60%' : 'auto'}
                        justifyContent="space-around"
                        flexDirection="column">
                        <Logo
                            src="/img/pubs-logo-1.png"
                            align={is('sm', this) ? 'center' : 'left'} />
                        <Highlight
                            line1="Great Aussie Pubs:"
                            line2="Public Service!"
                            size={50}
                            invert={true}
                            lightMode={true}
                            align={is('sm', this) ? 'center' : 'left'}
                            margin="10px 0 0 0" />
                        <Title mode="small"
                            lightMode={true}
                            align={is('sm', this) ? 'center' : 'left'}
                            margin="10px 0 10px 0">#1 Music App Worldwide</Title>
                        <DescriptionText
                            lightMode={true}
                            align={is('sm', this) ? 'center' : 'left'}
                            margin="10px 0 0 0"
                            size={29}
                            width="100%">
                            Since it’s recent release, Jam has been the the number one music app in 26 countries on iTunes, including Australia, New Zealand, USA and Canada.
                        </DescriptionText>
                    </Flexbox>
                </Flexbox>
                {
                    atLeast('md', this) && (
                        <Flexbox
                            justifyContent="space-around"
                            marginTop="100px"
                            width="650px">
                            {
                                this.images.map((img, i) => <img src={img} style={lpStyle} alt="" key={i} />)
                            }
                        </Flexbox>
                    )
                }
                {
                    is('sm', this) && (
                        <Carousel
                            margin={50}
                            viewsToShow={1.5}
                            align={0.6}>
                            {this.images.map((image, i) => <img alt="" style={lpStyle} key={i} src={image} />)}
                        </Carousel>
                    )
                }
            </Flexbox>
        );
    }
}