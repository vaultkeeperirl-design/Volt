import { View, Text, StyleSheet, TextInput, FlatList, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const INITIAL_MESSAGES = [
  { id: '1', user: 'Admin', text: 'Welcome to the general chat!', time: '10:00 AM' },
  { id: '2', user: 'User1', text: 'Hello everyone!', time: '10:05 AM' },
  { id: '3', user: 'User2', text: 'Hey, nice to be here.', time: '10:07 AM' },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const bgColor = isDark ? '#313338' : '#ffffff';
  const textColor = isDark ? '#dbdee1' : '#313338';
  const inputBgColor = isDark ? '#383a40' : '#ebedef';
  const userNameColor = isDark ? '#ffffff' : '#060607';

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          user: 'You',
          text: inputText.trim(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
      setInputText('');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messageList}
          renderItem={({ item }) => (
            <View style={styles.messageContainer}>
              <View style={[styles.avatar, { backgroundColor: isDark ? '#5865f2' : '#5865f2' }]} />
              <View style={styles.messageContent}>
                <View style={styles.messageHeader}>
                  <Text style={[styles.username, { color: userNameColor }]}>{item.user}</Text>
                  <Text style={[styles.timestamp, { color: isDark ? '#949ba4' : '#5c5e66' }]}>{item.time}</Text>
                </View>
                <Text style={[styles.messageText, { color: textColor }]}>{item.text}</Text>
              </View>
            </View>
          )}
        />
        <View style={[styles.inputContainer, { backgroundColor: bgColor }]}>
          <View style={[styles.inputWrapper, { backgroundColor: inputBgColor }]}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="add-circle" size={24} color={isDark ? '#b5bac1' : '#5c5e66'} />
            </TouchableOpacity>
            <TextInput
              style={[styles.input, { color: textColor }]}
              placeholder="Message #general"
              placeholderTextColor={isDark ? '#80848e' : '#5c5e66'}
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
              <Ionicons name="send" size={20} color={isDark ? '#b5bac1' : '#5c5e66'} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  messageList: {
    padding: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  timestamp: {
    fontSize: 12,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  inputContainer: {
    padding: 16,
    paddingTop: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    paddingHorizontal: 8,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    maxHeight: 100,
  },
  iconButton: {
    padding: 8,
  },
});
