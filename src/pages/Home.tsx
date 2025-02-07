import { IonContent, IonPage, IonImg } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="ion-text-center">
          <IonImg 
            src="/foto.jpg"  
            style={{ width: '100px', margin: 'auto' }}
          />
          <h1>Joshua</h1>
          <p>Fermin</p>
          <p>Joshuafermin6@gmail.com</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;