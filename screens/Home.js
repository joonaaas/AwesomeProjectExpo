import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState, useCallback, Suspense } from 'react';
import SectionPalette from '../components/SectionPalette';
import { usePalette } from '../context/palettes-context';

export default function Home({ navigation }) {
  const [palettes, setPalettes] = usePalette([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const data = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (data.ok) {
      const json = await data.json();
      setPalettes(json);
    }
  }, [setPalettes]);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchColorPalettes]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MyModal')}>
        <Text style={styles.heading}>Go to Modal</Text>
      </TouchableOpacity>

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
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontWeight: '600',
    fontSize: 28,
    marginBottom: 10,
    color: 'blue',
  },
});
