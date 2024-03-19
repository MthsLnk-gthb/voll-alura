import Login from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from './src/styles/temas'
import Cadastro from './src/Cadastro';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <Cadastro/>
    </NativeBaseProvider>
  );
}