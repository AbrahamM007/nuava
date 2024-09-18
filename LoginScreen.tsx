import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './types'; // Adjust path as necessary

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data.success) {
        navigation.navigate('HomeScreen');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesomeIcon icon={faGoogle} size={20} color="#4285F4" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesomeIcon icon={faFacebook} size={20} color="#3B5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesomeIcon icon={faTwitter} size={20} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { width: '80%', padding: 10, margin: 10, borderWidth: 1, borderColor: '#ccc' },
  button: { padding: 10, backgroundColor: '#007BFF', borderRadius: 5 },
  buttonText: { color: '#fff' },
  orText: { margin: 10 },
  socialButtons: { flexDirection: 'row', justifyContent: 'space-around', width: '80%' },
  socialButton: { padding: 10 },
});

export default LoginScreen;
