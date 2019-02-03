jQuery("#simulation")
  .on("click", ".s-ff4bcc87-edd3-44a5-8efa-50099549f029 .click", function(event, data) {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_1" ],
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
    } else if(jFirer.is("#s-search")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a25a10ac-d2a5-4985-932d-af27c6e35c28"
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
                    "target": "screens/a25a10ac-d2a5-4985-932d-af27c6e35c28"
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 > .valign": {
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
    } else if(jFirer.is("#s-Cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0ca1397a-b88e-4727-b08c-87def55e9640"
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
    } else if(jFirer.is("#s-train")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 > .valign": {
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
    } else if(jFirer.is("#s-airplane")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_7 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_3 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_5 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_1 > .valign": {
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
    } else if(jFirer.is("#s-bike_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes": {
                        "background-color": "#A4A5A5"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#A4A5A5",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_8 > .valign": {
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
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_4 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_6 > .valign": {
                      "attributes-ie": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 .verticalalign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes": {
                        "background-color": "#F7F7F7"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2": {
                      "attributes-ie": {
                        "-pie-background": "#F7F7F7",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-ff4bcc87-edd3-44a5-8efa-50099549f029 #s-Cell_2 > .valign": {
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
  .on("keyup.jim", ".s-ff4bcc87-edd3-44a5-8efa-50099549f029 .keyup", function(event, data) {
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_1" ],
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
        },
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
  .on("pageload", ".s-ff4bcc87-edd3-44a5-8efa-50099549f029 .pageload", function(event, data) {
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
    } else if(jFirer.is("#s-Single-line-item")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_1" ]
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