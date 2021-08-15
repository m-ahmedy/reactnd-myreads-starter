import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './routes/Search'
import Home from './routes/Home'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  setSearchPageState = (searchPageState) => this.setState({ showSearchPage: searchPageState })

  componentDidMount() {
    BooksAPI.getAll()
      .then(response => this.setState({ books: response }))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search setSearchPageState={this.setSearchPageState} />
        ) : (
          <Home setSearchPageState={this.setSearchPageState} />
        )}
      </div>
    )
  }
}

export default BooksApp
