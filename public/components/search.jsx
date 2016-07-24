var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({

  onSubmit: function(e) {
    e.preventDefault();

    var username = this.refs.username.value.trim();
    if(!username) {
      alert('Please enter a username');
      return;
    }

    this.props.onFormSubmit(username);
    this.refs.username.value = '';

  },

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.username).focus();
  },

  render: function() {
    return (
      <div className='search'>
	<form onSubmit={this.onSubmit}>
	  <label>Search Github Users</label>
	  <input 
	    type='text' 
	    placeholder='github username' 
	    ref='username'
	    className='form-control' />
	</form>
      </div>
    )
  }

});

module.exports = Search;
