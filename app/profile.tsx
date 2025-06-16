import React from 'react';
import {
  View, Text, StyleSheet, Image, Alert, ScrollView, TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

function Header({ isMain }: { isMain: boolean }) {
  const router = useRouter();
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => isMain ? router.push('/profile') : router.canGoBack() ? router.back() : router.replace('/')}>
        <Image source={require('../assets/images/meee.jpg')} style={styles.profileIcon} />
      </TouchableOpacity>
      <Text style={styles.logo}>X</Text>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumText}>Get Premium</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <Header isMain={false} />

      <View style={styles.profileArea}>
        <Image source={require('../assets/images/meee.jpg')} style={styles.avatar} />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Edit profile</Text>
        </TouchableOpacity>
        <Text style={styles.name}>Mehtab <Text style={styles.verified}>✔</Text></Text>
        <Text style={styles.handle}>@MehtabWxn</Text>
        <Text style={styles.joined}>📅 Joined April 2025</Text>
        <Text style={styles.follow}>10 Following · 0 Followers</Text>
      </View>
      <View style={[styles.profileArea, { flexDirection: 'row', justifyContent: 'space-around' }]}>
        <Text style={[styles.tweetText, styles.name]}>Posts</Text>
        <Text style={styles.tweetText}>Replies</Text>
        <Text style={styles.tweetText}>Highlights</Text>
        <Text style={styles.tweetText}>Videos</Text>
        <Text style={styles.tweetText}>Photos</Text>
      </View>
      {/* Example post */}
      <View style={styles.tweet}>
        <Text style={styles.repost}>🔁 You reposted</Text>
        <View style={styles.tweetHeader}>
          <Image
            style={styles.tweetAvatar}
            source={require('../assets/images/pic4.jpg')}
          />
          <Text style={styles.tweetUser}>BeksFCB @Joshua__ · 4/24/25</Text>
        </View>
        <Text style={styles.tweetText}>wow amazing!</Text>
        <Image
          style={styles.tweetImage}
          source={require('../assets/images/pic4.jpg')}// Use your match image
        />
        <Text style={styles.tweetStats}>💬 93  🔁 384  ❤ 5.8K  📊 85K</Text>
      </View>
      

<View style={styles.tweet}>
        <Text style={styles.repost}>🔁 You reposted</Text>
        <View style={styles.tweetHeader}>
          <Image
            style={styles.tweetAvatar}
            source={require('../assets/images/pic2.jpg')}
          />
          <Text style={styles.tweetUser}>BekFCB @moyeee__ · 3/24/25</Text>
        </View>
        <Text style={styles.tweetText}>As you can see!</Text>
        <Image
          style={styles.tweetImage}
          source={require('../assets/images/pic4.jpg')}// Use your match image
        />
        <Text style={styles.tweetStats}>💬 193  🔁 34  ❤ 2.8K  📊 619</Text>
      </View>

      <View style={styles.tweet}>
        <Text style={styles.repost}>🔁 You reposted</Text>
        <View style={styles.tweetHeader}>
          <Image
            style={styles.tweetAvatar}
            source={require('../assets/images/pic4.jpg')}
          />
          <Text style={styles.tweetUser}>united @RonaldoCR7 · 3/24/25</Text>
        </View>
        <Text style={styles.tweetText}>Still the all-time attendance record for any ⚽ match in the U.S. 🇺🇸

When 109,318 fans showed up to watch Real Madrid vs. Man United in Michigan in 2014 </Text>
        <Image
          style={styles.tweetImage}
          source={require('../assets/images/pic1.jpg')}// Use your match image
        />
        <Text style={styles.tweetStats}>💬 193  🔁 34  ❤ 2.8K  📊 619k</Text>
      </View>


      <View style={styles.tweet}>
        <Text style={styles.repost}>🔁 You reposted</Text>
        <View style={styles.tweetHeader}>
          <Image
            style={styles.tweetAvatar}
            source={require('../assets/images/pic4.jpg')}
          />
          <Text style={styles.tweetUser}>factos_guy @cuurentaffairs · 3/24/25</Text>
        </View>
        <Text style={styles.tweetText}>Netanyahu Calls Iran Strikes Necessary To Prevent War He Just Started</Text>
        <Image
          style={styles.tweetImage}
          source={require('../assets/images/pic3.jpg')}// Use your match image
        />
        <Text style={styles.tweetStats}>💬 193  🔁 34  ❤ 2.8K  📊 619k</Text>
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
  );
}const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  topBar: {
    flexDirection: 'row', alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12, paddingVertical: 10,
    backgroundColor: '#1d9bf0', 
  },
  profileIcon: { width: 30, height: 30, borderRadius: 15 },
  logo: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  premiumButton: {
    backgroundColor: '#fff', borderRadius: 20,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  premiumText: { fontSize: 12, fontWeight: '600' },

  profileArea: { padding: 15 },
  avatar: {
    width: 80, height: 80, borderRadius: 40,
    borderWidth: 4, borderColor: '#000', 
  },
  editButton: {
    position: 'absolute', right: 15, top: 15,
    backgroundColor: '#000', borderWidth: 1,
    borderColor: '#666', borderRadius: 20,
    paddingHorizontal: 15, paddingVertical: 6,
  },
  editText: { color: '#fff' },
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  verified: { color: '#1D9BF0' },
  handle: { color: '#aaa' },
  joined: { color: '#aaa', marginTop: 5 },
  follow: { color: '#aaa', marginTop: 5 },

  tweet: {
    marginTop: 20, padding: 15, borderTopWidth: 1, borderColor: '#222',
  },
  repost: { color: '#aaa', marginBottom: 5 },
  tweetHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  tweetAvatar: { width: 30, height: 30, borderRadius: 15, marginRight: 10 },
  tweetUser: { color: '#fff', fontWeight: 'bold' },
  tweetText: { color: '#fff', marginVertical: 5 },
  tweetImage: { width: '100%', height: 200, borderRadius: 10 },
  tweetStats: { color: '#aaa', marginTop: 5 },
});
