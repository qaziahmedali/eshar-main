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
import {
  faEllipsisH,
  faClock,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function MerchHome({route, navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.wrp}>
          <View style={styles.rect9}>
            <View style={styles.rect10}>
              <View style={styles.rect11}></View>
            </View>
            {/*Main rect start*/}
            <View
              style={{
                width: wp('100%'),
                alignItems: 'center',
              }}>
              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '2%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/Group-13481.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>Visit Report</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}

              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/notes.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>Daily Report</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}
              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/audit.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>Stores Report</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}
              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/Group-13481.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>Employee Tracking</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}
              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/notes.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>TimeLine</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}
              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/audit.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>Reports</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}
              {/*First Main rect*/}
              <View
                style={{
                  width: wp('100%'),
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: wp('90%'),
                      backgroundColor: '#fff',
                      elevation: 6,
                      padding: 15,
                      borderRadius: 6,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/image/Group-13481.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}></Image>
                    </View>
                    <View
                      style={{
                        width: wp('60%'),
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 18}}>Statictics</Text>
                    </View>
                    <View
                      style={{
                        width: wp('15%'),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        size={20}
                        style={{color: '#4F5FF3'}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              {/*First main rect end*/}
            </View>
            {/*Maun rect end*/}
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

export default MerchHome;
