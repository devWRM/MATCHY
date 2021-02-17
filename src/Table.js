import React from 'react';
import Card from './Card.js';
import './Table.css';





class Table extends React.Component {
    constructor(props) {
        super(props)

        const cardWords = [ "citizen", "America", "constitution", "brave", "run", "freedom", "flag" ]

        const cardDeck = cardWords
            .concat(cardWords)                  // double words in array by linking 2 cardWords together
            .sort(() => Math.random() - 0.5)    // random word order in array
            .map(singleWord => {
                return {
                    cardWord: singleWord,
                    up: false
                }
            })

        this.state = {
            cardDeck: cardDeck,
            firstCardFlipped: null
        };
    }


    flipCard(cardIndex, up) {

        // console.log(this.state.cardDeck)
        // console.log(`Froooom ${this.state.up}`)
        this.setState({
            cardDeck: this.state.cardDeck.map((cardObj, index) => {

                if(index === cardIndex) {   
                    return {
                        cardWord: cardObj.cardWord,
                        // up: !up
                        up: !cardObj.up,       // <<= flips card if it finds this clicked cardIndex in the cardDeck
                                            // logic: up is the opposite of its current state (false/true)
                    }
                } else {
                    return cardObj;
                }
            })
        })
    }


    flip(cardIndex) {
    //  NOTE cardIndex and this.state.firstCardFlipped are NUMBERS
console.log(this.state.cardDeck)
        if(this.state.firstCardFlipped === null) {
            this.setState({firstCardFlipped: cardIndex});
        } else {
            const firstCard = this.state.cardDeck[this.state.firstCardFlipped]
            const secondCard = this.state.cardDeck[cardIndex]
    //  NOTE using [bracket notation] to get card OBJECTS for firstCard & secondCard

            if(firstCard.cardWord === secondCard.cardWord) {
                // match
                this.setState({firstCardFlipped: null})
            } else {
                // not matched
                    setTimeout(() => {
                        this.flipCard(this.state.firstCardFlipped, false)
                        this.flipCard(cardIndex, false)
                        this.setState({firstCardFlipped: null})                   
                    }, 5000)
            }

        }


        // setState extracted into own function so using (setState) function call
        this.flipCard(cardIndex, !this.state.cardDeck[cardIndex].up)



        // console.log(this.state.cardDeck[cardIndex]);
        // this.state.cardDeck[index].up = !this.state.cardDeck[index].up;
        // this.setState({up: !this.state.up})
        // console.log(`Toooo ${this.state.up}`)
    }

    render() {
// console.log(this.state.firstCardFlipped)
        return(
            this.state.cardDeck.map((cardObj, index) => {
                return  (
                    <div className="Table">
                        <>
                            <Card flip={() => {this.flip(index)}} cardWord={cardObj.cardWord} up={cardObj.up}/>
                            {/* <Card cardWord={cardObj} /> */}
                            {/* <Card cardWord={cardObj} /> */}
                        </>
                    </div>
                )
            })       
        )


    }
}

export default Table;




// onClick={this.flip.bind(this)}