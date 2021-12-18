import React, { Component } from 'react'
import { 
  IonContent, IonPage,
  IonCard, IonCardContent,
  IonSearchbar,
  IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonChip, IonIcon,
  IonButton,
} from '@ionic/react';
import { createOutline, addOutline } from 'ionicons/icons';
import image from '../../../assets/terreno/color.png'

class List extends Component {
  constructor(props: any){
    super(props)
    console.log("INGRESO SATISFACTORIO:",props)
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
                placeholder='Buscar Terreno'
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
              <IonButton shape="round" color='tertiary' href='/app/terrenos/register'>
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