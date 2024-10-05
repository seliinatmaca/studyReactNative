import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Subject kartları için veri
const subjects = [
  {id: '1', name: 'Mathematics', icon: 'calculator-outline', color: '#fb4b4e'},
  {id: '2', name: 'Geography', icon: 'earth-outline', color: '#2541b2'},
];

// Schedule kartları için veri
const schedule = [
  {
    id: '1',
    subject: 'Biology',
    chapter: 'Chapter 3: Animal Kingdom',
    color: '#00cc66',
  },
];

// Subject Kartları
const SubjectCard = ({item}) => (
  <View style={[styles.subjectCard, {backgroundColor: item.color}]}>
    <Icon name={item.icon} size={24} color="#fff" />
    <Text style={styles.subjectText}>{item.name}</Text>
  </View>
);

// Schedule Kartları
const ScheduleCard = ({item}) => (
  <View style={[styles.scheduleCard, {backgroundColor: item.color}]}>
    <Text style={styles.scheduleText}>{item.subject}</Text>
    <Text style={styles.scheduleDetails}>{item.chapter}</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Üst Kısım */}
      <View style={styles.header}>
        <Icon name="search-outline" size={24} color="#fff" />
        {/* Dünya Görseli */}
        <Image
          source={require('../assets/images/indir.jpeg')}
          style={styles.globeImage}
        />
      </View>

      {/* Subjects Bölümü */}
      <Text style={styles.sectionTitle}>Subjects</Text>
      <Text style={styles.sectionSubtitle}>Recommendations for you</Text>
      <FlatList
        horizontal
        data={subjects}
        renderItem={({item}) => <SubjectCard item={item} />}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.subjectsList}
      />

      {/* Schedule Bölümü */}
      <Text style={styles.sectionTitle}>Your Schedule</Text>
      <Text style={styles.sectionSubtitle}>Next lessons</Text>
      <FlatList
        data={schedule}
        renderItem={({item}) => <ScheduleCard item={item} />}
        keyExtractor={item => item.id}
        style={styles.scheduleList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#2541b2',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  globeImage: {
    width: 100,
    height: 100,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222121',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#888',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  subjectsList: {
    paddingHorizontal: 20,
  },
  subjectCard: {
    width: 120,
    height: 100,
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectText: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  scheduleList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  scheduleCard: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  scheduleDetails: {
    marginTop: 5,
    color: '#fff',
  },
});

export default HomeScreen;
