import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Teachersidebar from './teacher';
import Studentsidebar from './student';
import Other from './other';
import './component2.css';

class Component2 extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.auth);
      }
    
    render () {
        return (
                    <div className="sidebar-sticky">
                        <Switch>
                            {this.props.auth ==="t" || this.props.auth ==="s" 
                            ? this.props.auth === "t"
                                ? <Teachersidebar />
                                : <Studentsidebar />
                            : <Other />}

                            {/* {this.props.auth ==="t" || this.props.auth ==="s" 
                                ? <Teachersidebar />
                                : <Other />}<Route path="/login" exact component={Other} />
                                <Route path="/" component={Other} />
                                <Route path="/studentside" component={studentsidebar} />
                                <Route render={() => <h1>Not found</h1>}/>
                                <Redirect from="/" to="/posts" /> */}
                            {/* <Route path="/" component={Posts} /> */}
                        </Switch>
                    </div>
                )
    }
}

export default Component2;