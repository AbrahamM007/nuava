import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const NewHopeApp = () => {
  // Replace these paths with the paths to your image files
  const icons = [
    require('./assets/Church1.png'),
    require('./assets/Bible1.png'),
    require('./assets/Podium1.png'),
    require('./assets/Events1.png'),
    require('./assets/Music1.png'),
    require('./assets/Wallet1.png'),
    require('./assets/Message1.png'),
    require('./assets/Life-Groups1.png'),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Logo Image */}
      <View style={styles.header}>
        <Image source={require('./assets/HEADER-LOGO.png')} style={styles.headerLogo} />
      </View>
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={index} style={styles.iconBox}>
            <Image source={icon} style={styles.iconImage} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Adjusted height to be static for header
  },
  headerLogo: {
    width: '60%', // Adjust the size based on the image dimensions
    height: 80,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20, // Adjusted margin to ensure proper spacing
  },
  iconBox: {
    width: 150,
    height: 150,
    backgroundColor: '#465532',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  iconImage: {
    width: 50,
    height: 50, // Adjust the size of the images as needed
    resizeMode: 'contain',
  },
});

export default NewHopeApp;
