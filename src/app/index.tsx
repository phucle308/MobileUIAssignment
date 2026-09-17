import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>✈</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.stories}
        >
          <Story image="https://i.pravatar.cc/150?img=12" name="Your story" />
          <Story image="https://i.pravatar.cc/150?img=5" name="__marc2" />
          <Story image="https://i.pravatar.cc/150?img=9" name="lnquynhh" />
          <Story image="https://i.pravatar.cc/150?img=13" name="_howardd" />
          <Story image="https://i.pravatar.cc/150?img=15" name="nokanoka..." />
          <Story image="https://i.pravatar.cc/150?img=11" name="kian.m4a" />
        </ScrollView>

        {/* Post */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=47" }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.username}>sait_scmc</Text>
                <Text style={styles.time}>1h</Text>
              </View>
            </View>

            <Text style={styles.more}>•••</Text>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
            }}
            style={styles.postImage}
          />

          {/* Action buttons */}
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <Text style={styles.action}>♡</Text>
              <Text style={styles.action}>○</Text>
              <Text style={styles.action}>↻</Text>
              <Text style={styles.action}>✈</Text>
            </View>
            <Text style={styles.action}>♡</Text>
          </View>

          <Text style={styles.likes}>Liked by itsfaizaannn and others</Text>

          <Text style={styles.caption}>
            <Text style={styles.username}>sait_scmc </Text>
            Thank you to @gotradespace for presenting at our employer session!
            🙌 We loved learning about what they do.
          </Text>

          <Text style={styles.comments}>View all 12 comments</Text>
        </View>

        {/* Second post */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=33" }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.username}>ckevn_</Text>
                <Text style={styles.time}>1h</Text>
              </View>
            </View>
            <Text style={styles.more}>•••</Text>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900",
            }}
            style={styles.postImage}
          />

          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <Text style={styles.action}>♡</Text>
              <Text style={styles.action}>○</Text>
              <Text style={styles.action}>↻</Text>
              <Text style={styles.action}>✈</Text>
            </View>
            <Text style={styles.action}>♡</Text>
          </View>

          <Text style={styles.likes}>Liked by students and others</Text>
          <Text style={styles.caption}>
            <Text style={styles.username}>ckevn_ </Text>
            A great day on campus!
          </Text>
        </View>

        {/* Alert button */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertText}>Alert</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

function Story({ image, name }: { image: string; name: string }) {
  return (
    <View style={styles.story}>
      <View style={styles.storyBorder}>
        <Image source={{ uri: image }} style={styles.storyImage} />
      </View>
      <Text style={styles.storyName} numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  logo: {
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "italic",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 18,
  },

  icon: {
    fontSize: 25,
  },

  stories: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  story: {
    width: 78,
    alignItems: "center",
  },

  storyBorder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: "#e1306c",
    padding: 3,
  },

  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },

  storyName: {
    fontSize: 12,
    marginTop: 5,
    maxWidth: 70,
  },

  post: {
    marginBottom: 20,
  },

  postHeader: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginRight: 10,
  },

  username: {
    fontWeight: "700",
  },

  time: {
    color: "#777",
    fontSize: 12,
    marginTop: 2,
  },

  more: {
    fontSize: 18,
    fontWeight: "700",
  },

  postImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  leftActions: {
    flexDirection: "row",
    gap: 17,
  },

  action: {
    fontSize: 27,
  },

  likes: {
    fontWeight: "600",
    paddingHorizontal: 14,
    marginBottom: 6,
  },

  caption: {
    paddingHorizontal: 14,
    lineHeight: 20,
  },

  comments: {
    paddingHorizontal: 14,
    color: "#777",
    marginTop: 7,
  },

  alertButton: {
    backgroundColor: "#3797f0",
    marginHorizontal: 20,
    marginTop: 10,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  alertText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});