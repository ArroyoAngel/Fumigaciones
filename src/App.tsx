import React, { Component } from 'react'
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/SideMenu/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ViewApp from './views/app'
import ViewUser from './views/users'
import Error from './views/error'
setupIonicReact();

class AuthRoute extends Component<{path: string, authUser: any}>{
  isDemo: any /*= {
    email: 'demo',
    password: 'demo123',
  }*/
  constructor(props: any){
    super(props)
  }
  render(): React.ReactNode {
      return (<Route
        path={this.props.path}
        render={props =>
          this.props.authUser || this.isDemo ? (
            <ViewApp {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/user/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />)
  }
}

const App: React.FC = () => {
  let loginUser = localStorage.getItem('credential')
  return (
    <IonApp>
      <IonReactRouter>
        <AuthRoute 
          path={'/app'}
          authUser={loginUser}
        />
        <Route 
          path="/app"
          render={ props => <ViewApp {...props}/>}
        />
        <Route 
          path="/user"
          render={ props => <ViewUser {...props}/>}
        />
        <Route
          path={"/error"}
          render={ props => <Error {...props} />}
        />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
