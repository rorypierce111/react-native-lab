import StudentCard from '@/components/StudentCard';
import { View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={{ padding: 20 }}>
      <StudentCard name="Alex" major="Computer Science" year="3" />
      <StudentCard name="Jamie" major="Business" year="2" />
      <StudentCard name="Sam" major="Engineering" year="4" />
    </View>
  );
}
 