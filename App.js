import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  TextInput, 
  Button,
  TouchableOpacity
} from 'react-native';
import { useState } from 'react';



export default function App() {
 const [n1, setN1] = useState('');
 const [n2, setN2] = useState('');
 const [n3, setN3] = useState('');
 const [d, setDef] = useState('');
 const [o, setObs] = useState('');

 let calcularDefinitiva =  () => {

  setDef((n1*0.30)+(n2*0.35)+(n3*0.35));
  let def= (n1*0.30)+(n2*0.35)+(n3*0.35);
  if (def>= 3){
    setObs('Es competente');
  }else if(def>=2 & def<3){
    setObs('Aún no es competente');
  }else if(def<2){
    setObs('Pierde');
  }
 }
 let limpiar = () => {
  setN1('');
  setN2('');
  setN3('');
  setDef('');
  setObs('');
}

  return (
    <View>    
        <Text style={styles.formulario}> Calcule su definitiva: </Text>
        <View>
        <Text style={styles.titulo}> Inserte la Nota 1:</Text>
        <TextInput style={styles.inputs} 
                  placeholder="Nota 1"
                  onChangeText={n1=>setN1(n1)}
                  value ={n1}
                  />
        </View>
        <View>
        <Text style={styles.titulo}> Inserte la Nota 2:</Text>
        <TextInput style={styles.inputs} 
                  placeholder="Nota 2"
                  onChangeText={n2=>setN2(n2)}
                  value ={n2}
                  />
        </View>
        <View>
        <Text style={styles.titulo}> Inserte la Nota 3:</Text>
        <TextInput style={styles.inputs} 
                  placeholder="Nota 3"
                  onChangeText={n3=>setN3(n3)}
                  value ={n3}
                  />
        </View >
        <Text>{"\n"}</Text>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Button style={styles.button}  onPress={calcularDefinitiva} title="Calcular"></Button>
          <Text>{"       "}</Text>
          <Button onPress={limpiar} title="Limpiar"></Button>
        </View>
        <View>
        <Text style={styles.formulario}> Su definitiva es: </Text>
        <TextInput style={styles.inputs} onChangeText={d=>setDef(d)} value={d}></TextInput>
        <Text style={styles.formulario}> Observación: </Text>
        <TextInput style={styles.inputs} onChangeText={o=>setObs(o)} value={o}></TextInput>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  button:{
  },
  formulario: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 12,
    marginTop: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
  inputs: {
    fontSize: 18,
    textAlign:'center',
    marginLeft: 50,
    marginRight: 50, 
    fontWeight: '600',
    borderWidth: 1,
    borderRadius: 7,
  }

});
