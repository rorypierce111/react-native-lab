import StudentCard from '@/components/StudentCard';
import { View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={{ padding: 20 }}>
      <StudentCard name="Emilia" major="Computer Science" year="3" />
      <StudentCard name="Jackie" major="Business" year="2" />
      <StudentCard name="Sammuy" major="Engineering" year="4" />
    </View>
  );
}
