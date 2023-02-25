import { Text, View, TextInput, TouchableOpacity, Button } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home(){

  function handleParticipantAdd(){
    console.log("Adicionar participante");
  }
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>  
      <Text style={styles.eventDate}>
        Sexta, 22 de Fevereiro de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>  


      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}