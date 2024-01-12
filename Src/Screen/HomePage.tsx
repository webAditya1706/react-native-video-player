import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, BackHandler, ScrollView, Text } from 'react-native';
import Video from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import axios from 'axios';
import { styles } from '../stryle/homePageStyle';
// import { Html5Entities } from 'html-entities'; 

const HomePage = () => {
  // const entities = new Html5Entities();

  let play = "U+25B7"
  play = String.fromCharCode(9660);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [homeData, setHomeData] = useState<any>();
  const [loading, setLoading] = useState<any>();
  const [videoUrl, setVideoUrl] = useState<any>();




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
        homeData ? <View>
          {
            homeData.map((data: any, ind: any) => {
              return (
                <View key={ind}>
                  {!isFullscreen ? (
                    <View>
                      <View style={styles.sectuionContainer}>
                        <View style={{ width: '15%' }}>
                          <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219983.png' }} />
                        </View>
                        <View style={{ width: '70%' }}>
                          <Text style={styles.videoTitle}>Jhon Morthan</Text>
                          <Text numberOfLines={1} style={styles.videoPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum risus tellus, eget tincidunt nunc auctor vitae. Aliquam ut magna sodales, viverra ante dignissim,</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={{ position: 'relative', width: '100%', }} onPress={() => handleThumbnailPress(data.id)}>
                        <View style={[styles.container, styles.iconContainer]}>
                          <Text style={{ fontSize: 50, color: 'green', marginTop: -10, marginLeft: 10 }}>{'\u25B7'}</Text>
                        </View>
                        <Image
                          source={{ uri: data.thumbnail_url || 'http://res.cloudinary.com/doe10kbhe/video/upload/c_pad,h_200,w_300/v1704953079/xzwcmn8taltmmh7lmc7t.jpg' }}
                          style={styles.thumbnail}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View style={{ position: 'relative', width: '100%' }}>
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
                    </View>
                  )}
                </View>
              )
            })
          }
        </View> : ''
      }
    </ScrollView>
  );
};



export default HomePage;
