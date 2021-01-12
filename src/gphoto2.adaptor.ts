import { BrowserWindow } from 'electron';

const { spawn } = require('child_process');

interface Camera {
  name: string;
  serial: string;
  defaultConfig: string;
  port: string;
}

export default class Gphoto2Adaptor {
  mainWindow: BrowserWindow;

  cameras: Array<Camera>;

  constructor(mainWindow: BrowserWindow, cameras: Array<Camera>) {
    this.mainWindow = mainWindow;
    this.cameras = cameras;
    this.identifyCams = this.identifyCams.bind(this);
    this.autoDetect();
  }

  autoDetect(): void {
    console.log('Init gphoto');
    const detectedCameras: Array<Camera> = [];

    const gphotoProc = spawn('gphoto2', ['--auto-detect']);

    gphotoProc.stdout.on('data', (data: string) => {
      console.log('Reading auto-detect info');
      console.log(`stdout: ${data}`);
      const str = data.toString();
      const lines = str.split(/(\r?\n)/g);
      for (const line of lines) {
        const portIndex: number = line.search('usb:');
        if (portIndex > -1) {
          const detectedCam: Camera = {
            name: line.substring(0, portIndex - 1),
            serial: '',
            defaultConfig: '',
            port: line.substring(portIndex),
          };
          console.log(
            `Camera detected: ${detectedCam.name}- ${detectedCam.port}`
          );
          detectedCameras.push(detectedCam);
        }
      }
    });

    gphotoProc.stderr.on('data', (data: string) => {
      console.error('Reading auto-detect error');
      console.error(`stderr: ${data}`);
    });

    gphotoProc.on('close', (code: string) => {
      console.log(`child process exited with code ${code}`);
      this.identifyCams(detectedCameras);
    });
  }

  identifyCams(detectedCameras: Array<Camera>): void {
    console.log('Identify');
    /*
    let camera : Camera = detectedCameras[0];
    if (camera){
      console.log(`Identify serial of camera ${camera.name}`);
      const gphotoProc = spawn('gphoto2', ['--port',  camera.port, '--get-config','/main/status/serialnumber']);

      gphotoProc.stdout.on('data', (data:string) => {
        console.error("Reading serial data");
        console.error(`stdout: ${data}`);
      });

      gphotoProc.stderr.on('data', (data:string) => {
        console.error("Reading serial error");
        console.error(`stderr: ${data}`);
      });
      
      gphotoProc.on('close', (code:string) => {
        console.log(`Get config serial exited with code ${code}`);
      });
    }  
    */

    /*
    function myPromise(t) {
      return new Promise((r) => {
        setTimeout(() => {
          r(t);
        }, t);
      });
    }

    const arr = [myPromise(2000), myPromise(500), myPromise(400)]; // iterable object

    (async () => {
      for await (const v of arr) {
        // iterates over the arr
        console.log(v);
      }
    })();
    */
  }
}
