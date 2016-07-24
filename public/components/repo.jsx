var React = require('react');

var Repo = React.createClass({

  render() {
    var {repo} = this.props;    

    return (
      <li className='list-group-item'>
	<a href={repo.html_url}>{repo.name}</a>
	: {repo.description}
      </li>
    )
  }

});

module.exports = Repo;

