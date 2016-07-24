var React = require('react');
var ReactDom = require('react-dom');
var Search = require('./components/search.jsx');
var Profile = require('./components/profile.jsx');

var App = React.createClass({

  getInitialState() {
    return {
      username: 'tj',
      userData: {},
      userRepos: [],
      repoData: []
    }
  },

  getUserData() {
    var baseURL = 'https://api.github.com/users/';   
    var clientId = '?client_id=' + this.props.clientId;
    var clientSecret = '&client_secret=' + this.props.clientSecret;
    var url = baseURL + this.state.username + clientId + clientSecret;
              
    $.ajax({
      url,

      dataType: 'json',

      cache: false,

      success: function(userData) {
	console.log('userData:', userData);
        this.setState({userData})
      }.bind(this),

      error: function(xhr, status, err) {
        this.setState({username: null});
      }.bind(this)

    });
  },

  getUserRepos() {
    var baseURL = 'https://api.github.com/users/';   
    var username = this.state.username;
    var repos = '/repos?per_page=' + this.state.perPage;
    var clientId = '&client_id=' + this.props.clientId;
    var clientSecret = '&client_secret=' + this.props.clientSecret;
    var sort = '&sort=created';
    var url = baseURL + username + repos + clientId + clientSecret + sort;    

    return $.ajax({
      url,

      dataType: 'json',

      cache: false,

      success: function(userRepos) {
	console.log('userRepos:', userRepos);
        this.setState({userRepos})
      }.bind(this),

      error: function(xhr, status, err) {
        this.setState({username: null});
      }.bind(this)

    }).fail(function(xhr, status, err) {
      console.log(`Error getting repos: ${err}`);
    });
  },

  componentDidMount() {
    this.getUserData();  
    this.getUserRepos();
  },

  handleFormSubmit(username) {
    
    this.setState({username}, function() {
      this.getUserData();
      this.getUserRepos();
    });

  },
  
  render() {
    return (
      <div>
	<Search onFormSubmit={this.handleFormSubmit} />
	<Profile 
	  username={this.state.username}
	  userData={this.state.userData}
	  userRepos={this.state.userRepos}
	  repoData={this.state.repoData} />
      </div>
    )
  }

}); 

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

App.defaultProps = {
  clientId: 'a48cf6a90b874911d4f5',
  clientSecret: '1e13a784b15620d126990c6fc5d7a192f0b5bf3c'
}



ReactDom.render(<App />, document.getElementById('app'));

