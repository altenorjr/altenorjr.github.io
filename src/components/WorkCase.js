import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-look';
import { Link, withRouter } from 'react-router-dom';

import Title from './Title';
import Highlight from './Highlight';
import DescriptionText from './DescriptionText';
import withDimensions, { height, atLeast, atMost } from './hoc/withDimensions';

const cx = StyleSheet.combineStyles;

@withDimensions
@withRouter
export default class WorkCase extends PureComponent {
    static propTypes = {
        i: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        link: PropTypes.string,
        bgColor: PropTypes.string.isRequired,
        bgPositionLg: PropTypes.string.isRequired,
        bgPositionSm: PropTypes.string.isRequired,
        bgSize: PropTypes.string.isRequired,
        bgSizeSm: PropTypes.string.isRequired,
        range: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        desc: PropTypes.string.isRequired,
        lightMode: PropTypes.bool
    };

    static defaultProps = {
        bgSize: 'contain',
        lightMode: false
    }

    nextPanel = () => height(this) * (this.props.i + 1);
    prevPanel = () => height(this) * (this.props.i - 1);

    render() {
        return (
            <div
                className={cx(styles.case, styles[`case_${this.props.id}`])}
                style={{
                    backgroundColor: atLeast('lg', this) ? 'transparent' : this.props.bgColor,
                    backgroundImage: atLeast('lg', this) ? 'none' : `url(${this.props.img})`
                }}>
                <div
                    className={cx(styles.imageBox, styles[`imageBox_${this.props.id}`])}
                    style={{
                        backgroundColor: atMost('md', this) ? 'transparent' : this.props.bgColor,
                        backgroundImage: atMost('md', this) ? 'transparent' : `url(${this.props.img})`
                    }}>
                </div>
                <div
                    className={styles.contentBox}
                    style={{
                        backgroundColor: atLeast('lg', this) ? '#E5E5E5' : 'transparent'
                    }}>
                    <Title
                        mode="small"
                        lightMode={this.props.lightMode}
                        align="left">
                        {this.props.range}
                    </Title>
                    <Highlight
                        line1={this.props.type}
                        line2={this.props.title}
                        lightMode={this.props.lightMode}
                        invert={true}
                        align="left"
                        margin="10px 0 0 0" />
                    {
                        atLeast('md', this) && (
                            <DescriptionText
                                lightMode={this.props.lightMode}
                                align="left"
                                margin="30px 0"
                                size={22}
                                width="550px">
                                {this.props.desc}
                            </DescriptionText>
                        )
                    }
                    {
                        this.props.link && (
                            <Link to={`${this.props.location.pathname}/${this.props.link}`}>
                                <img src={`/img/arrow-right${this.props.lightMode ? '-white' : ''}.png`} alt="View more" />
                            </Link>
                        )
                    }
                    {
                        !this.props.link && (
                            <Title
                                mode="small"
                                lightMode={this.props.lightMode}>
                                Coming Soon
                            </Title>
                        )
                    }
                </div>
            </div>
        );
    }
};

const styles = StyleSheet.create({
    case: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '80%',        
        "@media (max-width: 768px)": {
            flexDirection: "column",
            justifyContent: 'space-around'
        }
    },
    case_alphanation: {
        backgroundSize: 'cover'
    },
    imageBox: {
        width: "auto",
        height: "100vh",
        overflow: 'hidden',
        flexBasis: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 20vh',
        backgroundSize: '80%',
        "@media (max-width: 768px)": {
            display: "none"
        }
    },
    imageBox_alphanation: {
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    imageBox_img_alphanation: {
        backgroundColor: 'transparent',
        backgroundPosition: "center center",
        "@media (max-width: 768px)": {
            position: 'absolute',
            backgroundColor: 'transparent',
        }
    },
    contentBox: {
        width: "50vw",
        backgroundColor: "#E5E5E5",
        padding: "0 25px 0 25px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'relative',
        "@media (max-width: 768px)": {
            width: "100vw",
            marginTop: "60vh"
        }
    },
    center: {
        textAlign: "center",
    },
    strong: {
        fontWeight: 700
    }
});