import React from 'react'

import Row from './UserTableRow'

export default props =>
    <table className="table mt-4">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.list.map(user => {
                return <Row load={props.load} remove={props.remove} user={user} />
            })}
        </tbody>
    </table>