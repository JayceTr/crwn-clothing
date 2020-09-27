import React from 'react';
import {Link} from 'react-router-dom'
//higher order component
//allows us to have access to redux 
//functions that take components as arguments 
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import {auth} from '../../firebase/firebase.utlis'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selector'

const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link className = 'logo-container' to="/">
            <Logo className = 'logo' />
        </Link>

        <div className = 'options'>
            
            <Link className = 'option' to='/shop'>
                SHOP
            </Link>
            <Link className = 'option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className = 'option' onClick={() => auth.signOut()} >SIGN OUT</div>
                :
                <Link className = 'option' to = '/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null: <CartDropdown />
        }

    </div>
)

//allows us to get the state which is the root reducer
const mapStateToProps = state => ({
    //name of the property is the name was want to pass in.
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})

//function that allows us to access the state 
export default connect(mapStateToProps)(Header);