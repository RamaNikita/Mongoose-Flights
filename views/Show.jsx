const React = require("react");

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    return (
      <div>
        <h1>{flight.airline}</h1>
      </div>
    );
  }
}

module.exports = Show;
