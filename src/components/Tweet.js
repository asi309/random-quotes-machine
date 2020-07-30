import React from 'react';

const Tweet = (props) => {
    const tweetText = '"' + props.selectedQuote.quote + '" ' +
            props.selectedQuote.author;
    return (
        <div id="share">
            <a
                id="tweet-quote"
                href={`twitter.com/intent/tweet?hashtags=quotes&text=${tweetText}`}
                target="_blank"
            >Tweet Quote</a>
        </div>
    );
};

export default Tweet;