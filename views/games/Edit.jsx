const React = require('react');
const AppLayout= require('../layouts/AppLayout.jsx')

class Edit extends React.Component{
  render() {
    return (
      <AppLayout title="Edit Page">
        <div className="container">
            <div className="jumbotron border-info my-5 text-center alignt-content-center">
              <h1 className="text-warning">EDIT GAME</h1>
              <form action={`/games/${this.props._id}?_method=put`} method="post">
              <p>
                <label className="mr-4">Name:</label>
                <input type="text" value={this.props.name} name="name"/>
              </p>
              <p>
                <label className="mr-4">Description:</label>
                <input className="textarea" type="textarea" value={this.props.description} name="description"/>
              </p>
              <p>
                <label className="mr-4">Image Link:</label>
                <input type="text" value={this.props.img} name="img"/>
              </p>
              <p>
                <label className="mr-4">Minimum Players:</label>
                <input type="number" value={this.props.minPLayers} name="minPlayers"/>
              </p>
              <p>
                <label className="mr-4">Maximum Players:</label>
                <input type="number" value={this.props.maxPlayers} name="maxPlayers"/>
              </p>
              <div class="form-group">
                  <label className="mr-4" for="complexity">Weight (Complexity):</label>
                  <select class="form-control col-sm-4 mx-auto" value={this.props.weight} name="complexity" id="complexity">
                      <option>Light</option>
                      <option>Medium</option>
                      <option>Heavy</option>
                  </select>
              </div>
              <p>
                <label className="mr-4">Game Length:</label>
                <input type="number" value={this.props.lengthOfGame} name="lengthOfGame"/>
              </p>
              <p>
                <input className="btn btn-lg btn-info" type="submit" value="Submit"/>
              </p>
              </form>
          </div>
        </div>
      </AppLayout>
    )
  }
}
module.exports= Edit;