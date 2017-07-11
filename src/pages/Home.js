import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Link, withRouter } from 'react-router-dom';

import styles from '../index.css';
import homeStyles from './Home.css';

class Home extends PureComponent {
    static propTypes = {
        setTopBarLightMode: PropTypes.func.isRequired
    }

    componentDidMount = () => setTimeout(() => this.props.setTopBarLightMode(false), 150)

    render() {
        const lang = this.props.match.path.split('/')[1];

        return (
            <div className={homeStyles.home}>
                <h1 className={homeStyles.hi}>Hi, I'm Eddie, a UI/UX designer for startups, and this is my portfolio. <br />You?</h1>
                <ul className={homeStyles.actions}>
                    <li><Link to={`/${lang}/work`}>I'm here to check out some of your work</Link></li>
                    <li><Link to={`/${lang}/about`}>Let me know more about you</Link></li>
                    <li><Link to={`/${lang}/contact`}>I need to contact you</Link></li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Home);