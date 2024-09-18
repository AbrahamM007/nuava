import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChurch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const MinistriesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Hope</Text>
        <FontAwesomeIcon icon={faChurch} size={30} color="#fff" />
      </View>
      <View style={styles.content}>
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

export default MinistriesScreen;