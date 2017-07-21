import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';
import cx from 'classnames';

import { StyleSheet } from 'react-look';

@withRouter
export default class Home extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => setTimeout(() => this.props.setTopBarLightMode(false), 150)

    render() {
        const lang = this.props.match.path.split('/')[1];

        return (
            <div className={cx(styles.home, this.props.className)}>
                <h1 className={styles.hi}>Hi, I'm Eddie, a UI/UX designer for startups, and this is my portfolio. <br />You?</h1>
                <ul className={styles.actions}>
                    <li className={styles.action}><Link to={`/${lang}/work`}>I'm here to check out some of your work</Link></li>
                    <li className={styles.action}><Link to={`/${lang}/about`}>Let me know more about you</Link></li>
                    <li className={styles.action}><Link to={`/${lang}/contact`}>I need to contact you</Link></li>
                </ul>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hi: {
        textAlign: 'center',
        fontWeight: 200,
        width: '90%'
    },
    actions: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center',
        color: '#509C27',
        lineHeight: '2em',
        marginTop: '50px',
        fontWeight: 100,
        fontSize: '22px',
        width: '90%',
        "@media (max-width: 768px)": {
            fontSize: "14px"
        }
    }
});