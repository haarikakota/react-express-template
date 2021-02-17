//Importing Dependencies
import React, { Component } from "react";

//Importing Styles
import "./customers.scss";

class Customers extends Component {
  constructor() {
    super();
    this.state = { customers: [] };
  }

  componentDidMount() {
    //Fetching data from API and setState
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) =>
        this.setState({ customers }, () => {
          console.log("Customers data fetched..", customers);
        })
      );
  }

  render() {
    return (
      <div className="container text-center">
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>
              {customer.firstName} {customer.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
