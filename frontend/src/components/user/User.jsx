import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main/Main'

import UserForm from './UserForm'
import UserTable from './UserTable'

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'CRUD Users: Consult, Add, Edit, Delete'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }
    
    constructor(props) {
        super(props);

        this.updateField = this.updateField.bind(this)
        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.remove = this.remove.bind(this)
        this.load = this.load.bind(this)
    }
    

    componentDidMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                <UserForm user={this.state.user} updateField={this.updateField}
                    save={this.save} clear={this.clear} />
                <UserTable list={this.state.list} load={this.load} remove={this.remove} />
            </Main>
        )
    }
}