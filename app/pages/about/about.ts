import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var proximiio;
const PROXIMIIO_TOKEN = "YOUR_TOKEN_HERE";

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

  private proximiioStatus: any;
  private lastInput: any;
  private lastOutput: any;
  private lastPosition: any;
  private lastBeaconFound: any;
  private lastBeaconLost: any;
  private lastFloor: any;

  constructor(private navController: NavController) {
    this.initProximiio();
  }

  public format = (obj) => {
    if (typeof obj == "object") {
      const jsonString = JSON.stringify(obj, null, 4);
      console.log('stringified:' + jsonString);
      return jsonString;
    }

    return obj + '';
  }

  public onInput = (enter, geofence) => {
    this.lastInput = this.format(geofence);
  }

  public onOutput = (output) => {
    this.lastOutput = this.format(output);
  }

  public onPositionChange = (position) => {
    this.lastPosition = this.format(position);
  }

  public onBeaconFound = (beacon) => {
    this.lastBeaconFound = this.format(beacon);
  }

  public onBeaconLost = (beacon) => {
    this.lastBeaconLost = this.format(beacon);
  }

  public onFloorChanged = (floor) => {
    this.lastFloor = this.format(floor);
  }

  public onProximiioReady = () => {
    this.proximiioStatus = 'Ready';
  }

  public initProximiio = () => {
    proximiio.setProximiioReadyCallback(this.onProximiioReady);
    proximiio.setDebugOutput(true, null, null);
    proximiio.setInputTriggerCallback(this.onInput);
    proximiio.setOutputTriggerCallback(this.onOutput);
    proximiio.setPositionChangeCallback(this.onPositionChange);
    proximiio.setBeaconFoundCallback(this.onBeaconFound);
    proximiio.setBeaconLostCallback(this.onBeaconLost);
    proximiio.setFloorChangedCallback(this.onFloorChanged);
    proximiio.setToken(PROXIMIIO_TOKEN, function success() {
      console.log('proximiio setToken success');
    }, function failure(error) {
      console.log('proximiio setToken failure' + error);
    });
  }
}
