// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React, { Component } from 'react';
// import { ActivityIndicator, ListView, Text, View, Image } from 'react-native';

// export default class Movies extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true
//     }
//   }

//   componentDidMount() {
//     return fetch('https://www.reddit.com/r/rarepuppers/.json', {
//       method: 'GET'
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function () {
//           // do something with new state
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }

//     return (
//       <View style={{ flex: 1, paddingTop: 40 }}>
//         {/* <Text>{this.state.dataSource.data.children[0].data.preview.images[0].source.url} </Text> */}
//         <Image
//           style={{
//             // width: this.state.dataSource.data.children[0].data.preview.images[0].source.width,
//             // height: this.state.dataSource.data.children[0].data.preview.images[0].source.height,
//             flex: 1,
//             width: null,
//             height: null,
//             resizeMode: 'contain'
//           }}
//           source={{
//             uri: this.state.dataSource.data.children[3].data.preview.images[0].source.url
//           }} />
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { ActivityIndicator, Image, FlatList, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://www.reddit.com/r/Sneakers/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.data.children
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            // <Text>{item.data.preview.images[0].source.url}</Text>
            <Image
              style={{
                // width: this.state.dataSource.data.children[0].data.preview.images[0].source.width,
                // height: this.state.dataSource.data.children[0].data.preview.images[0].source.height,
                flex: 1,
                width: item.data.preview.images.width,
                height: 200,
                resizeMode: 'contain'
              }}

              source={{
                uri: item.data.preview.images[0].source.url
              }}
            />
          }
        />
      </View>

    );
  }
}
