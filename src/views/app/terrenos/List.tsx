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
import Terrenos from '../../../models/Terrenos'

class List extends Component {
  constructor(props: any){
    super(props)
  }
  public state = {
    searchText: '',
    terrenos: []
  }
  componentDidMount(){
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
                  {this.state.terrenos.map((terreno: any)=>{
                    return (
                      <IonItem key={terreno.id}>
                        <IonAvatar>
                          <img src={image} />
                        </IonAvatar>
                        <IonLabel>
                          <h2>{terreno.name}</h2>
                          <h3>Número: {terreno.number}</h3>
                          <p>{terreno.detail}</p>
                        </IonLabel>
                        <IonChip onClick={()=>console.log(terreno.id)}>
                          <IonIcon icon={createOutline} color="dark" />
                          <IonLabel>Editar</IonLabel>
                        </IonChip>
                      </IonItem>
                    )
                  })}
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