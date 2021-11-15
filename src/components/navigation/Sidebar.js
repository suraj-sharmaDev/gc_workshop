import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import Images from 'config/Images';

const SideBar = props => {
    const [show, setShow] = React.useState(true);
    const handlebtn = () => {
        setShow(!show);
    }
    return (
        <div className='container'>
            <div className='topBar'>
                <img src={Images.appIcon} className='logo' onClick={handlebtn}/>
                <span onClick={handlebtn} style={{cursor: 'pointer'}}>GC workshop</span>
            </div>
            <div className='bodyContainer'>
                <div className={`sideBar ${show ? 'showSideBar' : 'hideSideBar'}`}>
                    <Link to='/' className='menuItem'>
                        <img src={Images.home} className='icon' />
                        <span>Home</span>
                    </Link>
                    <Link to='/products' className='menuItem'>
                        <img src={Images.products} className='icon' />
                        <span>Products</span>
                    </Link>
                    <Link to='/orders' className='menuItem'>
                        <img src={Images.orders} className='icon' />                        
                        <span>Orders</span>
                    </Link>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default SideBar;