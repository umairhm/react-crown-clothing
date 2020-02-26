import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import Header from './components/header/header.component';

import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {      
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('~~~User: ', this.state.currentUser);
          });
        });
      } else {
        this.setState({ currentUser: null }, () => {
          console.log('~~~User: ', this.state.currentUser);
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
