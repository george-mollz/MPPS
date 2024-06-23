import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Profile() {

    const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const date = new Date();
      const hour = date.getHours();
  
      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };
  
    updateGreeting();
  
    // Call updateGreeting again on every hour change
    const intervalId = setInterval(updateGreeting, 3600000); // Milliseconds in an hour
  
    return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
  }, []);
  


  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})