import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { home, calculator, documentText, grid } from 'ionicons/icons';
import Home from '../pages/Home';
import Sumadora from '../pages/Sumadora';
import Traductor from '../pages/Traductor';
import Tabla from '../pages/Tabla';

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      {/* Configuración de rutas */}
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact />
        <Route path="/sumadora" component={Sumadora} exact />
        <Route path="/traductor" component={Traductor} exact />
        <Route path="/tabla" component={Tabla} exact />
        <Redirect exact from="/" to="/home" />
      </IonRouterOutlet>

      {/* Barra de pestañas inferior */}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="sumadora" href="/sumadora">
          <IonIcon icon={calculator} />
          <IonLabel>Sumadora</IonLabel>
        </IonTabButton>

        <IonTabButton tab="traductor" href="/traductor">
          <IonIcon icon={documentText} />
          <IonLabel>Traductor</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tabla" href="/tabla">
          <IonIcon icon={grid} />
          <IonLabel>Tabla</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;