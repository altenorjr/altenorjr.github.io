import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { StyleSheet } from 'react-look';

import Cliffhanger from './Cliffhanger';

@withRouter
export default class Ending extends PureComponent {
    static propTypes = {
        contactLinkText: PropTypes.node,
        link: PropTypes.string.isRequired,
        linkText: PropTypes.node.isRequired
    }

    lang = () => this.props.location.pathname.split('/')[1];

    render = () => {
        return (
            <div className={styles.ending}>
                <h1 className={styles.callout}>
                    {
                        this.props.children && (
                            <div className={styles.textHolder}>{this.props.children}</div>
                        )
                    }
                    <Link className={styles.contactLink} to={`/${this.lang()}/contact`}>{this.props.contactLinkText}</Link>
                </h1>
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
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: 'relative',
        top: 0,
        left: 0
    },
    callout: {
        width: '90%',
        textAlign: 'center',
        fontWeight: 100,
        margin: "0 auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactLink: {
        textDecoration: 'none',
        color: '#509C27 !important',
        marginTop: '20px'
    },
    textHolder: {
        width: "90%"
    }
});