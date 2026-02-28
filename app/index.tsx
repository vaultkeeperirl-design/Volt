import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/use-color-scheme';

const CHANNELS = [
  { id: '1', name: 'general' },
  { id: '2', name: 'introductions' },
  { id: '3', name: 'off-topic' },
  { id: '4', name: 'development' },
];

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const textColor = isDark ? '#dbdee1' : '#313338';
  const bgColor = isDark ? '#313338' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.header, { color: isDark ? '#ffffff' : '#060607' }]}>
        Text Channels
      </Text>
      <FlatList
        data={CHANNELS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.channelItem,
              {
                backgroundColor: 'transparent',
                borderBottomColor: isDark ? '#3f4147' : '#e3e5e8'
              }
            ]}
            onPress={() => router.push('/chat')}
            activeOpacity={0.7}
          >
            <Text style={[styles.hash, { color: isDark ? '#b5bac1' : '#5c5e66' }]}>#</Text>
            <Text style={[styles.channelName, { color: textColor }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  channelItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    marginBottom: 4,
    borderBottomWidth: 1,
  },
  hash: {
    fontSize: 20,
    marginRight: 8,
    fontWeight: '300',
  },
  channelName: {
    fontSize: 16,
    fontWeight: '500',
  },
});
