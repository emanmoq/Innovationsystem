jQuery(function ($) {
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

    var _initMixedWidget1 = function () {
        var element = document.getElementById("chart1");
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }

        var options = {
            series: [86],
            chart: {
                height: height,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "65%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                            fontWeight: '700'
                        },
                        value: {
                            color: '#DEC88F',
                            fontSize: "36px",
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    },
                    track: {
                        background: '#CFD8DC',
                        strokeWidth: '100%',

                    }
                }
            },
            colors: ['#DEC88F', '#DEC88F', '#DEC88F'],
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"]
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }
    _initMixedWidget1();
    var _initMixedWidget2 = function () {
        var element = document.getElementById("chart2");
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }

        var options = {
            series: [60],
            chart: {
                height: height,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "65%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                            fontWeight: '700'
                        },
                        value: {
                            color: '#E4AE8A',
                            fontSize: "36px",
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    },
                    track: {
                        background: '#CFD8DC',
                        strokeWidth: '100%',

                    }
                }
            },
            colors: ['#E4AE8A', '#E4AE8A', '#E4AE8A'],
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"]
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }
    _initMixedWidget2();
    var _initMixedWidget3 = function () {
        var element = document.getElementById("chart3");
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }

        var options = {
            series: [75],
            chart: {
                height: height,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "65%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                            fontWeight: '700'
                        },
                        value: {
                            color: '#90AFC4',
                            fontSize: "36px",
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    },
                    track: {
                        background: '#CFD8DC',
                        strokeWidth: '100%',

                    }
                }
            },
            colors: ['#90AFC4', '#90AFC4', '#90AFC4'],
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"]
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }
    _initMixedWidget3();
    var _initMixedWidget4 = function () {
        var element = document.getElementById("chart4");
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }

        var options = {
            series: [80],
            chart: {
                height: height,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "65%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false,
                            fontWeight: '700'
                        },
                        value: {
                            color: '#B9B4B0',
                            fontSize: "36px",
                            fontWeight: '700',
                            offsetY: 12,
                            show: true,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    },
                    track: {
                        background: '#CFD8DC',
                        strokeWidth: '100%',

                    }
                }
            },
            colors: ['#B9B4B0', '#B9B4B0', '#B9B4B0'],
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"]
        };

        var chart = new ApexCharts(element, options);
        chart.render();
    }
    _initMixedWidget4();
    var _demo11 = function () {
        const apexChart = "#chart_11";
        var options = {
            series: [44, 38, 35, 78],
            labels: ["مقترحات ذات أولوية منخفضة", "مقترحات ذات أولوية متوسطة", "مقترحات ذات أولوية عالية", "مقترحات ذات أولوية عالية جدًا"],

            chart: {
                width: 600,
                type: 'donut',
            },
            markers: {
                width: 15,
                height: 15,
                strokeColor: '#fff',
                radius: 15,

            },
            onItemHover: {
                highlightDataSeries: true
            },
            legend: {
                position: 'right',

            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'right',

                    },

                }
            }],
            colors: ['#CE7847', '#8D8582', '#90AFC4', '#D0AD5B']
        };

        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
    }
    _demo11();


    var _demo10 = function () {
        const apexChart = "#chart10";
        options = {
            plotOptions: {
                bar: {
                    distributed: true,

                }
            },
            legend: {
                show: false,
            },

            chart: {
                type: 'bar',
                height: 400,
                toolbar: {
                    show: false,
                },
           
            },
            colors: ['#D0AD5B', "#8D8582", "#90AFC4"],
            dataLabels: {
                enabled: false,
            },
            series: [{
                data: [{
                    
                    x: 'ليس من اختصاص الجهة',
                    y: 35,
       
                }, {
                    x: 'مقترح مكرر',
                    y: 45
                }, {
                    x: 'مطبق مسبقًا',
                    y: 48
                }]
            }],
            xaxis: {
                labels: {
                  show: true,
                  rotate: 0,
                  rotateAlways: false,
                  minHeight: 100,
                  maxHeight: 180,
                  style: {
                  fontSize:11,
                  fontFamily:'Tajawal',
                  color:"#373A39",
                  }
                },
      
              },   
            tooltip: {
                enabled: true,
                enabledOnSeries: "colors",
                shared: true,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                custom: undefined,
                fillSeriesColor: false,
                style: {
                  fontSize: '11px',
                  fontFamily: undefined
                },
                onDatasetHover: {
                    highlightDataSeries: false,
                    color:"#769E91"
                },
      
                marker: {
                    size:17,
                    radius:17,
                    show: true,
                    colors: undefined,
                },
                y: {
                    title: {
                      formatter(seriesName) {
                        seriesName=""
                        return seriesName
                      }
                    }
                  }
        
          
            },
            
            
      
        }


        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
    }
    _demo10();
    var _demo20 = function () {
        const apexChart = "#chart20";
        options = {
            plotOptions: {
                bar: {
                    distributed: true,

                }
            },
            legend: {
                show: false,
            },

            chart: {
                type: 'bar',
                height: 450,
                toolbar: {
                    show: false,
                },
           
            },
            colors: ['#C3C8AA', "#8D8582", "#769E91","#D0AD5B","#9DA47A","#CD7747","#90AFC4"],
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                labels: {
                  show: true,
                  rotate: 0,
                  rotateAlways: false,
                  minHeight: 100,
                  maxHeight: 180,
                  style: {
                  fontSize:11,
                  fontFamily:'Tajawal',
                  color:"#373A39",
                  }
                },
      
              },      
            series: [{
                data: [{
                    
                    x:[ 'تعزيز سعادة ' ,'المواطنين'],
                    y: 15,
       
                }, {
                    x:[ 'تعزيز سعادة' ,'المتعاملين'],
                    y: 15,
                }, {
                    x:[ 'المسؤولية' ,'الاجتماعية'],
                    y: 18
                },{
                    x:[ 'الاستغلال الأمثل' ,'للموارد المتاحة'],
                    y: 18
                }
                ,{
                    x:[ 'تحسين البيئة' ,' الداخلية في الجهة'],
                    y: 38
                }
                ,{
                    x:[ 'تطوير وتحسين' ,'طرق العمل'],
                    y: 42
                } ,{
                    x:[ 'تطبيق' ,'تكنولوجيا حديثة'],

                    y: 70
                }
            
            ]
            }],
            tooltip: {
                enabled: true,
                enabledOnSeries: "colors",
                shared: true,
                followCursor: false,
                intersect: false,
                inverseOrder: false,
                custom: undefined,
                fillSeriesColor: false,
                style: {
                  fontSize: '11px',
                  fontFamily: undefined
                },
                onDatasetHover: {
                    highlightDataSeries: false,
                    color:"#769E91"
                },
      
                marker: {
                    size:17,
                    radius:17,
                    show: true,
                    colors: undefined,
                },
                y: {
                    title: {
                      formatter(seriesName) {
                        seriesName=""
                        return seriesName
                      }
                    }
                  }
        
          
            },
            
            
      
        }


        var chart = new ApexCharts(document.querySelector(apexChart), options);
        chart.render();
    }
    _demo20();
    function reveal(className) {
        var reveals = document.querySelectorAll(className);
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
          

          if(reveals[i]){
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
    }
}
    window.addEventListener("scroll", scrolreval);
    function scrolreval(){
        reveal('.progress-bar');
        reveal('.suggestPar');

    }

// To check the scroll position on page load
});

