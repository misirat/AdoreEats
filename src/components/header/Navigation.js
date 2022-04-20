import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar color="dark" dark expand="md" light>
                <div className="container">
                    <NavbarBrand href='/'>AdoreEats</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;