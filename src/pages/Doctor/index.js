import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components/molecules';
import {colors, fonts, getData, showError} from '../../utils';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  DummyNews1,
  DummyNews2,
  DummyNews3,
  JSONCategoryDoctor,
} from '../../assets';
import {firebase} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref('news/')
      .once('value')
      .then(response => {
        console.log('data: ', response.val());
        if (response.val()) {
          setNews(response.val());
        }
      })
      .catch(error => {
        showError(error.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>

          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  );
                })}

                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            <RatedDoctor
              avatar={DummyDoctor1}
              name="Alexa Rachel"
              desc="Pediatrician"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DummyDoctor2}
              name="Sunny Frank"
              desc="Dentist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <RatedDoctor
              avatar={DummyDoctor3}
              name="Poe Minn"
              desc="Podiatrist"
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                pic={item.image}
              />
            );
          })}

          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
