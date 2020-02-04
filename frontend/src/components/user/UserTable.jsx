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
            {props.list.map((user, i) => {
                return <Row load={props.load} key={i} remove={props.remove} user={user} />
            })}
        </tbody>
    </table>