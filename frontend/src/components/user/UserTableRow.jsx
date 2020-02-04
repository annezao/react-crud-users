import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

export default props => 
    <tr key={props.user.id.toString()} value={props.user.id}>
        <td key="id">{props.user.id}</td>
        <td key="name">{props.user.name}</td>
        <td key="email">{props.user.email}</td>
        <td key="actions">
            <button className="btn btn-warning"
                onClick={() => props.load(props.user)}>
                <CreateIcon />
            </button>
            <button className="btn btn-danger ml-2"
                onClick={() => props.remove(props.user)}>
                <DeleteIcon />
            </button>
        </td>
    </tr>