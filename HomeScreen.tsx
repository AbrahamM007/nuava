// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBook, faMapMarkerAlt, faChurch, faCalendarAlt, faMusic, faCreditCard, faComment, faInfoCircle, faTv } from '@fortawesome/free-solid-svg-icons';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/HEADER-LOGO.png')} style={styles.headerLogo} />
      </View>
      <View style={styles.container}>
        
      </View>
      <View style={styles.content}>
        <View style={styles.liveContainer}>
          <Text style={styles.liveTitle}>Live</Text>
          <Text style={styles.liveInfo}>Started at 9:00</Text>
          <View style={styles.livePlayer}>
            {/* Placeholder for Live video player */}
          </View>
        </View>
        <View style={styles.navContainer}>
          <TouchableOpacity style={styles.navButton}>
            <FontAwesomeIcon icon={faTv} size={20} color="#FFF" />
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <FontAwesomeIcon icon={faBook} size={20} color="#FFF" />
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#FFF" />
            
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.prayerRequestButton}>
          <Text style={styles.prayerRequestButtonText}>Send Prayer Request</Text>
          <FontAwesomeIcon icon={faComment} size={15} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.eventsTitle}>Events</Text>
        <View style={styles.eventsContainer}>
          <TouchableOpacity style={styles.eventItem}>
            {/* Placeholder for event details */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.eventItem}>
            {/* Placeholder for event details */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',  // Updated background color
    marginTop: -20,
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200, // Adjusted height to be static for header
    marginTop: 20,
    marginBottom: -50,
  },
  headerLogo: {
    width: '60%', // Adjust the size based on the image dimensions
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',  // Updated light accent color
  },
  content: {
    padding: 20,
    marginBottom: 200,
  },
  liveContainer: {
    marginBottom: 30,
  },
  liveTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5050',  // Updated light accent color
    marginBottom: 5,
  },
  liveInfo: {
    color: '#465532',  // Updated light accent color
    marginBottom: 10,
  },
  livePlayer: {
    height: 200,
    backgroundColor: '#333',
    borderRadius: 25,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#465532',  // Updated Green Accent Background color
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  iconBox: {
    // Add your styles for the icon box here
  },
  iconImage: {
    // Add your styles for the icon image here
  },
  prayerRequestButton: {
    backgroundColor: '#465532',  // Updated Green Accent Background color
    padding: 15,
    borderRadius: 90,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  prayerRequestButtonText: {
    color: '#FFF',  // Updated light accent color
    fontSize: 20,
    marginRight: 10,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#465532',  // Updated light accent color
    marginBottom: 10,
    marginTop: 20,
  },
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 90,
  },
});

export default HomeScreen;
