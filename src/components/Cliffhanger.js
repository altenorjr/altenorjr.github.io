import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-look';
import ArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import withDimensions, { atLeast, atMost } from './hoc/withDimensions';
import Title from './Title';
import { withRouter, Redirect } from 'react-router-dom';

@withDimensions
@withRouter
export default class Cliffhanger extends PureComponent {
    state = {
        clicked: false
    }

    render = () => {
        if (this.state.clicked) {
            const lang = this.props.location.pathname.split('/')[1];

            return <Redirect to={`/${lang}${this.props.link}`} />;
        }

        return (
            <div onClick={this.goTo} className={styles.hanger}>
                <Title
                    className={styles.title}
                    align="center"
                    mode="small"
                    margin="0 0 20px 0">
                    {this.props.children}
                </Title>
                {
                    atLeast('lg', this) && (
                        <ArrowDownIcon style={{ width: '11px', height: '11px' }} />
                    )
                }
                {
                    atMost('md', this) && (
                        <img
                            src="/img/arrow-down.png"
                            style={{ width: '56px' }}
                            alt="" />
                    )
                }

                <div className={styles.cliff}></div>
            </div>
        )
    }
};

const styles = StyleSheet.create({
    hanger: {
        width: '100vw',
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    title: {
        "@media (max-width: 768px)": {
            width: "50vw"
        }
    },
    cliff: {
        width: '100vw',
        height: '5px',
        backgroundColor: "#FDF141"
    }
});