import React, {useState, Component} from 'react';
import {
    FormBuilder,
    FieldGroup,
    FieldControl,
    Validators,
 } from "react-reactive-form";
 import { Text, TextInput, View } from 'react-native';

 const TextInputs = ({ handler, touched, hasError, meta }) => (
    <View>
      <TextInput placeholder={`Enter ${meta.label}`} {...handler()}/>
      <Text>
          {touched
          && hasError("required")
          && `${meta.label} is required`}
      </Text>
    </View>  
  )
  export default class ReactForm extends Component {
      loginForm = FormBuilder.group({
          username: ["", Validators.required],
          password: ["", Validators.required],
          rememberMe: false
      });
      handleReset=() => {
          this.loginForm.reset();
      }
      handleSubmit=(e) => {
          e.preventDefault();
          console.log("Form values", this.loginForm.value);
      }
      render() {
          return (
                <FieldGroup
                  control={this.loginForm}
                  render={({ get, invalid }) => (
                    <form onSubmit={this.handleSubmit}>
   
                      <FieldControl
                        name="username"
                        render={TextInputs}
                        meta={{ label: "Username" }}
                      />
   
                      <FieldControl
                        name="password"
                        render={TextInputs}
                        meta={{ label: "Password" }}
                      />
   
                      <FieldControl
                        name="rememberMe"
                        render={({handler}) => (
                          <div>
                            <input {...handler("checkbox")}/>
                          </div>
                        )}
                      />
                      <button
                        type="button"
                        onClick={this.handleReset}
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        disabled={invalid}
                      >
                        Submit
                      </button>
                    </form>
                  )}
                />
          );
      }
  }