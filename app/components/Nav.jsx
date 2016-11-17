var React = require('react');
var {Link} = require('react-router');


var Nav=(props)=>{
  return (
      <div>
        <h2>Nav Component</h2>
        <Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</Link>
        <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
     
      </div>
    );


}
module.exports = Nav;