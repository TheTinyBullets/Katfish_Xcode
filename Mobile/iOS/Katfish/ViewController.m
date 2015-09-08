//
//  ViewController.m
//  Katfish
//
//  Created by Ceditoph on 9/4/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import "ViewController.h"

// Add this to the header of your file, e.g. in ViewController.m
// after #import "ViewController.h"
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <FBSDKLoginKit/FBSDKLoginKit.h>

// Category, an extension of ViewController class
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
  [super viewDidLoad];
  FBSDKLoginButton *loginButton = [[FBSDKLoginButton alloc] init];
  // Optional: Place the button in the center of your view.
  loginButton.center = self.view.center;
  [self.view addSubview:loginButton];
  // Do any additional setup after loading the view, typically from a nib.
  // Extend the code sample "1. Add Facebook Login Button Code"
  // In your viewDidLoad method:
  loginButton.readPermissions =
  @[@"public_profile", @"email", @"user_friends"];
  
}

- (void)didReceiveMemoryWarning
{
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

@end




