import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, BackHandler, ScrollView, Text, TextInput } from 'react-native';
import Video from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import axios from 'axios';
import { styles } from '../stryle/homePageStyle';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';
import { SpaceResponsive } from '../utils/SizeMatter';
import TopHeader from '../ComanComponant/TopHeader';
// import { Html5Entities } from 'html-entities'; 

const HomePage = () => {
  // const entities = new Html5Entities();

  let play = "U+25B7"
  play = String.fromCharCode(9660);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [homeData, setHomeData] = useState<any>();
  const [loading, setLoading] = useState<any>();
  const [videoUrl, setVideoUrl] = useState<any>();


let duplicateThumbnil = 'http://res.cloudinary.com/doe10kbhe/video/upload/c_pad,h_200,w_300/v1704953079/xzwcmn8taltmmh7lmc7t.jpg'

  const Homedata = async () => {
    console.log('--------------11');
    await axios.get('http://192.168.0.104:3000/video/allvideos')
      .then((res) => {
        console.log(res.data, 'res-------------');

        setHomeData(res.data.videoList)
      }).catch((err) => {
        console.log(err, 'errr-------------');

      })

  }

  useEffect(() => {
    Homedata()
  }, [])

  const handleThumbnailPress = (id: any) => {
    // Lock the device to landscape mode
    console.log(id, '--------11------data.video_url');

    homeData.filter((data: any) => {
      if (data.id == id) {
        setVideoUrl(data.video_url)
        console.log(data.video_url, '--------22------data.video_url');
      }
    })
    Orientation.lockToLandscape();
    // Set the state to indicate fullscreen
    setIsFullscreen(true);
  };

  const handleFullscreenExit = () => {
    // Lock the device to portrait mode when exiting fullscreen
    Orientation.lockToPortrait();

    // Set the state to indicate non-fullscreen
    setIsFullscreen(false);
  };

  const handleVideoEnd = () => {
    // Handle video end
    // Lock the device to portrait mode
    Orientation.lockToPortrait();
    setVideoUrl('')
    // Set the state to indicate non-fullscreen
    setIsFullscreen(false);
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Handle the back button press
      if (isFullscreen) {
        // Lock the device to portrait mode
        Orientation.lockToPortrait();

        // Set the state to indicate non-fullscreen
        setIsFullscreen(false);

        // Prevent default behavior (exiting the app)
        return true;
      }

      // Allow default behavior for non-fullscreen mode
      return false;
    });

    // Cleanup event listener on component unmount
    return () => backHandler.remove();
  }, [isFullscreen]);

  return (
    <ScrollView style={styles.ScrollView}>
      {
        !isFullscreen ? (
          <View>
            <View
              style={[
                styles.sectuionContainer,
                { marginBottom: SpaceResponsive(30),
                  marginTop:SpaceResponsive(20)
                 }
              ]}>
              <Image style={styles.serchPosition} source={require('../Images/homeImage/VectorSearch.png')} />
              <TextInput
                style={styles.serchInput}
                placeholder='Serch video by your interest'
                placeholderTextColor='#402A9F'
              />
            </View>

            {
              homeData && <View>
                {
                  homeData.map((data: any, ind: any) => {
                    return (
                      <View key={ind} style={{marginBottom:SpaceResponsive(15)}}>
                        <View
                          style={[styles.sectuionContainer,{marginBottom:SpaceResponsive(5)}]}>
                          <View
                            style={{ width: '15%' }}>
                            <Image
                              style={{
                                width: scale(40),
                                height: verticalScale(45)
                              }}
                              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' }} />
                          </View>
                          <View
                            style={{ width: '70%' }}>
                            <Text
                              style={styles.videoTitle}>Jhon Morthan</Text>
                            <Text
                              numberOfLines={1}
                              style={styles.videoPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum risus tellus, eget tincidunt nunc auctor vitae. Aliquam ut magna sodales, viverra ante dignissim,</Text>
                          </View>
                          <View>
                            <Image
                              source={require('../Images/homeImage/Group11.png')} />
                          </View>
                        </View>

                        <TouchableOpacity
                          style={{
                            position: 'relative',
                            width: '100%',
                          }}
                          onPress={() => handleThumbnailPress(data.id)}>
                          <LinearGradient
                            colors={['#5A2D9F', '#B73BA1', '#B73BA1']}
                            style={[styles.container, styles.iconContainer]}>
                            <Image style={styles.playIcon} source={require('../Images/homeImage/Polygon1.png')} />
                          </LinearGradient>
                          <Image
                            source={{ uri: data.thumbnail_url || duplicateThumbnil }}
                            style={styles.thumbnail}
                          />
                        </TouchableOpacity>
                      </View>
                    )
                  })
                }
              </View>
            }
          </View>
        ) : (<View style={{ position: 'relative', width: '100%' }}>
          {
            videoUrl ? <Video
              source={{ uri: videoUrl }}
              style={styles.video}
              paused={!isFullscreen} // Pause the video initially if not in fullscreen
              fullscreen={isFullscreen}
              onEnterFullscreen={() => Orientation.lockToLandscape()}
              onExitFullscreen={() => Orientation.lockToPortrait()}
              onEnd={handleVideoEnd} // Called when the video finishes
              tapAnywhereToPause={true}
              muted={false}
              controlTimeout={800}
            /> : ''
          }
        </View>)
      }
    </ScrollView>
  )
};



export default HomePage;
