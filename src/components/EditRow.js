import React from 'react';
import './CommentRowStyle';

class EditRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'curr':this.props.curr};
    }

    render() {

        const styles = {
            backgroundColor: 'red'
        };

        const {save} = this.props;


        return (<li className="row" style={styles}>
            <input type="text" className="li_in" value={this.state.curr.content}/>
            <select name="color" className="li_sel">
                <option value="red" selected={this.state.curr.bgColor === 'red'}>red</option>
                <option value="blue" selected={this.state.curr.bgColor === 'blue'}>blue</option>
                <option value="green" selected={this.state.curr.bgColor === 'green'}>green</option>
            </select>
            <button onClick={save} >保存</button>
        </li>);
    }
}

export default EditRow;