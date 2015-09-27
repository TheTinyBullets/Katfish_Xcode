Katfish is a mobile app built on React Native that lets your connections quantify your positive personality traits within your networks.

Here's a picture of us demoing the application at Telegraph Academy's Demo Day in San Francisco.

<image src="Web/assets/img/TGAdd.jpg">

The application uses the React Native Facebook Login SDK and obtains your friend's information from Facebook. The thumbnail for images is also called from Facebook. Facebook's graph API update to version 2.4 limits the kind of data you can obtain from facebook, now only granting you information to your friends which use the application. We use this information inside katfish to show you your friends on facebook using our app and vote on our pre-determined traits.

The application uses Firebase to store all information about trait voting. People vote with their katfish specific facebook ids, to prevent voting on someone's trait twice. Whenever information is updated in the database, the listener within each component that is concerned is notified and the view is updated. Because of the XMLhttpRequest being built on top of the Mac iOS XMLhttpRequest, which has no CORS concept and lets us write requests without routing through a server, each page is written with easy to follow code that showcases this one-way database-to-view relationship.

The application is currently undergoing the TestFlight process for user testing. This version of the application is written in React Native for iOS, but we will be trying the application in Android. We are currently using xcode and it's iOS simulator but we have been exploring the exponent React Native simulator. We plan to add a more phone friendly quiz like functionality and data visualizations including word clouds to later versions of the App.

Screenshots:

This is where you can vote on attributes of random friends.

<image src="Web/assets/img/Friends.png">

This is where you can see stats of said friend.

<image src="Web/assets/img/FriendStats.png">

Here you can choose another friend to vote on.

<image src="Web/assets/img/Pond.png">

You can also access your own profile and see your top 5 traits.

<image src="Web/assets/img/Profile.png">

<image src="Web/assets/img/YourStats.png">





