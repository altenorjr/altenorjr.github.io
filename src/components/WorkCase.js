import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import cx from 'classnames';
import Flexbox from 'flexbox-react';

import MediaQuery from 'react-responsive';
import { Link, withRouter } from 'react-router-dom';

import withDimensions, { is, scrollTo, height, atLeast } from './hoc/withDimensions';
import { sparkScrollFactory } from './Spark';
import SmallTitle from './SmallTitle';
import Highlight from './Highlight';
import DescriptionText from './DescriptionText';

import styles from './WorkCase.css';

const SCFlexbox = sparkScrollFactory(Flexbox);
export default withRouter(sparkScrollFactory(withDimensions(class WorkCase extends PureComponent {
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
        light: PropTypes.bool
    };

    static defaultProps = {
        bgSize: 'contain'
    }

    nextPanel = () => height(this) * (this.props.i + 1);
    prevPanel = () => height(this) * (this.props.i - 1);

    render() {
        return (

            <SCFlexbox
                width="100vw"
                height="100vh"
                className={styles.case}
                timeline={{
                    'bottomBottom+100': {
                        onDown: () => scrollTo(this.nextPanel())
                    },
                    'topTop-100': {
                        onUp: () => scrollTo(this.prevPanel())
                    }
                }}>
                <Flexbox
                    className={cx(styles.imageBox, styles[`imageBox_${this.props.id}`])}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    flexBasis={is('sm', this) ? '100vw' : '50vw'}
                    style={{
                        backgroundColor: this.props.bgColor
                    }}>
                    <img src={this.props.img} alt="" />
                </Flexbox>
                <Flexbox
                    className={styles.contentBox}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    flexBasis="50vw">
                    <SmallTitle
                        align="left">
                        {this.props.range}
                    </SmallTitle>
                    <Highlight
                        line1={this.props.type}
                        line2={this.props.title}
                        invert={true}
                        align="left"
                        margin="10px 0 0 0" />
                    {
                        atLeast('md', this) && (
                            <DescriptionText
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
                                <img src="/img/arrow-right.png" alt="View more" />
                            </Link>
                        )
                    }
                    {
                        !this.props.link && (
                            <small className={styles.comingSoon}>Coming soon...</small>
                        )
                    }
                </Flexbox>
                {/*
                <MediaQuery minDeviceWidth={1024}>
                    <div className={styles.caseLg}>
                        <div className={styles.imagePanelLg}
                            style={{
                                backgroundColor: this.props.bgColor,
                                backgroundPosition: this.props.bgPositionLg,
                                backgroundSize: this.props.bgSize,
                                backgroundImage: `url(${this.props.img})`
                            }}>
                        </div>
                        <div className={styles.contentPanelHolderLg}>
                            <div className={styles.contentPanelLg}>
                                <span className={styles.range}>{this.props.range}</span>
                                <h3 className={styles.type}>{this.props.type}</h3>
                                <h2 className={styles.title}>{this.props.title}</h2>
                                <p className={styles.desc}>{this.props.desc}</p>
                                <Link to={`${this.props.location.pathname}/${this.props.link}`} className={styles.viewMoreLg}>
                                    <img src="/img/arrow-right.png" alt="View more" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1023}>
                    <div className={styles.caseSm} style={{
                        backgroundColor: this.props.bgColor,
                        backgroundPosition: this.props.bgPositionSm,
                        backgroundSize: this.props.bgSizeSm,
                        backgroundImage: `url(${this.props.img})`
                    }}>
                        <div className={styles.contentPanelSm}>
                            <span className={classnames(styles.range, styles.rangeSm, this.props.light && styles.whiteFont)}>{this.props.range}</span>
                            <h3 className={classnames(styles.type, styles.typeSm, this.props.light && styles.whiteFont)}>{this.props.type}</h3>
                            <h2 className={classnames(styles.title, styles.titleSm, styles.titleSm, this.props.light && styles.whiteFont)}>{this.props.title}</h2>
                            <Link to={`${this.props.location.pathname}/${this.props.link}`} className={styles.viewMoreSm}>
                                <img src={`/img/arrow-right${this.props.light ? '-white' : ''}.png`} alt="View more" />
                            </Link>
                        </div>
                    </div>
                </MediaQuery>
                */}
            </SCFlexbox>
        );
    }
})));