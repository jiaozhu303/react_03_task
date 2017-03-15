import React from 'react';
import CommentRow from './CommentRow';
import EditRow from './EditRow';
import './ListStyle';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {'data': props.data, 'curr': {}};
        this.deleteRow = this.deleteRow.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.getId = this.getId.bind(this);
        this.add = this.add.bind(this);
    }

    add(){
        this.setState({'data': this.state.data, 'curr': {}});
    }

    deleteRow(e) {
        const id = e.target.value;
        const newData = this.state.data.filter((item) => item.id !== Number(id));
        this.setState({'data': newData, 'curr': {}});
    }

    edit(e) {
        const id = e.target.value;
        const newData = this.state.data.filter((item) => item.id === Number(id));
        this.setState({'data': this.state.data, 'curr': newData[0]});
    }

    save(e) {
        console.log(e);
        console.log(this.refs.EditRow);
        const item = e.target.value;
        if (item.id) {
            this.state.data.forEach((val) => {
                if (val.id === item.id) {
                    val.content = item.content;
                    val.bgColor = item.bgColor;
                }
            });
        } else {
            item.id = this.getId(this.state.data);
            this.state.data.push(item);
        }
        this.setState({'data': this.state.data, 'curr': {}});
    }

    getId(obj) {
        let max = 0;
        obj.forEach((ind) => {
            if (ind.id > max) {
                max = ind.id;
            }
        });

        return max + 1;
    }

    render() {
        let deleteRow = this.deleteRow;
        let edit = this.edit;
        let save = this.save;
        let add = this.add;
        const items = this.state.data.map(function (row, index) {
            return <CommentRow row={row} key={index} deleteRow={deleteRow} editRow={edit}/>;
        });
        return (<ul className="ul_st">
            {items}
            <EditRow curr={this.state.curr} save={save}/>
            <button onClick={add}>新增</button>
        </ul>);
    }
}

export default List;