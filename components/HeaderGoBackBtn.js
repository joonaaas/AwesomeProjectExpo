import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HeaderGoBackBtn() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text>Go to Modal</Text>
    </TouchableOpacity>
  );
}
