import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const projects = [
  { id: 1, title: 'Weather App', description: 'Displays current weather using an API' },
  { id: 2, title: 'ToDo List', description: 'Task tracker with local storage' },
  { id: 3, title: 'Portfolio Website', description: 'Responsive site built with React' },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        <Image
          source={{ uri: 'https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nithin Amin</Text>
        <Text style={styles.bio}>
          Cross-platform developer who enjoys building clean UIs and useful tools.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Projects')}
        >
          <Text style={styles.primaryButtonText}>View My Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.linkButtonText}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ProjectsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Projects</Text>
      <ScrollView contentContainerStyle={styles.cardList}>
        {projects.map((project) => (
          <View key={project.id} style={styles.card}>
            <Text style={styles.cardTitle}>{project.title}</Text>
            <Text style={styles.cardDescription}>{project.description}</Text>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenTitle}>Contact</Text>
      <View style={styles.contactRow}>
        <TouchableOpacity style={styles.contactPill}>
          <Text style={styles.contactText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactPill}>
          <Text style={styles.contactText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactPill}>
          <Text style={styles.contactText}>Email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', paddingHorizontal: 20 },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#22d3ee',
  },
  name: { fontSize: 28, fontWeight: '700', color: '#e2e8f0', marginBottom: 8 },
  bio: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: '#22d3ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
  },
  primaryButtonText: { color: '#0f172a', fontSize: 16, fontWeight: '700' },
  linkButton: { paddingVertical: 10, paddingHorizontal: 16 },
  linkButtonText: { color: '#22d3ee', fontSize: 15, fontWeight: '600' },
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e2e8f0',
    marginVertical: 16,
    textAlign: 'center',
  },
  cardList: { paddingBottom: 24 },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#e2e8f0', marginBottom: 6 },
  cardDescription: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 12,
    lineHeight: 20,
  },
  secondaryButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#22d3ee20',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#22d3ee60',
  },
  secondaryButtonText: { color: '#22d3ee', fontWeight: '600' },
  contactRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 24 },
  contactPill: {
    backgroundColor: '#1e293b',
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#334155',
  },
  contactText: { color: '#e2e8f0', fontWeight: '600' },
});
