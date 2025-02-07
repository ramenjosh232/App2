import { IonContent, IonPage, IonInput, IonButton, IonText } from '@ionic/react';
import { useState } from 'react';


const numeroALetras = (num: number): string => {
  const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const especiales = ['once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
  
  if (num === 0) return 'cero';
  if (num === 1000) return 'mil';
  
  let resultado = '';
  

  if (num >= 100) {
    resultado += unidades[Math.floor(num / 100)] + 'cientos ';
    num %= 100;
  }
  
  // Decenas y unidades
  if (num >= 11 && num <= 19) {
    resultado += especiales[num - 11];
  } else {
    resultado += decenas[Math.floor(num / 10)];
    if (num % 10 !== 0) resultado += ' y ' + unidades[num % 10];
  }
  
  return resultado.trim();
};

const Traductor: React.FC = () => {
  const [numero, setNumero] = useState<number>(0);
  const [letras, setLetras] = useState<string>('');

  const traducir = () => {
    if (numero < 1 || numero > 1000) {
      alert('Número fuera de rango (1-1000)');
      return;
    }
    setLetras(numeroALetras(numero));
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonInput
          type="number"
          placeholder="Número (1-1000)"
          onIonChange={e => setNumero(Number(e.detail.value!))}
        />
        <IonButton expand="block" onClick={traducir}>Traducir</IonButton>
        <IonText color="primary">
          <h2>{letras}</h2>
        </IonText>
      </IonContent>
    </IonPage>
  );
};


export default Traductor;