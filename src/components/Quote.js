import React from 'react';

const Quote = (props) => (
    <div className="content-box">
        <div id="text">
            <p>{props.selectedQuote.quote}</p>
        </div>
        <div id="author">
            {"-" + props.selectedQuote.author}
        </div>
    </div>
);

export default Quote;