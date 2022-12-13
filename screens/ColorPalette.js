import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
];

export default function ColorPalette({ route }) {
  const DATA = route.params?.colors;
  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <FlatList
        data={DATA}
        style={styles.container}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});
