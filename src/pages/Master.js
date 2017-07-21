import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

import MenuBar from '../components/MenuBar';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';
import About from './About';
import Iridium from './Iridium';
import DreamWalk from './DreamWalk';

@withRouter
export default class Master extends PureComponent {
    state = {
        topBarLightMode: false
    }

    setTopBarLightMode = (light) => this.setState((state) => ({ topBarLightMode: light }))

    routes = (lang) => [{
        id: 'home',
        path: `/${lang}/`,
        exact: true,
        component: Home
    }, {
        id: 'work',
        path: `/${lang}/work`,
        exact: true,
        component: Work
    }, {
        id: 'iridium',
        path: `/${lang}/work/iridium`,
        exact: true,
        component: Iridium
    }, {
        id: 'dreamwalk',
        path: `/${lang}/work/dreamwalk`,
        exact: true,
        component: DreamWalk
    }, {
        id: 'contact',
        path: `/${lang}/contact`,
        exact: true,
        component: Contact
    }, {
        id: 'about',
        path: `/${lang}/about`,
        exact: true,
        component: About
    }]

    render = () => {
        const lang = this.props.match.params.lang;
        return (
            <div>
                <MenuBar lightMode={this.state.topBarLightMode} />
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.location.pathname}
                        timeout={500}
                        classNames="page"
                        mountOnEnter={true}
                        unmountOnExit={false}
                    >
                        <Switch location={this.props.location}>
                            {
                                this.routes(lang).map((route) => (
                                    <Route
                                        key={route.id}
                                        path={route.path}
                                        exact={route.exact}
                                        render={() => (<route.component id={route.id} setTopBarLightMode={this.setTopBarLightMode} />)} />
                                ))
                            }
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
};