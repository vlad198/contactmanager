import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = async (id,dispatch) => {

    try {
   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
   dispatch({type:'DELETE_CONTACT',payload:id});
  }catch(e){
    dispatch({type:'DELETE_CONTACT',payload:id});
   }

   
    

  };

  render() {
    const { showContactInfo } = this.state;

    const { name, email, phone , id } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h3>
                {name}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                />
                <i
                  className="fas fa-times"
                  style={{ float: "right", cursor: "pointer", color: "red" }}
                  onClick={this.onDeleteClick.bind(this,id,dispatch)}
                />

                <Link to={`contact/edit/${id}`}>
                <i className="fas fa-pencil-alt"  style={{
                  cursor :'pointer' ,
                  float : 'right',
                  color : 'black',
                  marginRight : '1rem'
                }}></i>
                </Link>

              </h3>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
