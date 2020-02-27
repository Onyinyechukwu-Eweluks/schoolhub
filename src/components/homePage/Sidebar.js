import React from 'react'
import {Navbar, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  import {Link} from 'react-router-dom'


function Sidebar() {
    return (
        <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
                    <div className="mobile-sidebar-header d-md-none">
                            <div className="header-logo">
                                <Link to="/"><img src="img/logo1.png" alt="logo" /></Link>
                            </div>
                    </div>
                        <div className="sidebar-menu-content">
                            <Navbar color="faded" light>
                                <Nav navbar>
                                <NavItem>
                                        <NavLink href="/"  className="nav-link"><i className="flaticons-earth-globe"></i><span>Home</span></NavLink>
                                    </NavItem>
                                    
                                    <NavItem>
                                        <NavLink href="/about"  className="nav-link"><i className="flaticons-menu-1"></i><span>About Us</span></NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/features"  className="nav-link"><i className="flaticons-open-book"></i><span>Features</span></NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="/contact"  className="nav-link"><i className="flaticons-mail"></i><span>Contact Us</span></NavLink>
                                    </NavItem>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-chat"></i><span>LogIn</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/adminLogin">
                                                Admin
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/studentLogin">
                                                Student
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/parentLogin">
                                                Parent
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/teacherLogin">
                                                Teacher
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret className="nav-link">
                                            <i className="flaticons-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>SignUp</span>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/adminSignup">
                                                Admin
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/studentSignup">
                                                Student
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/parentSignup">
                                                Parent
                                            </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem tag={Link} to="/teacherSignup">
                                                Teacher
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    
                                </Nav>
                            </Navbar>
         
                </div>
            </div>
  
    )
}

export default Sidebar;