import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState } from 'react';
import ColorSchemeSwitch from '../components/ColorSchemeSwitch';
import { usePalette } from '../context/palettes-context';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
  { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
  { colorName: 'Azure', hexCode: '#F0FFFF' },
  { colorName: 'Beige', hexCode: '#F5F5DC' },
  { colorName: 'Bisque', hexCode: '#FFE4C4' },
  { colorName: 'Black', hexCode: '#000000' },
  { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
  { colorName: 'Blue', hexCode: '#0000FF' },
  { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
  { colorName: 'Brown', hexCode: '#A52A2A' },
  { colorName: 'BurlyWood', hexCode: '#DEB887' },
  { colorName: 'CadetBlue', hexCode: '#5F9EA0' },
  { colorName: 'Chartreuse', hexCode: '#7FFF00' },
  { colorName: 'Chocolate', hexCode: '#D2691E' },
  { colorName: 'Coral', hexCode: '#FF7F50' },
  { colorName: 'CornflowerBlue', hexCode: '#6495ED' },
  { colorName: 'Cornsilk', hexCode: '#FFF8DC' },
  { colorName: 'Crimson', hexCode: '#DC143C' },
  { colorName: 'Cyan', hexCode: '#00FFFF' },
  { colorName: 'DarkBlue', hexCode: '#00008B' },
  { colorName: 'DarkCyan', hexCode: '#008B8B' },
  { colorName: 'DarkGoldenRod', hexCode: '#B8860B' },
  { colorName: 'DarkGray', hexCode: '#A9A9A9' },
  { colorName: 'DarkGrey', hexCode: '#A9A9A9' },
  { colorName: 'DarkGreen', hexCode: '#006400' },
  { colorName: 'DarkKhaki', hexCode: '#BDB76B' },
  { colorName: 'DarkMagenta', hexCode: '#8B008B' },
  { colorName: 'DarkOliveGreen', hexCode: '#556B2F' },
  { colorName: 'Darkorange', hexCode: '#FF8C00' },
  { colorName: 'DarkOrchid', hexCode: '#9932CC' },
  { colorName: 'DarkRed', hexCode: '#8B0000' },
  { colorName: 'DarkSalmon', hexCode: '#E9967A' },
  { colorName: 'DarkSeaGreen', hexCode: '#8FBC8F' },
  { colorName: 'DarkSlateBlue', hexCode: '#483D8B' },
  { colorName: 'DarkSlateGray', hexCode: '#2F4F4F' },
  { colorName: 'DarkSlateGrey', hexCode: '#2F4F4F' },
  { colorName: 'DarkTurquoise', hexCode: '#00CED1' },
  { colorName: 'DarkViolet', hexCode: '#9400D3' },
  { colorName: 'DeepPink', hexCode: '#FF1493' },
  { colorName: 'DeepSkyBlue', hexCode: '#00BFFF' },
  { colorName: 'DimGray', hexCode: '#696969' },
];

export default function ModalScreen({ navigation }) {
  const [paletteName, setPaletteName] = useState('');
  const [activeColors, setActiveColors] = useState([]);
  const [, setPalettes] = usePalette();

  function handleSubmit() {
    if (paletteName === '' && !activeColors.length) {
      navigation.goBack();
      return;
    }
    if (paletteName === '' && activeColors.length) {
      Alert.alert('No name palette', 'Please add name of your palette', {
        text: 'OK',
      });
      return;
    }
    if (paletteName !== '' && !activeColors.length) {
      Alert.alert('No selected color', 'Please select at least 1 color', {
        text: 'OK',
      });
      return;
    }
    const newData = { id: uuidv4(), paletteName, colors: activeColors };
    setPalettes((prev) => [newData, ...prev]);
    navigation.goBack();
  }

  function handleActiveColors(bool, objData) {
    // {id: 0, paletteName: 'Solarized', colors: Array(16)}
    if (bool) {
      setActiveColors((prev) => [...prev, objData]);
    } else {
      const newData = activeColors.filter(
        (color) => color.colorName !== objData.colorName,
      );

      setActiveColors(newData);
    }
  }

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <View style={{ height: '80%' }}>
        <Text style={{ marginHorizontal: 8 }}>Name of your Palette:</Text>
        <TextInput
          style={[styles.input, { marginHorizontal: 8 }]}
          value={paletteName}
          onChangeText={setPaletteName}
        />
        <FlatList
          data={COLORS}
          style={{ paddingHorizontal: 8 }}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <ColorSchemeSwitch
                colorName={item.colorName}
                hexCode={item.hexCode}
                handleActiveColors={handleActiveColors}
              />
            );
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 8,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
            paddingVertical: 16,
            borderRadius: 10,
          }}
          onPress={handleSubmit}
        >
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 5,
  },
});
