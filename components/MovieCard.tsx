import { View, Image, Text, StyleSheet } from "react-native";

import { scaledPixels } from "@/hooks/useScale";

export const MovieCard = ({ item, isFocused }) => {
  return (
    <View
      style={[
        styles.highlightThumbnail,
        isFocused && styles.highlightThumbnailFocused,
      ]}
    >
      <Image source={item.headerImage} style={styles.headerImage} />
      <View style={styles.thumbnailTextContainer}>
        <Text style={styles.thumbnailText}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnailTextContainer: {
    position: "absolute",
    bottom: scaledPixels(10),
    left: scaledPixels(10),
    right: scaledPixels(10),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: scaledPixels(5),
    borderRadius: scaledPixels(3),
  },
  thumbnailText: {
    color: "#fff",
    fontSize: scaledPixels(18),
    fontWeight: "bold",
    textAlign: "center",
  },
  highlightThumbnail: {
    width: scaledPixels(400),
    height: scaledPixels(240),
    marginRight: scaledPixels(10),
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: scaledPixels(5),
  },
  highlightThumbnailFocused: {
    borderColor: "#fff",
    borderWidth: scaledPixels(4),
  },

  headerImage: {
    width: "100%",
    height: "100%",
  },
});
