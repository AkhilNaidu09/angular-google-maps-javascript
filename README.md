# angular-q6utzm

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-q6utzm)


> **Step 1:** to use GoogleMaps api you need to have a maps KEY (Create API key credentials) 

 - Go to the [Google Developers Console][1]. 
 - From Side Menu go to APIs & Services -> Crdentials -> Create Credentials -> API Key (Copy the key)

Use this key in your code  

    s.src = "https://maps.googleapis.com/maps/api/js?key={ PASTE_KEY_HERE }&libraries=places&callback=initMap";

> **Step 2:** We have to enable few APIs

 - Go to `API Manager`
 - Click on `Overview`
 - Search for below APIs and Click on **Enable** button
     - **Geocoding API**
     - **Geolocation API**
     - **Maps JavaScript API**
     - **Places API**

Here is the working [Stackbliz][2]

Here is the [Github][3] repo, if you have any issues post here in github.

Happy Coding :-)


  [1]: https://console.developers.google.com/
  [2]: https://stackblitz.com/edit/angular-q6utzm
  [3]: https://github.com/AkhilNaidu09/angular-google-maps-javascript
