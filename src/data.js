import amazingMobileLogo from "../src/assets/images/logo.png"
import heroamzingMobile from "../src/assets/images/hero-mobiile.png"
import amazingMobileline1 from "../src/assets/images/layer1.png"
import amazingMobileicon1 from "../src/assets/images/icon-1.png"
import amazingMobileicon2 from "../src/assets/images/icon-2.png"
import amazingMobileicon3 from "../src/assets/images/icon-3.png"
import amazingMobifooterBg from "../src/assets/images/footer-bg.png"
import amazingMobilemail from "../src/assets/images/mail.png"
import Mobil1 from "../src/assets/images/mobile1.png"
import Mobil2 from "../src/assets/images/mobile2.png"
import Mobil3 from "../src/assets/images/mobile3.png"
import apple from "../src/assets/images/apple.png"
import google from "../src/assets/images/google.png"
import windows from "../src/assets/images/windows.png"

export const data = {
    header: [
        {
            parentWrapper: {
                id: 'header',
                className: 'header',
                fluid: {
                    className: 'container-fluid',
                    row: {
                        className: 'row',
                        navbar: {
                            className: 'navbar navbar-expand-lg navbar-light',
                            link: {
                                className: 'navbar-brand',
                                to: '/',
                                img: {
                                    url: amazingMobileLogo,
                                    alt: 'logo',
                                },
                            },
                            button: {
                                className: 'navbar-toggler',
                                type: 'button',
                                dataToggle: 'collapse',
                                dataTarget: '#navbarSupportedContent',
                                ariaControls: 'navbarSupportedContent',
                                ariaExpanded: 'false',
                                ariaLabel: 'Toggle navigation',
                                spanText: {
                                    className: 'navbar-toggler-icon',
                                }
                            },
                            menu: {
                                className: 'collapse navbar-collapse text-right justify-content-end',
                                id: 'navbarSupportedContent',
                                button: [
                                    {
                                        btn1: {
                                            className: 'btn btn-outline-success no_bg my-2 my-sm-0',
                                            type: 'submit',
                                            value: 'SIGN UP',
                                        }
                                    },
                                    {
                                        btn1: {
                                            className: 'btn btn-outline-success sh my-2 my-sm-0',
                                            type: 'submit',
                                            value: 'LOGIN',
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }
    ],
    heroBanenr: [
        {
            parentWrapper: {
                id: 'section1',
                className: 'hero_section_1',
                container: {
                    className: 'container',
                    row: {
                        className: 'row',
                        col: {
                            className: 'col-md-6 col-sm-6',
                            content: {
                                className: 'contnet',
                                heading1: {
                                    value: 'Real time water',
                                    anchor: {
                                        url: '/',
                                        className: 'typewrite',
                                        dataPeriod: '2000',
                                        dataType: [
                                            "[Seriously.",
                                            "Creative.]",
                                            "Lover.]"
                                        ],
                                        span: {
                                            className: 'wrap'
                                        }
                                    },
                                },
                                para: {
                                    value: "We build this app because we wanted to help poeple  make a better choice for environment. Monitor your water consumption in real-time."
                                },
                                anchor: {
                                    className: 'hvr-shutter-in-horizontal',
                                    value: 'Get Started',
                                    href: '#',
                                }
                            }
                        },
                        mobiileImg: {
                            className: 'mobile_img',
                            img: {
                                url: heroamzingMobile,
                                alt: 'Hero Image',
                            }
                        }
                    }
                }
            }
        }
    ],
    clientsLogo: [
        {
            parentWrapper: {
                id: 'section2',
                className: 'hero_section_2',
                container: {
                    className: 'container',
                    row: {
                        className: 'row',
                        col: {
                            className: 'col-md-12 col-sm-12',
                            headingh4: {
                                className: 'text-center',
                                value: 'Now available for download across',
                            },
                            ul: {
                                className: 'clearfix d-flex justify-content-center align-items-center',
                                list: [
                                    {
                                        li: {
                                            img: {
                                                url: google,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: apple,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                    {
                                        li: {
                                            img: {
                                                url: windows,
                                                alt: 'Client Logo',
                                            }
                                        }
                                    },
                                ]
                            }
                        }
                    }
                }
            }
        }
    ],
    supperApp: [
        {
            parentWrapper: {
                id: 'section3',
                className: 'hero_section_3',
                container: {
                    className: 'container',
                    row: {
                        className: 'row',
                        col12: {
                            className: 'col-md-12 col-sm-12 text-center',
                            heading2: {
                                className: 'text-center',
                                value: 'How Infinite Water can help you',
                                img: {
                                    url: amazingMobileline1,
                                    alt: 'line',
                                }
                            }
                        },
                        col: [
                            {
                                col4: {
                                    className: 'col-md-4 col-sm-4',
                                    dataAos: 'fade-up',
                                    dataAosDuration: '5000',
                                    boxCard: {
                                        className: 'box_card text-center',
                                        icon: {
                                            className: 'icon',
                                            img: {
                                                url: amazingMobileicon1,
                                                alt: 'icon-how to help',
                                            }
                                        },
                                        headingh4: {
                                            value: 'Real time monitoring',
                                        },
                                        para: {
                                            value: 'Get real-time monotoring of your water system from source to tap. Track spikes in consumption or leakages.'
                                        }
                                    }
                                }
                            },
                            {
                                col4: {
                                    className: 'col-md-4 col-sm-4',
                                    dataAos: 'fade-up',
                                    dataAosDuration: '4000',
                                    boxCard: {
                                        className: 'box_card text-center',
                                        icon: {
                                            className: 'icon',
                                            img: {
                                                url: amazingMobileicon2,
                                                alt: 'icon-how to help',
                                            }
                                        },
                                        headingh4: {
                                            value: 'Historical statistics',
                                        },
                                        para: {
                                            value: 'Get historical statistics and your usaage pattern. Make smart choices to save water during peak hours.'
                                        }
                                    }
                                }
                            },
                            {
                                col4: {
                                    className: 'col-md-4 col-sm-4',
                                    dataAos: 'fade-up',
                                    dataAosDuration: '3000',
                                    boxCard: {
                                        className: 'box_card text-center',
                                        icon: {
                                            className: 'icon',
                                            img: {
                                                url: amazingMobileicon3,
                                                alt: 'icon-how to help',
                                            }
                                        },
                                        headingh4: {
                                            value: 'Save on bills',
                                        },
                                        para: {
                                            value: 'Easily tack your bills with forecast. Get accurate consumption data to track savings.'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        }
    ],
    allFeature: [
        {
            parentWrapper: {
                id: 'section4',
                section: [
                    {
                        listSec: {
                            className: 'hero_section_4 nwe',
                            container: {
                                className: 'container',
                                row: {
                                    className: 'row',
                                    col: [
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'banner1',
                                                    box: [
                                                        {
                                                            boxList: {
                                                                className: 's1',
                                                                img: {
                                                                    url: Mobil1,
                                                                    alt: "Mobile"
                                                                }
                                                            }
                                                        },
                                                        // {
                                                        //     boxList: {
                                                        //         className: 's2',
                                                        //         dtaAos: 'flip-up',
                                                        //         dataAosOffset: '100',
                                                        //         dataAosEasing: 'ease-in-sine',
                                                        //         img: {
                                                        //             url: Mobil2,
                                                        //             alt: "Mobile"
                                                        //         }
                                                        //     }
                                                        // },
                                                        {
                                                            boxList: {
                                                                className: 's3',
                                                                dtaAos: 'flip-left',
                                                                dataAosOffset: '200',
                                                                dataAosEasing: 'ease-in-sine',
                                                                img: {
                                                                    url: Mobil2,
                                                                    alt: "Mobile"
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'content p_20',
                                                    heading2: {
                                                        className: 'text-left',
                                                        dataAos: 'fade-left',
                                                        img: {
                                                            url: amazingMobileline1,
                                                            alt: 'line',
                                                        },
                                                        value: 'Get Historical Statistics',
                                                    },
                                                    para: {
                                                        dataAos: 'fade-left',
                                                        value: 'Log your daily water consumption and track to generate usage pattern. Get in-depth reports with drill-down for hourly records. Helps you pin-point any consumption spikes.'
                                                    },
                                                    ul: [
                                                        {
                                                            list: {
                                                                dataAos: 'fade-left',
                                                                dataAosDuration: '500',
                                                                value: 'Track daily and hourly consumption'
                                                            }
                                                        },
                                                        {
                                                            list: {
                                                                dataAos: 'fade-left',
                                                                dataAosDuration: '600',
                                                                value: 'Get exact consumption charges'
                                                            }
                                                        },
                                                        {
                                                            list: {
                                                                dataAos: 'fade-left',
                                                                dataAosDuration: '700',
                                                                value: 'Custom filters for data'
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    },
                    {
                        listSec: {
                            className: 'hero_section_4 odd',
                            container: {
                                className: 'container',
                                row: {
                                    className: 'row',
                                    col: [
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'banner1 p_20',
                                                    box: [
                                                        {
                                                            boxList: {
                                                                className: 's1',
                                                                img: {
                                                                    url: Mobil3,
                                                                    alt: "Mobile"
                                                                }
                                                            }
                                                        },
                                                        // {
                                                        //     boxList: {
                                                        //         className: 's2',
                                                        //         dtaAos: 'zoom-in',
                                                        //         dataAosOffset: '100',
                                                        //         dataAosEasing: 'ease-in-sine',
                                                        //     }
                                                        // }
                                                    ]
                                                }
                                            }
                                        },
                                        {
                                            colList: {
                                                className: 'col-md-6 col-sm-6',
                                                banner: {
                                                    className: 'content p_60',
                                                    heading2: {
                                                        className: 'text-left',
                                                        dataAos: 'fade-left',
                                                        img: {
                                                            url: amazingMobileline1,
                                                            alt: 'line',
                                                        },
                                                        value: 'At a glimpse',
                                                    },
                                                    para: {
                                                        dataAos: 'fade-left',
                                                        value: 'Get your monthly consumption and forecast at a glimpse. Easy to read dashboard helps you monitor progress. Get alerts for leakages and spikes in consumption. '
                                                    }
                                                }
                                            }
                                        },
                                    ]
                                }
                            }
                        }
                    },
                    // {
                    //     listSec: {
                    //         className: 'hero_section_4 even',
                    //         container: {
                    //             className: 'container',
                    //             row: {
                    //                 className: 'row',
                    //                 col: [
                    //                     {
                    //                         colList: {
                    //                             className: 'col-md-6 col-sm-6',
                    //                             banner: {
                    //                                 className: 'banner1',
                    //                                 box: [
                    //                                     {
                    //                                         boxList: {
                    //                                             className: 's1'
                    //                                         }
                    //                                     },
                    //                                     {
                    //                                         boxList: {
                    //                                             className: 's2',
                    //                                             dtaAos: 'fade-right',
                    //                                             dataAosOffset: '100',
                    //                                             dataAosEasing: 'ease-in-sine',
                    //                                         }
                    //                                     }
                    //                                 ]
                    //                             }
                    //                         }
                    //                     },
                    //                     {
                    //                         colList: {
                    //                             className: 'col-md-6 col-sm-6',
                    //                             banner: {
                    //                                 className: 'content p_20',
                    //                                 heading2: {
                    //                                     className: 'text-left',
                    //                                     dataAos: 'fade-left',
                    //                                     img: {
                    //                                         url: amazingMobileline1,
                    //                                         alt: 'line',
                    //                                     },
                    //                                     value: 'Awesome Feature',
                    //                                 },
                    //                                 para: {
                    //                                     dataAos: 'fade-left',
                    //                                     value: 'There are many variation passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.'
                    //                                 }
                    //                             }
                    //                         }
                    //                     },
                    //                 ]
                    //             }
                    //         }
                    //     }
                    // },
                ]
            }
        }
    ],
    footer: [
        {
            parentWrapper: {
                id: 'footer',
                className: 'footer',
                img: {
                    className: 'banner',
                    url: amazingMobifooterBg,
                    alt: 'background',
                },
                container: {
                    className: 'container text-center',
                    row: {
                        className: 'row',
                        col: {
                            className: 'col-md-12 col-sm-12',
                            content: {
                                className: 'content',
                                heading3: {
                                    dataAos: 'fade-up',
                                    dataAosAnchorPlacement: 'top-bottom',
                                    value: 'We have built this app to help you save water. Join us in our endeavour to save our precious natural resources.'
                                },
                                rel: {
                                    className: 'rel',
                                    ima: {
                                        url: amazingMobilemail,
                                        alt: 'mail',
                                    },
                                    input: {
                                        type: 'email',
                                        name: '',
                                        placeholder: 'Your email adress',
                                    },
                                },
                                link: {
                                    to: '#/',
                                    className: 'hvr-shutter-in-horizontal',
                                    value: 'Get Download Link',
                                }
                            }
                        }
                    }
                }
            }
        }
    ]
}