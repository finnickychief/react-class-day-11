import React, { Component } from 'react';
import Input from './Input';
import PropTypes from 'prop-types';
import { updateContact } from '../../actions/contactActions';

class AddEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      company: '',
      dateMet: '',
      notes: ''
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const { id, name, email, phone, company } = this.state;
    const updatedContact = { id, name, email, phone, company };

    updateContact(id, updatedContact, this.props.dispatch);
    this.props.history.push('/contacts/');
  };
  componentDidMount() {
    const currentContact = this.props.contacts.filter(
      contact => contact.id === Number(this.props.match.params.id)
    )[0];
    this.setState({ ...currentContact });
  }
  render() {
    const { name, email, phone, company } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Input
            label="Name"
            name="name"
            placeholder="Enter Name..."
            value={name}
            onChange={this.onChange}
          />
          <Input
            label="Company"
            name="company"
            placeholder="Company Name..."
            value={company}
            onChange={this.onChange}
          />
          <Input
            label="Email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={this.onChange}
          />
          <Input
            label="Phone"
            name="phone"
            placeholder="555-555-5555"
            value={phone}
            onChange={this.onChange}
          />
          <button className="btn btn-success">Update Contact</button>
        </form>
      </div>
    );
  }
}

AddEditForm.propTypes = {
  contact: PropTypes.object.isRequired
};

export default AddEditForm;
