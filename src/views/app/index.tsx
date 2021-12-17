import React, { Component, Fragment } from "react";
import { IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Page from '../../pages/Page';

import Agroquimicos from './agroquimicos';
import List from './agroquimicos/List';
class App extends Component {
  match: any = {}
  constructor(props: any){
    super(props)
    this.match = props.match
    console.log("APP",this.match)
  }
  render(): React.ReactNode {
    return <IonReactRouter>
        <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Redirect exact from={`${this.match.url}/`} to={`${this.match.url}/agroquimicos`}/>
          <Route 
            path={`${this.match.url}/agroquimicos`}
            render={ props => <Agroquimicos {...props}/>}
          />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  }
}
export default App;
/*
import React, { Component } from "react";
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Agroquimicos from './agroquimicos';
class Main extends Component {
  render(): React.ReactNode {
    return <IonSplitPane contentId="main">
      <Menu />
      <IonRouterOutlet id="main">
        <Route 
          path="/app"
          exact={true}
          render={ props => <Agroquimicos {...props}/>}
        />
      </IonRouterOutlet>
    </IonSplitPane>
  }
}
export default Main;
*/