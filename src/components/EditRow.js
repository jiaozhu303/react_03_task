import React from 'react';
import './CommentRowStyle';

class EditRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        const styles = {
            backgroundColor: 'red'
        };

        return (<li className="row" style={styles}>
            <input type="text" className="li_in"/>
            <select name="color" className="li_sel">
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
        </li>);
    }
}

export default EditRow;