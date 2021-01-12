# Gphoto2Controller

- Base template: [Electron React Boilerplate](https://electron-react-boilerplate.js.org/)

* Main Electron node process: `src/main.dev.ts`
* Main React app file: `src/App.tsx`
* Main CCS app file: `src/App.global.css`

- App Properties

```json
{
  "lastSessionPath": "",
  "cameras": [
    {
      "name": "My Nikon",
      "serial": "0987612345",
      "config": "",
      "sidecar": "",
      "imgName": ""
    }
  ]
}
```

- Gphoto Actions:

```
Original gphoto commands (reference: http://www.gphoto.org/doc/manual/ref-gphoto2-cli.html):

--auto-detect                                                               List auto-detected cameras
--capture-tethered[=COUNT, SECONDS, MILLISECONDS or MATCHSTRING]            Wait for shutter release on the camera and download
--list-all-config                                                           Dump full configuration tree
--get-config=STRING                                                         Get configuration value
--set-config=STRING                                                         Set configuration value or index in choices
--set-config-index=STRING                                                   Set configuration value index in choices
--set-config-value=STRING                                                   Set configuration value
--reset                                                                     Reset device port
--debug                                                                     Turn on debugging
--debug-loglevel=STRING                                                     Set debug level [error|debug|data|all]
--debug-logfile=FILENAME                                                    Name of file to write debug info to

Examples:

gphoto2 --get-config /main/imgsettings/imageformat

Returns :
    Label: Image Format
    Readonly: 0
    Type: RADIO
    Current: RAW
    Choice: 0 Large Fine JPEG
    Choice: 1 Large Normal JPEG
    Choice: 2 Medium Fine JPEG
    Choice: 3 Medium Normal JPEG
    Choice: 4 Small Fine JPEG
    Choice: 5 Small Normal JPEG
    Choice: 6 Smaller JPEG
    Choice: 7 Tiny JPEG
    Choice: 8 RAW + Large Fine JPEG
    Choice: 9 RAW
    END

gphoto2 --set-config-value  /main/imgsettings/imageformat="Large Fine JPEG"

gphoto2 --get-config /main/imgsettings/imageformat
    Label: Image Format
    Readonly: 0
    Type: RADIO
    Current: RAW
    Choice: 0 Large Fine JPEG
    Choice: 1 Large Normal JPEG
    Choice: 2 Medium Fine JPEG
    Choice: 3 Medium Normal JPEG
    Choice: 4 Small Fine JPEG
    Choice: 5 Small Normal JPEG
    Choice: 6 Smaller JPEG
    Choice: 7 Tiny JPEG
    Choice: 8 RAW + Large Fine JPEG
    Choice: 9 RAW
    END

== Send video as a webcam

gphoto2 --capture-movie --stdout | ffmpeg -re -i pipe:0 -listen 1 -f mjpeg http://localhost:8081

To take photos continously:


== Significant properties

===== Gestion del reloj en cámara =======

/main/actions/syncdatetimeutc
Label: Synchronize camera date and time with PC
Readonly: 0
Type: TOGGLE
Current: 0
END
/main/actions/syncdatetime
Label: Synchronize camera date and time with PC
Readonly: 0
Type: TOGGLE
Current: 0
END

/main/settings/datetimeutc
Label: Camera Date and Time
Readonly: 0
Type: DATE
Current: 1601830116
Printable: dom 04 oct 2020 18:48:36
Help: Use 'now' as the current time when setting.

END
/main/settings/datetime
Label: Camera Date and Time
Readonly: 0
Type: DATE
Current: 1601826516
Printable: dom 04 oct 2020 17:48:36
Help: Use 'now' as the current time when setting.

END

==== Metadatos de la propiedad =========

/main/settings/ownername
Label: Owner Name
Readonly: 0
Type: TEXT
Current:
END
/main/settings/artist
Label: Artist
Readonly: 0
Type: TEXT
Current:
END
/main/settings/copyright
Label: Copyright
Readonly: 0
Type: TEXT
Current:
END

==== Configuración general ====

Launch warning if not found a required parameter!!

/main/settings/autopoweroff
Label: Auto Power Off
Readonly: 0
Type: TEXT
Current: 0
END

/main/capturesettings/focusmode
Label: Focus Mode
Readonly: 0
Type: RADIO
Current: Manual
Choice: 0 Manual
END

/main/actions/cancelautofocus
Label: Cancel Canon DSLR Autofocus
Readonly: 0
Type: TOGGLE
Current: 0
END

/main/status/eosserialnumber
Label: Serial Number
Readonly: 0
Type: TEXT
Current: 053031036353
END

/main/status/shuttercounter
Label: Shutter Counter
Readonly: 0
Type: TEXT
Current: 6314
END

/main/status/availableshots
Label: Available Shots
Readonly: 0
Type: TEXT
Current: 38214
END

==== Propiedades de captura =======

/main/imgsettings/imageformat
Label: Image Format
Readonly: 0
Type: RADIO
Current: RAW
Choice: 0 Large Fine JPEG
Choice: 1 Large Normal JPEG
Choice: 2 Medium Fine JPEG
Choice: 3 Medium Normal JPEG
Choice: 4 Small Fine JPEG
Choice: 5 Small Normal JPEG
Choice: 6 Smaller JPEG
Choice: 7 Tiny JPEG
Choice: 8 RAW + Large Fine JPEG
Choice: 9 RAW
END

/main/imgsettings/iso
Label: ISO Speed
Readonly: 0
Type: RADIO
Current: Auto
Choice: 0 Auto
END

/main/imgsettings/whitebalance
Label: WhiteBalance
Readonly: 0
Type: RADIO
Current: Auto
Choice: 0 Auto
END

/main/imgsettings/colortemperature
Label: Color Temperature
Readonly: 0
Type: TEXT
Current: 5200
END

/main/imgsettings/colorspace
Label: Color Space
Readonly: 0
Type: RADIO
Current: sRGB
Choice: 0 sRGB
END

/main/capturesettings/exposurecompensation
Label: Exposure Compensation
Readonly: 0
Type: RADIO
Current: 0
Choice: 0 0
END

/main/capturesettings/aperture
Label: Aperture
Readonly: 0
Type: RADIO
Current: implicit auto
Choice: 0 implicit auto
END

/main/capturesettings/shutterspeed
Label: Shutter Speed
Readonly: 0
Type: RADIO
Current: auto
Choice: 0 auto
END

```
