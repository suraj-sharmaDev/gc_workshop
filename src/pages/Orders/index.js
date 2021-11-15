import React from 'react';
import {connect} from 'react-redux';
import {login, logout} from '../../store/actions/users';

const index = props => {
    return (
        <div>
            <span>Orders page</span>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    loginHandler: () => dispatch(login()),
    logoutHandler: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);