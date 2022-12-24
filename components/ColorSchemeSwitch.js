import { Text, View, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { usePalette } from '../context/palettes-context';

export default function ColorSchemeSwitch({
  colorName,
  hexCode,
  handleActiveColors,
}) {
  const [active, setActive] = useState(false);

  function handleSwitch(value) {
    if (value) {
      setActive(true);
      handleActiveColors(true, { colorName, hexCode });
    } else {
      setActive(false);
      handleActiveColors(false, { colorName, hexCode });
    }

    // () => setActive(!active)
  }

  return (
    <View style={styles.row}>
      <Text>{colorName}</Text>
      <Switch value={active} onValueChange={(value) => handleSwitch(value)} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
