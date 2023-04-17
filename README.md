![](https://img.shields.io/badge/Foundry-v10-informational)


<!--- Downloads @ Latest Badge -->
<!--- replace <user>/<repo> with your username/repository -->
![Latest Release Download Count](https://img.shields.io/github/downloads/Durak-Git/my-journal-scaler/latest/module.zip)

<!--- Forge Bazaar Install % Badge -->
<!--- replace <your-module-name> with the `name` in your manifest -->
<!--- ![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2F<your-module-name>&colorB=4aa94a) -->

## My readme
Adaptation of jegasus' <kbd>Journal Scaler</kbd> module for some V10 compliance, using zoom style in journals. Reduced zoom on <hx> tags.<br>
For personnal use, sharing with my DMs and acquaintances.<br>
A good way to train in coding.

### Original README from initial author, jegasus, hidden from here.
<!--
![](https://img.shields.io/badge/Foundry-v9-informational)
![GitHub All Releases](https://img.shields.io/github/downloads/jegasus/journal-scaler/total?label=Downloads+total)  
![Latest Release Download Count](https://img.shields.io/github/downloads/jegasus/journal-scaler/latest/module.zip?label=Downloads+latest+release) 
![Forge Installs](https://img.shields.io/badge/dynamic/json?label=Forge%20Installs&query=package.installs&suffix=%25&url=https%3A%2F%2Fforge-vtt.com%2Fapi%2Fbazaar%2Fpackage%2Fjournal-scaler&colorB=4aa94a)


# Journal Scaler
A [FoundryVTT](https://foundryvtt.com/) module that enables you to change the font sizes inside journal windows using <kbd>ctrl</kbd>+`mouseWheelUp` and <kbd>ctrl</kbd>+`mouseWheelDown`. Modified to not be active on h1->h6 tag. Almost V10 compliant.

# Installation and setup
The Journal Scaler module requires you to install [ruipin's libWrapper library](https://github.com/ruipin/fvtt-lib-wrapper). 

Activating both modules in your world will allow you to use the Journal Scaler.

# Instructions
- Step 1: activate this module in your world 
- Step 2: hover your mouse cursor over a journal sheet window
- Step 3: hold down `ctrl` and use your mouse wheel to scroll either up or down to increase or decrease the font sizes, respectively. Modifies the zoom's style

**Note**: The Journal Scaler also allows you to zoom in and out of Journal Image, not pop-out.

# Preview from V9.
![Journal scaler in action](img/module_in_action.gif)

![Journal scaler in action](img/module_in_action_2.gif)

# Changelog

## 0.1.0 - TestReleased on 2023-04-14
Updated module to work on Foundry v10. And my GM's use.

## 0.0.8 - Released on 2022-01-09
Updated module to work on Foundry v9.

# Information hidden from here to keep my lisibility
## 0.0.7 - Released on 2021-08-01
Updated module to work on Foundry 0.8.x. Removed the use of the `libWrapper` shim. Now, the full `libWrapper` library is required to run this module.

## 0.0.6 - Released on 2021-04-08
Added new feature! The module now allows users to Zoom in and out of Journal Images.

Very special thanks to [JeansenVaars](https://github.com/saif-ellafi) (Discord user: JeansenVaars#2857) for generously offering the chunks of code needed to add this functionality to the module.

## 0.0.5 - Released on 2021-01-30
Fixed Firefox bug. Now module works in Chrome and Firefox.

## 0.0.4 - Released on 2021-01-08
Now using updated `shim.js` from [libWrapper v1.3.4.0](https://github.com/ruipin/fvtt-lib-wrapper/releases/tag/v1.3.4.0).

Fixed wrapper type from `MIXED` to `WRAPPER`.

## 0.0.3 - Released on 2021-01-02
Real for scaling bug when journal window was open but not hovered by the mouse.

## 0.0.2 - Released on 2021-01-02
Hotfix for scaling bug when journal window was open but not hovered by the mouse.

## 0.0.1 - Released on 2021-01-01
Initial release. 

Got the basic funtionality to work.

# Acknowledgements

## LoFD's Module Template
This module relied heavily on [The League of Foundry Developer's FoundryVTT Module Template](https://github.com/League-of-Foundry-Developers/FoundryVTT-Module-Template). This is a great resource to get started in developing cool stuff for FoundryVTT!

## ruipin's libWrapper
This module uses [ruipin's libWrapper library](https://github.com/ruipin/fvtt-lib-wrapper). Take a look at his stuff if you want to develop modules for FVTT that override its default behaviors.

## JeansenVaars
Special thanks to [JeansenVaars](https://github.com/saif-ellafi) (Discord user JeansenVaars#2857) who generously provided the code for the journal image zoom functinality. 


-->

### League-of-Foundry-Developers README hidden from here
<!--# How to use this Template to create a versioned Release

1. Open your repository's releases page.

![Where to click to open repository releases.](https://user-images.githubusercontent.com/7644614/93409301-9fd25080-f864-11ea-9e0c-bdd09e4418e4.png)

2. Click "Draft a new release"

![Draft a new release button.](https://user-images.githubusercontent.com/7644614/93409364-c1333c80-f864-11ea-89f1-abfcb18a8d9f.png)

3. Fill out the release version as the tag name.

If you want to add details at this stage you can, or you can always come back later and edit them.

![Release Creation Form](https://user-images.githubusercontent.com/7644614/93409543-225b1000-f865-11ea-9a19-f1906a724421.png)

4. Hit submit.

5. Wait a few minutes.

A Github Action will run to populate the `module.json` and `module.zip` with the correct urls that you can then use to distribute this release. You can check on its status in the "Actions" tab.

![Actions Tab](https://user-images.githubusercontent.com/7644614/93409820-c1800780-f865-11ea-8c6b-c3792e35e0c8.png)

6. Grab the module.json url from the release's details page.

![image](https://user-images.githubusercontent.com/7644614/93409960-10c63800-f866-11ea-83f6-270cc5d10b71.png)

This `module.json` will only ever point at this release's `module.zip`, making it useful for sharing a specific version for compatibility purposes.

7. You can use the url `https://github.com/<user>/<repo>/releases/latest/download/module.json` to refer to the manifest.

This is the url you want to use to install the module typically, as it will get updated automatically.

# How to List Your Releases on Package Admin

To request a package listing for your first release, go to the [Package Submission Form](https://foundryvtt.com/packages/submit) (accessible via a link at the bottom of the "[Systems and Modules](https://foundryvtt.com/packages/)" page on the Foundry website).

Fill in the form. "Package Name" must match the name in the module manifest.  Package Title will be the display name for the package.  Package URL should be your repo URL.
![image](https://user-images.githubusercontent.com/36359784/120664263-b49e5500-c482-11eb-9126-af7006389903.png)


One of the Foundry staff will typically get back to you with an approval or any further questions within a few days, and give you access to the package admin pages.

Once you have access to the [module admin page](https://foundryvtt.com/admin/packages/package/), you can release a new version by going into the page for your module, scrolling to the bottom, and filling in a new Package Version.

When listing a new version, Version should be the version number you set above, and the Manifest URL should be the manifest __for that specific version__ (do not use /latest/ here).
![image](https://user-images.githubusercontent.com/36359784/120664346-c4b63480-c482-11eb-9d8b-731b50d70939.png)

> ### :warning: Important :warning:
> 
> It is very important that you use the specific release manifest url, and not the `/latest` url here. For more details about why this is important and how Foundry Installs/Updates packages, read [this wiki article](https://foundryvtt.wiki/en/development/guides/releases-and-history).

Clicking "Save" in the bottom right will save the new version, which means that anyone installing your module from within Foundry will get that version, and a post will be generated in the #release-announcements channel on the official Foundry VTT Discord.


# FoundryVTT Module

Does something, probably

## Changelog-->
