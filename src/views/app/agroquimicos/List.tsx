import React, { Component, useState } from 'react'
import { 
  IonPage,
  IonList, IonLabel, IonAvatar,
  IonItemSliding, IonItem, IonItemOptions, IonItemOption,
  IonChip, IonIcon,
  IonSearchbar, IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent
} from '@ionic/react';
import { createOutline, addOutline } from 'ionicons/icons';

import image from '../../../assets/veneno/color.png'

class List extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    searchText: ''
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
                  <IonItem>
                    <IonAvatar>
                      <img src={image} />
                    </IonAvatar>
                    <IonLabel>
                      <h2>Titulo</h2>
                      <h3>Subtitulo</h3>
                      <p>Contenido de la lista, que muestra los datos de agroquimico</p>
                    </IonLabel>
                    <IonChip>
                      <IonIcon icon={createOutline} color="dark" />
                      <IonLabel>Editar</IonLabel>
                    </IonChip>
                  </IonItem>
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