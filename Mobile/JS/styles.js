
'use strict';

module.exports = {
  /*=================================||
||  This section for index.ios.js  ||
||=================================*/

 container: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 rightContainer: {
   flex: 1,
   backgroundColor: "#3399FF"
 },
 title: {
   fontSize: 20,
   marginBottom: 8,
   textAlign: 'center',
 },
 year: {
   textAlign: 'center',
 },
 thumbnail: {
   width: 53,
   height: 81,
 },
 listView: {
   paddingTop: 20,
   backgroundColor: '#F5FCFF',
 },
 buttonText: {
   fontSize: 18,
   color: 'white',
   alignSelf: 'center'
 },
 button: {
   height: 44,
   flexDirection: 'row',
   backgroundColor: '#48BBEC',
   justifyContent: 'center',
   transform: [{'translate' : [0, 0, 99]}]
 },
 backgroundImage: {
  flex: 1,
  resizeMode: 'contain',
  transform: [{'translate' : [0, 0, -99]}]
},

/*=================================||
||  This section for featuredNav   ||
||=================================*/

featNavDescription: {
 fontSize: 20,
 backgroundColor: 'white'
},
featNavContainer: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center'
},
featNavButtonText: {
 fontSize: 18,
 color: '#3366ff',
 alignSelf: 'center'
},
featNavButton: {
 height: 44,
 flexDirection: 'column',
 backgroundColor: 'transparent',
 alignSelf: 'stretch',
 justifyContent: 'center'
},
moreNavContainer: {
  flex: 0.15,
  alignItems: "center",
  justifyContent: "center"
},

/*=================================||
||    This section for search      ||
||=================================*/

searchContainer: {
  flex: 1
},

/*=================================||
||    This section for more        ||
||=================================*/

moreContainer: {
  flex: 1
},

/*=================================||
||    This section for featured    ||
||=================================*/
 backdrop: {
    paddingTop: 60,
    opacity: 0.4,
    flex: 1,
    resizeMode: 'contain',
    transform: [{'translate' : [0, 0, -99]}]
  },
backgroundView: {
  height: 120,
  width: 320,
  backgroundColor: 'rgba(0,0,0,0)',
},
featContainer: {
  flex: 1
},
scrollView: {
  marginTop: -16,
  height: 200,
  width: 400
},

/*=================================||
||    This section for featured    ||
||=================================*/

disclaimerContainer: {
  flex: 0.075,
  alignItems: 'center',
  justifyContent: 'flex-end',
},
disclaimerText: {
  fontSize: 12,
  color: 'white',
},
loginContainer: {
  flex: 0.15,
  alignItems: 'center',
  justifyContent: 'center',
},
feedContainer: {
  flex: 0.775,
},
loginImage: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'transparent',
},
loginButton: {
  width: 200,
  height: 50,
  shadowOpacity: .9,
  shadowOffset: {width: 0, height: 0},
},
imageBox: {
  marginTop: 10,
  alignItems: 'center',
  flexDirection: 'column',
},
shareButton: {
  backgroundColor: '#3b5998',
  alignItems: 'center',
  justifyContent: 'center',
},
shareText: {
  fontSize: 18,
  color: 'white',
}
};