import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBook, faMapMarkerAlt, faChurch, faCalendarAlt, faMusic, faCreditCard, faComment, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Hope</Text>
        <FontAwesomeIcon icon={faChurch} size={30} color="#fff" />
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
            <FontAwesomeIcon icon={faHome} size={20} color="#fff" />
            <Text style={styles.navButtonText}>Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <FontAwesomeIcon icon={faBook} size={20} color="#fff" />
            <Text style={styles.navButtonText}>Bible</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size={20} color="#fff" />
            <Text style={styles.navButtonText}>Location</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.prayerRequestButton}>
          <Text style={styles.prayerRequestButtonText}>Send Prayer Request</Text>
          <FontAwesomeIcon icon={faComment} size={15} color="#fff" />
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
  liveContainer: {
    marginBottom: 20,
  },
  liveTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  liveInfo: {
    color: '#fff',
    marginBottom: 10,
  },
  livePlayer: {
    height: 200,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  prayerRequestButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prayerRequestButtonText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  eventsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
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
  },
});

export default HomeScreen;