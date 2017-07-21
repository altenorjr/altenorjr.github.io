import React from 'react';
import { Transition } from 'react-transition-group';

const SlideUp = function ({ children: child, ...props }) {
    return (
        <Transition classNames="page" timeout={300} {...props}>
            {state => {
                console.log(state);
            }}
        </Transition>
    );
};

export default SlideUp;