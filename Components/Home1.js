import React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, View,BackHandler, Image, Text,Modal } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisH,faClock } from '@fortawesome/free-solid-svg-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function Home({route,navigation}) {
  
  return (
    <View style={styles.container}>
    <ScrollView>
      
    <View style={styles.wrp}>

      {/* one rect */}
      <View style={styles.rect}>
        <View style={styles.rect2}>
          <View style={styles.imageRow}>
          <TouchableOpacity>
            <Image
              source={require("../assets/image/map.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image></TouchableOpacity>
            <TouchableOpacity>
            <Image
              source={require("../assets/image/call.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image></TouchableOpacity>
            <TouchableOpacity>
            <FontAwesomeIcon
              icon={ faEllipsisH }
              style={styles.icon}
            /></TouchableOpacity>
          </View>
        </View>
        <View style={styles.rect3}>
          <View style={styles.othalm402RowColumnRow}>
            <View style={styles.othalm402RowColumn}>
              <View style={styles.othalm402Row}>
  <Text style={styles.othalm402}> Store Name </Text>
               
              </View>
              <Text style={styles.lastVisit202011}>Last Visit 2020-11-17</Text>
              
            </View>
            <TouchableOpacity>
            <Image
              source={require("../assets/image/img.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image></TouchableOpacity>
          </View>
        </View>
      </View>
{/* one rect end here */}

     
      <View style={styles.rect9}>
        <View style={styles.rect10}>
          <View style={styles.rect11}></View>
        </View>

         <View style={{width:wp('100%'),  alignItems:'center'}}>
             <View style={{width:wp('80%'), flexDirection:'row', backgroundColor:'#fff', borderLeftWidth:5, paddingTop:'6%', paddingBottom:'6%', borderColor:'#4F5FF3',shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,}}>
                 <View style={{width:wp('30%'),  alignItems:'center'}}>
                    <View style={{borderWidth:2, borderColor:'#4F5FF3', padding:8,}}>
                         <Text>01</Text>
                    </View>
                 </View>
                 <View style={{width:wp('49%'), alignItems:'center'}}>
                     <Text style={{color:'#4F5FF3', fontSize:20,}}>Employee Name</Text>
                 </View>
             </View>
         </View>
       
         <View style={{width:wp('100%'),  alignItems:'center', marginTop:'5%',}}>
             <View style={{width:wp('80%'), flexDirection:'row', backgroundColor:'#fff', borderLeftWidth:5, paddingTop:'6%', paddingBottom:'6%', borderColor:'#4F5FF3',shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,}}>
                 <View style={{width:wp('30%'),  alignItems:'center'}}>
                    <View style={{borderWidth:2, borderColor:'#4F5FF3', padding:8,}}>
                         <Text>01</Text>
                    </View>
                 </View>
                 <View style={{width:wp('49%'), alignItems:'center'}}>
                     <Text style={{color:'#4F5FF3', fontSize:20,}}>Total visit</Text>
                 </View>
             </View>
         </View>


         <View style={{width:wp('100%'),  alignItems:'center', marginTop:'8%',}}>
         <View style={{width:wp('80%'),  alignItems:'center', flexDirection:'row'}}>
             <View style={{width:wp('40%'), alignItems:'center',  backgroundColor:'#4F5FF3', paddingTop:'3%', paddingBottom:'3%', borderRadius:5,}}>
                 <Text style={{color:'#fff', fontSize:20,}}>20</Text>
             </View>
             <View style={{width:wp('40%'), alignItems:'center', paddingTop:'3%', paddingBottom:'3%', borderRadius:5, backgroundColor:'#fff',shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.0,

                    elevation: 2,}}>
                 <Text style={{color:'#4F5FF3', fontSize:20,}}>visit done</Text>
             </View>
         </View>
         </View>
         
         <View style={{width:wp('100%'),  alignItems:'center', marginTop:'8%',}}>
         <View style={{width:wp('80%'),  alignItems:'center', flexDirection:'row'}}>
             <View style={{width:wp('40%'), alignItems:'center',  backgroundColor:'#4F5FF3', paddingTop:'3%', paddingBottom:'3%', borderRadius:5,}}>
                 <Text style={{color:'#fff', fontSize:20,}}>20</Text>
             </View>
             <View style={{width:wp('40%'), alignItems:'center', paddingTop:'3%', paddingBottom:'3%', borderRadius:5, backgroundColor:'#fff',shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.0,

                    elevation: 2,}}>
                 <Text style={{color:'#4F5FF3', fontSize:20,}}>visit done</Text>
             </View>
         </View>
         </View>

         <View style={{width:wp('100%'),  alignItems:'center', marginTop:'8%',}}>
         <View style={{width:wp('80%'),  alignItems:'center', flexDirection:'row'}}>
             <View style={{width:wp('40%'), alignItems:'center',  backgroundColor:'#4F5FF3', paddingTop:'3%', paddingBottom:'3%', borderRadius:5,}}>
                 <Text style={{color:'#fff', fontSize:20,}}>20</Text>
             </View>
             <View style={{width:wp('40%'), alignItems:'center', paddingTop:'3%', paddingBottom:'3%', borderRadius:5, backgroundColor:'#fff',shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 3.0,

                    elevation: 2,}}>
                 <Text style={{color:'#4F5FF3', fontSize:20,}}>visit done</Text>
             </View>
         </View>
         </View>
  
         
      </View>
        {/* // So here is modal */}

        
      </View>
    </ScrollView>

    <View style={{height: hp('7%'), // 70% of height device screen
    width: wp('100%'), backgroundColor:'#4F5FF3', marginBottom:0,position:"absolute",bottom:0 }}>
       <View style={{ flex: 1,flexDirection: 'row',flexWrap: 'wrap', alignItems: 'flex-start',   }}>
          <View style={{ width: wp('50%'),alignItems:'center',borderColor:'red'  }}>
              <Text style={{top:hp('2%'), color:'white'}}>
                  <FontAwesomeIcon
                           icon={faClock}
                           style={{color:'white'}}      />  asd</Text>
</View>
<View style={{ width: wp('50%'),alignItems:'center'   }}>
<TouchableOpacity >
                            <Image
                                    source={require("../assets/image/end.png")}
                                    resizeMode="contain"
                                    style={styles.icon08}
                                  ></Image></TouchableOpacity>
</View>

</View>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(239,239,239,1)",
    alignItems:'center',
  },
  wrp: {
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'),
  },
  imageback: {
    height: hp('6%'), // 70% of height device screen
    width: wp('33%'),
    padding:10 ,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    width:wp('100%'),
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    height: hp('12%'),

  },
  row2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:wp('100%'),
    alignItems: 'flex-start',
  },
  row3: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width:wp('100%'),
    alignItems: 'flex-start',
  },
  row4: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  col0: {// 70% of height device screen
    width: wp('10%'),
    height: hp('15%'),
    alignItems:'center', 
  },
  col1: {// 70% of height device screen
    width: wp('33%'),
    height: hp('15%'),
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'lightgrey',
  },
  col2: {
    width: wp('34%'),
    height: hp('15%'),
    alignItems:'center',  
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderColor:'lightgrey',
  },
  col3: {
    width: wp('33%'),
    height: hp('15%'),
    alignItems:'center',
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderColor:'lightgrey',
  },
  colIcon: {
    width: 50,
    height:50,
    alignItems:'center', 
    marginTop: hp('2%'),

  },
  colIconx: {
    width: 50,
    height:50,
    alignItems:'center', 
    top: hp('1%'),


  },
  colText: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
  },  mshdon: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 25,// if you want to fill rows left to right
    
  },
  mshdonitem1: {
    width: wp('34%'),
    alignContent:'center',
    alignItems:'center'
  },
  mshdonitem2: {
    width: wp('34%'),
    alignContent:'center',
    alignItems:'center'
  },
  colTextx: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
  },
  finalEnd:{
    alignItems:'center', 
    marginTop: hp('1%'),

  },
  rect: { // 70% of height device screen
    width: wp('100%'),
    height: hp('20%'),
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius:15,
    
    alignItems:'center',
    textAlign:'center',
    
  },
  rect2: {
    width: 360,
    height: 40,
    backgroundColor: "rgba(230,230, 230,0)",
    flexDirection: "row",
  },
  image: {
    width: 22,
    height: 25,
  },
  image2: {
    width: 22,
    height: 25,
    marginLeft: 20,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 25,
    height: 30,
    width: 32,
    marginLeft: 15,
    top:5
  },
  icon0: {
    color: "#fff",
    fontSize: 20,
    width: 40,
    marginLeft: 4,
    top:5
  },
  imageRow: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 225,
    marginTop: 4,
  },
  rect3: {
    width: 360,
    height: 110,
    backgroundColor: "rgba(230,230, 230,0)",
    marginTop:-10,
    
  },
  othalm402: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 16,
    marginTop: 9
  },
  image3: {
    width: 15,
    height: 28,
    marginLeft: 9,
    top:7
  },
  othalm402Row: {
    height: 30,
    flexDirection: "row",
    marginRight: 37,
    
  },
  lastVisit202011: {
    
    color: "#121212",
    fontSize: 14,
    marginTop: 2
  },
  ksc: {
    
    color: "#121212",
    fontSize: 14,
    marginTop: 2,
  },
  othalm402RowColumn: {
    width: 189,
  },
  image4: {
    width: 95,
    height: 103,
    marginLeft: 15
  },
  othalm402RowColumnRow: {
    height: 108,
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 35,
  },
  rect4: {
    height: hp('8%'), // 70% of height device screen
    width: wp('100%'),
    backgroundColor: "rgba(230,230, 230,0)",
    top:2,
    alignItems:'center',
    textAlign:'center',
    
  },
  rect5: {
    width: wp('90%'),
    height: 45,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 35,
    flexDirection: "row",
    marginTop: 5,
    
  },
  rect6: {
    width: 82,
    height: 38,
    backgroundColor: "rgba(230,230, 230,0)",
    marginTop: 0,
    borderBottomWidth:3,
    borderColor:'#5464F3',
    marginLeft:10,
  },
  activities: {
    
    color: "#5464F3",
    fontSize: 18,
    marginTop: 7,
    marginLeft: 0
  },
  rect7: {
    width: 103,
    height: 41,
    backgroundColor: "rgba(230,230, 230,0)",
    marginLeft: 22,
  },
  history: {
    
    color: "#121212",
    fontSize: 16,
    marginTop: 9,
    marginLeft: 16
  },
  rect8: {
    width: 89,
    height: 41,
    backgroundColor: "rgba(230,230, 230,0)",
    marginLeft: 3
  },
  jobs: {
    
    color: "#121212",
    fontSize: 16,
    marginTop: 9,
    marginLeft: 20
  },
  rect6Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 18,
    marginTop: 2
  },
  rect9: {
    height: hp('61%'), // 70% of height device screen
    width: wp('100%'),
    backgroundColor: "rgba(255,255,255,1)",
    borderTopStartRadius:25,
    borderTopEndRadius:25,
    marginTop: 2,
    alignItems:'center',
    textAlign:'center',
  },
  rect10: {
    width: 360,
    height: 20,
    backgroundColor: "rgba(230,230, 230,0)",
    marginTop: 2,
    alignItems:'center'
  },
  rect11: {
    width: 55,
    height: 6,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    marginTop: 5,
  },
  rect12: {
    width: 360,
    height: 112,
    backgroundColor: "rgba(230,230, 230,0)",
    flexDirection: "row",
    marginTop: 0,
   
  },
  rect13: {
    width: 134,
    height: 105,
    backgroundColor: "rgba(230,230, 230,0)",
    borderBottomWidth:1,
    borderColor:'lightgrey',
    left:6
  },
  icon2: {
    color: "rgba(84,138,246,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginTop: 14,
    marginLeft: 28
  },
  photo: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
    marginLeft: 29
  },
  rect14: {
    top: 0,
    left: -20,
    width: 134,
    height: 105,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)",
    borderLeftWidth:1,
    borderBottomWidth:1,
   
    borderColor:'lightgrey'
  },
  icon3: {
    color: "rgba(240,157,96,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginTop: 14,
    marginLeft: 58
  },
  beforeAfter: {
    top: 58,
    left: 11,
    position: "absolute",
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    width:200,
  },
  rect14Stack: {
    width: 125,
    height: 100,
    marginLeft: 26
  },
  rect13Row: {
    height: 100,
    flexDirection: "row",
    flex: 1,
    marginRight: 57,
    marginLeft: 43,
    marginTop: 5
  },
  rect15: {
    width: 360,
    height: 105,
    backgroundColor: "rgba(230,230, 230,0)",
    flexDirection: "row",
   
  },
  rect16: {
    width: 133,
    height: 104,
    backgroundColor: "rgba(230,230, 230,0)",
    borderBottomWidth:1,
    borderColor:'lightgrey',
    top:-6,
    left:7,
   
  },
  icon4: {
    color: "rgba(178,106,247,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginTop: 14,
    marginLeft: 28
  },
  note: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 35
  },
  rect17: {
    width: 134,
    height: 104,
    backgroundColor: "rgba(230,230, 230,0)",
    marginLeft: 7,
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderColor:'lightgrey',
    top:-7,
   
  },
  icon5: {
    color: "rgba(84,138,246,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginTop: 14,
    marginLeft: 58
  },
  audilt: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 59
  },
  rect16Row: {
    height: 100,
    flexDirection: "row",
    flex: 1,
    marginRight: 58,
    marginLeft: 43,
    marginTop: 5
  },
  rect18: {
    width: 360,
    height: 105,
    backgroundColor: "rgba(230,230, 230,0)",
    flexDirection: "row",
    top:-4,
   
  },
  rect19: {
    width: 134,
    height: 103,
    backgroundColor: "rgba(230,230, 230,0)",
    left:6,
    borderBottomWidth:1,
    borderColor:'lightgrey',
   
  },
  icon6: {
    color: "rgba(84,138,246,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginTop: 14,
    marginLeft: 28
  },
  note1: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 8,
    marginLeft: 32
  },
  rect20: {
    width: 134,
    height: 103,
    backgroundColor: "rgba(230,230, 230,0)",
    marginLeft: 6,
    borderLeftWidth:1,
    borderBottomWidth:1,
    borderColor:'lightgrey',
   
  },
  icon7: {
     color: "rgba(240,157,96,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginLeft: 58,
    marginTop:16
  },
  audilt1: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 42,
    width:150,
  },
  audilt01: {
    fontWeight:'bold',
    color: "#fff",
    fontSize: 18,
    marginTop: -18,
    marginLeft: 34,
    width:150,
  },
  rect19Row: {
    height: 101,
    flexDirection: "row",
    flex: 1,
    marginRight: 58,
    marginLeft: 43,
  },
  rect21: {
    width: 360,
    height: 105,
    backgroundColor: "rgba(230,230, 230,0)",
    marginTop: 0,
   
    alignItems:'center'
  },
  rect22: {
    width: 124,
    height: 102,
    backgroundColor: "rgba(230,230, 230,0)",
   
  },
  icon8: {
    color: "rgba(84,138,246,1)",
    fontSize: 50,
    height: 40,
    width: 40,
    marginTop: 10,
    marginLeft: 42
  },
  icon08: {
    height: 54,
    width: 60,
  },
  media: {
    fontWeight:'bold',
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
    marginLeft: 44
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: '50%',
  },
  image03: {
    width: 270,
    height: 150,

  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 5,
  },
  modalView1: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  openButton: {
    borderRadius: 5,
    padding: 20,
    elevation: 2,
    marginTop: 12
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -12,
    fontSize:18

  },
  textStyle0: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -12,
    fontSize:18

  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight:'bold',
    marginTop: 30,
    color:'#4F5FF3',
    fontSize:25

  }
});

export default Home;