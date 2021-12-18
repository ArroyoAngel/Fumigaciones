import React, { Component } from 'react'
import { IonButton, IonItem, IonCard, IonCardContent, IonContent, IonLabel, IonIcon, IonInput, IonPage, IonSelect, IonSelectOption } from '@ionic/react';
import { createOutline, addOutline } from 'ionicons/icons';
class Register extends Component {
  constructor(props: any){
    super(props)
    console.log("AGROQUIMICOS REGISTER:",props)
  }
  public state = {
    name: '',
    type: ''
  }
  render(): React.ReactNode {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonItem>
                <IonLabel position="floating">Nombre de agroquimico</IonLabel>
                <IonInput value={this.state.name} onIonChange={e => this.setState({name: e.detail.value})}></IonInput>
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