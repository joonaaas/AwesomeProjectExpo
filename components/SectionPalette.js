import { StyleSheet, Text, View } from 'react-native';

export default function SectionPalette({
  hexCode = '#EEE',
  colorName = 'Gray',
}) {
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return <View style={[styles.container, { backgroundColor: hexCode }]} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginRight: 6,
    width: 40,
    height: 38,
  },
});
