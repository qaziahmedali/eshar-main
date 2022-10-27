import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  BackHandler,
  Image,
  Text,
  Modal,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH, faClock} from '@fortawesome/free-solid-svg-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function DailyReport({route, navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrp}>
          <View style={styles.rect9}>
            <View style={styles.rect10}>
              <View style={styles.rect11}></View>
            </View>
            {/*Main Rect for boxes*/}
            <View
              style={{
                width: wp('100%'),
                marginTop: '5%',
                alignItems: 'center',
              }}>
              {/*Row start*/}
              <View
                style={{
                  width: wp('96%'),
                  flexDirection: 'row',
                }}>
                {/*First Col*/}
                <View
                  style={{
                    width: wp('48%'),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp('40%'),
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      borderRadius: 6,
                      padding: 30,
                      paddingTop: 40,
                      paddingBottom: 40,
                      borderWidth: 1,
                      borderColor: '#4F5FF3',
                      elevation: 6,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18}}>4</Text>
                    <Text style={{fontSize: 18, marginTop: '12%'}}>
                      Employees
                    </Text>
                  </View>
                </View>
                {/*@nd Col*/}
                <View
                  style={{
                    width: wp('48%'),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp('40%'),
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      borderRadius: 6,
                      padding: 30,
                      paddingTop: 40,
                      paddingBottom: 40,
                      borderWidth: 1,
                      borderColor: '#4F5FF3',
                      elevation: 6,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18}}>11</Text>
                    <Text style={{fontSize: 18, marginTop: '12%'}}>
                      Total Visits
                    </Text>
                  </View>
                </View>
              </View>
              {/*Row end*/}
            </View>
            {/*Main rect close*/}

            {/*Main Rect for boxes*/}
            <View
              style={{
                width: wp('100%'),
                marginTop: '5%',
                alignItems: 'center',
              }}>
              {/*Row start*/}
              <View
                style={{
                  width: wp('96%'),
                  flexDirection: 'row',
                }}>
                {/*First Col*/}
                <View
                  style={{
                    width: wp('32%'),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp('30%'),
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      borderRadius: 6,
                      padding: 5,
                      paddingTop: 30,
                      paddingBottom: 30,
                      borderWidth: 1,
                      borderColor: '#4F5FF3',
                      elevation: 6,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18}}>0</Text>
                    <Text style={{fontSize: 18, marginTop: '12%'}}>
                      Visit Done
                    </Text>
                  </View>
                </View>
                {/*@nd Col*/}
                <View
                  style={{
                    width: wp('32%'),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp('30%'),
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      borderRadius: 6,
                      padding: 5,
                      paddingTop: 30,
                      paddingBottom: 30,
                      borderWidth: 1,
                      borderColor: '#4F5FF3',
                      elevation: 6,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18}}>12</Text>
                    <Text style={{fontSize: 18, marginTop: '12%'}}>
                      Not Done
                    </Text>
                  </View>
                </View>
                {/*3rd Col*/}
                <View
                  style={{
                    width: wp('32%'),
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: wp('30%'),
                      backgroundColor: '#fff',
                      justifyContent: 'center',
                      borderRadius: 6,
                      padding: 5,
                      paddingTop: 30,
                      paddingBottom: 30,
                      borderWidth: 1,
                      borderColor: '#4F5FF3',
                      elevation: 6,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18}}>0</Text>
                    <Text style={{fontSize: 18, marginTop: '12%'}}>
                      Task Done
                    </Text>
                  </View>
                </View>
              </View>
              {/*Row end*/}
            </View>
            {/*Main rect close*/}
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          height: hp('7%'), // 70% of height device screen
          width: wp('100%'),
          backgroundColor: '#4F5FF3',
          marginBottom: 0,
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}>
          <View
            style={{
              width: wp('50%'),
              alignItems: 'center',
              borderColor: 'red',
            }}>
            <Text style={{top: hp('2%'), color: 'white'}}>
              <FontAwesomeIcon icon={faClock} style={{color: 'white'}} /> asd
            </Text>
          </View>
          <View style={{width: wp('50%'), alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/image/end.png')}
                resizeMode="contain"
                style={styles.icon08}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(239,239,239,1)',
    alignItems: 'center',
  },
  wrp: {
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'),
  },
  rect: {
    // 70% of height device screen
    width: wp('100%'),
    padding: 16,
    backgroundColor: 'rgba(255,255,255,1)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    textAlign: 'center',
  },
  rect9: {
    height: hp('81%'), // 70% of height device screen
    width: wp('100%'),
    backgroundColor: 'rgba(255,255,255,1)',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: '2%',
    alignItems: 'center',
    textAlign: 'center',
  },
  rect10: {
    width: 360,
    height: 20,
    backgroundColor: 'rgba(230,230, 230,0)',
    marginTop: 2,
    alignItems: 'center',
  },
  rect11: {
    width: 55,
    height: 6,
    backgroundColor: '#E6E6E6',
    borderRadius: 20,
    marginTop: 5,
  },

  icon08: {
    height: 54,
    width: 60,
  },
});

export default DailyReport;
