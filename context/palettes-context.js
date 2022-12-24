import { createContext, useState, useContext } from 'react';

const PaletteContext = createContext();

export function PaletteProvider(props) {
  const [palettes, setPalettes] = useState([]);

  const value = [palettes, setPalettes];
  return <PaletteContext.Provider value={value} {...props} />;
}

export function usePalette() {
  const context = useContext(PaletteContext);

  return context;
}
