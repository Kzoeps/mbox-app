import * as React from "react";
import { useEffect } from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { Camera } from 'expo-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  useEffect(() => {
    (async () => {
      const { granted } = await Camera.getCameraPermissionsAsync();
      if (!granted) { 
        const { status } = await Camera.requestCameraPermissionsAsync();
      }
    })();
  }, []);
  
    return (
      <>
      <WebView
      collapsable={false}
        allowsInlineMediaPlayback={true}
        originWhitelist={["*"]}
        javaScriptEnabled
        scalesPageToFit
        mediaPlaybackRequiresUserAction={false}
        style={styles.container}
        source={{ uri: "https://mbox.kongtsey.com" }}
      />
      <StatusBar collapsable={false} backgroundColor={'black'} translucent={false}/>
      </>
    );
}

