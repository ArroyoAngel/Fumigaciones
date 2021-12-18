import React, { Component } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

class Form extends Component {
  constructor(props: any){
    super(props)
    console.log("TERRENOS REGISTER:",props)
  }
  render(): React.ReactNode {
    return (
      <h1>TERRENOS REGISTER</h1>
    )
  }
}
export default Form