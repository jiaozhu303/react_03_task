import React from 'react';
import CommentRow from './CommentRow';
import './ListStyle';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.deleteRow = this.deleteRow.bind(this);
    }

    deleteRow(id) {
        console.log(id);
    }

    render() {
        const items = this.props.data.map(function (row, index) {
            return <CommentRow row={row} key={index} deleteFn={this.deleteRow}/>;
        });
        return (<ul className="ul_st">
            {items}
        </ul>);
    }
}

export default List;