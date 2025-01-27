# Spotify - now playing

This is a popup that shows Spotify current playback information, made and tested specially for macOS. It also allows you to add tracks to your library and playlists.

![](spotify-now-playing.gif)

## Installing

Download the `.dmg` file from the [latest release](https://github.com/davicorreiajr/spotify-now-playing/releases/latest), run it and move the app to the `Application` folder.

Using Homebrew:
```
brew install --cask spotify-now-playing
```

### Compatibily with Linux

I tried to make the app compatible with Linux, but I've seen [this issue](https://github.com/electron/electron/issues/6773), which turns quite hard to make the app behaves as expected (let's say, as a menu bar app) on Linux. You can run the app locally, but for now, I prefered to not release a version for Linux because it'd be far from what I (or any other user) would expected. If you find a good solution, please don't hesitate to open an issue or a pull request.

## Running locally

This app was made using Electron, but developed and tested only on macOS.

First, clone the repo:
```
git clone https://github.com/davicorreiajr/spotify-now-playing
cd spotify-now-playing
```

Install the dependencies:
```
yarn install
```
Then you have to create an app on Spotify, in order to get the codes necessary for doing the requests to its API. You can do it easly, following [this tutorial](https://developer.spotify.com/documentation/general/guides/app-settings/#register-your-app).

Once you have done this, rename `.env-example.json` (file in the root of this project) to `.env.json`.

And finally, start the app:
```
yarn start
```

If you are developing over this project and want to test the built app, the one generated by `electron-builder`, you have to:
- rename `electron-builder-example.yml` to `electron-builder.yml`;
- generate a token with repo/scope permission [here](https://github.com/settings/tokens/new), ONLY in case you want to release to your GitHub repo. And remember to update the link to your repo in `package.json`.

And then, you run:
```
yarn dist
```
With this command, you are going to find a `.dmg` file inside a new folder `dist`. 

## Contributing & developing

To contribute with this repository:
 - First you need to fork the project;
 - Create a branch with a meaningful name;
 - Modify the project as you see fit;
 - To test it manually, run:
 ```
 yarn link
 ```
 - Open a pull request to the main repository.

## Copyright & credits

Spotify - now playing is not affiliated with Apple or Spotify and these are the trademarks of the respective parties. The icon used here belongs to Spotify and it was used to ease the usage of this app to the user.


## Troubles & suggestions

Please, if you find any problem or have some sugestion, don't hesitate to open an issue or even a pull request.
