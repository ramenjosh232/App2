import { IonContent, IonPage, IonInput, IonButton, IonText } from '@ionic/react';
import { useState } from 'react';

const Tabla: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= 13; i++) {
      nuevaTabla.push(numero * i);
    }
    setTabla(nuevaTabla);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonInput
          type="number"
          placeholder="Número"
          onIonChange={e => setNumero(Number(e.detail.value!))}
        />
        <IonButton expand="block" onClick={generarTabla}>Generar</IonButton>
        
        {tabla.map((valor, index) => (
          <IonText key={index}>
            <p>{numero} x {index + 1} = {valor}</p>
          </IonText>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tabla;