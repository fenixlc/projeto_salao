
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Component, useEffect, useState } from 'react';

import AsynStorage from '@react-native-async-storage/async-storage'



export default  function Login() {
 
  const [usuario, setusuario] = useState('')
  const [senha, setsenha] = useState('')
  const [value, setvalue] = useState('')

  
 
  async function salvardados(){
       await AsynStorage.setItem('@usuario:usuario', usuario)
       await AsynStorage.setItem('@usuario:senha', senha)         
  }

  async function Validalogin(){
    const usuario_login =  await AsynStorage.getItem('@usuario:usuario')
    const senha_login =  await AsynStorage.getItem('@usuario:senha')
    alert(usuario_login)
    alert(senha_login)
    if (usuario_login == usuario && senha_login == senha){
        alert('usuario logado')
    }else{
        alert('dados não conferem')
    }

  
}

useEffect(() => {
    setusuario('lucas')
    setsenha('123')
  
    salvardados()
}, [])


  return (
    <View style={styles.container}>
       
      
      <Text style={styles.labeltext}>LOGIN</Text>
      <TextInput style={styles.textInput}
        placeholder={'Digite o Usuário:'}
        onChangeText={text=>setusuario(text)}
        
      />
      <Text style={styles.labeltext}>SENHA </Text>
      <TextInput style={styles.textInput}
            placeholder={'Digite o Senha:'}
            secureTextEntry={true}        
            onChangeText={text=>setsenha(text)}   
      />     

      <TouchableOpacity style={styles.botaologar} onPress={()=>Validalogin()} >
        <Text style={{color:'white',textAlign: 'center'}}>Logar</Text>
      </TouchableOpacity>    

     
      
     
    
      
    </View>
)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#27282D',
    alignItems:'center',
    justifyContent:'center',
  },
textInput: {
  width:'100%',
  height:40,
  backgroundColor:'white',
  borderRadius:20,
  paddingLeft:10
},
labeltext: {
  textAlign: 'left',
  color: 'white' 
},
botaologar: {
  width:'50%',
  height:40,
  backgroundColor:'blue',
  borderRadius:20,
  justifyContent:'center'
}

});
