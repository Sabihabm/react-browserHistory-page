import {Component} from 'react'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchinput: '',
    historyList: initialHistoryList,
  }

  onChangeInput = event => {
    this.setState({
      searchinput: event.target.value,
    })
  }

  onDelete = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(each => each.id !== id)
    this.setState({
      historyList: filteredHistory,
    })
  }

  render() {
    const {searchinput, historyList} = this.state
    const searchResult = historyList.filter(each =>
      each.title.toLowerCase().includes(searchinput.toLowerCase()),
    )

    return (
      <div className="browserHistory-container">
        <div className="import-contant">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="input-element">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              placeholder="search-history"
              className="input"
              value={searchinput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        {searchResult.length === 0 ? (
          <p>There is no history to show</p>
        ) : (
          <ul className="browserHistory-list-container">
            {searchResult.map(each => (
              <li key={each.id} className="browserHistory-listItem">
                <p className="time">{each.timeAccessed}</p>

                <img
                  src={each.logoUrl}
                  alt="domain logo"
                  className="app-icons"
                />

                <p className="title">{each.title}</p>

                <p>{each.domainUrl}</p>
                <button
                  type="button"
                  data-testid="delete"
                  className="delete-icon"
                  onClick={() => this.onDelete(each.id)}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistory
