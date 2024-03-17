import React from "react";
import {Link, NavLink } from 'react-router-dom';
import './Header.css';
import logoimg from "./../.././../assets/logo.svg";
import wishlistimg from "./../.././../assets/wishlist.svg";
import cartimg from "./../.././../assets/cart.svg";
import accountimg from "./../.././../assets/account.svg";
import customercareimg from "./../.././../assets/customercare.png";
import { AppBar, Container } from "@mui/material";

const Header = function()
{



    return  <AppBar
        position="fixed"
        sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
        }}
    >
        <Container maxWidth="lg">
            Header
        </Container>
    </AppBar>;


    return(
        <>
       
        <div className = "header-top__container">
            <div className = "header-top margin-bottom">
            <div className = "header-top__left">
            <div className = "padding-4 border-right">About Us</div>
            <div className = "padding-4 border-right">My Account</div>
            <div className = "padding-4 border-right">Wishlist</div>
            <div className = "padding-4 border-right">Order Tracking</div>
            </div>
            <div className = "header-top__right">
                <div className ="padding-4 border-right">English</div>
                <div className ="padding-4 ">USD</div>
            </div>
            </div>
        </div>
        <div className = "border-bottom">
        </div>
        <div className = "logo-section__container">
            <div>
                <img className = "logo-section__image" src = {logoimg}/>
            </div>
            <div className = "logo-section__wrapper">
            <div className = "logo-section__search">
                <div className ="margin-left__20">All Category</div>
                <div className = "border-right padding-4"></div>
                <div className ="margin-left__20">
                    Search for item...
                </div>
            </div>
            </div>
            
            <div className = "user-section">
            <div className = "user-section__wrapper">
                <img className = "user-section__image padding-4" src = {wishlistimg}/>
                <div className = "user-section__icondetail">Wishlist</div>
            </div>
            <div className = "user-section__wrapper">
                <img className = "user-section__image padding-4" src = {cartimg}/>
                <div className = "user-section__icondetail">Cart</div>
            </div>
            <div className = "user-section__wrapper">
                <img className = "user-section__image padding-4" src = {accountimg}/>
                <div className = "user-section__icondetail">Account</div>
            </div>
            </div>
        </div>
        <div className = "border-bottom">
        </div>
        <div className = "header-menu__container">
            <div className = "header-menu__wrapper ">
                <div className = "header-menu__item">Browse All Categories</div>
                <div className = "header-menu__item"><Link to="/" >
                    Home
                  </Link></div>
                <div className = "header-menu__item"><Link to="/products" >
                    Products
                  </Link></div>
                  <div className = "header-menu__item"><Link to="/view-product" >
                    View Product
                  </Link></div>
                  <div className = "header-menu__item"><Link to="/users" >
                    Users Details
                  </Link></div>
                  
                  
                
                
            </div>
            <div className = "header-menu__customercare">
            <div>
                <img className = "header-menu__customercareimg" src = {customercareimg}/>
            </div>
            <div className = "header-menu__customercareitem">
            <div>1900-888</div>
            <div>24/7 Support Center</div>
            </div>
            </div>
        </div>
        <div className = "border-bottom">
        </div>
        {/*<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>*/}
       
        </>
    )
}
export default Header; 