import React from 'react';

import validate from './validate';
import {Field, FieldArray, reduxForm, formValueSelector} from "redux-form";
//import App from './App.css'
import { connect } from 'react-redux';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

let rendertagContainerInfos = ({ fields, meta: { touched, error, submitFailed ,hasEmailValue} }) => (
    

    <ul>
        <li>
            <button  type="button" onClick={() => fields.push({})}>Add tagContainerInfos</button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        {fields.map((tagContainerInfos, index) => (
            <li key={index}>
                <button className= "btn btn-lg btn-success"
                    type="button"
                    title="Remove tagContainerInfos."
                    onClick={() => fields.remove(index)}
                />
                <h4>tagContainerInfos #{index + 1}</h4>
             
                <div>
                    <label>Favorite Color</label>
                    <div>
                        <label htmlFor={`${tagContainerInfos}.hasEmail`}>Has Email?</label>

                        <Field
                            name={`${tagContainerInfos}.hasEmail`}
                            id="hasEmail"
                            component="input"
                            type="checkbox"
                        />
                    </div>
                </div>
                {hasEmailValue &&
                    <div>
                        <label>Email</label>
                        <div>
                            <Field
                                name={"email"}
                                component="input"
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                    </div>} <Field
                    name={`${tagContainerInfos}.messageType`}
                    type="text"
                    component={renderField}
                    label="messageType"
                />
              
                 <Field
                    name={`${tagContainerInfos}.interval`}
                    type="text"
                    component={renderField}
                    label="interval"
                />
                 <Field
                    name={`${tagContainerInfos}.storageSize`}
                    type="text"
                    component={renderField}
                    label="storageSize"
                />
                <Field
                    name={`${tagContainerInfos}.resetTags`}
                    type="text"
                    component={renderField}
                    label="resetTags"
                />
               
            </li>
        ))}
    </ul>
     );

const renderPlcInfos = ({ fields, meta: { error } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push()}>Add plcInfos</button>
        </li>
        {fields.map((plcInfo, index) => (
            <li key={index} >
                <button
                    type="button"
                    title="Remove Plc info"
                    onClick={() => fields.remove(index)}
                />
               

                <Field 
                    name={`${plcInfo}.id`}
                    type="text"
                    component={renderField}
                    label={`Id`}
                />
             <FieldArray name={`${plcInfo}.tagContainerInfos`} component={rendertagContainerInfos} />
                
                
            </li>
        ))}
        {error && <li className="error">{error}</li>}
    </ul>
);

const renderprotocolInfo = ({ fields, meta: { touched, error, submitFailed } }) => (
    <ul>
        <li>
            <button  type="button" onClick={() => fields.push({})}>Add protocolInfos</button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        {fields.map((protocolInfos, index) => (
            <li key={index}>
                <button className= "btn btn-lg btn-success"
                    type="button"
                    title="Remove protocolInfos."
                    onClick={() => fields.remove(index)}
                />
                <h4>protocolInfos #{index + 1}</h4>
                <Field
                    name={`${protocolInfos}.protocol`}
                    type="text"
                    component={renderField}
                    label="Protocol"
                />
                <Field
                    name={`${protocolInfos}.host`}
                    type="text"
                    component={renderField}
                    label="Host"
                />
                 <Field
                    name={`${protocolInfos}.server`}
                    type="text"
                    component={renderField}
                    label="Server"
                />
                 <Field
                    name={`${protocolInfos}.communicator`}
                    type="text"
                    component={renderField}
                    label="Communicator"
                />
                <FieldArray name={`${protocolInfos}.plcInfo`} component={renderPlcInfos} />
            </li>
        ))}
    </ul>
);

const renderQueue = ({ fields, meta: { touched, error, submitFailed } }) => (            
        
            
                <div>
                <Field
                    name={`queue.host`}
                    type="text"
                    component={renderField}
                    label="Host"
                />
                <Field
                    name={`queue.name`}
                    type="text"
                    component={renderField}
                    label="Name"
                />    
                </div>       
     
    
);

const FieldArraysForm = props => {
    const { handleSubmit, pristine, reset, submitting, } = props;
    
    return (
        <form onSubmit={handleSubmit}>


           
            <FieldArray name="queue" component={renderQueue} />                               
            <FieldArray name="protocolInfos" component={renderprotocolInfo} />
          
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
            
                <button className= "btn btn-lg btn-success" type="submit" disabled={submitting}>Submit</button>
                <button className="btn btn-lg btn-success" type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
};

const selector = formValueSelector('App')

rendertagContainerInfos = connect(state => {
  // can select values individually
  
  let hasEmailValue = selector(state, "hasEmail");
   return { 
    hasEmailValue
   
  };

})(rendertagContainerInfos) 


export default reduxForm({
    form: 'App', // a unique identifier for this form
    validate,
})(FieldArraysForm);
