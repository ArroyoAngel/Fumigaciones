import React, { Component } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

class Register extends Component {
  constructor(props: any){
    super(props)
    console.log("AGROQUIMICOS REGISTER:",props)
  }
  render(): React.ReactNode {
    return (
      <h1>OPERACIONES REGISTER</h1>
    )
  }
}
export default Register