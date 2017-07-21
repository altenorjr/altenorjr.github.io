import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { StyleSheet } from 'react-look';
import cx from 'classnames';

import Loud from './Loud';
import Cliffhanger from './Cliffhanger';

@withRouter
export default class Ending extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        link: PropTypes.string.isRequired,
        linkText: PropTypes.node.isRequired
    }

    render = () => {
        const lang = this.props.location.pathname.split('/')[1];

        return (
            <div className={cx(styles.ending, "fntl_ending")}>
                <Loud>
                    {this.props.children}
                </Loud>
                <Cliffhanger
                    link={this.props.link}>
                    {this.props.linkText}
                </Cliffhanger>
            </div>
        );
    }
};

const styles = StyleSheet.create({
    ending: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: 'relative',
        top: 0,
        left: 0
    }
});