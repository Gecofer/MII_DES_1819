jQuery("#simulation")
  .on("click", ".s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Menu")) {
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInOutQuad",
                      "duration": 300
                    }
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
    } else if(jFirer.is("#s-Black-cover")) {
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
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Black-cover" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
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
    } else if(jFirer.is("#s-drop-down")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4058a42e-01c4-4ce3-887b-7da9fe9bc887"
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Menu_Overflow" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_Overflow" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_Overflow" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
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
    } else if(jFirer.is("#s-Image_map_76")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-keyboard_numbers_5" ]
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
    } else if(jFirer.is("#s-Image_map_77")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-keyboard_letters_5" ]
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
    } else if(jFirer.is("#s-Image_map_78")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-keyboard_symbols_5" ]
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
    } else if(jFirer.is("#s-Image_map_79")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-keyboard_letters_5" ]
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
    } else if(jFirer.is("#s-Image_map_80")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-keyboard_numbers_5" ]
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Input_search" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-keyboard_letter" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "down"
                    }
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-keyboard_letter" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "down"
                    }
                  },
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_Overflow" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
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
    } else if(jFirer.is("#s-Single-line-item_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/53d9ff6c-6870-4cd3-b4f8-c57a51ef6b60"
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_7 > .valign": {
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
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_5 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 #s-Cell_1 > .valign": {
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
    }
  })
  .on("keyup.jim", ".s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 90 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_2" ],
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
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
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-6e32ebd1-5b0b-45a8-96ee-a4b5f0eaa152 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-keyboard_letters_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-keyboard_letter" ]
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Input_search" ]
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
    } else if(jFirer.is("#s-Single-line-item_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_2" ]
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
    } else if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_Overflow" ]
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