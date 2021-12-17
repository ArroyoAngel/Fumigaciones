import React, { Component } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

class Login extends Component {
  constructor(props: any){
    super(props)
    console.log("LOGIN:",props)
  }
  render(): React.ReactNode {
    return (
      <h1>LOGIN DE USUARIO</h1>
    )
  }
}
export default Login