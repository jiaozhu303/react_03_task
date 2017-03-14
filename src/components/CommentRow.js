import React from 'react';
import './CommentRowStyle';

class CommentRow extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props);
    }

    render() {
        const item = this.props.row;

        const styles = {
            backgroundColor: item.bgColor
        };

        return (<li className="row" style={styles}>
            {item.content}
            <button onClick={() => this.props.deleteFn(item.id)}>编辑</button>
            <button>删除</button>
            </li>);
    }
}

export default CommentRow;
