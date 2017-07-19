import React, { PureComponent } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { Switch, Route } from 'react-router-dom';

import styles from '../index.css';
import homeStyles from './Home.css';

import MenuBar from '../components/MenuBar';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import About from './About';
import Iridium from './Iridium';
import DreamWalk from './DreamWalk';

class Master extends PureComponent {
    state = {
        topBarLightMode: false
    }

    setTopBarLightMode = (light) => this.setState((state) => ({ topBarLightMode: light }))

    render = () => {
        const lang = this.props.match.params.lang;
        return (
            <div>
                <MenuBar lightMode={this.state.topBarLightMode} />
                <Switch>
                    <Route path={`/${lang}/`} exact render={() => (
                        <Home setTopBarLightMode={this.setTopBarLightMode} />
                    )} />
                    <Route path={`/${lang}/work`} exact render={() => (
                        <Work setTopBarLightMode={this.setTopBarLightMode} />
                    )} />
                    <Route path={`/${lang}/work/iridium`} exact render={() => (
                        <Iridium setTopBarLightMode={this.setTopBarLightMode} />
                    )} />
                    <Route path={`/${lang}/work/dreamwalk`} exact render={() => (
                        <DreamWalk setTopBarLightMode={this.setTopBarLightMode} />
                    )} />
                    <Route path={`/${lang}/contact`} exact render={() => (
                        <Contact setTopBarLightMode={this.setTopBarLightMode} />
                    )} />
                    <Route path={`/${lang}/about`} exact render={() => (
                        <About setTopBarLightMode={this.setTopBarLightMode} />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default Master;