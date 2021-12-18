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

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          <IonMenuToggle key={0} autoHide={false}>
            <IonItem className={location.pathname === '/app/agroquimicos/list' ? 'selected' : ''} routerLink={'/app/agroquimicos/list'} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Agroquimicos'}</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === '/app/terrenos/list' ? 'selected' : ''} routerLink={'/app/terrenos/list'} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Terrenos'}</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === '/app/operaciones/list' ? 'selected' : ''} routerLink={'/app/operaciones/list'} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" ios={mailOutline} md={mailSharp} />
              <IonLabel>{'Fumigacion'}</IonLabel>
            </IonItem>
            <IonItem className={location.pathname === '/page/Inbox' ? 'selected' : ''} routerLink={'/page/Inbox'} routerDirection="none" lines="none" detail={false}>
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
