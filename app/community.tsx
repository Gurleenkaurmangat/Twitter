import React from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,Alert,
} from 'react-native';
import { useRouter } from 'expo-router';


function Header({ isMain }: { isMain: boolean }) {
  const router = useRouter();
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => isMain ? router.push('/profile') : router.canGoBack() ? router.back() : router.replace('/')}>
        <Image source={require('../assets/images/meee.jpg')} style={styles.profileIcon} />
      </TouchableOpacity>
      <Text style={styles.logo}>Communities</Text>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumText}>Get Premium</Text>
      </TouchableOpacity>
    </View>
  );
}


export default function Community() {
  const communityData = [
    {
      title: 'The Design Sphere',
      members: '590K',
      topic: 'Design',
      avatar: require('../assets/images/pic5.jpg'),
      users: [
        require('../assets/images/pic1.jpg'),
        require('../assets/images/pic2.jpg'),
        require('../assets/images/pic3.jpg'),
        require('../assets/images/pic4.jpg'),
      ],
    },
    {
      title: 'The Coding Universe',
      members: '2.5M',
      topic: 'Coding',
      avatar: require('../assets/images/pic8.jpg'),
      users: [
        require('../assets/images/pic4.jpg'),
        require('../assets/images/pic3.jpg'),
        require('../assets/images/pic2.jpg'),
        require('../assets/images/pic1.jpg'),
      ],
    },
    {
        title: 'The Gaming Galaxy', 
        members: '1.2M',
        topic: 'Gaming',
        avatar: require('../assets/images/pic2.jpg'),
        users: [
          require('../assets/images/pic3.jpg'),
          require('../assets/images/pic1.jpg'),
          require('../assets/images/pic4.jpg'),
          require('../assets/images/pic2.jpg'),
        ],
    
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Header isMain={false} />
      <View style={styles.tabs}>
              <Text style={[styles.tab, styles.tabActive]}> Home</Text>
              <Text style={styles.tab}>Explore</Text>
            </View>
      <Text style={styles.heading}>Discover new Communities</Text>

      {communityData.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.avatar} style={styles.logoImg} />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.members}>{item.members} Members</Text>
            <Text style={styles.topic}>{item.topic}</Text>
            <View style={styles.userImages}>
              {item.users.map((img, i) => (
                <Image key={i} source={img} style={styles.userAvatar} />
              ))}
            </View>
          </View>
        </View>
      ))}

      <TouchableOpacity>
        <Text style={styles.showMore}>Show more</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#1D9BF0',
          margin: 15,
          padding: 10,
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={() => Alert.alert('Alert Button pressed')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Alert</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}const styles = StyleSheet.create({
  container: { backgroundColor: '#000', paddingTop: 60, paddingHorizontal: 15 },
  topBar: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12, paddingVertical: 10,
    backgroundColor: '#000',
  },
  profileIcon: { width: 30, height: 30, borderRadius: 15 },
  logo: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  premiumButton: {
    backgroundColor: '#fff', borderRadius: 20,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  premiumText: { fontSize: 12, fontWeight: '600' },

  heading: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
  card: {
    flexDirection: 'row', marginBottom: 25, alignItems: 'center',
  },
  logoImg: { width: 60, height: 60, borderRadius: 10, marginRight: 12 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  members: { color: '#999', fontSize: 13 },
  topic: { color: '#bbb', marginTop: 2 },
  userImages: { flexDirection: 'row', marginTop: 6 },
  userAvatar: {
    width: 25, height: 25, borderRadius: 12.5,
    marginRight: -10, borderWidth: 2, borderColor: '#000',
  },
  showMore: { color: '#1D9BF0', marginTop: 10 },
   tab: {
    color: '#888', paddingVertical: 10,
    marginHorizontal: 20, fontWeight: '600',
  },
  tabActive: {
    color: '#fff', borderBottomColor: '#1D9BF0',
    borderBottomWidth: 2,
  },
  tabs: {
    flexDirection: 'row', justifyContent: 'center',
    borderBottomColor: '#333', borderBottomWidth: 1,
  },
});
