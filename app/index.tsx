import React from 'react';
import {
  View, Text,Alert,  StyleSheet, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

function Header({ isMain }: { isMain: boolean }) {
  const router = useRouter();
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => {
        if (isMain) {
          router.push('/profile');
        } else {
          router.back();
        }
      }}>
        <Image source={require('../assets/images/meee.jpg')} style={styles.profileIcon} />
      </TouchableOpacity>
      <Text style={styles.logo}>X</Text>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumText}>Get Premium</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Home() {
  const router = useRouter();

  return (
    
    <View style={styles.container}>
      <Header isMain={true} />

      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.tabActive]}>For you</Text>
        <Text style={styles.tab}>Following</Text>
      </View>

      <ScrollView>
        <View style={styles.tweetContainer}>
          <Image source={require('../assets/images/pic4.jpg')} style={styles.avatar} />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>Champ✨</Text>
              <Text style={styles.username}> @Ib_ra_himm · 12h</Text>
            </View>
            <Text style={styles.tweetText}>
              People who have no haters. Who deserves the missing spot????
            </Text>
            <Image source={require('../assets/images/pic4.jpg')} style={styles.tweetImage} />
            <View style={styles.reactions}>
              <Text style={styles.reaction}>💬 1.7K</Text>
              <Text style={styles.reaction}>🔁 1.6K</Text>
              <Text style={styles.reaction}>❤ 22K</Text>
              <Text style={styles.reaction}>👁 1.5M</Text>
            </View>
          </View>
        </View>
        <View style={styles.tweetContainer}>
          <Image source={require('../assets/images/pic2.jpg')} style={styles.avatar} />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>BeksFCB@Joshua_.4/24/25</Text>
              <Text style={styles.username}> @Ib_ra_himm · 12h</Text>
            </View>
            <Text style={styles.tweetText}>
              As you can see!
            </Text>
            <Image source={require('../assets/images/pic4.jpg')} style={styles.tweetImage} />
            <View style={styles.reactions}>
              <Text style={styles.reaction}>💬 1.7K</Text>
              <Text style={styles.reaction}>🔁 1.6K</Text>
              <Text style={styles.reaction}>❤ 22K</Text>
              <Text style={styles.reaction}>👁 1.5M</Text>
            </View>
          </View>
        </View>
        <View style={styles.tweetContainer}>
          <Image source={require('../assets/images/pic1.jpg')} style={styles.avatar} />
          <View style={styles.tweetContent}>
            <View style={styles.tweetHeader}>
              <Text style={styles.name}>BekFCB@moyeee_.3/24/25</Text>
              <Text style={styles.username}> @Ib_ra_himm · 12h</Text>
            </View>
            <Text style={styles.tweetText}>
              Still the all-time attendance record for any ⚽ match in the U.S. 🇺🇸 When 109,318 fans showed up to watch Real Madrid vs. Man United in Michigan in 2014
            </Text>
            <Image source={require('../assets/images/pic1.jpg')} style={styles.tweetImage} />
            <View style={styles.reactions}>
              <Text style={styles.reaction}>💬 1.7K</Text>
              <Text style={styles.reaction}>🔁 1.6K</Text>
              <Text style={styles.reaction}>❤ 22K</Text>
              <Text style={styles.reaction}>👁 1.5M</Text>
            </View>
          </View>
        </View>
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

      <View style={styles.bottomBar}>
        <Text style={styles.bottomIcon}>🏠</Text>
        <Text style={styles.bottomIcon}>🔍</Text>
        <TouchableOpacity onPress={() => router.push('/community')}>
          <Text style={styles.bottomIcon}>👥</Text>
        </TouchableOpacity>
        <Text style={styles.bottomIcon}>🔔</Text>
        <Text style={styles.bottomIcon}>✉</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  topBar: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12, paddingVertical: 10,
    backgroundColor: '#1d9f0',
  },
  profileIcon: { width: 30, height: 30, borderRadius: 15 },
  logo: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  premiumButton: {
    backgroundColor: '#fff', borderRadius: 20,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  premiumText: { fontSize: 12, fontWeight: '600' },
  tabs: {
    flexDirection: 'row', justifyContent: 'center',
    borderBottomColor: '#333', borderBottomWidth: 1,
  },
  tab: {
    color: '#888', paddingVertical: 10,
    marginHorizontal: 20, fontWeight: '600',
  },
  tabActive: {
    color: '#fff', borderBottomColor: '#1D9BF0',
    borderBottomWidth: 2,
  },
  tweetContainer: {
    flexDirection: 'row', padding: 15,
    borderBottomWidth: 0.5, borderBottomColor: '#333',
  },
  avatar: {
    width: 45, height: 45, borderRadius: 25,
    marginRight: 10,
  },
  tweetContent: { flex: 1 },
  tweetHeader: { flexDirection: 'row', alignItems: 'center' },
  name: { color: '#fff', fontWeight: 'bold' },
  username: { color: '#888', marginLeft: 5 },
  tweetText: { color: '#fff', marginTop: 4, marginBottom: 6 },
  tweetImage: {
    width: '100%', height: 200, borderRadius: 12, marginVertical: 6,
  },
  reactions: {
    flexDirection: 'row', justifyContent: 'space-between',
    marginTop: 8, paddingRight: 20,
  },
  reaction: { color: '#888', fontSize: 12 },
  bottomBar: {
    flexDirection: 'row', justifyContent: 'space-around',
    paddingVertical: 10, borderTopColor: '#222', borderTopWidth: 1,
  },
  bottomIcon: { color: '#fff', fontSize: 20 },
});
