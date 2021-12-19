import React, { Component } from "react";
import { IonRouterOutlet, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonContent, IonPage,
  IonItem, IonLabel, IonSelect, IonSelectOption, IonAvatar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import List from './List'
import Form from './Form'

import image from '../../../assets/user/color.png'
class Agroquimicos extends Component {
  match: any = {}
  user: any = {}
  constructor(props: any){
    super(props)
    this.match = props.match
    this.user = localStorage.getItem('user')
  }
  public state: any = {
    loginUser: {}
  }
  componentDidMount(){
    this.setState({
      loginUser: { 
        ...JSON.parse(this.user)
      }
    })
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
            <IonItem slot="end">
              <IonLabel>{this.state.loginUser.name}</IonLabel>
              <IonSelect interface="popover">
                <IonSelectOption>Editar</IonSelectOption>
                <IonSelectOption>Desconectar</IonSelectOption>
              </IonSelect>
              <IonAvatar>
                <img src={image}/>
              </IonAvatar>
            </IonItem>
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