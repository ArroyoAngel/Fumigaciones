import React, { Component } from 'react'
import { 
  IonContent, IonPage,
  IonCard, IonCardContent,
  IonSearchbar,
  IonList, IonItemSliding, IonItem, IonAvatar, IonLabel, IonChip, IonIcon,
  IonButton,
} from '@ionic/react';
import { bonfireOutline, addOutline } from 'ionicons/icons';
import image from '../../../assets/fumigacion/color.png'

import Operaciones from '../../../models/Operaciones'
class List extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    operaciones: [],
    searchText: ''
  }
  componentDidMount(){
    Operaciones.getAll().then(res=>{
      this.setState({
        operaciones: res
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
                placeholder='Buscar Operaciones'
                disabled={false}
                animated={false}>
              </IonSearchbar>

              <IonList>
                <IonItemSliding>
                  {this.state.operaciones.map((operacion: any)=>{
                    return (
                      <IonItem key={operacion.id}>
                        <IonAvatar>
                          <img src={image} />
                        </IonAvatar>
                        <IonLabel>
                          <h2>{operacion.location.name}</h2>
                          <h3>{operacion.caldo.map((agroquimico: any)=>(`${agroquimico.name}, `))}</h3>
                          <p>{operacion.observations}</p>
                        </IonLabel>
                        <IonChip onClick={()=>console.log(operacion.id)}>
                            <IonIcon icon={bonfireOutline} color="dark" />
                          <IonLabel>Fumigar</IonLabel>
                        </IonChip>
                      </IonItem>
                    )
                  })}
                </IonItemSliding>
              </IonList>
              <IonButton shape="round" color='tertiary' href='/app/operaciones/register'>
                <IonIcon slot="start" icon={addOutline} />
                Programar
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    )
  }
}
export default List