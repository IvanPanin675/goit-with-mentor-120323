import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "redux/users/usersOperarions";
import { selectUsers } from "redux/users/usersSelectors";


export const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    
    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])

    return (
        <>
        <ul>
            {users.map(user => <li key={user.id}><Link to={user.id}>{user.name}</Link></li>)}
            </ul>
            <Link to="add">Add user</Link>
        </>
        
    )
}