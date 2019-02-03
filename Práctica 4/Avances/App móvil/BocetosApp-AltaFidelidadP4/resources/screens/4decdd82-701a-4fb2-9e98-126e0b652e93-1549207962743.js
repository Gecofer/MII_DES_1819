jQuery("#simulation")
  .on("click", ".s-4decdd82-701a-4fb2-9e98-126e0b652e93 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-bike_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ff4bcc87-edd3-44a5-8efa-50099549f029"
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
    } else if(jFirer.is("#s-car_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4ef22588-b0be-43e9-808b-c22347478e9f"
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
    } else if(jFirer.is("#s-train_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/64617f29-488a-4859-beb4-92dc3e2f1452"
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
    } else if(jFirer.is("#s-airplane_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-4decdd82-701a-4fb2-9e98-126e0b652e93 #s-Cell_2 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d395f1a8-fa71-4d99-b4be-6e901ef88330"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/64617f29-488a-4859-beb4-92dc3e2f1452"
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