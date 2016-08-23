# Proximi.io Ionic 2 Starter Application #

### Installation / Usage ###

1. Edit app/pages/about/about.ts
2. find the line containing "const PROXIMIIO_TOKEN" and replace the placeholder with your Authentication Token. (you can find this from the Proximi.io Web Portal Applications section)

```
  const PROXIMIIO_TOKEN = "YOUR_TOKEN_HERE";
```
3. run npm install to install the required dependencies
4. use "ionic run android" or "ionic run ios" to run the application on a device.
5. You can see the Proximi.io data under the "About" tab for now

### Notes ###

1. The starter is really basic and it's based on the stock tabbed app template; we'll improve the starter after a while and replace the basic template with something more usable
2. There's a known issue that causes the UI not to update upon changes until the first UI interaction, we're working towards fixing this
3. Latest Google Repository is required for Android (installation / update via Android SDK Manager)