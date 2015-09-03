
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  PixelRatio,
  TouchableHighlight,
} = React;

var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKGraphRequest,
} = FBSDKCore;

var FBSDKShare = require('react-native-fbsdkshare');
var {
  FBSDKShareDialog,
  FBSDKShareLinkContent,
} = FBSDKShare;

var ImageWidth = 150;

class Feed extends React.Component {
  constructor() {
    super();

    // Make a graph request to get photos from the New Horizons Facebook page.
    // var feedRequest = new FBSDKGraphRequest(
    //   this._handleRequest.bind(this),
    //   '/495164637280739/photos',
    //   {
    //     type: { string: 'uploaded' },
    //     fields: { string: 'images' }
    //   }
    // );
    // feedRequest.start();

    this.state = {
      photos: [],
    };
  }

  render() {
    return (
      <ScrollView style={this.props.style}>
        {this.state.photos}
      </ScrollView>
    );
  }

  _renderPhoto(photo) {
    var height = ImageWidth * (photo.height / photo.width);
    return (
      <View style={styles.imageBox}>
        <Image source={{uri: photo.source}} style={{
            width: ImageWidth * PixelRatio.get(),
            height: height * PixelRatio.get(),
          }}
        />
        <TouchableHighlight
          style={[styles.shareButton, { width: ImageWidth * PixelRatio.get(), height: 25 * PixelRatio.get()}]}
          onPress={() => this._sharePhoto.bind(this)(photo)}>
          <Text style={styles.shareText}>share</Text>
        </TouchableHighlight>
      </View>
    );
  }

  /**
   * Shares a photo to Facebook using the native share dialog.
   */
  _sharePhoto(photo) {
    // Build up a shareable link to the photo.
    var linkContent = new FBSDKShareLinkContent(photo.source, 'A picture from New Horizons.', 'New Horizons', photo.source);
    // Share the link using the native share dialog.
    FBSDKShareDialog.show(linkContent, (error, result) => {
      if (!error) {
        if (result.isCancelled) {
          alert('So sad, you canceled. :(');
        } else {
          alert('You shared Pluto!');
        }
      }
    });
  }

  /**
   * Handles the response from the graph request for New Horizons pictures.
   */
  _handleRequest(error, result) {
    if (!error) {
      var photos = result.data;
      var renderedPhotos = [];
      for (var i = 0, il = photos.length; i < il; i++) {
        var photo = photos[i];
        if (photo.images && photo.images.length > 0) {
          renderedPhotos.push(this._renderPhoto(photo.images[0]));
        }
      }
      this.setState({ photos: renderedPhotos });
    }
  }
}

var styles = StyleSheet.create(require('./styles.js'));

module.exports = Feed;