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

class Register extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    type: '',
    location: '',
  }
  render(): React.ReactNode {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Terreno a Fumigar</IonLabel>
                <IonInput value={this.state.location} onIonChange={e => this.setState({location: e.detail.value})}></IonInput>
              </IonItem>
              <IonSelect interface="popover" value={this.state.type} placeholder="Tipo de Agroquímico" onIonChange={e => this.setState({type: e.detail.value})}>
                <IonSelectOption value="herbicida">Herbicida</IonSelectOption>
                <IonSelectOption value="insecticida">Insecticida</IonSelectOption>
                <IonSelectOption value="abono">Abono</IonSelectOption>
                <IonSelectOption value="otros">Otros</IonSelectOption>
              </IonSelect>
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
export default Register