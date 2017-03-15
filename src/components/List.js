import React from 'react';
import CommentRow from './CommentRow';
import './ListStyle';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'data':  props.data};
        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(e) {
        const id = e.target.value;
        console.log(id);
        const newData =  this.state.data.filter((item) => item.id !== Number(id));
        console.log(newData);
        this.setState({'data':  newData});
    }

    render() {
        let deleteRow = this.deleteRow;
        const items = this.state.data.map(function (row, index) {
            return <CommentRow row={row} key={index} deleteRow={deleteRow}/>;
        });
        return (<ul className="ul_st">
            {items}
        </ul>);
    }
}

export default List;