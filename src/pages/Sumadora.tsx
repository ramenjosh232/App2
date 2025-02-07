import { IonContent, IonPage, IonInput, IonButton, IonText } from '@ionic/react';
import { useState } from 'react';

const Sumadora: React.FC = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);

  const sumar = () => {
    setResultado(num1 + num2);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonInput
          type="number"
          placeholder="Número 1"
          onIonChange={e => setNum1(Number(e.detail.value!))}
        />
        <IonInput
          type="number"
          placeholder="Número 2"
          onIonChange={e => setNum2(Number(e.detail.value!))}
        />
        <IonButton expand="block" onClick={sumar}>Sumar</IonButton>
        <IonText color="primary">
          <h2>Resultado: {resultado}</h2>
        </IonText>
      </IonContent>
    </IonPage>
  );
};


export default Sumadora;