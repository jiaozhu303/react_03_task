import React from 'react';
import ReactDOM from 'react-dom';
import './indexStyle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.state = {'num': 1};

    }

    render() {
        return (<div className="container">
            <h1> hello react !</h1>
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));
