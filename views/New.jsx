const React = require("react");
class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Book A New Flight</h1>
        <form action="/" method="POST">
          <lable>Enter Airline:</lable>
          <br />
          <input
            type="text"
            name="airline"
            placeholder="American,Southwest,or United"
            required
          />{" "}
          <br />
          <br />
          <label>Airport:</label>
          <br />
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          <br />
          <label> Enter Flight No. :</label>
          <br />
          <input type="number" name="flightNo" min="10" max="9999" required />
          <br />
          <br />
          <label> Enter Departure Date and Time:</label>
          <br />
          <input
            type="datetime-local"
            name="departs"
            defaultValue={this.props.defaultDate}
          />
          <br />
          <br />
          <input type="submit" value="Book Flight" link="/index" />
        </form>

        <a href="/">Back to Home Page</a>
      </div>
    );
  }
}

module.exports = New;
