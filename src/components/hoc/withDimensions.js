import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import scrollToWithAnimation from 'scrollto-with-animation';
import newless from 'newless';

const calculate = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
    mode: window.innerWidth < 768 ? 0 :
        window.innerWidth < 1024 ? 1 :
            window.innerWidth < 1824 ? 2 : 3,
    portrait: window.innerWidth < window.innerHeight
});

const withDimensions = (WrappedComponent) => newless(
    class DimensionAware extends Component {
        state = calculate()

        update = () => this.setState(calculate);

        load = () => this.update();
        resize = () => this.update();

        componentWillMount = () => {
            let running = false;

            window.addEventListener("resize", () => {
                if (running) { return; }
                running = true;
                requestAnimationFrame(() => {
                    window.dispatchEvent(new CustomEvent("optimizedResize"));
                    running = false;
                });
            });

            window.addEventListener("optimizedResize", this.update);
        }

        componentDidMount = () => this.update()

        componentWillUnmount = () => window.removeEventListener("optimizedResize", this.update);

        render() {
            const forwardProps = Object.assign({}, this.props);

            return (
                <WrappedComponent dimensions={this.state} {...forwardProps} />
            );
        }
    }
);

export default withDimensions;

export const modes = {
    sm: 0,
    md: 1,
    lg: 2,
    xlg: 3
};

export const propTypes = PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    mode: PropTypes.oneOf([modes.sm, modes.md, modes.lg, modes.xlg]).isRequired,
    portrait: PropTypes.bool.isRequired
});

export const is = (mode, self) => self.props.dimensions.mode === modes[mode];

export const atLeast = (mode, self) => self.props.dimensions.mode >= modes[mode];

export const atMost = (mode, self) => self.props.dimensions.mode <= modes[mode];

export const width = (self) => self.props.dimensions.width;

export const height = (self) => self.props.dimensions.height;

export const scrollTo = (ref, duration = 500) => {
    let top = ref;

    if (typeof ref !== 'number') {
        const el = findDOMNode(ref);

        if (!el) {
            return;
        }

        top = el.offsetTop;
    }

    scrollToWithAnimation(document.body, 'scrollTop', top, duration, 'easeInOutQuad');
}