import React, { PureComponent } from 'react';
import Flexbox from 'flexbox-react';
import Title from '../Title';
import Carousel from '../Carousel';
import DescriptionText from '../DescriptionText';
import withDimensions, { atLeast, atMost, width } from '../hoc/withDimensions';

@withDimensions
export default class Iridium10 extends PureComponent {
    images = [
        "/img/iridium-lps-1.png",
        "/img/iridium-lps-2.png" ,
        "/img/iridium-lps-3.png",
        "/img/iridium-lps-4.png"
    ]

    render = () => {
        const imgStyle = { height: '350px' };

        return (
            <Flexbox
                width="100vw"
                height="100vh"
                flexDirection="column"
                alignItems="center"
                justifyContent="center">
                <Flexbox
                    flexDirection="column"
                    width={atLeast('lg', this) ? "50vw" : "90vw"}>
                    <Title mode="small">
                        UI, UX and Website Design
                    </Title>
                    <DescriptionText
                        width="100%"
                        size={23}
                        margin="30px 0 0 0"
                        align="left">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    </DescriptionText>
                </Flexbox>
                {
                    atLeast('lg', this) && (
                        <Flexbox
                            width="80vw"
                            justifyContent="space-around"
                            marginTop="50px"
                            alignItems="center">
                            {
                                this.images.map((src, i) => (
                                    <img style={imgStyle} key={i} alt="" src={src} />
                                ))
                            }
                        </Flexbox>
                    )
                }
                {
                    atMost('md', this) && (
                        <Carousel
                            margin={atMost('md', this) ? 20 : 50}
                            viewsToShow={atMost('sm', this) ? 1.5 : (width(this) / 270) - 2}
                            align={atMost('md', this) ? 0.5 : 0.75}>
                            {
                                this.images.map((src, i) => (
                                    <img style={imgStyle} key={i} alt="" src={src} />
                                ))
                            }
                        </Carousel>
                    )
                }
            </Flexbox>
        );
    }
}