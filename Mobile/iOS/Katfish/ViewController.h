//
//  ViewController.h
//  Katfish
//
//  Created by Ceditoph on 9/4/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//
#import <UIKit/UIKit.h>

//  ViewController.h
#import <FBSDKLoginKit/FBSDKLoginKit.h>

// Interface for class ViewController
@interface ViewController : UIViewController
@property (weak, nonatomic) IBOutlet FBSDKLoginButton *loginButton;
@end