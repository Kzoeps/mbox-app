import * as React from "react";
import { useState,useEffect } from "react";
import { WebView } from "react-native-webview";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Camera } from 'expo-camera';
import Constants from "expo-constants";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera, Please allow camera access</Text>;
  }
  if (hasPermission) {
    return (
      <WebView
        allowsInlineMediaPlayback={true}
        originWhitelist={["*"]}
        javaScriptEnabled
        scalesPageToFit
        mediaPlaybackRequiresUserAction={false}
        style={styles.container}
        source={{ uri: "https://mbox.kongtsey.com" }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
