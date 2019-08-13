import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Form from './js/components/Form/Form.jsx'

class App extends Component {
    
    render() {
        return (
            <Fragment>
                <Form />
            </Fragment>
        )
    }
    
}

export default App;

const wrapper = document.getElementById("my-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
