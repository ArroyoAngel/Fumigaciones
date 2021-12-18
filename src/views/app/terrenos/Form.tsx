import React, { Component } from 'react'
import {
  IonContent, IonPage,
  IonCard, IonCardContent,
  IonItem, IonLabel,
  IonInput,
  IonSelect, IonSelectOption,
  IonButton, IonIcon
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
class Form extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    name: '',
    number: '',
    detail: '',
  }
  render(): React.ReactNode {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Nombre del Terreno</IonLabel>
                <IonInput value={this.state.name} onIonChange={e => this.setState({name: e.detail.value})}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Numero</IonLabel>
                <IonInput value={this.state.number} onIonChange={e => this.setState({number: e.detail.value})}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Descripción</IonLabel>
                <IonInput value={this.state.detail} onIonChange={e => this.setState({detail: e.detail.value})}></IonInput>
              </IonItem>
              <IonButton shape="round" color='tertiary'  onIonFocus={()=>console.log(this.state)}>
                <IonIcon slot="start" icon={addOutline} />
                Registrar
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    )
  }
}
export default Form