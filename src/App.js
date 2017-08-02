import React from 'react';

import validate from './validate';
import {Field, FieldArray, reduxForm, formValueSelector} from "redux-form";
//import App from './App.css'
import { connect } from 'react-redux';
var x = -1;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

function myFunction(fields) {
    x++;
    
    fields.push({})
  
    console.log(x);
    console.log("fielsd"+fields);
}



let rendertagContainerInfos = ({ fields, meta: { touched, error, submitFailed }, typeValue }) => (
   
    <ul>
        <li>
            <button type="button" onClick={() => myFunction(fields)}>Add tagContainerInfos</button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </li>
        {fields.map((tagContainerInfos, index) => (
            <li key={index}>
                <button className="btn btn-lg btn-success"
                    type="button"
                    title="Remove tagContainerInfos."
                  
                    onClick={() => fields.remove(index)}
                />

                <h4>tagContainerInfos #{index + 1}</h4>

                <div>
                   
                    <div>
                        <label>Type:</label>

                        <Field name={"protocolInfos[0].plcInfos[0].tagContainerInfos["+x+"].type"} component="select">
                         <option />
                        <option value="BLACKBOX">BLACKBOX</option>
                        <option value="TRIGGERED">TRIGGERED</option>
                        <option value="POLLING">POLLING</option>
                        
                         </Field>
                    </div>
                </div>



                {typeValue === "BLACKBOX" && 
                    <div>
                             
                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].messagetype"}
                    type="text"
                    component={renderField}
                    label="messageType"
                    />

                     <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].interval"}
                    type="text"
                    component={renderField}
                    label="interval"
                     />        
                            
                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].storageSize"}
                    type="text"
                    component={renderField}
                    label="storageSize"
                     />        

                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].resetTags"}
                    type="text"
                    component={renderField}
                    label="resetTags"
                    />        
                    </div>} 

                    {typeValue === "TRIGGERED" && 
                    <div>
                             
                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].messagetype"}
                    type="text"
                    component={renderField}
                    label="messageType"
                    />

                     <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].interval"}
                    type="text"
                    component={renderField}
                    label="interval"
                     />        
                            
                  

                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].resetTags"}
                    type="text"
                    component={renderField}
                    label="resetTags"
                    />        
                    </div>} 

                    {typeValue === "POLLING" && 
                    <div>
                             
                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].messagetype"}
                    type="text"
                    component={renderField}
                    label="messageType"
                    />

                     <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].interval"}
                    type="text"
                    component={renderField}
                    label="interval"
                     />        
                            
                  
                    <Field
                    name={"protocolInfos[0].plcInfos[0].tagContainerInfos[" + x + "].resetTags"}
                    type="text"
                    component={renderField}
                    label="resetTags"
                    />        
                    </div>} 

                    

               
                
                

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
             <FieldArray name={`${plcInfo}.tagContainerInfos`} component={rendertagContainerInfos} rerenderOnEveryChange={true} />
                
                
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
                <FieldArray name={`${protocolInfos}.plcInfos`} component={renderPlcInfos} />
            </li>
        ))}
    </ul>
);

let renderQueue = ({ fields, meta: { touched, error, submitFailed } }) => (            
        
            
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
  
   let typeValue = selector(state, "protocolInfos[0].plcInfos[0].tagContainerInfos["+x+"].type");
  console.log(typeValue);
   return { 
    typeValue  
  }; 
})(rendertagContainerInfos)   


  rendertagContainerInfos = connect(state => {
  // can select values individually
  
   let tagvalue = selector(state, "protocolInfos[0].plcInfos[0].tagContainerInfos["+x+"]");
  console.log(tagvalue);


})(rendertagContainerInfos)  


export default reduxForm({
    form: 'App', // a unique identifier for this form
   // enableReinitialize: true,
   destroyOnUnmount: false,
    validate,
})(FieldArraysForm);
