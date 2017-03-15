import React from 'react';
import './CommentRowStyle';

class EditRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'curr':this.props.curr};
    }

    componentWillReceiveProps(nextProps){
        console.log("有属性props更新");
        console.log(nextProps);
        this.state = {'curr':nextProps.curr};
    }

    render() {

        const styles = {
            backgroundColor: 'red'
        };

        const {save} = this.props;
        console.log('EditRow: ');
        console.log(this.state.curr);

        const curr  = this.state.curr;

        return (<li className="row" style={styles}>
            <input type="text" className="li_in" value={curr.content}/>
            <select name="color" className="li_sel">
                <option value="red" selected={curr.bgColor === 'red'}>red</option>
                <option value="blue" selected={curr.bgColor === 'blue'}>blue</option>
                <option value="green" selected={curr.bgColor === 'green'}>green</option>
            </select>
            <button onClick={save} value={curr.id+"-"+curr.content+"-"+curr.bgColor}>保存</button>
        </li>);
    }
}

export default EditRow;