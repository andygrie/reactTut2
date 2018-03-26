import React from 'react';

export default class FriendList extends React.Component{
    render(){
        return (
            <div>
                <h3>Friends</h3>
                <ul>
                    {this.props.names.map((friend) => {
                        return <li> {friend} </li>
                    })}
                </ul>
            </div>
        );
    }
}
FriendList.defaultProps = {
    names: []
}