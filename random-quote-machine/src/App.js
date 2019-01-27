import React, { Component } from 'react'

const restAPI = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      author: '',
      quote: '',
    }
  }

  componentDidMount() {
    fetch(restAPI)
      .then( res => res.json() )
      .then( data => {
        this.setState({
          data
        })
        console.log(this.state.data)
        this.chooseQuote()
      })
  }

  chooseQuote = () => {
    const randIndex = Math.floor( Math.random() * 30 )
    const newAuthor = this.state.data[randIndex].title
    const newQuote = this.state.data[randIndex].content

    this.setState({
      author: newAuthor,
      quote: newQuote,
    })
  }

  handleClick = (event) => {
    this.chooseQuote()
  }

  render() {
    const colorList = ['#FF362E', '#487EB0', '#2ecc72', '#F3B431', '#2C3335', 
      '#67E6DC', '#AE1438', '#019031', '#F3CC79', '#67E6DC']

    const randColor = colorList[ Math.floor(Math.random() * colorList.length) ]

    const backgroundTransition = {transition: 'background 2s ease', background: randColor}
    const colorTransition = {transition: 'color 2s ease', color: randColor}

    return (
      <div id="App" style={ backgroundTransition }>

        <h1 id='title' className='center'>Random Quote Machine</h1>
        
        <div id='quote-box' className='z-depth-2' style={ colorTransition }>

            <div id='text' className='center' key={1} dangerouslySetInnerHTML={{__html: this.state.quote}}></div>
            <div id='author'>- { this.state.author }</div>

            <div id='button-row' className='row'>
      
              <a
                id='tweet-quote' 
                className="btn-floating btn-large waves-effect waves-light"
                style={backgroundTransition}
                href={`https://twitter.com/intent/tweet?text=${this.state.quote}`}
                data-size='large'>
                <i className="fa fa-twitter"></i>
              </a>

              <button 
                id='new-quote' 
                className='btn-large waves-effect waves-light'
                style={backgroundTransition}
                onClick={ this.handleClick }>
                New Quote
              </button>

            </div>
        
        </div> 

        <footer className='center' style={{color: 'white', margin: '10px'}}>By James Pham</footer>

      </div>
    );
  }
}

export default App;