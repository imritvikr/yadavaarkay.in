import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import BucketList from './pages/bucketlist';
import Kahani from './pages/kahani';
import Recommendations from './pages/recommendations';
import My404 from './pages/my404'
// import Projects from './pages/projects';
// import Resources from './pages/resources';

class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/kahani" component={Kahani} />
                <Route path="/recommendations" component={Recommendations} />
                {/* <Route path="/projects" component={Projects} /> */}
                <Route path="/bucketlist" component={BucketList} />
                {/* <Route path="/resources" component={Resources} /> */}
                <Route path='/blog' component={() => {
                    window.location.href = 'https://medium.com/@yadavaarkay';
                    return null;
                }} />
                <Route path='/projects' component={() => {
                    window.location.href = 'https://ethereal-basket-74e.notion.site/Projects-85831f564d724f37b2f632eb3479e3e9';
                    return null;
                }} />
                <Route path='/resume' component={() => {
                    window.location.href = 'https://drive.google.com/file/d/1JQTEtdM1rYQ8nQVCb4z12Xokr3C7MO0M/view?usp=sharing';
                    return null;
                }} />
                <Route path='/meet' component={() => {
                    window.location.href = 'https://calendly.com/yadavaarkay';
                    return null;
                }} />
                <Route path='/404' component={My404} />
                <Redirect from='*' to='/404' />
            </Switch>
        );
    }
}

export default Body;