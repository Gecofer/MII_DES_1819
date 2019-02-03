jQuery("#simulation")
  .on("click", ".s-0ca1397a-b88e-4727-b08c-87def55e9640 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-directions_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tap-button_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tap-button_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-located-fixed_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-tap-button_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-tap-button_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_110")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#019AE8"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#4284F4",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_111")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#019AE8"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#4284F4",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_112")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#019AE8"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "21px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#4284F4",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_113")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_41 > svg": {
                      "attributes": {
                        "overlay": "#019AE8"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38 span": {
                      "attributes": {
                        "color": "#4284F4",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_38": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FFFFFF",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_34": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4284F4",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes": {
                        "line-height": "18px",
                        "font-size": "10.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .clipping, #s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 > .paddingLayer": {
                      "attributes": {
                        "padding-top": "0px",
                        "padding-right": "0px",
                        "padding-bottom": "0px",
                        "padding-left": "13px"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#4284F4",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#4284F4",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#4284F4",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#4284F4",
                        "border-radius": "15px 15px 15px 15px",
                        "-pie-background": "#4284F4",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-0ca1397a-b88e-4727-b08c-87def55e9640 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-arrow-back_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e8718586-eaef-4046-9c78-d5ab0280210d"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });