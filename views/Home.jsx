const React = require('react');
const AppLayout = require('./layouts/AppLayout.jsx')

class Index extends React.Component{
  render() {
    return (
      <AppLayout title="Game.ly">
        <div className="container">
              <div className="jumbotron bg-info my-5 height-75">
                <h1 className="display-1 mb-5 text-dark">Welcome to Game.ly!</h1>
                <h1 className="lead display-4 text-primary">Your table-top library manager.</h1>
                <hr className="my-4"/>
                <ul>
                <h1 className="m-1 display-7 text-primary"><small>Maintain your table-top game collection</small></h1>
                <h1 className="m-1 display-7 text-primary"><small>Add Games, Edit Games, Remove Games</small></h1>
                <h1 className="m-1 display-7 text-primary"><small>Coming Soon: Game-Night Selector</small></h1>
                </ul>
              </div> 
        </div>        
      </AppLayout>
    )
  }
}
module.exports= Index ;