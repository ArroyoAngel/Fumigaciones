import React, { Component } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

class List extends Component {
  constructor(props: any){
    super(props)
    console.log("INGRESO SATISFACTORIO:",props)
  }
  render(): React.ReactNode {
    return (
      <h1>TERRENOS LIST</h1>
    )
  }
}
export default List