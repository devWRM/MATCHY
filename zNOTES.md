

**  PLAY npm start  **  =>> https://matchy-1.herokuapp.com/


DEPLOYED ON HEROKU
    Create New App
    NAME:   matchy-1
    CLICK:  Create app
    Install the Heroku CLI
    CLICK:  Heroku CLI
    CLICK:  Download and install
    iTTT:   brew tap heroku/brew && brew install heroku

    Login to heroku by pressing any key (NOT q)
    iTTT:   heroku git:remote -a matchy-1

    CLICK:  Settings (tab) =>>  https://dashboard.heroku.com/apps/matchy-1
    CLICK:  Add buildpack
    Enter Buildpack URL:       
            https://github.com/mars/create-react-app-buildpack
    CLICK:  Save changes

    CLICK:  Deploy (tab) =>>  https://dashboard.heroku.com/apps/matchy-1
    CLICK:  GitHub connect to GitHub (in Deployment method)
    >> CLICK:  Connect to GitHub) <<
    PASTE IN:   MATCHY (Project name from GitHub)
    CLICK:      Search
    CLICK:      Connect










=xx iTTT:   heroku buildpacks:set mars/matchy-1
    iTTT:   git push heroku master



=================================

    FILE Table.js   <<= get very clear on:      up: !face.up 

     flip(cardIndex) {
        if(this.state.firstCardFlipped === null) {
            this.setState({firstCardFlipped: cardIndex});
        } else {
            const firstCard = this.state.cardDeck[this.state.firstCardFlipped]
            const secondCard = this.state.cardDeck[cardIndex]
        }

        this.setState({
            cardDeck: this.state.cardDeck.map((face, index) => {
                if(index === cardIndex) {   
                    return {
                        cardInfo: face.cardInfo,
                        up: !face.up        // <<= flips card if it finds this clicked cardIndex in the cardDeck
                                            // logic: up is the opposite of its current state (false/true)
                    }
                } else {
                    return face;
                }
            })
        })
    }

____________________

    FILE Card.js

    render() {
        let cardState;
        if(this.state.up) {
            cardState = this.props.cardInfo
        } else {
            cardState = "card back"
        }

____________________

    FILE Table.js
        // const cardFaces = {
        //     one: "citizen", 
        //     two: "America", 
        //     three: "constitution", 
        //     four: "brave", 
        //     five: "run", 
        //     six: "freedom", 
        //     seven: "flag",
        //     eight: "citizen: native member of a nation"
        // }




























































































































































Building a memory game with React
by CJ Avilla
	https://www.youtube.com/watch?v=Y47kSCiQCN0
	Reference
	https://reactjs.org/tutorial/tutorial.html








