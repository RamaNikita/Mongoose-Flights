const React = require("react");

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    console.log(flight);
    return (
      <div>
        <h1>Hello</h1>
        <h2>Details: {flight.id}</h2>
        <div>Airline: {flight.airline}</div>
        <div>Flight Number: {flight.flightNo}</div>
      </div>
    );
  }
}

module.exports = Show;
