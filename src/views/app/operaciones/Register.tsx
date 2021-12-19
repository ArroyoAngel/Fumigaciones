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

import Operaciones from '../../../models/Operaciones'
import Agroquimicos from '../../../models/Agroquimicos'
import Terrenos from '../../../models/Terrenos'

class Register extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    caldo: '',
    location: '',
    observations: '',
    agroquimicos: [],
    terrenos: [],
    toppings: null,
  }
  register(){
    const body = {
      location: this.state.location,
      caldo: this.state.caldo,
      observations: this.state.observations
    }
    Operaciones.register(body)
  }
  componentDidMount(){
    Agroquimicos.getAll().then(res=>{
      this.setState({
        agroquimicos: res
      })
    })
    Terrenos.getAll().then(res=>{
      this.setState({
        terrenos: res
      })
    })
  }
  render(): React.ReactNode {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonItem>
                <IonLabel>Terreno</IonLabel>
                <IonSelect value={this.state.location} placeholder="Terreno" onIonChange={e => this.setState({location: e.detail.value})}>
                  {this.state.terrenos.map((terreno: any)=>{
                    return <IonSelectOption key={terreno.id} value={{id: terreno.id, name: terreno.name}}>{terreno.name}</IonSelectOption>
                  })}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel>Agroquímicos</IonLabel>
                <IonSelect
                  value={this.state.caldo}
                  multiple={true} placeholder="Agroquímicos"
                  cancelText="Cancelar" okText="Ok!"
                  onIonChange={e => this.setState({caldo: e.detail.value})}
                >
                  {this.state.agroquimicos.map((agroquimico: any)=>{
                    return <IonSelectOption key={agroquimico.id} value={{id: agroquimico.id, name: agroquimico.name}}>{agroquimico.name}</IonSelectOption>
                  })}
                </IonSelect>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Observaciones</IonLabel>
                <IonInput value={this.state.observations} onIonChange={e => this.setState({observations: e.detail.value})}></IonInput>
              </IonItem>
              <IonButton shape="round" color='tertiary' onClick={()=>this.register()}>
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