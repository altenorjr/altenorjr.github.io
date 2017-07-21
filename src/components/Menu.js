import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Flexbox from 'flexbox-react';

import LanguageSwitch from './LanguageSwitch';
import FullSizeContainer from './FullSizeContainer';
import CenteredContent from './CenteredContent';
import VerticalAlign from './VerticalAlign';
import SocialIcons from './SocialIcons';
import withDimensions, { is, atMost } from './hoc/withDimensions';

import styles from './Menu.css';

export default withRouter(withDimensions(class Menu extends PureComponent {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggleMenu: PropTypes.func.isRequired
    }

    toggleMenu = () => {
        this.props.toggleMenu();
    }

    render = () => {
        const lang = this.props.match.params.lang;

        const menuStyles = {
            style: {
                flexBasis: '30%',
                justifyContent: 'center'
            }
        };

        return (
            <Flexbox
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="100vh"
                margin="0 0 0 0"
                className={
                    cx(
                        styles.menu,
                        this.props.isOpen && styles.menuIsOpen
                    )
                }>
                <Flexbox
                    width={is('sm', this) ? '100%' : '70%'}
                    justifyContent="space-around"
                    flexDirection="row"
                    className={styles.mainMenu}>
                    <Flexbox className={styles.mainMenuLink}>
                        <Link className={styles.link} onClick={this.toggleMenu} to={`/${lang}/work`}>Work</Link>
                    </Flexbox>
                    <Flexbox className={styles.mainMenuLink}>
                        <Link className={styles.link} onClick={this.toggleMenu} to={`/${lang}/contact`}>Contact</Link>
                    </Flexbox>
                    <Flexbox className={styles.mainMenuLink}>
                        <Link className={styles.link} onClick={this.toggleMenu} to={`/${lang}/about`}>About</Link>
                    </Flexbox>
                    {
                        atMost('md', this) && (
                            <LanguageSwitch onSelect={this.toggleMenu} />
                        )
                    }
                </Flexbox>
                <SocialIcons visible={this.props.isOpen} className={styles.social} />
                {/*
                <CenteredContent
                    className={
                        classnames(
                            styles.menu,
                            this.props.isOpen && styles.menuIsOpen
                        )
                    }
                    width={100}
                    widthSm={90}
                    widthUnit="%"
                    height={100}
                    heightSm={350}>
                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={4} className={styles.menuItem}><Link onClick={this.toggleMenu} to={`/${lang}/work`}>Work</Link></Col>
                            <Col xs={12} md={4} className={styles.menuItem}><Link onClick={this.toggleMenu} to={`/${lang}/contact`}>Contact</Link></Col>
                            <Col xs={12} md={4} className={styles.menuItem}><Link onClick={this.toggleMenu} to={`/${lang}/about`}>About</Link></Col>
                        </Row>
                    </Grid>
                    <MediaQuery maxDeviceWidth={1023}>
                        <div style={{ textAlign: 'center', margin: "30px 0 0 0" }}>
                            <LanguageSwitch onSelect={this.toggleMenu} />
                        </div>
                    </MediaQuery>
                </CenteredContent>
                <SocialIcons visible={this.props.isOpen} className={styles.social} />
                */}
            </Flexbox>
        );
    }
}))