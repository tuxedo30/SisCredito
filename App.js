import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useForm, Controller } from "react-hook-form"
import { useState } from 'react'



export default function App() {

const [deuda, setDeuda] = useState('');
const [cuota, setCuota] = useState('');
const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      nombre: '',
      fecha:'',
      montoPrestamo:'',
      tipoPrestamo:'',
      numCuotas:'',
      manejo:''
    }
  });
  const onSubmit = ()=>{

  };
  const limpiar = () =>{
      nombre= '';
      fecha='';
      montoPrestamo='';
      tipoPrestamo='';
      numCuotas='';
      manejo='';
      setDeuda('');
      setCuota('')
  };
  
  return (
    
    <View style= {{backgroundColor:'#f5f5f5', padding:50, margin:20}}>
      <View style={{justifyContent:'flex-start', alignItems:'center'}}>
          <Image style={{width: 200, height: 200,resizeMode: 'stretch',marginTop:20}} source={'https://cdn.pixabay.com/photo/2016/08/10/15/01/credit-cards-1583534_960_720.jpg'}></Image>
          <Text style={{fontSize: 12,marginTop: 10,fontWeight: '600',padding: 4,paddingRight: 12}}> Calcule su Crédito: </Text>
      </View> 

      <View style={styles.container}>
          <Text style={styles.titulo}>Nombre:</Text> 
          
          <Controller control={control}
              rules={{
              required: true,
              }}
              render={({ field: { onChange, onBlur, nombre } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={nombre}
                />
              )}
              name="nombre"
            />
            {errors.nombre && <Text style={styles.validacion}>Es requerido</Text>}
            
        </View> 

      <View style={styles.container}>

          <Text style={styles.titulo}>Fecha:</Text>
          <Controller control={control}
              rules={{
              required: true,
              valueAsDate:true
              }}
              render={({ field: { onChange, onBlur, fecha } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={fecha}
                />
              )}
              name="fecha"
            />
            {errors.fecha && <Text style={styles.validacion}>Es requerido</Text>}

      </View>

      <View style={styles.container}>
          <Text style={styles.titulo}>Monto de Préstamo:</Text> 
          <Controller control={control}
              rules={{
              required: true,
              valueAsNumber:true
              }}
              render={({ field: { onChange, onBlur, montoPrestamo } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={montoPrestamo}
                />
              )}
              name="montoPrestamo"
            />
            {errors.montoPrestamo && <Text style={styles.validacion}>Es requerido</Text>}    
      </View>

      <View style={styles.container}>          

          <Text style={styles.titulo}>Tipo de Préstamo:</Text>
          <Controller control={control}
              rules={{
              required: true,
              valueAsNumber:true
              }}
              render={({ field: { onChange, onBlur, tipoPrestamo } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={tipoPrestamo}
                />
              )}
              name="tipoPrestamo"
            />
            {errors.tipoPrestamo && <Text style={styles.validacion}>Es requerido</Text>}

      </View>

      <View style={styles.container}>
          <Text style={styles.titulo}>Númeor de cuotas:</Text>
          <Controller control={control}
              rules={{
              required: true,
              valueAsNumber:true
              }}
              render={({ field: { onChange, onBlur, numCuotas } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={numCuotas}
                />
              )}
              name="numCuotas"
            />
            {errors.numCuotas && <Text style={styles.validacion}>Es requerido</Text>}
      </View>   

      <View style={styles.container}>  
          <Text style={styles.titulo}>Manejo de Tarjeta:</Text>
          <Controller control={control}
              rules={{
              required: true,
              valueAsNumber:true
              }}
              render={({ field: { onChange, onBlur, manejo } }) => (
                <TextInput
                  style={styles.campo}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={manejo}
                />
              )}
              name="manejo"
            />
            {errors.manejo && <Text style={styles.validacion}>Es requerido</Text>}
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
            <TouchableOpacity title="limpiar" onPress={handleSubmit(limpiar)} style={styles.boton}> 
              <Text style={styles.letraboton}>
                  Limpiar</Text>
            </TouchableOpacity>
       </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
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
  }

});
