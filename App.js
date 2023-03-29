import * as React from "react";
import { useEffect } from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { Camera } from 'expo-camera';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
    })();
  }, []);
  
    return (
      <>
      <WebView
        allowsInlineMediaPlayback={true}
        originWhitelist={["*"]}
        javaScriptEnabled
        scalesPageToFit
        mediaPlaybackRequiresUserAction={false}
        style={styles.container}
        source={{ uri: "https://mbox.kongtsey.com" }}
      />
      <StatusBar backgroundColor={'black'} translucent={false}/>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
