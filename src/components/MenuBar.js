import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, NavLink } from 'react-router-dom';

import LanguageSwitch from './LanguageSwitch';
import Menu from './Menu';
import withDimensions from './hoc/withDimensions';

import styles from './MenuBar.css';

class MenuBar extends PureComponent {
    static propTypes = {
        lightMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['l', 'r'])])
    };

    state = {
        isOpen: false
    };

    toggleMenu = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

    maybeToggleMenu = () => this.state.isOpen && this.toggleMenu();

    render = () => (
        <div className={classnames(styles.menuBar, this.state.isOpen && styles.menuBarIsOpen)}>
            <div className={classnames(styles.topBar, this.state.isOpen && styles.topBarOpen)}>
                <IconButton onTouchTap={this.toggleMenu}>
                    {!this.state.isOpen && <MenuIcon color={this.props.lightMode === true || this.props.lightMode === 'l' ? '#FFF' : '#000'} />}
                    {this.state.isOpen && <CloseIcon />}
                </IconButton>
                <h1 className={styles.fntnl} style={{ color: !this.state.isOpen && (this.props.lightMode === true || this.props.lightMode === 'l') ? '#FFF' : '#000' }}>FNTNL</h1>
                <div className={styles.mainLanguageSwitch}>
                    <LanguageSwitch lightMode={!this.state.isOpen && (this.props.lightMode === true || this.props.lightMode === 'r')} onSelect={this.maybeToggleMenu} />
                </div>
            </div>
            <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
        </div>
    )
}

export default withRouter(withDimensions(MenuBar));