import { Component,ViewChild,ElementRef} from '@angular/core';
export class GeoMapAddress {
  mailingAddress1: string='';
  mailingAddress2: string='';
  city: string='';
  state: string='';
  zip1: string='';
  zip4: string='';
  constructor(){
    
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name = 'Angular';
  map:boolean = false;
  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;
  addressDetails:GeoMapAddress;
  geoAddress:string='';
  ngOnInit() {
    this.addressDetails = new GeoMapAddress();
    this.addressDetails.mailingAddress1 ='7205 Vidalia Rd';
    this.addressDetails.city ='Pass Christian';
    this.addressDetails.state ='MS';
    this.addressDetails.zip1 ='39571';
    console.log(this.addressDetails);
  }
  
  ngAfterViewInit(){
    this.renderMap();

  }
  
  showMap() {
   
    this.geoAddress = this.addressDetails.mailingAddress1  + this.addressDetails.city + this.addressDetails.state + this.addressDetails.zip1;
    this.locateMap();
     this.map = true;
    console.log(this.addressDetails)
  }

  renderMap() {
    
  window['initMap'] = () => {
      
  }
  if(!window.document.getElementById('google-map-script')) {
    var s = window.document.createElement("script");
    s.id = "google-map-script";
    s.type = "text/javascript";
    s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhmuYdiSZmm7JDUkGBAQGNOxXl-NUMVDc&libraries=places&callback=initMap";
      
    window.document.body.appendChild(s);
  }
}

locateMap(){
   var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
    center: {lat: -33.867, lng: 151.195},
    zoom: 8
  });
   var request = {
    query: this.geoAddress,
    fields: ['name', 'geometry'],
  };
  var service = new window['google'].maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === window['google'].maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
       // createMarker(results[i]);
      }
      console.log(results[0]);
      map.setCenter(results[0].geometry.location);
    }
  });
  var marker = new window['google'].maps.Marker({
    position: {lat: -33.867, lng: 151.195},
    map: map,
    title: 'Hello World!',
    draggable: true,
    animation: window['google'].maps.Animation.DROP,
  });
    var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>'+
  '<div id="bodyContent">'+
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
  '</div>'+
  '</div>';
  
  var infowindow = new window['google'].maps.InfoWindow({
    content: contentString
  });
   marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  
}
}
