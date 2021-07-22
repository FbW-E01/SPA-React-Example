import { Switch, Route, NavLink, useRouteMatch, useParams } from "react-router-dom";

function User() {
    const { username, petname } = useParams();
    return <h1>Hello {username} AND {petname}</h1>;
}

export default function Users() {
    const match = useRouteMatch();
    console.log(match);

    return (
        <div>
            <h1>This is the users page</h1>
            <p>
                <NavLink to={`${match.path}/joel/rauli`}>JOEL AND RAULI</NavLink> ---- 
                <NavLink to={`${match.path}/joel/veera`}>JOEL AND VEERA</NavLink>
            </p>

            <Switch>
                <Route path={`${match.path}/:username/:petname`} component={User} />
                <Route path={match.path}>
                    <h3>SELECT USER</h3>
                </Route>
            </Switch>
        </div>
    );
}


/*
    // DYNAMIC ROUTES METHOD

    import { useParams } from 'react-router-dom';

    export default function Users() {
        // The usePrams is a hook provided by react-router-dom
        // It is used for Route parameters
        // Using Object destructuring
        const { username } = useParams();

        return "WELCOME " + username;
    }
*/