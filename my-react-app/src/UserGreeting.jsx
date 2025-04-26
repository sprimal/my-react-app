import PropTypes from 'prop-types';
function UserGreeting(props){
    //    if(props.isLoggedIn){
    //     return <h2>welcome {props.username} </h2>

    //    } else {
    //     return <h2>you are not welcome {props.user}</h2>
    //    }

const hijruboy = <h2 className="hijru-boy">you are logged in...{props.username}</h2>
const deepak = <h2 className="deepak1"> you are not logged in...?</h2>

       return(props.isLoggedIn ? hijruboy : deepak);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting
