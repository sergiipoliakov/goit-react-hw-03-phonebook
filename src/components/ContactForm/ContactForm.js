import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const duplicate = this.props.contacts.filter(
      contact => contact.name === e.target.elements[0].value,
    );
    if (duplicate.length) {
      return alert(`${duplicate[0].name} is already in contacts`);
    }

    this.props.onAddContact(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form-label">
          Name
          <input
            className="form-input"
            type="name"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>

        <label className="form-label">
          Number
          <input
            className="form-input"
            type="number"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </label>

        <button className="form-button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
