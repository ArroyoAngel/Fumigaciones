import React, { Component } from "react";
import { IonRouterOutlet, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import List from './List'
import Register from './Register'
class Agroquimicos extends Component {
  match: any = {}
  constructor(props: any){
    super(props)
    this.match = props.match
    console.log(props)
  }
  render(): React.ReactNode {
    return <IonReactRouter>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{'Agroquimicos'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRouterOutlet>
        <Redirect exact from={`${this.match.url}/`} to={`${this.match.url}/list`}/>
        <Route 
          path={`${this.match.url}/list`}
          render={ props => <List {...props} />}
        />
        <Route 
          path={`${this.match.url}/register`}
          render={ props => <Register {...props} />}
        />
      </IonRouterOutlet>
    </IonReactRouter>
  }
}
export default Agroquimicos;