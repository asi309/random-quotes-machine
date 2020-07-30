import React from 'react';
import Action from './Action';
import Quote from './Quote';
import Tweet from './Tweet';

const quotes = [{
    quote: "The greatest glory in living lies not in never falling,\
            but in rising every time we fall.",
    author: "Nelson Mandela"
}, {
    quote: "The way to get started is to quit talking and begin doing",
    author: "Walt Disney"
}, {
    quote: "Your time is limited, so don't waste it living someone else's life.\
            Don't be trapped by dogma –\
            which is living with the results of other people's thinking.",
    author: "Steve Jobs"
}, {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
}, {
    quote: "If you look at what you have in life, you'll always have more.\
            If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
}, {
    quote: "If you set your goals ridiculously high and it's a failure,\
            you will fail above everyone else's success.",
    author: "James Cameron"
}, {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
}]

class RandomQuotesMachine extends React.Component{
    state = {
        quotes: quotes,
        selectedQuote: {}
    }

    componentDidMount() {
        this.handlePick();
    }

    handlePick = () => {
        const randChoice = Math.floor(Math.random() * this.state.quotes.length);
        const quote = this.state.quotes[randChoice];
        this.setState(() => ({selectedQuote: quote}));
    }

    render() {
        return (
            <div id="quote-box">
                <Quote
                    selectedQuote={this.state.selectedQuote}
                />
                <div id="button-container">
                    <Tweet selectedQuote={this.state.selectedQuote} />
                    <Action
                        handlePick={this.handlePick}
                        options={this.state.quotes.length}
                    />
                </div>
            </div>
        );
    }
}

export default RandomQuotesMachine;