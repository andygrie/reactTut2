import React from 'react';

export default class HelloUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'username' : 'andygrie'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        console.log(e.target);
        this.setState({
            username : e.target.value
        });
    }
    render(){
        return (
            <div>
                Hello {this.state.username}
                Change Name:
                <input
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}