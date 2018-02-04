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
