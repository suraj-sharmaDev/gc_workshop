import React from 'react';
import {connect} from 'react-redux';
import {login, logout} from '../../store/actions/users';

import {CircleContainer} from 'components/home';
import './styles.css';

const Index = props => {
    const {product, order} = props;
    return (
        <div className='homeContainer'>
            <div className='circleHolder'>
                <CircleContainer title={'Total Products'} subTitle={product.length}/>
                <CircleContainer title={'Total Orders'} subTitle={order.length}/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    product: state.product,
    order: state.order
});

export default connect(mapStateToProps, null)(Index);