import React, { Component } from 'react'
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

class List extends Component {
  constructor(props: any){
    super(props)
    console.log("INGRESO SATISFACTORIO:",props)
  }
  render(): React.ReactNode {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">TITULOS2</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    )
  }
}
export default List