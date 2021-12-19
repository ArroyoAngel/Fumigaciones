import React, { Component } from "react";
import { IonRouterOutlet, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonContent, IonPage  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import List from './List'
import Form from './Form'
class Agroquimicos extends Component {
  match: any = {}
  constructor(props: any){
    super(props)
    this.match = props.match
  }
  render(): React.ReactNode {
    return <IonReactRouter>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{'Terrenos'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRouterOutlet>
            <Redirect exact from={`${this.match.url}/`} to={`${this.match.url}/list`}/>
            <Route 
              path={`${this.match.url}/list`}
              render={ props => <List {...props} />}
            />
            <Route 
              path={`${this.match.url}/register`}
              render={ props => <Form {...props} />}
            />
          </IonRouterOutlet>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  }
}
export default Agroquimicos;