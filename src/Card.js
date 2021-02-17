import React from 'react';
import './Card.css';

class Card extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         up: props.up,
    //     };
    // }


    render() {
        let cardState;
        if(this.props.up) {             // <<= true -else- false
            cardState = this.props.cardWord
        } else {
            cardState = ''
        }
console.log(`Froooom Card.js render ${this.props.up}`)
        return(
            <div onClick={this.props.flip} className={`Card ${this.props.up ? 'up': ''}`} >
                {/* state: {JSON.stringify(this.state.up)} */}
                {cardState}
            </div>
        )
    }


}

 

export default Card;