import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../store/reducer';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const status = useSelector(state => state.status)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
    );
};

export default Users;