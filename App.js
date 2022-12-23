import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import Forms from './screens/Forms';
import ModalScreen from './screens/MyModal';
import HeaderGoBackBtn from './components/HeaderGoBackBtn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({ route }) => ({
              title: route.params?.paletteName || 'Color Palette',
            })}
          />
          <RootStack.Screen
            name="Forms"
            component={Forms}
            options={({ route }) => ({
              title: 'Forms',
            })}
          />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen
            name="MyModal"
            component={ModalScreen}
            options={{
              headerLeft: () => {
                return <HeaderGoBackBtn />;
              },
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: '700',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    margin: 4,
  },
});
