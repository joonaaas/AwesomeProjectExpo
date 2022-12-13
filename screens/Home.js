import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import SectionPalette from '../components/SectionPalette';

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Solarized',
            colors: SOLARIZED,
          });
        }}
      >
        <Text style={styles.header}>Solarized</Text>
        <FlatList
          data={SOLARIZED}
          keyExtractor={(item, index) => item + index}
          horizontal={true}
          style={{ marginBottom: 20 }}
          renderItem={({ item }) => (
            <SectionPalette colorName={item.colorName} hexCode={item.hexCode} />
          )}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Rainbow',
            colors: FRONTEND_MASTERS,
          });
        }}
      >
        <Text style={styles.header}>Frontend Masters</Text>
        <FlatList
          data={FRONTEND_MASTERS}
          keyExtractor={(item, index) => item + index}
          horizontal={true}
          style={{ marginBottom: 20 }}
          renderItem={({ item }) => (
            <SectionPalette colorName={item.colorName} hexCode={item.hexCode} />
          )}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Rainbow',
            colors: RAINBOW,
          });
        }}
      >
        <Text style={styles.header}>Rainbow</Text>
        <FlatList
          data={RAINBOW}
          keyExtractor={(item, index) => item + index}
          horizontal={true}
          renderItem={({ item }) => (
            <SectionPalette colorName={item.colorName} hexCode={item.hexCode} />
          )}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
    width: '100%',
  },
  container: {
    padding: 20,
    marginBottom: 20,
  },
});
