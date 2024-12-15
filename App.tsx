// App.tsx

import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  FlatList,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import YoutubeIframe from "react-native-youtube-iframe";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// -----------------------
// 1. Define Styles First
// -----------------------

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#D8F3DC",
  },
  // Auth screen styles
  authScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  authBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  authCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
  },
  authToggleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
  },
  authToggleActive: {
    flex: 1,
    backgroundColor: "#2D6A4F",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  authToggleInactive: {
    flex: 1,
    backgroundColor: "#D8F3DC",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  authToggleTextActive: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  authToggleTextInactive: {
    color: "#2D6A4F",
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#F8F8F8",
    fontSize: 16,
    color: "#000",
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#F8F8F8",
  },
  picker: {
    width: "100%",
    height: 40,
    color: "#000",
  },
  authButton: {
    backgroundColor: "#B7E4C7",
    borderRadius: 10,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  authButtonText: {
    color: "#2D6A4F",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    color: "#A8A8A8",
    marginBottom: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  socialIcon: {
    backgroundColor: "#2D6A4F",
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  socialIconText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Home screen
  homeScreenContainer: {
    flex: 1,
    backgroundColor: "#D8F3DC",
  },
  homeScreenScroll: {
    padding: 16,
    paddingBottom: 100, // space for bottom nav
  },
  
  videoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  videoTop: {
    backgroundColor: "#F9FBE7",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  videoBottom: {
    backgroundColor: "#B7E4C7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  liveBadge: {
    color: "red",
    fontWeight: "bold",
    marginBottom: 4,
  },
  liveText: {
    color: "#2D6A4F",
  },
  playButton: {
    backgroundColor: "#2D6A4F",
    borderRadius: 20,
    padding: 8,
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: "center",
    flex: 1,
  },
  iconText: {
    marginTop: 4,
    color: "#2D6A4F",
    fontSize: 16,
    fontWeight: "500",
  },
  // Event card styles
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2D6A4F",
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: "#6B705C",
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: "#2D6A4F",
  },

  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#2D6A4F",
    textAlign: "left",
  },
  watchHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D6A4F",
    marginBottom: 16,
    textAlign: "center",
  },

  // Apps screen
  appsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  appButton: {
    backgroundColor: "#B7E4C7",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "48%",
    marginBottom: 16,
  },
  appButtonText: {
    color: "#2D6A4F",
    fontSize: 16,
    fontWeight: "500",
  },

  // Profile screen
  profileHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2D6A4F",
    marginBottom: 16,
    textAlign: "center",
  },
  profileTopSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D6A4F",
    marginBottom: 4,
  },
  profileBio: {
    fontSize: 14,
    color: "#2D6A4F",
  },
  profileIconsRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  profileIconButton: {
    backgroundColor: "#B7E4C7",
    borderRadius: 20,
    padding: 10,
    marginRight: 16,
  },

  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  profileSectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D6A4F",
  },
  addButton: {
    backgroundColor: "#2D6A4F",
    borderRadius: 20,
    padding: 6,
  },
  largeCard: {
    backgroundColor: "#F9FBE7",
    borderRadius: 20,
    padding: 15,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
  },
  smallCard: {
    backgroundColor: "#F9FBE7",
    borderRadius: 20,
    width: "48%",
    height: 80,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
  },
  cardText: {
    color: "#2D6A4F",
    fontSize: 16,
    fontWeight: "500",
  },
  cardSubText: {
    color: "#6B705C",
    fontSize: 14,
  },

  // Placeholder screen
  placeholderScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  // Bottom Nav
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#D8F3DC",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E4E4E4",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navItem: {
    alignItems: "center",
  },
  navIconContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "transparent",
    marginBottom: 4,
  },
  navIconActive: {
    backgroundColor: "#B7E4C7",
  },
  navText: {
    color: "#2D6A4F",
    fontSize: 14,
    fontWeight: "500",
  },
  navTextActive: {
    fontWeight: "bold",
  },

  // Watch screen placeholders
  placeholderGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  placeholderCard: {
    backgroundColor: "#F9FBE7",
    width: "48%",
    aspectRatio: 1.6, // controls the height based on width, adjust as needed
    borderRadius: 20,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#2D6A4F",
    fontSize: 16,
    fontWeight: "500",
  },

  // Additional text style to fix TypeScript error
  text: {
    color: "#2D6A4F",
    fontSize: 16,
    textAlign: "center",
  },

  // Logout button styles
  logoutButton: {
    backgroundColor: "#FF6B6B",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Events row style
  eventsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  // Toggle View Button Styles
  toggleViewButton: {
    backgroundColor: "#2D6A4F",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  toggleViewButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

// -----------------------
// 2. Define Interfaces
// -----------------------

interface Message {
  id: string;
  text: string;
  createdAt: Date;
  user: {
    id: string;
    name: string;
  };
}

interface User {
  email: string;
  password: string;
  userType?: string;
}

// -----------------------
// 3. Define the App Component
// -----------------------

const App: React.FC = (): React.ReactNode => {
  // -----------------------
  // 3.1. State Variables
  // -----------------------
  
  const [currentScreen, setCurrentScreen] = useState<"login" | "signup" | "home">("login");
  const [selectedUserType, setSelectedUserType] = useState<string>("default");
  const [latestVideoId, setLatestVideoId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"home" | "watch" | "apps" | "profile">("home"); // for bottom nav
  const [loading, setLoading] = useState<boolean>(false);
  const [events, setEvents] = useState<Array<{id: string, title: string, date: string, description: string}>>([]);
  const [ministries, setMinistries] = useState<Array<{id: string, name: string, description: string}>>([]);
  const [userProfile, setUserProfile] = useState<{name: string, bio: string, photoUrl: string} | null>(null);
  const [isGridView, setIsGridView] = useState<boolean>(true); // Example state for dynamic numColumns

  const YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY"; // Replace with your actual API key

  // -----------------------
  // 3.2. useEffect Hooks
  // -----------------------
  
  useEffect(() => {
    const checkUserCredentials = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("@user_credentials");
        if (storedUser) {
          setCurrentScreen("home");
          const parsedUser: User = JSON.parse(storedUser);
          // Optionally, fetch user profile based on stored credentials
          fetchUserProfile(parsedUser.email);
        }
      } catch (error) {
        console.error("Error loading stored credentials:", error);
      }
    };

    checkUserCredentials();
  }, []);

  useEffect(() => {
    fetchLatestVideo();
    fetchEvents();
    fetchMinistries();
  }, []);

  // -----------------------
  // 3.3. Fetch Functions
  // -----------------------
  
  const fetchLatestVideo = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UCzohr1VLqaLFKoZCdKsHvoQ&part=snippet,id&order=date&maxResults=1`
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setLatestVideoId(data.items[0].id.videoId);
      }
    } catch (error) {
      console.error("Failed to fetch latest video: ", error);
      Alert.alert("Error", "Failed to fetch the latest video.");
    } finally {
      setLoading(false);
    }
  };

  const fetchEvents = async () => {
    // Replace with your actual API or data source
    // For demonstration, using static data
    const mockEvents = [
      {
        id: "1",
        title: "Community Outreach",
        date: "2024-05-20",
        description: "Join us for a day of community service and outreach."
      },
      {
        id: "2",
        title: "Bible Study Group",
        date: "2024-06-15",
        description: "Deep dive into the scriptures with our study group."
      },
      // Add more events as needed
    ];
    setEvents(mockEvents);
  };

  const fetchMinistries = async () => {
    // Replace with your actual API or data source
    // For demonstration, using static data
    const mockMinistries = [
      {
        id: "1",
        name: "Youth Ministry",
        description: "Engaging the youth through various activities and programs."
      },
      {
        id: "2",
        name: "Music Ministry",
        description: "Leading worship through music and song."
      },
      // Add more ministries as needed
    ];
    setMinistries(mockMinistries);
  };

  const fetchUserProfile = async (email: string) => {
    // Replace with your actual API or data source
    // For demonstration, using static data
    const mockProfile = {
      name: "John Doe",
      bio: "Passionate about community service and outreach.",
      photoUrl: "https://example.com/user-photo.jpg"
    };
    setUserProfile(mockProfile);
  };

  // -----------------------
  // 3.4. Handler Functions
  // -----------------------
  
  const toggleScreen = () => {
    setCurrentScreen((prev) => (prev === "login" ? "signup" : "login"));
  };

  const handleLogin = async () => {
    if (email.trim() && password.trim()) {
      try {
        // In a real app, authenticate with backend here
        const userObject: User = { email, password };
        await AsyncStorage.setItem("@user_credentials", JSON.stringify(userObject));
        setCurrentScreen("home");
        fetchUserProfile(email);
      } catch (error) {
        Alert.alert("Error", "Failed to save user credentials.");
      }
    } else {
      Alert.alert("Error", "Please enter both email and password.");
    }
  };

  const handleSignup = async () => {
    if (email.trim() && password.trim() && confirmPassword.trim()) {
      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match.");
        return;
      }
      if (selectedUserType === "default") {
        Alert.alert("Error", "Please select a user type.");
        return;
      }
      try {
        // In a real app, send signup data to backend here
        const userObject: User = { email, password, userType: selectedUserType };
        await AsyncStorage.setItem("@user_credentials", JSON.stringify(userObject));
        setCurrentScreen("home");
        fetchUserProfile(email);
      } catch (error) {
        Alert.alert("Error", "Failed to save user credentials after signup.");
      }
    } else {
      Alert.alert("Error", "Please fill out all fields.");
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("@user_credentials");
      setCurrentScreen("login");
      setActiveTab("home");
      setUserProfile(null);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSelectedUserType("default");
    } catch (error) {
      Alert.alert("Error", "Failed to log out.");
    }
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  // -----------------------
  // 3.5. Render Functions
  // -----------------------
  
  const renderVideoCard = () => (
    <View style={styles.videoCard}>
      <View style={styles.videoTop}>
        {loading ? (
          <ActivityIndicator size="large" color="#2D6A4F" />
        ) : latestVideoId ? (
          <YoutubeIframe height={200} videoId={latestVideoId} />
        ) : (
          <Text style={styles.text}>No video available.</Text>
        )}
      </View>
      <View style={styles.videoBottom}>
        <View>
          <Text style={styles.liveBadge}>LIVE</Text>
          <Text style={styles.liveText}>Started at 9:00 AM</Text>
        </View>
        <TouchableOpacity style={styles.playButton} onPress={() => {/* Handle Play Button Press */}}>
          <Ionicons name="play" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderHomeContent = () => (
    <FlatList
      key="home" // Unique key for Home FlatList
      ListHeaderComponent={
        <>
          {renderVideoCard()}
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => setActiveTab("watch")}>
              <Ionicons name="tv-outline" size={24} color="#2D6A4F" />
              <Text style={styles.iconText}>Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {/* Navigate to Bible Section */}}>
              <Ionicons name="book-outline" size={24} color="#2D6A4F" />
              <Text style={styles.iconText}>Bible</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {/* Navigate to Location Services */}}>
              <Ionicons name="location-outline" size={24} color="#2D6A4F" />
              <Text style={styles.iconText}>Location</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionHeader}>Events</Text>
        </>
      }
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
          <Text style={styles.eventDescription}>{item.description}</Text>
        </View>
      )}
      ListEmptyComponent={<Text style={styles.text}>No upcoming events.</Text>}
      contentContainerStyle={styles.homeScreenScroll}
    />
  );

  const renderWatchContent = () => (
    <FlatList
      key="watch" // Unique key for Watch FlatList
      ListHeaderComponent={
        <>
          <Text style={styles.watchHeader}>Watch</Text>
          {renderVideoCard()}
          <View style={styles.placeholderGrid}>
            {Array.from({ length: 6 }).map((_, index) => (
              <View key={index} style={styles.placeholderCard}>
                <Text style={styles.placeholderText}>Placeholder {index + 1}</Text>
              </View>
            ))}
          </View>
        </>
      }
      data={[]} // Assuming no list items, adjust as needed
      renderItem={null}
      ListEmptyComponent={null}
      contentContainerStyle={[styles.homeScreenScroll, { alignItems: 'center' }]}
    />
  );

  const renderAppsContent = () => {
    const appsData = [
      { label: "Ministry", icon: "rose-outline", onPress: () => {/* Navigate to Ministry */} },
      { label: "Bible", icon: "book-outline", onPress: () => {/* Navigate to Bible */} },
      { label: "Events", icon: "calendar-outline", onPress: () => {/* Navigate to Events */} },
      { label: "Music", icon: "musical-notes-outline", onPress: () => {/* Navigate to Music */} },
      { label: "Preaching", icon: "megaphone-outline", onPress: () => {/* Navigate to Preaching */} },
      { label: "Donation", icon: "wallet-outline", onPress: () => {/* Navigate to Donation */} },
      { label: "Chat", icon: "chatbubble-ellipses-outline", onPress: () => {/* Navigate to Chat */} },
      { label: "Life Groups", icon: "leaf-outline", onPress: () => {/* Navigate to Life Groups */} },
    ];

    return (
      <FlatList
        key={isGridView ? "apps-grid" : "apps-list"} // Dynamic key based on view
        ListHeaderComponent={
          <>
            <Text style={styles.watchHeader}>Apps</Text>
            <TouchableOpacity onPress={toggleView} style={styles.toggleViewButton}>
              <Text style={styles.toggleViewButtonText}>
                {isGridView ? "Switch to List View" : "Switch to Grid View"}
              </Text>
            </TouchableOpacity>
          </>
        }
        data={appsData}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.appButton} onPress={item.onPress}>
            <Ionicons name={item.icon} size={24} color="#2D6A4F" style={{ marginRight: 8 }} />
            <Text style={styles.appButtonText}>{item.label}</Text>
          </TouchableOpacity>
        )}
        numColumns={isGridView ? 2 : 1} // Dynamic numColumns
        columnWrapperStyle={isGridView ? { justifyContent: 'space-between' } : undefined}
        contentContainerStyle={[styles.homeScreenScroll, { alignItems: isGridView ? 'center' : 'flex-start' }]}
      />
    );
  };

  const renderProfileContent = () => (
    <FlatList
      key="profile" // Unique key for Profile FlatList
      ListHeaderComponent={
        <>
          <Text style={styles.profileHeader}>Profile</Text>

          <View style={styles.profileTopSection}>
            {userProfile?.photoUrl ? (
              <Image 
                source={{ uri: userProfile.photoUrl }} 
                style={styles.profileImage} 
              />
            ) : (
              <Ionicons name="person-circle-outline" size={80} color="#2D6A4F" />
            )}
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>{userProfile?.name || "User Name"}</Text>
              <Text style={styles.profileBio}>{userProfile?.bio || "This is the space for the user bio."}</Text>
            </View>
          </View>

          <View style={styles.profileIconsRow}>
            <TouchableOpacity style={styles.profileIconButton} onPress={() => {/* Navigate to Settings */}}>
              <Ionicons name="settings-outline" size={24} color="#2D6A4F" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileIconButton} onPress={() => {/* Navigate to Information */}}>
              <Ionicons name="information-circle-outline" size={24} color="#2D6A4F" />
            </TouchableOpacity>
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeaderRow}>
              <Text style={styles.profileSectionHeader}>My Ministries</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => {/* Handle Add Ministry */}}>
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            {ministries.map((ministry) => (
              <View key={ministry.id} style={styles.largeCard}>
                <Text style={styles.cardText}>{ministry.name}</Text>
                <Text style={styles.cardSubText}>{ministry.description}</Text>
              </View>
            ))}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.profileSectionHeader}>My Events</Text>
          </View>
        </>
      }
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.smallCard}>
          <Text style={styles.cardText}>{item.title}</Text>
          <Text style={styles.cardSubText}>{item.date}</Text>
        </View>
      )}
      numColumns={2} // Fixed numColumns; adjust if dynamic changes are needed
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      ListEmptyComponent={<Text style={styles.text}>No events found.</Text>}
      contentContainerStyle={styles.homeScreenScroll}
      ListFooterComponent={
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      }
    />
  );

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHomeContent();
      case "watch":
        return renderWatchContent();
      case "apps":
        return renderAppsContent();
      case "profile":
        return renderProfileContent();
      default:
        return null;
    }
  };

  // -----------------------
  // 3.6. Return JSX
  // -----------------------
  
  return (
    <KeyboardAvoidingView 
      style={styles.appContainer} 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {(currentScreen === "login" || currentScreen === "signup") ? (
        <View style={styles.authScreen}>
          <Image 
            source={{ uri: "https://example.com/praying-hands.jpg" }} 
            style={styles.authBackground} 
          />
          <View style={styles.authCard}>
            <View style={styles.authToggleContainer}>
              <TouchableOpacity
                style={currentScreen === "login" ? styles.authToggleActive : styles.authToggleInactive}
                onPress={() => setCurrentScreen("login")}
              >
                <Text
                  style={
                    currentScreen === "login"
                      ? styles.authToggleTextActive
                      : styles.authToggleTextInactive
                  }
                >
                  Log In
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={currentScreen === "signup" ? styles.authToggleActive : styles.authToggleInactive}
                onPress={() => setCurrentScreen("signup")}
              >
                <Text
                  style={
                    currentScreen === "signup"
                      ? styles.authToggleTextActive
                      : styles.authToggleTextInactive
                  }
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {currentScreen === "login" ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email or username"
                  placeholderTextColor="#A8A8A8"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#A8A8A8"
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.authButton} onPress={handleLogin}>
                  <Text style={styles.authButtonText}>Log In</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter email or username"
                  placeholderTextColor="#A8A8A8"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#A8A8A8"
                  value={password}
                  onChangeText={setPassword}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry
                  placeholderTextColor="#A8A8A8"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={selectedUserType}
                    onValueChange={(itemValue: string) => setSelectedUserType(itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="Select user type" value="default" />
                    <Picker.Item label="Admin" value="admin" />
                    <Picker.Item label="Member" value="member" />
                  </Picker>
                </View>
                <TouchableOpacity style={styles.authButton} onPress={handleSignup}>
                  <Text style={styles.authButtonText}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}

            <Text style={styles.orText}>OR</Text>

            <View style={styles.socialIconsContainer}>
              <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Handle Google Login */}}>
                <Ionicons name="logo-google" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Handle Facebook Login */}}>
                <Ionicons name="logo-facebook" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIcon} onPress={() => {/* Handle Twitter Login */}}>
                <Ionicons name="logo-twitter" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <SafeAreaView style={styles.homeScreenContainer}>
          {renderContent()}
          {/* Bottom Navigation */}
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => setActiveTab("home")}
            >
              <View style={[styles.navIconContainer, activeTab === "home" && styles.navIconActive]}>
                <Ionicons name="home-outline" size={24} color={activeTab === "home" ? "#FFFFFF" : "#2D6A4F"} />
              </View>
              <Text style={[styles.navText, activeTab === "home" && styles.navTextActive]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => setActiveTab("watch")}
            >
              <View style={[styles.navIconContainer, activeTab === "watch" && styles.navIconActive]}>
                <Ionicons name="tv-outline" size={24} color={activeTab === "watch" ? "#FFFFFF" : "#2D6A4F"} />
              </View>
              <Text style={[styles.navText, activeTab === "watch" && styles.navTextActive]}>Watch</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => setActiveTab("apps")}
            >
              <View style={[styles.navIconContainer, activeTab === "apps" && styles.navIconActive]}>
                <Ionicons name="grid-outline" size={24} color={activeTab === "apps" ? "#FFFFFF" : "#2D6A4F"} />
              </View>
              <Text style={[styles.navText, activeTab === "apps" && styles.navTextActive]}>Apps</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => setActiveTab("profile")}
            >
              <View style={[styles.navIconContainer, activeTab === "profile" && styles.navIconActive]}>
                <Ionicons name="person-outline" size={24} color={activeTab === "profile" ? "#FFFFFF" : "#2D6A4F"} />
              </View>
              <Text style={[styles.navText, activeTab === "profile" && styles.navTextActive]}>Profile</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </KeyboardAvoidingView>
  );

};

export default App;
