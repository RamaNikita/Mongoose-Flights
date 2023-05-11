const React = require("react");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>Flights:</h1>
        <ul>
          {flights &&
            flights.map((flight, i) => {
              console.log(flight);
              return (
                <li>
                  {flight.airline}
                  {flight.flightNo}
                  {flight.airport}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
