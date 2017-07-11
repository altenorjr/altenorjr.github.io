import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import classnames from 'classnames';

import MediaQuery from 'react-responsive';
import { Link, withRouter } from 'react-router-dom';

import styles from './WorkCase.css';

class WorkCase extends PureComponent {
    static propTypes = {
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        bgColor: PropTypes.string.isRequired,
        bgPositionLg: PropTypes.string.isRequired,
        bgPositionSm: PropTypes.string.isRequired,
        bgSizeSm: PropTypes.string.isRequired,
        range: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        desc: PropTypes.string.isRequired,
        light: PropTypes.bool
    };

    render() {
        return (
            <div>
                <MediaQuery minDeviceWidth={1024}>
                    <div className={styles.caseLg}>
                        <div className={styles.imagePanelLg}
                            style={{
                                backgroundColor: this.props.bgColor,
                                backgroundPosition: this.props.bgPositionLg,
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
                {/*
                <div className={styles.case} style={{
                    // backgroundColor: this.props.bgColor
                }}>
                    <Grid fluid className={styles.grid}>
                        <Row className={styles.row}>
                            <Col xs={12} md={6} className={classnames(styles.imagePanel, styles[`imagePanel_${this.props.link}`])} style={{
                                backgroundColor: this.props.bgColor,
                                backgroundImage: `url(${this.props.img})`,
                                backgroundPosition: this.props.bgPosition
                            }}>
                            </Col>
                            <Col xs={12}
                                md={6}
                                className={classnames(styles.infoHolder, styles[`infoHolder_${this.props.link}`])}
                                style={{ color: this.props.light ? '#FFF' : '#000' }}>
                                <div className={styles.info}>
                                    <p className={styles.range}>{this.props.range}</p>
                                    <p className={styles.type}>{this.props.type}</p>
                                    <h2 className={styles.title}>{this.props.title}</h2>
                                    <p className={styles.desc}>{this.props.desc}</p>
                                    <Link to={`${this.props.location.pathname}/${this.props.link}`} className={styles.viewMore}>
                                        <img src={this.props.light ? "/img/arrow-right-white.png" : "/img/arrow-right.png"} className={styles.arrowRight} alt="View more" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            */}
            </div>
        );
    }
}

export default withRouter(WorkCase);