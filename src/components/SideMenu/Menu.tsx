import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inbox',
    url: '/page/Inbox',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const user: any = localStorage.getItem('user')
  const credential: any = localStorage.getItem('credential')
  const loginUser = {
    ...JSON.parse(user),
    ...JSON.parse(credential),
  }
  console.log("ESTO ES LOGINUSER", loginUser)
  let parent: any = location.pathname.split('/')
  parent = `/${parent[1]}/${parent[2]}`
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{loginUser.bussines}</IonListHeader>
          <IonNote>{loginUser.email}</IonNote>
          <IonMenuToggle key={0} autoHide={false}>
            <IonItem className={parent === '/app/agroquimicos' ? 'selected' : ''} href={'/app/agroquimicos/list'}  detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Agroquimicos'}</IonLabel>
            </IonItem>
            <IonItem className={parent === '/app/terrenos' ? 'selected' : ''} href={'/app/terrenos/list'}  detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Terrenos'}</IonLabel>
            </IonItem>
            <IonItem className={parent === '/app/operaciones' ? 'selected' : ''} href={'/app/operaciones/list'}  detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Fumigacion'}</IonLabel>
            </IonItem>
            <IonItem className={parent === '/page/Inbox' ? 'selected' : ''} href={'/page/Inbox'}  detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Inbox'}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          <IonItem lines="none" key={0}>
            <IonIcon slot="start" icon={bookmarkOutline} />
            <IonLabel>{'Family'}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
