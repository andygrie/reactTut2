import React from 'react';

import FriendList from './FriendList';
import AddFriend from './addFriend';

export default class Friends extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'andygrie',
            friends: ['frienda', 'friendb', 'friendc']
        }
        this.addFriend = this.addFriend.bind(this);
    }
    addFriend(friend){
        this.setState((state) => ({
            friends : state.friends.concat([friend])
        }))
    }
    render(){
        return (
            <div>
                <h3> Name: {this.state.name}</h3>
                <AddFriend addNew={this.addFriend} />
                <FriendList names={this.state.friends} />
            </div>
        );
    }
}