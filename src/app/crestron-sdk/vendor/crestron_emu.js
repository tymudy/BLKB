window.webkit = window.webkit || (function() {
    var CS = {
      helpers: {
        volume: 100,
        volumeInterval: undefined,
        sleep: new Date(0),
        cameras: [
          {
            url: 'http://webcam1.lpl.org/axis-cgi/jpg/image.cgi?time=1472051876123&dummy=image.jpg',
            label: 'Camera 1'
          }, {
            url: 'http://webcam1.lpl.org/axis-cgi/jpg/image.cgi?time=1472051876123&dummy=image.jpg',
            label: 'Camera 2'
          }, {
            url: 'http://webcam.dundeecity.gov.uk/-wvhttp-01-/image.cgi',
            label: 'Camera 3'
          }, {
            url: 'http://webcam2.krs.fi/record/current.jpg',
            label: 'Camera 4'
          }, {
            url: 'http://80.21.150.232/record/current.jpg?stream=full&amp;fps=24&time=1472052354071&dummy=image.jpg',
            label: 'Camera 5'
          }, {
            url: 'http://webcams.hotelcozumel.com.mx:6012/jpg/image.jpg',
            label: 'Camera 6'
          }, {
            url: 'http://81.136.130.7:1024/record/current.jpg?stream=full&amp;fps=24&time=1472052902625&dummy=image.jpg',
            label: 'Camera 7'
          }, {
            url: 'http://71.37.180.29/jpg/image.jpg?time=1472052976477&dummy=image.jpg',
            label: 'Camera 8'
          }
        ],
        lights: {
          progressPreset: false
        }
      },
      commands: {
        digital: {
          //media page
          1: function(value) {

          },
          //lights page
          2: function(value) {

          },
          //shades page
          4: function(value) {

          },
          //weather page
          5: function(value) {

          },
          //cameras page
          6: function(value) {

          },
          //settings page
          8: function(value) {

          },
          //home page
          9: function(value) {

          },
          //time for sleep
          10: function(value) {

          },
          //home page icon
          49: function(value) {
            handleDigitalJoinChanged(49, value);

            handleDigitalJoinChanged(10, value);
          },
          //home page icon
          50: function(value) {
            handleDigitalJoinChanged(51, value);
            // debugger;

            handleDigitalJoinChanged(9, value);
          },
          //media page icon
          51: function(value) {
            handleDigitalJoinChanged(51, value);

            handleDigitalJoinChanged(1, value);

            for (var i = 111; i <= 130; i++) {
              handleSerialJoinChanged(i, 'fake data');
            }
          },
          //lights page icon
          52: function(value) {
            handleDigitalJoinChanged(52, value);

            handleDigitalJoinChanged(2, value);

            for (var i = 301; i <= 320; i++) {
              handleAnalogJoinChanged(i, 300);
              handleSerialJoinChanged(i, 'fake light');
            }
          },
          //shades page icon
          53: function(value) {
            handleDigitalJoinChanged(53, value);

            handleDigitalJoinChanged(4, value);

            for (var i = 331; i <= 350; i++) {
              handleAnalogJoinChanged(i, 300);
              handleSerialJoinChanged(i, 'fake shade');
            }
          },
          //weather page icon
          54: function(value) {
            handleDigitalJoinChanged(54, value);

            handleDigitalJoinChanged(5, value);
          },
          //cameras page icon
          55: function(value) {
            handleDigitalJoinChanged(55, value);

            handleDigitalJoinChanged(6, value);

            for (var i = 1; i <= 8; i++) {
              handleSerialJoinChanged(30 + i, CS.helpers.cameras[i - 1].url); //camera URL
              handleSerialJoinChanged(38 + i, CS.helpers.cameras[i - 1].label); //camera label
            }
          },
          //settings page icon
          56: function(value) {
            handleDigitalJoinChanged(56, value);

            handleDigitalJoinChanged(8, value);
          },
          //power popup
          58: function(value) {
            handleDigitalJoinChanged(58, true);
          },
          //sleep popup
          59: function(value) {
            handleDigitalJoinChanged(59, true);
          },
          //close sleep popup
          62: function(value) {
            handleDigitalJoinChanged(59, false);
          },
          //sleep duration up
          63: function(value) {
            handleDigitalJoinChanged(63, value);

            CS.helpers.sleep.setTime(CS.helpers.sleep.getTime() + 5000); //add 5 seconds

            var minutes = CS.helpers.sleep.getMinutes(),
              seconds = CS.helpers.sleep.getSeconds();

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            handleSerialJoinChanged(10, [minutes, seconds].join(':'));
          },
          //sleep duration down
          64: function(value) {
            handleDigitalJoinChanged(64, value);

            CS.helpers.sleep.setTime(CS.helpers.sleep.getTime() - 5000); //sub 5 seconds

            var minutes = CS.helpers.sleep.getMinutes(),
              seconds = CS.helpers.sleep.getSeconds();

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            handleSerialJoinChanged(10, [minutes, seconds].join(':'));
          },
          //media channels list?
          70: function(value) {
            handleDigitalJoinChanged(70, true);
          },
          //volume up
          102: function(value) {
            handleDigitalJoinChanged(101, value); //volume panel hide/show

            if (value) {
              if (CS.helpers.volumeInterval) {
                CS.helpers.volumeInterval = clearInterval(CS.helpers.volumeInterval);
              }

              CS.helpers.volumeInterval = setInterval(function() {
                handleAnalogJoinChanged(1, CS.helpers.volume);
                CS.helpers.volume += 100;
              }, 5);
            }
            else {
              if (CS.helpers.volumeInterval) {
                CS.helpers.volumeInterval = clearInterval(CS.helpers.volumeInterval);
              }
            }
          },
          //volume down
          103: function(value) {
            handleDigitalJoinChanged(101, value); //volume panel hide/show

            if (value) {
              if (CS.helpers.volumeInterval) {
                CS.helpers.volumeInterval = clearInterval(CS.helpers.volumeInterval);
              }

              CS.helpers.volumeInterval = setInterval(function() {
                handleAnalogJoinChanged(1, CS.helpers.volume);
                CS.helpers.volume -= 100;
              }, 5);
            }
            else {
              if (CS.helpers.volumeInterval) {
                CS.helpers.volumeInterval = clearInterval(CS.helpers.volumeInterval);
              }
            }
          },
          //close power popup
          106: function(value) {
            handleDigitalJoinChanged(58, false);
          },
          //Family Room TiVO
          111: function(value) {
            handleDigitalJoinChanged(194, true);
            handleDigitalJoinChanged(198, false);
            handleDigitalJoinChanged(199, false);
            handleDigitalJoinChanged(197, true);
            handleDigitalJoinChanged(70, false);
            handleDigitalJoinChanged(180, false);
          },
          //XBox
          112: function(value) {
            handleDigitalJoinChanged(180, true);
            handleDigitalJoinChanged(70, false);
            handleDigitalJoinChanged(197, false);
          },
          //Amazon Fire
          113: function(value) {
            handleDigitalJoinChanged(180, true);
            handleDigitalJoinChanged(70, false);
            handleDigitalJoinChanged(197, false);
          },
          //Mirage John
          114: function(value) {
            handleDigitalJoinChanged(180, true);
            handleDigitalJoinChanged(70, false);
            handleDigitalJoinChanged(197, false);
          },
          //XM
          115: function(value) {
            handleDigitalJoinChanged(180, true);
            handleDigitalJoinChanged(70, false);
            handleDigitalJoinChanged(197, false);
          },
          //channels button?
          194: function(value) {
            handleDigitalJoinChanged(194, true);
            handleDigitalJoinChanged(198, false);
            handleDigitalJoinChanged(199, false);
            handleDigitalJoinChanged(197, true);
          },
          //player button ?
          195: function(value) {
            handleDigitalJoinChanged(195, true);
            handleDigitalJoinChanged(197, false);
            handleDigitalJoinChanged(199, false);
            handleDigitalJoinChanged(198, true);
          },
          //keyboard button ?
          196: function(value) {
            handleDigitalJoinChanged(196, true);
            handleDigitalJoinChanged(197, false);
            handleDigitalJoinChanged(198, false);
            handleDigitalJoinChanged(199, true);
          },
          //all lights off
          271: function(value) {
            //simulate intermediate values
            // if (!CS.helpers.lights.progressPreset) {
            //     CS.helpers.lights.progressPreset = true;

            //     var i = 65535,
            //         int = setInterval(function() {
            //             if (i >= 0) {
            //                 for (var j = 301; j <= 320; j++) {
            //                     handleAnalogJoinChanged(j, i);
            //                 }
            //                 i -= 1000;
            //             }
            //             else {
            //                 clearInterval(int);
            //                 CS.helpers.lights.progressPreset = false;
            //             }
            //         }, 1);
            // }

            //simulate only one value
            for (var j = 301; j <= 320; j++) {
              handleRCBJoinChanged(j, 0, 400);
            }
          },
          //all lights on
          272: function(value) {
            //simulate intermediate values
            // if (!CS.helpers.lights.progressPreset) {
            //     CS.helpers.lights.progressPreset = true;

            //     var i = 0,
            //         int = setInterval(function() {
            //             if (i <= 65535) {
            //                 for (var j = 301; j <= 320; j++) {
            //                     handleAnalogJoinChanged(j, i);
            //                 }
            //                 i += 1000;
            //             }
            //             else {
            //                 clearInterval(int);
            //                 CS.helpers.lights.progressPreset = false;
            //             }
            //         }, 1);
            // }

            //simulate only one value
            for (var j = 301; j <= 320; j++) {
              handleRCBJoinChanged(j, 65535, 400);
            }
          },
          //wake preset
          273: function(value) {
            //simulate only one value
            for (var j = 301; j <= 320; j++) {
              handleRCBJoinChanged(j, 15000, 200);
            }
          },
          //evening preset
          274: function(value) {
            //simulate only one value
            for (var j = 301; j <= 320; j++) {
              handleRCBJoinChanged(j, 45000, 200);
            }
          },
          //sleep preset
          275: function(value) {
            //simulate only one value
            for (var j = 301; j <= 320; j++) {
              handleAnalogJoinChanged(j, 5000);
            }
          },
          17777: function ( ) {
            handleDigitalJoinChanged(17777, true);
            handleDigitalJoinChanged(17777, false);
          },
          //adding custom classes for button
          80000: function ( ) {
            handleSerialJoinChanged(180, "none");
            handleSerialJoinChanged(181, "release");
            handleSerialJoinChanged(183, "blur");
          },
          80001: function ( ) {
            handleSerialJoinChanged(170, "press");
            handleSerialJoinChanged(181, "tap");
            handleSerialJoinChanged(183, "focus");
            handleSerialJoinChanged(0, "hideButton");
            handleSerialJoinChanged(1, "showButton");
            handleSerialJoinChanged(4, "hideSlider");
            handleSerialJoinChanged(5, "showSlider");
          },
          //enabled and disabled
          80002: function ( ) {
            handleSerialJoinChanged(3, true); // disable
            handleSerialJoinChanged(2, false); // enable
          },
          //slider handle on slide custom classes
          90000: function ( ) {
            handleSerialJoinChanged(180, "onslideend");
          },
          90001: function ( ) {
            handleSerialJoinChanged(180, "onslide");
          }
        },
        analog: {},
        serial: {
          101: function( ) {
            loadJSON('assets/slider_list.json', function(response) {
              handleSerialJoinChanged(1000, JSON.stringify(JSON.parse(response)));
            });
            loadJSON('assets/slider_button_list.json', function(response) {
              handleSerialJoinChanged(1001, JSON.stringify(JSON.parse(response)));
            });
          },
          104: function(value) {
            var page_size = value;
            loadJSON('assets/slider_list.json', function(response) {
              handleSerialJoinChanged(1020, JSON.stringify(loadChunk(JSON.parse(response), page_size)));
            });
          }
        }
      }
    };

    var counter = 0;

    function loadChunk( json, page_size ) {
      json.attributes = json.attributes.slice(counter, counter + page_size);
      counter += page_size;
      return json;
    }
    function loadJSON( filepath, callback ) {
      var request = new XMLHttpRequest();
      request.overrideMimeType( "application/json" );
      request.open( 'GET', filepath , true );
      request.onreadystatechange = function () {
        if ( request.readyState == 4 && request.status == 200 ) {
          callback( request.responseText );
        }
      }
      request.send( null );
    }

    setTimeout ( function () {
      CS.commands.digital[17777]( true);
      CS.commands.digital[51]( true);
      CS.commands.digital[50]( true);
      CS.commands.digital[51]( true);
      /*CS.commands.digital[112]( true);*/
    }, 3000);

    return {
      messageHandlers: {
        handleJoinDigitalSend: {
          postMessage: function(data) {
            console.log('digital', data);

            setTimeout(function() {
              CS.commands.digital[data.joinNumber](data.joinValue);
            }, 1);
          }
        },
        handleJoinAnalogSend: {
          postMessage: function(data) {
            console.log('analog', data);
            setTimeout(function() {
              handleAnalogJoinChanged(data.joinNumber, data.joinValue);
            }, 1);
          }
        },
        handleJoinSerialSend: {
          postMessage: function(data) {
            console.log('serial', data);
            setTimeout(function() {
              CS.commands.serial[data.joinNumber](data.joinValue);
            }, 1);
          }
        }
      }
    };
  })();
