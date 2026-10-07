import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

export default function App() {
  const [nombrePlanta, setNombrePlanta] = useState('');
  const [estaRegada, setEstaRegada] = useState(false);
  const [resumen, setResumen] = useState('');

  const guardarRegistro = () => {
    if (nombrePlanta.trim() === '') {
      setResumen('Por favor, ingresa el nombre de la planta.');
      return;
    }
    
    const estado = estaRegada ? 'ha sido regada 💧' : 'aún necesita agua 🥀';
    setResumen(`Registro guardado: La planta "${nombrePlanta}" ${estado}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi Jardín 🌱</Text>

      <Text style={styles.label}>Nombre de la planta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Helecho, Suculenta..."
        value={nombrePlanta}
        onChangeText={setNombrePlanta}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>¿Ya la regaste hoy?</Text>
        <Switch
          value={estaRegada}
          onValueChange={setEstaRegada}
        />
      </View>

      <Button 
        title="Guardar Registro" 
        onPress={guardarRegistro} 
        color="#2e7d32"
      />

      {resumen !== '' && (
        <Text style={styles.resumen}>{resumen}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f7f2',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#2e7d32',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  resumen: {
    marginTop: 30,
    fontSize: 18,
    color: '#1b5e20',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
  },
});