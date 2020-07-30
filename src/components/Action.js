import React from 'react';

const Action = (props) => (
    <button
        id="new-quote"
        onClick={props.handlePick}
    >
        New Quote
    </button>
);

export default Action;