var React = require('react');
var Repo = require('./repo.jsx');


var RepoList = React.createClass({

  render() {
    return (
      <div>
        <ul className='list-group'>
          {
            this.props.userRepos.map(repo => {
              return <Repo repo={repo} key={repo.id} />
            })
          }
        </ul>
      </div>
    )
  }

});

module.exports = RepoList;
