import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Flexbox from 'flexbox-react';
import CenteredContent from '../CenteredContent';
import Loud from '../Loud';
import SmallTitle from '../SmallTitle';
import Carousel from '../Carousel';
import DescriptionText from '../DescriptionText';
import withDimensions, { is, atLeast, atMost, width } from '../hoc/withDimensions';

export default withDimensions(class Iridium11 extends PureComponent {
    render = () => {
        return (
            <Flexbox
                width="100vw"
                height="100vh"
                flexDirection="column"
                alignItems="center"
                justifyContent="center">
                <Flexbox
                    flexDirection="center"
                    justifyContent="center"
                    alignItems="space-around"
                    width="100vw">
                    <Flexbox
                        flexDirection="column"
                        width="50%">
                        <SmallTitle>
                            UI, UX and Website Design
                        </SmallTitle>
                        <DescriptionText
                            width="100%"
                            size={23}
                            margin="30px 0 0 0"
                            align="left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        </DescriptionText>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        );
    }
})