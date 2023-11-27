import { TextInput, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import * as Usuario from "../(tabs)/usuario.js";


export default  function app() {
  const [prestador , setprestador] = useState(['(Selecione)','Leonardo','Juliete','Lorena']);
  const [codigo, setcodigo] = useState('')

  const [feed, setfeed] = useState('')

  const resultado =  '';


  const [avaliacao , setavaliacao] = useState(['(Selecione)','Excelente','Bom','Regular','Ruim']);
  


  const [prestadorSelecionado, SetprestadorSelecionado] = useState([]);

  const [avaliacaoSelecionado, SetavaliacaoSelecionado] = useState([]);

  function ValidaCodigo(){
    
    if (codigo== ''){
     
      alert('preencher o campo código!')

    }
    else{
     const result =  Usuario.validaCodigo(codigo, resultado);
       alert(result);

    }

    //gravar(prestador,avaliacao,comentario)
      
}

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>CODIGO</Text>
      <TextInput style={styles.inputCadastro}
        placeholder={'Digite o codigo:'}
        onChangeText={text=>setcodigo(text)}
        
      />
      <View style={styles.container}>
        <Text style={styles.titulo}>Selecione o Prestador:</Text>    
     
          <Picker style={styles.picker}
              selectedValue={prestadorSelecionado}    
              onValueChange={(itemValue) => 
                  SetprestadorSelecionado(itemValue)
              }    
          >

          {
            prestador.map(cr => {
                return <Picker.Item label={cr} value={cr} />

            })

          }     

      </Picker>
     
         <Text style={styles.titulo}>Selecione a Avaliação</Text>
     

   
      <Picker style={styles.picker}
          selectedValue={avaliacaoSelecionado}    
          onValueChange={(itemValue) => 
            SetavaliacaoSelecionado(itemValue)
        }        
      >

      {
         avaliacao.map(cr => {
            return <Picker.Item label={cr} value={cr} />

         })

      }
      </Picker>
      
      <View style={styles.container2}>
        <Text style={styles.titulo}>Digite o Feedback</Text>
        <TextInput style={styles.inputCadastro1}
            onChangeText={text=>setfeed(text)}   
        />    
         </View> 
   </View>
     <View style={styles.container2}>
          <TouchableOpacity style={styles.btnCadastro} onPress={()=>ValidaCodigo()} >
            <Text style={{color:'white',textAlign: 'center'}}>Salvar</Text>
          </TouchableOpacity>    
      </View>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 3,
      backgroundColor: '#38a69d',    
      justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: '#38a69d',   
    justifyContent: 'center',
},
  titulo:
  {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom:5,    
      paddingStart:0,
      marginTop: 5,
  },

  btnCadastro:
  {
      backgroundColor: 'black',
      fontSize: 22,
      marginBottom: 5,
      padding: 7,
      borderRadius: 8,
      width: 280,
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 5,
  },

  inputCadastro:
  {
     borderBottomWidth: 1,
     height:40,
     marginBottom:5,
     fontSize:20,
     textAlign:'left',

  },

  inputCadastro1:
  {
    backgroundColor: '#deb887',
     height:100,
     width: 350,
     marginBottom:'8%',
     fontSize:16,
     textAlign:'left',
     marginTop: 15,

  },

  picker:{

    width: 350,
    fontSize: 20,   
    backgroundColor: '#deb887',

  },
});




