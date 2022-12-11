import { StyleSheet, Text, View } from 'react-native';

export default function ColorBox({ hexCode = '#EEE', colorName = 'Gray' }) {
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.container, { backgroundColor: hexCode }]}>
      <Text style={textColor}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
  },
});
