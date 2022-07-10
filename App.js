import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  Switch,
  Button
} from 'react-native';
import { useForm, Controller } from "react-hook-form"
import { useState } from 'react'

export default function App() {

const [deuda, setDeuda] = useState('');
const [cuota, setCuota] = useState('');
const [montoPrestamo, setMonto] = useState('');
const [tipoPrestamo, setTipo] = useState('vivienda');
const [numCuotas, setNumCuotas] = useState('12');
const [manejo, setManejo] = useState(false);

const { control, handleSubmit, formState: { errors } } = useForm({
  defaultValues: {
    Nombre: 'Nombre',
    Fecha: 'Fecha',
    Monto: '1000000'  
  }
});
const onSubmit = data => {
  let prestamopedido = (data.Monto)
  let montoPrestamo = prestamopedido
  montoPrestamo => setMonto(montoPrestamo)
  console.log(data)
  console.log(montoPrestamo,manejo,tipoPrestamo, numCuotas)
  Calcular(montoPrestamo)
    
}

  const Calcular = (monto)=>{
    let porcentaje=0
    let m = parseFloat(monto)
    let nc = parseFloat(numCuotas)

    if (tipoPrestamo == 'vivienda'){
      porcentaje=0.01
    } else if (tipoPrestamo == 'educacion'){
      porcentaje=0.005
    } else if (tipoPrestamo == 'vehiculo'){
      porcentaje=0.015
    } else if (tipoPrestamo == 'libre'){
      porcentaje=0.020
    }

    let extra = m*porcentaje
    let deuda = extra + m
    let cuota = deuda/nc

    if(manejo==true){
    cuota = cuota +10000
    }

    setCuota(String(cuota))
    setDeuda(String(deuda)) 
    console.log(manejo,porcentaje,monto, m,numCuotas, nc,tipoPrestamo,extra,deuda,cuota)
  };
  
  return (
    
    <View style= {{backgroundColor:'#f5f5f5', padding:50, margin:20 }}>
      <View style={{justifyContent:'flex-start', alignItems:'center'}}>
          <Image style={{width: 200, height: 200,resizeMode: 'stretch',marginTop:20}} source={'https://cdn.pixabay.com/photo/2016/08/10/15/01/credit-cards-1583534_960_720.jpg'}></Image>
          <Text style={{fontSize: 12,marginTop: 10,fontWeight: '600',padding: 4,paddingRight: 12}}> Calcule su Crédito: </Text>
      </View> 

      <View style={styles.container}>
          <Text style={styles.titulo}>Nombre:</Text> 
          
          <Controller 
              control={control}
              name="Nombre"
              rules={{
              required: true
              
              }}
              render={({ field: { onChange, onBlur,value } }) => (
                <TextInput
                  style={styles.campo}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            {errors.Nombre && <Text style={styles.validacion}>Es requerido</Text>}
            </View>
        

      <View style={styles.container}>

          <Text style={styles.titulo}>Fecha:</Text>
          <Controller control={control}
              rules={{
              required: true,
              valueAsDate:true
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="Fecha"
            />
            {errors.Fecha && <Text style={styles.validacion}>Es requerido</Text>}

      </View>

      <View style={styles.container}>
          <Text style={styles.titulo}>Monto de Préstamo:</Text> 
          <Controller control={control}
              rules={{
              required: { value: true, message:'Es requerido' }, 
              min: { value: 1000000, message:'mín 1 millón'} ,
              max: {value:100000000, message:'max 100 millones'}, 
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  
                  value={value}
                />
              )}
              name="Monto"
            />
            {errors.Monto && <Text style={styles.validacion}>{errors.Monto.message}</Text>}    
      </View>

      <View style={styles.container}>          

          <Text style={styles.titulo}>Tipo de Préstamo:</Text>
          
                <Picker
                    selectedValue={tipoPrestamo}
                    name="tipoPrestamo"
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
                  >
                    <Picker.Item label="Vivienda" value="vivienda" />
                    <Picker.Item label="Educación" value="educacion" />
                    <Picker.Item label="Vehículo" value="vehiculo" />
                    <Picker.Item label="Libre Inversión" value="libre" />
                  </Picker>

      </View>

      <View style={styles.container}>
          <Text style={styles.titulo}>Númeor de cuotas:</Text>
          <Picker
                    selectedValue={numCuotas}
                    name="numCuotas"
                    style={styles.select}
                    onValueChange={(itemValue, itemIndex) => setNumCuotas(itemValue)}
                  >
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="24" value="24" />
                    <Picker.Item label="36" value="36" />
                    <Picker.Item label="48" value="48" />
                  </Picker>
      </View>   

      <View style={styles.container}>  
          <Text style={styles.titulo}>Manejo de Tarjeta:</Text>
          <Switch
          style={styles.campo}
          onValueChange={manejo => setManejo(manejo)}
          value={manejo}
        />
      </View>

      <View style={styles.container}>
          <Text style={styles.titulo}>Total de Deuda:</Text>
          <TextInput style={styles.campo} onChangeText={deuda=>setDeuda(deuda)} value={deuda}></TextInput>
      </View>

      <View style={styles.container}>
          <Text style={styles.titulo}>Valor de Cuota:</Text>
          <TextInput style={styles.campo} onChangeText={cuota=>setCuota(cuota)} value={cuota}></TextInput>
      </View>
      
      <View style={styles.container}>
          <TouchableOpacity title="Submit" onPress={handleSubmit(onSubmit)} style={styles.boton}> 
              <Text style={styles.letraboton}>
              Calcular
              </Text>
              </TouchableOpacity>
       </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingRight:300
  },
  titulo: {
    fontSize: 16,
    padding:20,
    
  },
  campo:{
    ackgroundColor: '#fff',
    borderColor: '#007aff',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 1,
    margin:20,
    
  },
  validacion:{
    fontSize: 10,
    color:'red',
    margin:22
  },
  boton:{
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      padding:5,
      margin:20,
    },
  letraboton:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  },
  select:{
    ackgroundColor: '#fff',
    borderColor: '#007aff',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 1,
    margin:20,
    width:205
  }

});
