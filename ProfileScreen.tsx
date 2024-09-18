import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChurch, faUserCircle, faCog, faPlusCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Hope</Text>
        <FontAwesomeIcon icon={faChurch} size={30} color="#fff" />
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
            <FontAwesomeIcon icon={faCog} size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesomeIcon icon={faInfoCircle} size={20} color="#fff" />
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
          <FontAwesomeIcon icon={faPlusCircle} size={20} color="#fff" />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userBio: {
    color: '#fff',
    textAlign: 'center',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
  },
  addButton: {
    backgroundColor: '#007bff',
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
  },
});

export default ProfileScreen;