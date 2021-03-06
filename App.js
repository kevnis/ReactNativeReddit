import React, { Component } from 'react';
import { ActivityIndicator, Image, FlatList, Text, View } from 'react-native';

const listOfCoolStuff = [, 0, "cool", "stuff"];

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://www.reddit.com/r/sneakers/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.data.children.map(x => x.data)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 40 }}>
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
            // <Text>{item}</Text>
            <Image
              style={{
                flex: 1,
                height: 200,
                resizeMode: 'contain'
              }}

              source={{ uri: item.url }}
            />
          }
        />
      </View>

    );
  }
}
