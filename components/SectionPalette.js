import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function SectionPalette({ paletteName, colors, handlePress }) {
  // const textColor = {
  //   color:
  //     parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
  //       ? 'black'
  //       : 'white',
  // };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.header}>{paletteName}</Text>
      <FlatList
        data={colors.slice(0, 5)}
        keyExtractor={(item, index) => index}
        style={styles.colors}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item?.hexCode }]}></View>
        )}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
    width: '100%',
  },
  box: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  colors: {
    marginBottom: 10,
  },
});
