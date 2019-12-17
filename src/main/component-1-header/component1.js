import React, { PureComponent } from 'react';
import { NavLink} from 'react-router-dom';
import { Collapse, NavbarToggler, Nav, NavItem} from 'reactstrap';
import Media from 'react-media';
import './component1.css'
import ContainedButtons from './signoutbutton'
import LoginButton from './loginbutton'
import { withRouter } from 'react-router-dom';

class Component1 extends PureComponent {
    constructor(props) {
        super(props);
        console.log(this.props.auth);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
      
      logouthandler = () => {
        console.log('you clicked logout button');
        this.props.history.push({pathname : '/logout'});
      }
      onlinehandler = () => {
        console.log(this.props);
        console.log('you clicked online button');
        this.props.history.push('/login');
        this.props.history.push('/login');
        this.props.history.push('/login');
        console.log(this.props);
      }

      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    render () {
        console.log(this.props.auth);
        return (
            <header>
            <Media query="(max-width: 575px)">
                {matches =>
                    matches ? (
                        <nav className="desktop navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                            <NavLink  className="navbar-brand col-sm-2 col-md-2 mr-0"
                            to="/"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>E-Classroom</NavLink>

                            {(this.props.auth ==="t" || this.props.auth ==="s") ?
                            <NavLink  className="navbar-brand col-sm-2 col-md-2 mr-0"
                            to="logout" exact><ContainedButtons  onClick={this.logouthandler}/>
                            </NavLink> 
                            :
                            <NavLink  className="navbar-brand col-sm-2 col-md-2 mr-0"
                            to="login" exact><LoginButton onClick={this.onlinehandler}/>
                            </NavLink>}
                            
                            <NavbarToggler className="navbar-brand col-sm-2 col-md-2 mr-0 mr-2" onClick={this.toggleNavbar}/>
                            <Collapse isOpen={!this.state.collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <input className="form-control col-lg-9 col-sm-6 col-md-9 form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
                                        </input>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </nav>
                    ) : (
                        <nav className="desktop navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                            <NavLink  className="navbar-brand col-md-3 col-sm-4 mr-0"
                            to="/"
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>E-Classroom</NavLink>
                            <input className="form-control col-lg-7 col-md-7 col-sm-6 form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
                            </input>

                            {(this.props.auth ==="t" || this.props.auth ==="s") ?
                            <NavLink  className="navbar-brand col-lg-2 col-md-2 col-sm-2 mr-0"
                            to="/logout" exact><ContainedButtons  onClick={this.logouthandler}/>
                            </NavLink> 
                            :
                            <NavLink  className="navbar-brand col-lg-2 col-md-2 col-sm-2 mr-0"
                            to="/login" exact><LoginButton onClick={this.onlinehandler}/>
                            </NavLink>}
                        </nav>
                    )
                }
            </Media>
        </header>
        )
    }
}

export default withRouter(Component1);