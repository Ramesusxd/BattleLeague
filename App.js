import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const redColor = '#FF0000';
const whiteColor = '#FFFFFF';
const blackColor = '#000000';

const CustomHeader = ({ title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.headerContainer, { backgroundColor: isDarkMode ? blackColor : whiteColor }]}>
      <Text style={[styles.headerTitle, { color: isDarkMode ? whiteColor : redColor }]}>{title}</Text>
    </View>
  );
};

const Section = ({ children, title, last, reducedMargin }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity onPress={() => alert(`You clicked ${title}`)}>
      <View
        style={[
          styles.sectionContainer,
          { borderBottomWidth: last ? 0 : 1 },
          reducedMargin ? { marginTop: 16 } : {},
        ]}
      >
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? whiteColor : redColor,
            },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? blackColor : whiteColor,
            },
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? blackColor : whiteColor,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <CustomHeader title="Trainer Battle League" />
        <View
          style={{
            backgroundColor: isDarkMode ? whiteColor : blackColor,
          }}
        >
          <Section title="Trainer Profile">
            See your <Text style={styles.highlight}>Trainer Profile</Text> and accomplishments across
            the different battle communities.
          </Section>
          <Section title="Battle Communities" reducedMargin>
            Browse New Trainer <Text style={styles.highlight}>communities</Text> or participate in your favorite one.
          </Section>
          <Section title="Badge Book" reducedMargin>
            See your <Text style={styles.highlight}>Badges</Text> you earned in different Trainer Communities. Are you ready for the
            Pokemon League yet?
          </Section>
          <Section title="Settings" last={true} reducedMargin>
            Change your <Text style={styles.highlight}>Settings</Text>.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 52,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    borderBottomColor: whiteColor,
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


