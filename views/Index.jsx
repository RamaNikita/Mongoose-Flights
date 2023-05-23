const React = require("react");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>Flights:</h1>
        <a href="/new" style={{ textDecoration: "none" }}>
          Add Flight
        </a>
        <ul>
          {flights?.map((flight, i) => {
            console.log(flight);
            return (
              <li key={i}>
                <a href={`{flight.airline}`}>{flight.airline}</a>
                {flight.flightNo}
                {flight.airport}
                {/* <a href={`${flight.id}`}>{flight.airline}</a> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
