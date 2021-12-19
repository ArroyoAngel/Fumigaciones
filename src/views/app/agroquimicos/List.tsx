import React, { Component, useState } from 'react'
import { 
  IonPage,
  IonList, IonLabel, IonAvatar,
  IonItemSliding, IonItem, IonItemOptions, IonItemOption,
  IonChip, IonIcon,
  IonSearchbar, IonContent,
  IonButton,
  IonCard,
  IonCardContent
} from '@ionic/react';
import { createOutline, addOutline } from 'ionicons/icons';
import image from '../../../assets/veneno/color.png'
import Agroquimicos from '../../../models/Agroquimicos'

class List extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    agroquimicos: [],
    searchText: ''
  }
  componentDidMount(){
    Agroquimicos.getAll().then(res=>{
      this.setState({
        agroquimicos: res
      })
    })
  }
  render(): React.ReactNode {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonSearchbar
                value={this.state.searchText}
                onIonChange={e => this.setState({searchText: e.detail.value!})}
                color="tertiary"
                placeholder='Buscar agroquímicos'
                disabled={false}
                animated={false}>
              </IonSearchbar>

              <IonList>
                <IonItemSliding>
                  {this.state.agroquimicos.map((agroquimico: any)=>{
                    return (
                      <IonItem key={agroquimico.id}>
                        <IonAvatar>
                          <img src={image} />
                        </IonAvatar>
                        <IonLabel>
                          <h2>{agroquimico.name}</h2>
                          <h3>{agroquimico.type}</h3>
                          <p>Contenido de la lista, que muestra los datos de agroquimico</p>
                        </IonLabel>
                        <IonChip onClick={()=>console.log(agroquimico.id)}>
                          <IonIcon icon={createOutline} color="dark" />
                          <IonLabel>Editar</IonLabel>
                        </IonChip>
                      </IonItem>
                    )
                  })}
                </IonItemSliding>
              </IonList>
              <IonButton shape="round" color='tertiary' href='/app/agroquimicos/register'>
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
export default List