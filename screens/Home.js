import { StyleSheet, View, FlatList } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import SectionPalette from '../components/SectionPalette';

export default function Home({ navigation }) {
  const [palettes, setPalettes] = useState([]);

  const getPalettes = useCallback(async () => {
    const data = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (data.ok) {
      const json = await data.json();
      setPalettes(json);
    }
  }, []);

  useEffect(() => {
    getPalettes();
  }, [getPalettes]);

  return (
    <View style={styles.container}>
      <FlatList
        data={palettes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <SectionPalette
              paletteName={item.paletteName}
              colors={item.colors}
              handlePress={() =>
                navigation.navigate('ColorPalette', {
                  paletteName: item.paletteName,
                  colors: item.colors,
                })
              }
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
  },
});
