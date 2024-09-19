import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChurch, faUserCircle, faCog, faPlusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/HEADER-LOGO.png')} style={styles.headerLogo} />
      </View>
      <View style={styles.content}>
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/profile-image.jpg')} // Replace with actual image path
            style={styles.profileImage}
          />
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userBio}>This is the space for the user bio</Text>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesomeIcon icon={faCog} size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesomeIcon icon={faInfoCircle} size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>My Ministries</Text>
        <View style={styles.ministriesContainer}>
          <TouchableOpacity style={styles.ministryItem}>
            {/* Placeholder for ministry details */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.ministryItem}>
            {/* Placeholder for ministry details */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <FontAwesomeIcon icon={faPlusCircle} size={20} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>My Events</Text>
        <View style={styles.eventsContainer}>
          <TouchableOpacity style={styles.eventItem}>
            {/* Placeholder for event details */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.eventItem}>
            {/* Placeholder for event details */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.eventItem}>
            {/* Placeholder for event details */}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D9D9D9',  // Updated background color
    
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',  // Updated light accent color
  },
  content: {
    padding: 20,
    marginBottom: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 190,
    borderColor: '#465532',  // Updated light accent color
    borderWidth: 7,
    marginBottom: 10,
    marginTop: -70,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#465532',  // Updated light accent color
    marginBottom: 5,
  },
  userBio: {
    color: '#465532',  // Updated light accent color
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#465532',  // Updated Green Accent Background color
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#465532',  // Updated light accent color
    marginBottom: 10,
  },
  ministriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ministryItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 90,
  },
  addButton: {
    backgroundColor: '#465532',  // Updated Green Accent Background color
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  eventsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  eventItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    height: 90,
  },
});

export default ProfileScreen;
