import 'react-native-gesture-handler';
import React from 'react';

import { UserProvider } from './src/context/UserContext';



import StackNav from './src/components/StackNav';






export default function App() {  

  return (  

  <UserProvider>
        <StackNav />
  </UserProvider>
   
  );
}


