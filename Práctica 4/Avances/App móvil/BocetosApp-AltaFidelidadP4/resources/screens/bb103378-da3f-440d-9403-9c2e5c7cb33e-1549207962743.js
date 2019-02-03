jQuery("#simulation")
  .on("click", ".s-bb103378-da3f-440d-9403-9c2e5c7cb33e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Screen-bg")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Empty_screen" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ]
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
    } else if(jFirer.is("#s-Two-line-item_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bbd174ac-156a-40dc-b95a-c16175d9549c"
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
    } else if(jFirer.is("#s-Two-line-item_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/087e4834-548c-474f-b3e7-1a1ff110cada"
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
    } else if(jFirer.is("#s-Two-line-item_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70568740-0d91-4aa2-b0a8-2e24b687cf73"
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
    } else if(jFirer.is("#s-Two-line-item_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/63555ada-3da9-43a7-9a41-e255fbf4dfff"
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
                    "target": "screens/c5097adc-59ed-474f-a2c1-29dc8dd7718d"
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
    } else if(jFirer.is("#s-bike")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 > .valign": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-car")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 > .valign": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-train")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 > .valign": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-airplane")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_7 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_5 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_1 > .valign": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-bike_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_8 > .valign": {
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
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-bb103378-da3f-440d-9403-9c2e5c7cb33e #s-Cell_2 > .valign": {
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
    }
  })
  .on("drag", ".s-bb103378-da3f-440d-9403-9c2e5c7cb33e .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Panel_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-side-drawer-dialog" ]
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
  })
  .on("dragend", ".s-bb103378-da3f-440d-9403-9c2e5c7cb33e .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-bb103378-da3f-440d-9403-9c2e5c7cb33e .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });