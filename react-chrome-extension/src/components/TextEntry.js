import React, { Component } from 'react'
import styled from 'styled-components';
import { db } from "../firebase";


const FormDiv = styled.form`
  border: none;
  `;

const StyledTextArea = styled.textarea`
  border: none;
  resize: none;
  outline: none;
  border-radius: 5px;
  background: transparent;
  color: #fff;
  margin: 10px;
  ::placeholder,
  ::-webkit-textarea-placeholder {
    color: white;
  }
  :-ms-textarea-placeholder {
     color: white;
  }
  `;

const StyledInput = styled.input`
  border: 1px solid white;
  resize: none;
  background: transparent;
  border-radius: 5px;
  color: #fff;
  margin: 10px;
`;

export default class TextEntry extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Thoughts: ' + this.state.value);
    // var entryRef = db.ref('entries/' + userID + "/" + test);
    // entryRef.set({
    //   entry: this.state.value
    // });
    // TODO: fix this
    event.preventDefault();
  }

  render() {
    return (
      <FormDiv onSubmit={this.handleSubmit}>
        <label>
          <StyledTextArea placeholder="Thoughts..." value={this.state.value} onChange={this.handleChange} />
        </label>
        <StyledInput type="submit" value="Submit" />
      </FormDiv>
    );
  }
}
