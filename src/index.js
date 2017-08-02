import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
import showResults from './showResults';
import FieldArraysForm from './App';


const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <div style={{ padding: 15 }}>
            <h2 style={{ width: '100%', textAlign: 'center' }}>JSON CONFIG</h2>
            <FieldArraysForm onSubmit={showResults} />
            <Values form="App" />
        </div>
    </Provider>,
    rootEl,
);
