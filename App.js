import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <WebView
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserAction={false}
      style={styles.container}
      source={{ uri: "https://mbox.kongtsey.com" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
