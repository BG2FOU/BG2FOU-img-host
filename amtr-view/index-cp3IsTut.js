var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=`{
  "type": "FeatureCollection",
  "coordinateSystem": "GCJ-02",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "jimei-software-park-north",
        "nameZh": "集美软件园北",
        "nameEn": "Jimei Software Park North",
        "sequence": 1,
        "stationType": "operational",
        "structureType": "elevated",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.035602,
          24.616596
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "houxi",
        "nameZh": "后溪",
        "nameEn": "Houxi",
        "sequence": 2,
        "stationType": "operational",
        "structureType": "elevated",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.049893,
          24.624976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "xiamen-north",
        "nameZh": "厦门北站",
        "nameEn": "Xiamen North Railway Station",
        "sequence": 3,
        "stationType": "operational",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.073993,
          24.636361
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "guanxun",
        "nameZh": "官浔",
        "nameEn": "Guanxun",
        "sequence": 4,
        "stationType": "operational",
        "structureType": "elevated",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.148516,
          24.652522
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "bingzhou",
        "nameZh": "丙洲",
        "nameEn": "Bingzhou",
        "sequence": 5,
        "stationType": "operational",
        "structureType": "elevated",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.172629,
          24.637668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "chengchang",
        "nameZh": "城场",
        "nameEn": "Chengchang",
        "sequence": 6,
        "stationType": "operational",
        "structureType": "elevated",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.210166,
          24.631255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "xiyan",
        "nameZh": "西岩",
        "nameEn": "Xiyan",
        "sequence": 7,
        "stationType": "operational",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.218975,
          24.588593
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "hongkeng",
        "nameZh": "洪坑",
        "nameEn": "Hongkeng",
        "sequence": 8,
        "stationType": "operational",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.225567,
          24.572333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "qianwu",
        "nameZh": "前浯",
        "nameEn": "Qianwu",
        "sequence": 9,
        "stationType": "operational",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.254346,
          24.561378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "dongting",
        "nameZh": "洞庭",
        "nameEn": "Dongting",
        "sequence": 10,
        "stationType": "operational",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.280167,
          24.565203
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "airport-west-reserved",
        "nameZh": "机场西",
        "nameEn": "Airport West",
        "sequence": 11,
        "stationType": "reserved",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.346535,
          24.54399
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "xiangan-airport",
        "nameZh": "翔安机场",
        "nameEn": "Xiang'an Airport",
        "sequence": 12,
        "stationType": "operational",
        "structureType": "underground",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          118.35126,
          24.545491
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S01-P01",
        "partId": "L4-S01-P01",
        "segmentId": "L4-S01",
        "sequence": 1,
        "partNo": 1,
        "partCount": 1,
        "fromId": "jimei-software-park-north",
        "toId": "houxi",
        "nameZh": "集美软件园北-后溪",
        "nameEn": "Jimei Software Park North-Houxi",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.035602,
            24.616596
          ],
          [
            118.036351,
            24.616983
          ],
          [
            118.036712,
            24.617185
          ],
          [
            118.037835,
            24.617822
          ],
          [
            118.041955,
            24.620161
          ],
          [
            118.045144,
            24.621962
          ],
          [
            118.04545,
            24.622135
          ],
          [
            118.045848,
            24.622359
          ],
          [
            118.046079,
            24.622491
          ],
          [
            118.046178,
            24.622546
          ],
          [
            118.046667,
            24.622846
          ],
          [
            118.048637,
            24.624057
          ],
          [
            118.049036,
            24.62435
          ],
          [
            118.049181,
            24.624459
          ],
          [
            118.049311,
            24.624544
          ],
          [
            118.049382,
            24.624586
          ],
          [
            118.04953,
            24.6247
          ],
          [
            118.049731,
            24.624852
          ],
          [
            118.049893,
            24.624976
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S02-P01",
        "partId": "L4-S02-P01",
        "segmentId": "L4-S02",
        "sequence": 2,
        "partNo": 1,
        "partCount": 2,
        "fromId": "houxi",
        "toId": "xiamen-north",
        "nameZh": "后溪-厦门北站",
        "nameEn": "Houxi-Xiamen North Railway Station",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.049893,
            24.624976
          ],
          [
            118.050261,
            24.625489
          ],
          [
            118.050512,
            24.625684
          ],
          [
            118.051442,
            24.626128
          ],
          [
            118.052414,
            24.626588
          ],
          [
            118.053734,
            24.627134
          ],
          [
            118.054811,
            24.62758
          ],
          [
            118.056495,
            24.628276
          ],
          [
            118.058035,
            24.628939
          ],
          [
            118.060324,
            24.629922
          ],
          [
            118.060816,
            24.630131
          ],
          [
            118.061058,
            24.63024
          ],
          [
            118.0613,
            24.630354
          ],
          [
            118.0621505981,
            24.6307577482
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S02-P02",
        "partId": "L4-S02-P02",
        "segmentId": "L4-S02",
        "sequence": 2,
        "partNo": 2,
        "partCount": 2,
        "fromId": "houxi",
        "toId": "xiamen-north",
        "nameZh": "后溪-厦门北站",
        "nameEn": "Houxi-Xiamen North Railway Station",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.0621505981,
            24.6307577482
          ],
          [
            118.062267,
            24.630813
          ],
          [
            118.064217,
            24.631736
          ],
          [
            118.066028,
            24.632593
          ],
          [
            118.067877,
            24.633469
          ],
          [
            118.07137,
            24.635122
          ],
          [
            118.073993,
            24.636361
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S03-P01",
        "partId": "L4-S03-P01",
        "segmentId": "L4-S03",
        "sequence": 3,
        "partNo": 1,
        "partCount": 2,
        "fromId": "xiamen-north",
        "toId": "guanxun",
        "nameZh": "厦门北站-官浔",
        "nameEn": "Xiamen North Railway Station-Guanxun",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.073993,
            24.636361
          ],
          [
            118.074915,
            24.636715
          ],
          [
            118.082892,
            24.639764
          ],
          [
            118.085794,
            24.640871
          ],
          [
            118.093487,
            24.643209
          ],
          [
            118.09442,
            24.643489
          ],
          [
            118.102965,
            24.645695
          ],
          [
            118.112379,
            24.648147
          ],
          [
            118.112996,
            24.648305
          ],
          [
            118.114793,
            24.648773
          ],
          [
            118.116499,
            24.649217
          ],
          [
            118.119374,
            24.64996
          ],
          [
            118.122241,
            24.650705
          ],
          [
            118.1222489045,
            24.6507069761
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S03-P02",
        "partId": "L4-S03-P02",
        "segmentId": "L4-S03",
        "sequence": 3,
        "partNo": 2,
        "partCount": 2,
        "fromId": "xiamen-north",
        "toId": "guanxun",
        "nameZh": "厦门北站-官浔",
        "nameEn": "Xiamen North Railway Station-Guanxun",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.1222489045,
            24.6507069761
          ],
          [
            118.122353,
            24.650733
          ],
          [
            118.122456,
            24.650767
          ],
          [
            118.122671,
            24.65084
          ],
          [
            118.123102,
            24.650978
          ],
          [
            118.123955,
            24.651258
          ],
          [
            118.12567,
            24.651814
          ],
          [
            118.127041,
            24.652073
          ],
          [
            118.128444,
            24.65234
          ],
          [
            118.128672,
            24.65237
          ],
          [
            118.134276,
            24.653252
          ],
          [
            118.138754,
            24.653749
          ],
          [
            118.141619,
            24.654055
          ],
          [
            118.143183,
            24.654055
          ],
          [
            118.144741,
            24.653884
          ],
          [
            118.146823,
            24.653287
          ],
          [
            118.147671,
            24.652903
          ],
          [
            118.148094,
            24.652711
          ],
          [
            118.148307,
            24.652614
          ],
          [
            118.148516,
            24.652522
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S04-P01",
        "partId": "L4-S04-P01",
        "segmentId": "L4-S04",
        "sequence": 4,
        "partNo": 1,
        "partCount": 1,
        "fromId": "guanxun",
        "toId": "bingzhou",
        "nameZh": "官浔-丙洲",
        "nameEn": "Guanxun-Bingzhou",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.148516,
            24.652522
          ],
          [
            118.151452,
            24.651189
          ],
          [
            118.152063,
            24.650874
          ],
          [
            118.152498,
            24.650644
          ],
          [
            118.153866,
            24.649615
          ],
          [
            118.154753,
            24.648512
          ],
          [
            118.155666,
            24.647378
          ],
          [
            118.155846,
            24.647159
          ],
          [
            118.157014,
            24.645799
          ],
          [
            118.15773,
            24.644966
          ],
          [
            118.158169,
            24.644493
          ],
          [
            118.159154,
            24.643434
          ],
          [
            118.159372,
            24.6432
          ],
          [
            118.159496,
            24.643067
          ],
          [
            118.159593,
            24.642983
          ],
          [
            118.160415,
            24.64227
          ],
          [
            118.160958,
            24.641803
          ],
          [
            118.162026,
            24.641118
          ],
          [
            118.163069,
            24.640605
          ],
          [
            118.164376,
            24.640182
          ],
          [
            118.165688,
            24.639783
          ],
          [
            118.168325,
            24.638978
          ],
          [
            118.172629,
            24.637668
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S05-P01",
        "partId": "L4-S05-P01",
        "segmentId": "L4-S05",
        "sequence": 5,
        "partNo": 1,
        "partCount": 1,
        "fromId": "bingzhou",
        "toId": "chengchang",
        "nameZh": "丙洲-城场",
        "nameEn": "Bingzhou-Chengchang",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.172629,
            24.637668
          ],
          [
            118.173801,
            24.637448
          ],
          [
            118.176687,
            24.63691
          ],
          [
            118.179045,
            24.636776
          ],
          [
            118.181061,
            24.63655
          ],
          [
            118.184281,
            24.635904
          ],
          [
            118.188111,
            24.634554
          ],
          [
            118.18912,
            24.634198
          ],
          [
            118.190821,
            24.633664
          ],
          [
            118.192529,
            24.633124
          ],
          [
            118.195968,
            24.632382
          ],
          [
            118.199476,
            24.631625
          ],
          [
            118.199943,
            24.631524
          ],
          [
            118.201712,
            24.631274
          ],
          [
            118.202071,
            24.631224
          ],
          [
            118.209756,
            24.631255
          ],
          [
            118.210166,
            24.631255
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S06-P01",
        "partId": "L4-S06-P01",
        "segmentId": "L4-S06",
        "sequence": 6,
        "partNo": 1,
        "partCount": 2,
        "fromId": "chengchang",
        "toId": "xiyan",
        "nameZh": "城场-西岩",
        "nameEn": "Chengchang-Xiyan",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.210166,
            24.631255
          ],
          [
            118.211835,
            24.631304
          ],
          [
            118.212568,
            24.631229
          ],
          [
            118.213351,
            24.631077
          ],
          [
            118.213892,
            24.630905
          ],
          [
            118.21443,
            24.630733
          ],
          [
            118.21556,
            24.630161
          ],
          [
            118.21636,
            24.629567
          ],
          [
            118.217204,
            24.628695
          ],
          [
            118.21788,
            24.627651
          ],
          [
            118.21833,
            24.626349
          ],
          [
            118.218528,
            24.625137
          ],
          [
            118.218492,
            24.624
          ],
          [
            118.218476,
            24.62343
          ],
          [
            118.21845,
            24.622863
          ],
          [
            118.218387,
            24.621383
          ],
          [
            118.218347,
            24.620565
          ],
          [
            118.218307,
            24.619786
          ],
          [
            118.218268,
            24.61906
          ],
          [
            118.218222,
            24.618333
          ],
          [
            118.218187,
            24.6178
          ],
          [
            118.218155,
            24.617267
          ],
          [
            118.218061,
            24.615771
          ],
          [
            118.217982,
            24.614473
          ],
          [
            118.217931,
            24.613408
          ],
          [
            118.217896,
            24.612695
          ],
          [
            118.217808,
            24.610687
          ],
          [
            118.21779,
            24.610225
          ],
          [
            118.217743,
            24.608362
          ],
          [
            118.217739,
            24.608213
          ],
          [
            118.217767,
            24.607603
          ],
          [
            118.21775,
            24.606989
          ],
          [
            118.217743,
            24.606842
          ],
          [
            118.21774,
            24.606797
          ],
          [
            118.217652,
            24.605948
          ],
          [
            118.217635,
            24.605659
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S06-P02",
        "partId": "L4-S06-P02",
        "segmentId": "L4-S06",
        "sequence": 6,
        "partNo": 2,
        "partCount": 2,
        "fromId": "chengchang",
        "toId": "xiyan",
        "nameZh": "城场-西岩",
        "nameEn": "Chengchang-Xiyan",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.217635,
            24.605659
          ],
          [
            118.217618,
            24.605383
          ],
          [
            118.217597,
            24.604814
          ],
          [
            118.217558,
            24.603827
          ],
          [
            118.217498,
            24.602303
          ],
          [
            118.217455,
            24.601219
          ],
          [
            118.217413,
            24.600169
          ],
          [
            118.217366,
            24.598964
          ],
          [
            118.217315,
            24.597662
          ],
          [
            118.217279,
            24.596798
          ],
          [
            118.217696,
            24.594445
          ],
          [
            118.217878,
            24.593403
          ],
          [
            118.218012,
            24.592741
          ],
          [
            118.218153,
            24.592075
          ],
          [
            118.218587,
            24.590038
          ],
          [
            118.218619,
            24.589901
          ],
          [
            118.218874,
            24.589026
          ],
          [
            118.218975,
            24.588593
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S07-P01",
        "partId": "L4-S07-P01",
        "segmentId": "L4-S07",
        "sequence": 7,
        "partNo": 1,
        "partCount": 1,
        "fromId": "xiyan",
        "toId": "hongkeng",
        "nameZh": "西岩-洪坑",
        "nameEn": "Xiyan-Hongkeng",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.218975,
            24.588593
          ],
          [
            118.219078,
            24.588009
          ],
          [
            118.219185,
            24.587394
          ],
          [
            118.219292,
            24.586806
          ],
          [
            118.219317,
            24.586684
          ],
          [
            118.219349,
            24.586562
          ],
          [
            118.219378,
            24.58644
          ],
          [
            118.219409,
            24.586317
          ],
          [
            118.219483,
            24.586073
          ],
          [
            118.21952,
            24.585951
          ],
          [
            118.219549,
            24.585831
          ],
          [
            118.219743,
            24.585047
          ],
          [
            118.219775,
            24.58492
          ],
          [
            118.219869,
            24.584426
          ],
          [
            118.220256,
            24.582408
          ],
          [
            118.22056,
            24.580804
          ],
          [
            118.220656,
            24.580319
          ],
          [
            118.220752,
            24.579834
          ],
          [
            118.220995,
            24.578661
          ],
          [
            118.221029,
            24.578553
          ],
          [
            118.221176,
            24.578158
          ],
          [
            118.221496,
            24.577291
          ],
          [
            118.221706,
            24.576725
          ],
          [
            118.222018,
            24.576265
          ],
          [
            118.222328,
            24.575804
          ],
          [
            118.222737,
            24.575191
          ],
          [
            118.223927,
            24.573988
          ],
          [
            118.225567,
            24.572333
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S08-P01",
        "partId": "L4-S08-P01",
        "segmentId": "L4-S08",
        "sequence": 8,
        "partNo": 1,
        "partCount": 1,
        "fromId": "hongkeng",
        "toId": "qianwu",
        "nameZh": "洪坑-前浯",
        "nameEn": "Hongkeng-Qianwu",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.225567,
            24.572333
          ],
          [
            118.226844,
            24.571483
          ],
          [
            118.228455,
            24.570411
          ],
          [
            118.237531,
            24.564373
          ],
          [
            118.2389,
            24.563462
          ],
          [
            118.240092,
            24.562669
          ],
          [
            118.240348,
            24.562499
          ],
          [
            118.240776,
            24.562264
          ],
          [
            118.241182,
            24.562106
          ],
          [
            118.241643,
            24.561994
          ],
          [
            118.24208,
            24.561964
          ],
          [
            118.242344,
            24.561946
          ],
          [
            118.24256,
            24.561936
          ],
          [
            118.242834,
            24.561924
          ],
          [
            118.243268,
            24.561902
          ],
          [
            118.243362,
            24.561898
          ],
          [
            118.24402,
            24.561867
          ],
          [
            118.244462,
            24.561846
          ],
          [
            118.245078,
            24.561817
          ],
          [
            118.246796,
            24.561736
          ],
          [
            118.247131,
            24.56172
          ],
          [
            118.247811,
            24.561689
          ],
          [
            118.248864,
            24.561639
          ],
          [
            118.251657,
            24.561506
          ],
          [
            118.254346,
            24.561378
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S09-P01",
        "partId": "L4-S09-P01",
        "segmentId": "L4-S09",
        "sequence": 9,
        "partNo": 1,
        "partCount": 1,
        "fromId": "qianwu",
        "toId": "dongting",
        "nameZh": "前浯-洞庭",
        "nameEn": "Qianwu-Dongting",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.254346,
            24.561378
          ],
          [
            118.254347,
            24.561378
          ],
          [
            118.254347,
            24.561378
          ],
          [
            118.258166,
            24.561642
          ],
          [
            118.258769,
            24.561682
          ],
          [
            118.261064,
            24.56184
          ],
          [
            118.26317,
            24.561983
          ],
          [
            118.26485,
            24.562098
          ],
          [
            118.266034,
            24.562179
          ],
          [
            118.267318,
            24.562463
          ],
          [
            118.269131,
            24.562864
          ],
          [
            118.269502,
            24.562946
          ],
          [
            118.269963,
            24.563049
          ],
          [
            118.27048,
            24.563163
          ],
          [
            118.270978,
            24.563293
          ],
          [
            118.271501,
            24.56343
          ],
          [
            118.272385,
            24.563662
          ],
          [
            118.273206,
            24.563879
          ],
          [
            118.27383,
            24.564043
          ],
          [
            118.275142,
            24.564283
          ],
          [
            118.276888,
            24.564604
          ],
          [
            118.277562,
            24.564729
          ],
          [
            118.278863,
            24.564967
          ],
          [
            118.279513,
            24.565087
          ],
          [
            118.280167,
            24.565203
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S10-P01",
        "partId": "L4-S10-P01",
        "segmentId": "L4-S10",
        "sequence": 10,
        "partNo": 1,
        "partCount": 3,
        "fromId": "dongting",
        "toId": "airport-west-reserved",
        "nameZh": "洞庭-机场西",
        "nameEn": "Dongting-Airport West",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.280167,
            24.565203
          ],
          [
            118.280238,
            24.565215
          ],
          [
            118.280316,
            24.565227
          ],
          [
            118.282579,
            24.56558
          ],
          [
            118.285369,
            24.566066
          ],
          [
            118.2856847444,
            24.5660962016
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S10-P02",
        "partId": "L4-S10-P02",
        "segmentId": "L4-S10",
        "sequence": 10,
        "partNo": 2,
        "partCount": 3,
        "fromId": "dongting",
        "toId": "airport-west-reserved",
        "nameZh": "洞庭-机场西",
        "nameEn": "Dongting-Airport West",
        "structureType": "elevated",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.2856847444,
            24.5660962016
          ],
          [
            118.286289,
            24.566154
          ],
          [
            118.288501,
            24.565902
          ],
          [
            118.289971,
            24.565377
          ],
          [
            118.290737,
            24.564878
          ],
          [
            118.291501,
            24.564376
          ],
          [
            118.293001,
            24.563367
          ],
          [
            118.29601,
            24.561344
          ],
          [
            118.296251,
            24.561184
          ],
          [
            118.296352,
            24.561113
          ],
          [
            118.29645,
            24.56104
          ],
          [
            118.296854,
            24.560739
          ],
          [
            118.297492,
            24.560264
          ],
          [
            118.298093,
            24.559815
          ],
          [
            118.298875,
            24.55918
          ],
          [
            118.299218,
            24.558904
          ],
          [
            118.299307,
            24.558836
          ],
          [
            118.299398,
            24.558769
          ],
          [
            118.299638,
            24.558586
          ],
          [
            118.300289,
            24.558093
          ],
          [
            118.300987,
            24.557566
          ],
          [
            118.301715,
            24.557035
          ],
          [
            118.302856,
            24.556204
          ],
          [
            118.303964,
            24.555437
          ],
          [
            118.306175,
            24.553902
          ],
          [
            118.308168,
            24.552517
          ],
          [
            118.310785,
            24.550543
          ],
          [
            118.311848,
            24.549743
          ],
          [
            118.312114,
            24.549543
          ],
          [
            118.312385,
            24.549342
          ],
          [
            118.312921,
            24.548946
          ],
          [
            118.315063,
            24.547371
          ],
          [
            118.316136,
            24.546581
          ],
          [
            118.316388,
            24.546395
          ],
          [
            118.316642,
            24.546216
          ],
          [
            118.317226,
            24.545804
          ],
          [
            118.317772,
            24.545417
          ],
          [
            118.318314,
            24.545025
          ],
          [
            118.319391,
            24.544244
          ],
          [
            118.319795,
            24.543953
          ],
          [
            118.320762,
            24.542922
          ],
          [
            118.32126,
            24.542393
          ],
          [
            118.321366,
            24.542249
          ],
          [
            118.321878,
            24.54156
          ],
          [
            118.3219017232,
            24.5415279841
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S10-P03",
        "partId": "L4-S10-P03",
        "segmentId": "L4-S10",
        "sequence": 10,
        "partNo": 3,
        "partCount": 3,
        "fromId": "dongting",
        "toId": "airport-west-reserved",
        "nameZh": "洞庭-机场西",
        "nameEn": "Dongting-Airport West",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.3219017232,
            24.5415279841
          ],
          [
            118.322905,
            24.540174
          ],
          [
            118.323316,
            24.539617
          ],
          [
            118.323529,
            24.53933
          ],
          [
            118.323639,
            24.539181
          ],
          [
            118.323688,
            24.539117
          ],
          [
            118.32371,
            24.539084
          ],
          [
            118.323739,
            24.539055
          ],
          [
            118.32421,
            24.538599
          ],
          [
            118.324687,
            24.53814
          ],
          [
            118.325162,
            24.53768
          ],
          [
            118.325757,
            24.537332
          ],
          [
            118.327973,
            24.536558
          ],
          [
            118.329064,
            24.53636
          ],
          [
            118.330323,
            24.536045
          ],
          [
            118.331613,
            24.535833
          ],
          [
            118.331876,
            24.535821
          ],
          [
            118.332136,
            24.535807
          ],
          [
            118.332639,
            24.535852
          ],
          [
            118.333384,
            24.535964
          ],
          [
            118.334127,
            24.536074
          ],
          [
            118.334642,
            24.536239
          ],
          [
            118.334849,
            24.536328
          ],
          [
            118.33505,
            24.536416
          ],
          [
            118.335431,
            24.536654
          ],
          [
            118.335624,
            24.536776
          ],
          [
            118.335814,
            24.536889
          ],
          [
            118.336686,
            24.537402
          ],
          [
            118.337227,
            24.537776
          ],
          [
            118.337766,
            24.538146
          ],
          [
            118.338306,
            24.538519
          ],
          [
            118.338377,
            24.538568
          ],
          [
            118.338444,
            24.538616
          ],
          [
            118.338571,
            24.538694
          ],
          [
            118.338854,
            24.538871
          ],
          [
            118.341052,
            24.540238
          ],
          [
            118.342511,
            24.541145
          ],
          [
            118.343234,
            24.541596
          ],
          [
            118.344183,
            24.542185
          ],
          [
            118.346019,
            24.543596
          ],
          [
            118.346535,
            24.54399
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "id": "L4-S11-P01",
        "partId": "L4-S11-P01",
        "segmentId": "L4-S11",
        "sequence": 11,
        "partNo": 1,
        "partCount": 1,
        "fromId": "airport-west-reserved",
        "toId": "xiangan-airport",
        "nameZh": "机场西-翔安机场",
        "nameEn": "Airport West-Xiang'an Airport",
        "structureType": "underground",
        "segmentType": "mainline",
        "coordinateSystem": "GCJ-02"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            118.346535,
            24.54399
          ],
          [
            118.348262,
            24.54454
          ],
          [
            118.34932,
            24.544876
          ],
          [
            118.35126,
            24.545491
          ]
        ]
      }
    }
  ]
}
`,u={status:`confirmed`,review:{confirmedOn:`2026-08-05`,confirmedBy:`user`,scope:`PDF transcription, 52 revenue trips, four circulations and 62 links, endpoint turnback-context interpretation`},source:{file:`data/raw/timetable/T0402时刻表.pdf`,sha256:`975d57e01db557728cb12f292868edaeb2a586495fca428e3c29945f2268fdfa`,pages:4,extractedOn:`2026-08-05`,extraction:`PDF embedded text coordinates plus visual page review`},conventions:{directionDown:`翔安机场站 -> 集美软件园北站`,directionUp:`集美软件园北站 -> 翔安机场站`,timeZone:`Asia/Shanghai`,timePrecision:`second`,endpointExtraTimes:`turnback context, not part of the current trip stop time`,classification:`Revenue, non-revenue, and mixed-service roles follow the PDF plus the user-confirmed T0402 operating arrangements; no trip classification remains unconfirmed.`,vehicleIdentity:`A circulation/vehicleId persists across trip-number changes.`,depotVisualization:`Houxi depot is an internal boundary only. It is hidden, and depot departures/arrivals are visualized at Jimei Software Park North.`,nonRevenueNotice:`非载客车次的前方到站信息必须附注“本次列车不载客”。`},locations:[{name:`翔安机场站`,id:`xiangan-airport`,kind:`station`,operational:!0},{name:`机场西站(预留)`,id:`airport-west-reserved`,kind:`reserved-pass`,operational:!1,displayLabel:`机场西站（预留·非运营）`,mapStyle:`reserved-non-operational`},{name:`洞庭站`,id:`dongting`,kind:`station`,operational:!0},{name:`前浯站`,id:`qianwu`,kind:`station`,operational:!0},{name:`洪坑站`,id:`hongkeng`,kind:`station`,operational:!0},{name:`西岩站`,id:`xiyan`,kind:`station`,operational:!0},{name:`城场站`,id:`chengchang`,kind:`station`,operational:!0},{name:`丙洲站`,id:`bingzhou`,kind:`station`,operational:!0},{name:`官浔站`,id:`guanxun`,kind:`station`,operational:!0},{name:`厦门北站`,id:`xiamen-north`,kind:`station`,operational:!0},{name:`后溪站`,id:`houxi`,kind:`station`,operational:!0},{name:`后溪车辆段`,id:`houxi-depot`,kind:`depot`,operational:!1,displayLabel:`后溪车辆段（非运营）`,displayOnMap:!1,displayInStationList:!1,simulationAnchorId:`jimei-software-park-north`,publicDisplayLocationId:`jimei-software-park-north`},{name:`集美软件园北站`,id:`jimei-software-park-north`,kind:`station`,operational:!0}],trips:[{tripId:`00407`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:1,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`10:15:31`,`10:16:21`],sourceY:[133.528,145.764],departure:`10:16:21`,turnbackContextBefore:`10:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`10:16:48`],sourceY:[164.104],pass:`10:16:48`},{locationId:`dongting`,rawTimes:[`10:23:18`,`10:23:48`],sourceY:[182.472,194.708],arrival:`10:23:18`,departure:`10:23:48`},{locationId:`qianwu`,rawTimes:[`10:26:13`,`10:26:43`],sourceY:[206.944,219.208],arrival:`10:26:13`,departure:`10:26:43`},{locationId:`hongkeng`,rawTimes:[`10:29:59`,`10:30:39`],sourceY:[231.444,243.68],arrival:`10:29:59`,departure:`10:30:39`},{locationId:`xiyan`,rawTimes:[`10:32:46`,`10:33:16`],sourceY:[255.916,268.152],arrival:`10:32:46`,departure:`10:33:16`},{locationId:`chengchang`,rawTimes:[`10:37:15`,`10:37:45`],sourceY:[280.388,292.624],arrival:`10:37:15`,departure:`10:37:45`},{locationId:`bingzhou`,rawTimes:[`10:40:53`,`10:41:23`],sourceY:[304.888,317.124],arrival:`10:40:53`,departure:`10:41:23`},{locationId:`guanxun`,rawTimes:[`10:44:03`,`10:44:33`],sourceY:[329.36,341.596],arrival:`10:44:03`,departure:`10:44:33`},{locationId:`xiamen-north`,rawTimes:[`10:50:03`,`10:50:43`],sourceY:[353.832,366.068],arrival:`10:50:03`,departure:`10:50:43`},{locationId:`houxi`,rawTimes:[`10:53:19`,`10:53:49`],sourceY:[378.304,390.568],arrival:`10:53:19`,departure:`10:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`10:55:50`],sourceY:[427.276],arrival:`10:55:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00105`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:2,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`09:45:31`,`09:46:21`],sourceY:[133.528,145.764],departure:`09:46:21`,turnbackContextBefore:`09:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`09:46:48`],sourceY:[164.104],pass:`09:46:48`},{locationId:`dongting`,rawTimes:[`09:53:18`,`09:53:48`],sourceY:[182.472,194.708],arrival:`09:53:18`,departure:`09:53:48`},{locationId:`qianwu`,rawTimes:[`09:56:13`,`09:56:43`],sourceY:[206.944,219.208],arrival:`09:56:13`,departure:`09:56:43`},{locationId:`hongkeng`,rawTimes:[`09:59:59`,`10:00:39`],sourceY:[231.444,243.68],arrival:`09:59:59`,departure:`10:00:39`},{locationId:`xiyan`,rawTimes:[`10:02:46`,`10:03:16`],sourceY:[255.916,268.152],arrival:`10:02:46`,departure:`10:03:16`},{locationId:`chengchang`,rawTimes:[`10:07:15`,`10:07:45`],sourceY:[280.388,292.624],arrival:`10:07:15`,departure:`10:07:45`},{locationId:`bingzhou`,rawTimes:[`10:10:53`,`10:11:23`],sourceY:[304.888,317.124],arrival:`10:10:53`,departure:`10:11:23`},{locationId:`guanxun`,rawTimes:[`10:14:03`,`10:14:33`],sourceY:[329.36,341.596],arrival:`10:14:03`,departure:`10:14:33`},{locationId:`xiamen-north`,rawTimes:[`10:20:03`,`10:20:43`],sourceY:[353.832,366.068],arrival:`10:20:03`,departure:`10:20:43`},{locationId:`houxi`,rawTimes:[`10:23:19`,`10:23:49`],sourceY:[378.304,390.568],arrival:`10:23:19`,departure:`10:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`10:25:50`],sourceY:[427.276],arrival:`10:25:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00205`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:3,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`09:15:31`,`09:16:21`],sourceY:[133.528,145.764],departure:`09:16:21`,turnbackContextBefore:`09:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`09:16:48`],sourceY:[164.104],pass:`09:16:48`},{locationId:`dongting`,rawTimes:[`09:23:18`,`09:23:48`],sourceY:[182.472,194.708],arrival:`09:23:18`,departure:`09:23:48`},{locationId:`qianwu`,rawTimes:[`09:26:13`,`09:26:43`],sourceY:[206.944,219.208],arrival:`09:26:13`,departure:`09:26:43`},{locationId:`hongkeng`,rawTimes:[`09:29:59`,`09:30:39`],sourceY:[231.444,243.68],arrival:`09:29:59`,departure:`09:30:39`},{locationId:`xiyan`,rawTimes:[`09:32:46`,`09:33:16`],sourceY:[255.916,268.152],arrival:`09:32:46`,departure:`09:33:16`},{locationId:`chengchang`,rawTimes:[`09:37:15`,`09:37:45`],sourceY:[280.388,292.624],arrival:`09:37:15`,departure:`09:37:45`},{locationId:`bingzhou`,rawTimes:[`09:40:53`,`09:41:23`],sourceY:[304.888,317.124],arrival:`09:40:53`,departure:`09:41:23`},{locationId:`guanxun`,rawTimes:[`09:44:03`,`09:44:33`],sourceY:[329.36,341.596],arrival:`09:44:03`,departure:`09:44:33`},{locationId:`xiamen-north`,rawTimes:[`09:50:03`,`09:50:43`],sourceY:[353.832,366.068],arrival:`09:50:03`,departure:`09:50:43`},{locationId:`houxi`,rawTimes:[`09:53:19`,`09:53:49`],sourceY:[378.304,390.568],arrival:`09:53:19`,departure:`09:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`09:55:50`],sourceY:[427.276],arrival:`09:55:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00405`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:4,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`08:45:31`,`08:46:21`],sourceY:[133.528,145.764],departure:`08:46:21`,turnbackContextBefore:`08:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`08:46:48`],sourceY:[164.104],pass:`08:46:48`},{locationId:`dongting`,rawTimes:[`08:53:18`,`08:53:48`],sourceY:[182.472,194.708],arrival:`08:53:18`,departure:`08:53:48`},{locationId:`qianwu`,rawTimes:[`08:56:13`,`08:56:43`],sourceY:[206.944,219.208],arrival:`08:56:13`,departure:`08:56:43`},{locationId:`hongkeng`,rawTimes:[`08:59:59`,`09:00:39`],sourceY:[231.444,243.68],arrival:`08:59:59`,departure:`09:00:39`},{locationId:`xiyan`,rawTimes:[`09:02:46`,`09:03:16`],sourceY:[255.916,268.152],arrival:`09:02:46`,departure:`09:03:16`},{locationId:`chengchang`,rawTimes:[`09:07:15`,`09:07:45`],sourceY:[280.388,292.624],arrival:`09:07:15`,departure:`09:07:45`},{locationId:`bingzhou`,rawTimes:[`09:10:53`,`09:11:23`],sourceY:[304.888,317.124],arrival:`09:10:53`,departure:`09:11:23`},{locationId:`guanxun`,rawTimes:[`09:14:03`,`09:14:33`],sourceY:[329.36,341.596],arrival:`09:14:03`,departure:`09:14:33`},{locationId:`xiamen-north`,rawTimes:[`09:20:03`,`09:20:43`],sourceY:[353.832,366.068],arrival:`09:20:03`,departure:`09:20:43`},{locationId:`houxi`,rawTimes:[`09:23:19`,`09:23:49`],sourceY:[378.304,390.568],arrival:`09:23:19`,departure:`09:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`09:25:50`],sourceY:[427.276],arrival:`09:25:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00305`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:5,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`08:22:20`,`08:23:10`],sourceY:[133.528,145.764],departure:`08:23:10`,turnbackContextBefore:`08:22:20`},{locationId:`airport-west-reserved`,rawTimes:[`08:23:37`],sourceY:[164.104],pass:`08:23:37`},{locationId:`dongting`,rawTimes:[`08:30:07`,`08:30:37`],sourceY:[182.472,194.708],arrival:`08:30:07`,departure:`08:30:37`},{locationId:`qianwu`,rawTimes:[`08:33:02`,`08:33:32`],sourceY:[206.944,219.208],arrival:`08:33:02`,departure:`08:33:32`},{locationId:`hongkeng`,rawTimes:[`08:36:48`,`08:37:28`],sourceY:[231.444,243.68],arrival:`08:36:48`,departure:`08:37:28`},{locationId:`xiyan`,rawTimes:[`08:39:35`,`08:40:05`],sourceY:[255.916,268.152],arrival:`08:39:35`,departure:`08:40:05`},{locationId:`chengchang`,rawTimes:[`08:44:04`,`08:44:34`],sourceY:[280.388,292.624],arrival:`08:44:04`,departure:`08:44:34`},{locationId:`bingzhou`,rawTimes:[`08:47:42`,`08:48:12`],sourceY:[304.888,317.124],arrival:`08:47:42`,departure:`08:48:12`},{locationId:`guanxun`,rawTimes:[`08:50:52`,`08:51:22`],sourceY:[329.36,341.596],arrival:`08:50:52`,departure:`08:51:22`},{locationId:`xiamen-north`,rawTimes:[`08:56:52`,`08:57:32`],sourceY:[353.832,366.068],arrival:`08:56:52`,departure:`08:57:32`},{locationId:`houxi`,rawTimes:[`09:00:08`,`09:00:38`],sourceY:[378.304,390.568],arrival:`09:00:08`,departure:`09:00:38`},{locationId:`jimei-software-park-north`,rawTimes:[`09:02:39`],sourceY:[427.276],arrival:`09:02:39`}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00103`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:6,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`07:57:00`,`08:00:00`],sourceY:[133.528,145.764],departure:`08:00:00`,turnbackContextBefore:`07:57:00`},{locationId:`airport-west-reserved`,rawTimes:[`08:00:27`],sourceY:[164.104],pass:`08:00:27`},{locationId:`dongting`,rawTimes:[`08:06:57`,`08:07:27`],sourceY:[182.472,194.708],arrival:`08:06:57`,departure:`08:07:27`},{locationId:`qianwu`,rawTimes:[`08:09:52`,`08:10:22`],sourceY:[206.944,219.208],arrival:`08:09:52`,departure:`08:10:22`},{locationId:`hongkeng`,rawTimes:[`08:13:38`,`08:14:18`],sourceY:[231.444,243.68],arrival:`08:13:38`,departure:`08:14:18`},{locationId:`xiyan`,rawTimes:[`08:16:25`,`08:16:55`],sourceY:[255.916,268.152],arrival:`08:16:25`,departure:`08:16:55`},{locationId:`chengchang`,rawTimes:[`08:20:54`,`08:21:24`],sourceY:[280.388,292.624],arrival:`08:20:54`,departure:`08:21:24`},{locationId:`bingzhou`,rawTimes:[`08:24:32`,`08:25:02`],sourceY:[304.888,317.124],arrival:`08:24:32`,departure:`08:25:02`},{locationId:`guanxun`,rawTimes:[`08:27:58`,`08:28:28`],sourceY:[329.36,341.596],arrival:`08:27:58`,departure:`08:28:28`},{locationId:`xiamen-north`,rawTimes:[`08:34:31`,`08:35:11`],sourceY:[353.832,366.068],arrival:`08:34:31`,departure:`08:35:11`},{locationId:`houxi`,rawTimes:[`08:38:03`,`08:38:33`],sourceY:[378.304,390.568],arrival:`08:38:03`,departure:`08:38:33`},{locationId:`jimei-software-park-north`,rawTimes:[`08:40:47`],sourceY:[427.276],arrival:`08:40:47`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00403`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:7,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`07:53:59`],sourceY:[390.568],departure:`07:53:59`},{locationId:`jimei-software-park-north`,rawTimes:[`07:56:00`],sourceY:[427.276],arrival:`07:56:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`non-revenue`,movementType:`non-revenue-transition`},{tripId:`00203`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:8,classificationHint:`partial-or-depot`,events:[{locationId:`hongkeng`,rawTimes:[`07:48:54`],sourceY:[243.68],departure:`07:48:54`},{locationId:`xiyan`,rawTimes:[`07:51:01`],sourceY:[262.048],pass:`07:51:01`},{locationId:`chengchang`,rawTimes:[`07:55:00`,`08:00:00`],sourceY:[280.388,292.624],arrival:`07:55:00`,departure:`08:00:00`},{locationId:`bingzhou`,rawTimes:[`08:03:08`,`08:03:38`],sourceY:[304.888,317.124],arrival:`08:03:08`,departure:`08:03:38`},{locationId:`guanxun`,rawTimes:[`08:06:18`,`08:06:48`],sourceY:[329.36,341.596],arrival:`08:06:18`,departure:`08:06:48`},{locationId:`xiamen-north`,rawTimes:[`08:12:18`,`08:12:58`],sourceY:[353.832,366.068],arrival:`08:12:18`,departure:`08:12:58`},{locationId:`houxi`,rawTimes:[`08:15:34`,`08:16:04`],sourceY:[378.304,390.568],arrival:`08:15:34`,departure:`08:16:04`},{locationId:`jimei-software-park-north`,rawTimes:[`08:18:05`],sourceY:[427.276],arrival:`08:18:05`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`mixed`,movementType:`partial-passenger-service`,serviceSegments:[{classification:`non-revenue`,fromLocationId:`hongkeng`,departure:`07:48:54`,toLocationId:`chengchang`,arrival:`07:55:00`},{classification:`revenue`,fromLocationId:`chengchang`,departure:`08:00:00`,toLocationId:`jimei-software-park-north`,arrival:`08:18:05`}],serviceTransition:{locationId:`chengchang`,arrival:`07:55:00`,departure:`08:00:00`,state:`boarding-before-revenue-service`}},{tripId:`00303`,direction:`down`,destinationCode:`092`,sourcePage:1,sourceColumn:9,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`07:08:29`],sourceY:[390.568],departure:`07:08:29`},{locationId:`jimei-software-park-north`,rawTimes:[`07:10:57`],sourceY:[427.276],arrival:`07:10:57`}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`non-revenue`,movementType:`rail-inspection`},{tripId:`00101`,direction:`down`,destinationCode:`166`,sourcePage:1,sourceColumn:10,classificationHint:`partial-or-depot`,events:[{locationId:`xiangan-airport`,rawTimes:[`06:50:49`,`06:51:09`],sourceY:[133.528,145.764],departure:`06:51:09`,turnbackContextBefore:`06:50:49`},{locationId:`airport-west-reserved`,rawTimes:[`06:52:08`],sourceY:[164.104],pass:`06:52:08`},{locationId:`dongting`,rawTimes:[`07:06:07`],sourceY:[188.604],pass:`07:06:07`},{locationId:`qianwu`,rawTimes:[`07:10:18`],sourceY:[213.076],pass:`07:10:18`},{locationId:`hongkeng`,rawTimes:[`07:15:06`],sourceY:[237.548],arrival:`07:15:06`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`non-revenue`,movementType:`rail-inspection`},{tripId:`00202`,direction:`up`,destinationCode:`161`,sourcePage:1,sourceColumn:1,classificationHint:`partial-or-depot`,events:[{locationId:`hongkeng`,rawTimes:[`07:39:45`],sourceY:[243.68],arrival:`07:39:45`},{locationId:`xiyan`,rawTimes:[`07:36:19`],sourceY:[262.048],pass:`07:36:19`},{locationId:`chengchang`,rawTimes:[`07:28:27`],sourceY:[286.52],pass:`07:28:27`},{locationId:`bingzhou`,rawTimes:[`07:22:24`],sourceY:[310.992],pass:`07:22:24`},{locationId:`guanxun`,rawTimes:[`07:17:40`],sourceY:[335.464],pass:`07:17:40`},{locationId:`xiamen-north`,rawTimes:[`07:05:33`],sourceY:[359.964],pass:`07:05:33`},{locationId:`houxi`,rawTimes:[`07:01:00`],sourceY:[384.436],departure:`07:01:00`},{locationId:`houxi-depot`,rawTimes:[`07:00:00`],sourceY:[402.804],boundaryTime:`07:00:00`,markers:[`▲G1011`]}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`non-revenue`,movementType:`depot-outbound-and-reverse-rail-inspection`,operationalTrack:`down`,movementDirection:`reverse`,pdfDisplayDirection:`up`},{tripId:`00302`,direction:`up`,destinationCode:`101`,sourcePage:1,sourceColumn:2,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`07:06:00`],sourceY:[390.568],pass:`07:06:00`},{locationId:`houxi-depot`,rawTimes:[`07:05:00`],sourceY:[402.804],boundaryTime:`07:05:00`,markers:[`▲G1010`]}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`non-revenue`,movementType:`depot-outbound`},{tripId:`00304`,direction:`up`,destinationCode:`204`,sourcePage:1,sourceColumn:3,classificationHint:`full-line-outside-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`08:09:11`,`08:08:41`],sourceY:[133.528,145.764],arrival:`08:08:41`,turnbackContextAfter:`08:09:11`},{locationId:`airport-west-reserved`,rawTimes:[`08:08:12`],sourceY:[164.104],pass:`08:08:12`},{locationId:`dongting`,rawTimes:[`08:00:58`],sourceY:[188.604],pass:`08:00:58`},{locationId:`qianwu`,rawTimes:[`07:58:18`],sourceY:[213.076],pass:`07:58:18`},{locationId:`hongkeng`,rawTimes:[`07:54:50`],sourceY:[237.548],pass:`07:54:50`},{locationId:`xiyan`,rawTimes:[`07:51:27`],sourceY:[262.048],pass:`07:51:27`},{locationId:`chengchang`,rawTimes:[`07:43:35`],sourceY:[286.52],pass:`07:43:35`},{locationId:`bingzhou`,rawTimes:[`07:37:32`],sourceY:[310.992],pass:`07:37:32`},{locationId:`guanxun`,rawTimes:[`07:32:48`],sourceY:[335.464],pass:`07:32:48`},{locationId:`xiamen-north`,rawTimes:[`07:20:41`],sourceY:[359.964],pass:`07:20:41`},{locationId:`houxi`,rawTimes:[`07:16:08`],sourceY:[384.436],pass:`07:16:08`},{locationId:`jimei-software-park-north`,rawTimes:[`07:13:54`],sourceY:[427.276],departure:`07:13:54`}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`non-revenue`,movementType:`rail-inspection`},{tripId:`00102`,direction:`up`,destinationCode:`204`,sourcePage:1,sourceColumn:4,classificationHint:`partial-or-depot`,events:[{locationId:`xiangan-airport`,rawTimes:[`07:42:48`,`07:42:28`],sourceY:[133.528,145.764],arrival:`07:42:28`,turnbackContextAfter:`07:42:48`},{locationId:`airport-west-reserved`,rawTimes:[`07:41:29`],sourceY:[164.104],pass:`07:41:29`},{locationId:`dongting`,rawTimes:[`07:27:30`],sourceY:[188.604],pass:`07:27:30`},{locationId:`qianwu`,rawTimes:[`07:23:19`],sourceY:[213.076],pass:`07:23:19`},{locationId:`hongkeng`,rawTimes:[`07:18:31`],sourceY:[237.548],departure:`07:18:31`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`non-revenue`,movementType:`rail-inspection`},{tripId:`00402`,direction:`up`,destinationCode:`101`,sourcePage:1,sourceColumn:5,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`07:51:00`],sourceY:[390.568],pass:`07:51:00`},{locationId:`houxi-depot`,rawTimes:[`07:47:00`],sourceY:[402.804],boundaryTime:`07:47:00`,markers:[`▲G1011`]}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`non-revenue`,movementType:`depot-outbound`},{tripId:`00404`,direction:`up`,destinationCode:`204`,sourcePage:1,sourceColumn:6,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`08:39:59`,`08:39:09`],sourceY:[133.528,145.764],arrival:`08:39:09`,turnbackContextAfter:`08:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`08:38:43`],sourceY:[164.104],pass:`08:38:43`},{locationId:`dongting`,rawTimes:[`08:32:09`,`08:31:39`],sourceY:[182.472,194.708],arrival:`08:31:39`,departure:`08:32:09`},{locationId:`qianwu`,rawTimes:[`08:29:14`,`08:28:44`],sourceY:[206.944,219.208],arrival:`08:28:44`,departure:`08:29:14`},{locationId:`hongkeng`,rawTimes:[`08:25:35`,`08:24:55`],sourceY:[231.444,243.68],arrival:`08:24:55`,departure:`08:25:35`},{locationId:`xiyan`,rawTimes:[`08:22:44`,`08:22:14`],sourceY:[255.916,268.152],arrival:`08:22:14`,departure:`08:22:44`},{locationId:`chengchang`,rawTimes:[`08:18:15`,`08:17:45`],sourceY:[280.388,292.624],arrival:`08:17:45`,departure:`08:18:15`},{locationId:`bingzhou`,rawTimes:[`08:14:36`,`08:14:06`],sourceY:[304.888,317.124],arrival:`08:14:06`,departure:`08:14:36`},{locationId:`guanxun`,rawTimes:[`08:11:27`,`08:10:57`],sourceY:[329.36,341.596],arrival:`08:10:57`,departure:`08:11:27`},{locationId:`xiamen-north`,rawTimes:[`08:05:28`,`08:04:48`],sourceY:[353.832,366.068],arrival:`08:04:48`,departure:`08:05:28`},{locationId:`houxi`,rawTimes:[`08:02:15`,`08:01:45`],sourceY:[378.304,390.568],arrival:`08:01:45`,departure:`08:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`08:00:00`],sourceY:[427.276],departure:`08:00:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00204`,direction:`up`,destinationCode:`204`,sourcePage:1,sourceColumn:7,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`09:02:29`,`09:01:39`],sourceY:[133.528,145.764],arrival:`09:01:39`,turnbackContextAfter:`09:02:29`},{locationId:`airport-west-reserved`,rawTimes:[`09:01:13`],sourceY:[164.104],pass:`09:01:13`},{locationId:`dongting`,rawTimes:[`08:54:39`,`08:54:09`],sourceY:[182.472,194.708],arrival:`08:54:09`,departure:`08:54:39`},{locationId:`qianwu`,rawTimes:[`08:51:44`,`08:51:14`],sourceY:[206.944,219.208],arrival:`08:51:14`,departure:`08:51:44`},{locationId:`hongkeng`,rawTimes:[`08:48:05`,`08:47:25`],sourceY:[231.444,243.68],arrival:`08:47:25`,departure:`08:48:05`},{locationId:`xiyan`,rawTimes:[`08:45:14`,`08:44:44`],sourceY:[255.916,268.152],arrival:`08:44:44`,departure:`08:45:14`},{locationId:`chengchang`,rawTimes:[`08:40:45`,`08:40:15`],sourceY:[280.388,292.624],arrival:`08:40:15`,departure:`08:40:45`},{locationId:`bingzhou`,rawTimes:[`08:37:06`,`08:36:36`],sourceY:[304.888,317.124],arrival:`08:36:36`,departure:`08:37:06`},{locationId:`guanxun`,rawTimes:[`08:33:57`,`08:33:27`],sourceY:[329.36,341.596],arrival:`08:33:27`,departure:`08:33:57`},{locationId:`xiamen-north`,rawTimes:[`08:27:58`,`08:27:18`],sourceY:[353.832,366.068],arrival:`08:27:18`,departure:`08:27:58`},{locationId:`houxi`,rawTimes:[`08:24:45`,`08:24:15`],sourceY:[378.304,390.568],arrival:`08:24:15`,departure:`08:24:45`},{locationId:`jimei-software-park-north`,rawTimes:[`08:22:30`],sourceY:[427.276],departure:`08:22:30`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00104`,direction:`up`,destinationCode:`204`,sourcePage:1,sourceColumn:8,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`09:24:59`,`09:24:09`],sourceY:[133.528,145.764],arrival:`09:24:09`,turnbackContextAfter:`09:24:59`},{locationId:`airport-west-reserved`,rawTimes:[`09:23:43`],sourceY:[164.104],pass:`09:23:43`},{locationId:`dongting`,rawTimes:[`09:17:09`,`09:16:39`],sourceY:[182.472,194.708],arrival:`09:16:39`,departure:`09:17:09`},{locationId:`qianwu`,rawTimes:[`09:14:14`,`09:13:44`],sourceY:[206.944,219.208],arrival:`09:13:44`,departure:`09:14:14`},{locationId:`hongkeng`,rawTimes:[`09:10:35`,`09:09:55`],sourceY:[231.444,243.68],arrival:`09:09:55`,departure:`09:10:35`},{locationId:`xiyan`,rawTimes:[`09:07:44`,`09:07:14`],sourceY:[255.916,268.152],arrival:`09:07:14`,departure:`09:07:44`},{locationId:`chengchang`,rawTimes:[`09:03:15`,`09:02:45`],sourceY:[280.388,292.624],arrival:`09:02:45`,departure:`09:03:15`},{locationId:`bingzhou`,rawTimes:[`08:59:36`,`08:59:06`],sourceY:[304.888,317.124],arrival:`08:59:06`,departure:`08:59:36`},{locationId:`guanxun`,rawTimes:[`08:56:27`,`08:55:57`],sourceY:[329.36,341.596],arrival:`08:55:57`,departure:`08:56:27`},{locationId:`xiamen-north`,rawTimes:[`08:50:28`,`08:49:48`],sourceY:[353.832,366.068],arrival:`08:49:48`,departure:`08:50:28`},{locationId:`houxi`,rawTimes:[`08:47:15`,`08:46:45`],sourceY:[378.304,390.568],arrival:`08:46:45`,departure:`08:47:15`},{locationId:`jimei-software-park-north`,rawTimes:[`08:45:00`],sourceY:[427.276],departure:`08:45:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00306`,direction:`up`,destinationCode:`203`,sourcePage:1,sourceColumn:9,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`09:47:29`,`09:46:39`],sourceY:[133.528,145.764],arrival:`09:46:39`,turnbackContextAfter:`09:47:29`},{locationId:`airport-west-reserved`,rawTimes:[`09:46:13`],sourceY:[164.104],pass:`09:46:13`},{locationId:`dongting`,rawTimes:[`09:39:39`,`09:39:09`],sourceY:[182.472,194.708],arrival:`09:39:09`,departure:`09:39:39`},{locationId:`qianwu`,rawTimes:[`09:36:44`,`09:36:14`],sourceY:[206.944,219.208],arrival:`09:36:14`,departure:`09:36:44`},{locationId:`hongkeng`,rawTimes:[`09:33:05`,`09:32:25`],sourceY:[231.444,243.68],arrival:`09:32:25`,departure:`09:33:05`},{locationId:`xiyan`,rawTimes:[`09:30:14`,`09:29:44`],sourceY:[255.916,268.152],arrival:`09:29:44`,departure:`09:30:14`},{locationId:`chengchang`,rawTimes:[`09:25:45`,`09:25:15`],sourceY:[280.388,292.624],arrival:`09:25:15`,departure:`09:25:45`},{locationId:`bingzhou`,rawTimes:[`09:22:06`,`09:21:36`],sourceY:[304.888,317.124],arrival:`09:21:36`,departure:`09:22:06`},{locationId:`guanxun`,rawTimes:[`09:18:57`,`09:18:27`],sourceY:[329.36,341.596],arrival:`09:18:27`,departure:`09:18:57`},{locationId:`xiamen-north`,rawTimes:[`09:12:58`,`09:12:18`],sourceY:[353.832,366.068],arrival:`09:12:18`,departure:`09:12:58`},{locationId:`houxi`,rawTimes:[`09:09:45`,`09:09:15`],sourceY:[378.304,390.568],arrival:`09:09:15`,departure:`09:09:45`},{locationId:`jimei-software-park-north`,rawTimes:[`09:07:30`],sourceY:[427.276],departure:`09:07:30`}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`revenue`,movementType:`passenger-service`,postTripState:`standby-xiangan-turnback-i`,postTripStateAt:`09:48:00`},{tripId:`00406`,direction:`up`,destinationCode:`204`,sourcePage:1,sourceColumn:10,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`10:09:59`,`10:09:09`],sourceY:[133.528,145.764],arrival:`10:09:09`,turnbackContextAfter:`10:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`10:08:43`],sourceY:[164.104],pass:`10:08:43`},{locationId:`dongting`,rawTimes:[`10:02:09`,`10:01:39`],sourceY:[182.472,194.708],arrival:`10:01:39`,departure:`10:02:09`},{locationId:`qianwu`,rawTimes:[`09:59:14`,`09:58:44`],sourceY:[206.944,219.208],arrival:`09:58:44`,departure:`09:59:14`},{locationId:`hongkeng`,rawTimes:[`09:55:35`,`09:54:55`],sourceY:[231.444,243.68],arrival:`09:54:55`,departure:`09:55:35`},{locationId:`xiyan`,rawTimes:[`09:52:44`,`09:52:14`],sourceY:[255.916,268.152],arrival:`09:52:14`,departure:`09:52:44`},{locationId:`chengchang`,rawTimes:[`09:48:15`,`09:47:45`],sourceY:[280.388,292.624],arrival:`09:47:45`,departure:`09:48:15`},{locationId:`bingzhou`,rawTimes:[`09:44:36`,`09:44:06`],sourceY:[304.888,317.124],arrival:`09:44:06`,departure:`09:44:36`},{locationId:`guanxun`,rawTimes:[`09:41:27`,`09:40:57`],sourceY:[329.36,341.596],arrival:`09:40:57`,departure:`09:41:27`},{locationId:`xiamen-north`,rawTimes:[`09:35:28`,`09:34:48`],sourceY:[353.832,366.068],arrival:`09:34:48`,departure:`09:35:28`},{locationId:`houxi`,rawTimes:[`09:32:15`,`09:31:45`],sourceY:[378.304,390.568],arrival:`09:31:45`,departure:`09:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`09:30:00`],sourceY:[427.276],departure:`09:30:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00213`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:1,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`15:15:31`,`15:16:21`],sourceY:[135.26,147.496],departure:`15:16:21`,turnbackContextBefore:`15:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`15:16:48`],sourceY:[165.864],pass:`15:16:48`},{locationId:`dongting`,rawTimes:[`15:23:18`,`15:23:48`],sourceY:[184.204,196.468],arrival:`15:23:18`,departure:`15:23:48`},{locationId:`qianwu`,rawTimes:[`15:26:13`,`15:26:43`],sourceY:[208.704,220.94],arrival:`15:26:13`,departure:`15:26:43`},{locationId:`hongkeng`,rawTimes:[`15:29:59`,`15:30:39`],sourceY:[233.176,245.412],arrival:`15:29:59`,departure:`15:30:39`},{locationId:`xiyan`,rawTimes:[`15:32:46`,`15:33:16`],sourceY:[257.648,269.884],arrival:`15:32:46`,departure:`15:33:16`},{locationId:`chengchang`,rawTimes:[`15:37:15`,`15:37:45`],sourceY:[282.148,294.384],arrival:`15:37:15`,departure:`15:37:45`},{locationId:`bingzhou`,rawTimes:[`15:40:53`,`15:41:23`],sourceY:[306.62,318.856],arrival:`15:40:53`,departure:`15:41:23`},{locationId:`guanxun`,rawTimes:[`15:44:03`,`15:44:33`],sourceY:[331.092,343.328],arrival:`15:44:03`,departure:`15:44:33`},{locationId:`xiamen-north`,rawTimes:[`15:50:03`,`15:50:43`],sourceY:[355.564,367.828],arrival:`15:50:03`,departure:`15:50:43`},{locationId:`houxi`,rawTimes:[`15:53:19`,`15:53:49`],sourceY:[380.064,392.3],arrival:`15:53:19`,departure:`15:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`15:55:50`],sourceY:[429.008],arrival:`15:55:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00413`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:2,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`14:45:31`,`14:46:21`],sourceY:[135.26,147.496],departure:`14:46:21`,turnbackContextBefore:`14:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`14:46:48`],sourceY:[165.864],pass:`14:46:48`},{locationId:`dongting`,rawTimes:[`14:53:18`,`14:53:48`],sourceY:[184.204,196.468],arrival:`14:53:18`,departure:`14:53:48`},{locationId:`qianwu`,rawTimes:[`14:56:13`,`14:56:43`],sourceY:[208.704,220.94],arrival:`14:56:13`,departure:`14:56:43`},{locationId:`hongkeng`,rawTimes:[`14:59:59`,`15:00:39`],sourceY:[233.176,245.412],arrival:`14:59:59`,departure:`15:00:39`},{locationId:`xiyan`,rawTimes:[`15:02:46`,`15:03:16`],sourceY:[257.648,269.884],arrival:`15:02:46`,departure:`15:03:16`},{locationId:`chengchang`,rawTimes:[`15:07:15`,`15:07:45`],sourceY:[282.148,294.384],arrival:`15:07:15`,departure:`15:07:45`},{locationId:`bingzhou`,rawTimes:[`15:10:53`,`15:11:23`],sourceY:[306.62,318.856],arrival:`15:10:53`,departure:`15:11:23`},{locationId:`guanxun`,rawTimes:[`15:14:03`,`15:14:33`],sourceY:[331.092,343.328],arrival:`15:14:03`,departure:`15:14:33`},{locationId:`xiamen-north`,rawTimes:[`15:20:03`,`15:20:43`],sourceY:[355.564,367.828],arrival:`15:20:03`,departure:`15:20:43`},{locationId:`houxi`,rawTimes:[`15:23:19`,`15:23:49`],sourceY:[380.064,392.3],arrival:`15:23:19`,departure:`15:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`15:25:50`],sourceY:[429.008],arrival:`15:25:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00111`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:3,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`14:15:31`,`14:16:21`],sourceY:[135.26,147.496],departure:`14:16:21`,turnbackContextBefore:`14:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`14:16:48`],sourceY:[165.864],pass:`14:16:48`},{locationId:`dongting`,rawTimes:[`14:23:18`,`14:23:48`],sourceY:[184.204,196.468],arrival:`14:23:18`,departure:`14:23:48`},{locationId:`qianwu`,rawTimes:[`14:26:13`,`14:26:43`],sourceY:[208.704,220.94],arrival:`14:26:13`,departure:`14:26:43`},{locationId:`hongkeng`,rawTimes:[`14:29:59`,`14:30:39`],sourceY:[233.176,245.412],arrival:`14:29:59`,departure:`14:30:39`},{locationId:`xiyan`,rawTimes:[`14:32:46`,`14:33:16`],sourceY:[257.648,269.884],arrival:`14:32:46`,departure:`14:33:16`},{locationId:`chengchang`,rawTimes:[`14:37:15`,`14:37:45`],sourceY:[282.148,294.384],arrival:`14:37:15`,departure:`14:37:45`},{locationId:`bingzhou`,rawTimes:[`14:40:53`,`14:41:23`],sourceY:[306.62,318.856],arrival:`14:40:53`,departure:`14:41:23`},{locationId:`guanxun`,rawTimes:[`14:44:03`,`14:44:33`],sourceY:[331.092,343.328],arrival:`14:44:03`,departure:`14:44:33`},{locationId:`xiamen-north`,rawTimes:[`14:50:03`,`14:50:43`],sourceY:[355.564,367.828],arrival:`14:50:03`,departure:`14:50:43`},{locationId:`houxi`,rawTimes:[`14:53:19`,`14:53:49`],sourceY:[380.064,392.3],arrival:`14:53:19`,departure:`14:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`14:55:50`],sourceY:[429.008],arrival:`14:55:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00211`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:4,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`13:45:31`,`13:46:21`],sourceY:[135.26,147.496],departure:`13:46:21`,turnbackContextBefore:`13:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`13:46:48`],sourceY:[165.864],pass:`13:46:48`},{locationId:`dongting`,rawTimes:[`13:53:18`,`13:53:48`],sourceY:[184.204,196.468],arrival:`13:53:18`,departure:`13:53:48`},{locationId:`qianwu`,rawTimes:[`13:56:13`,`13:56:43`],sourceY:[208.704,220.94],arrival:`13:56:13`,departure:`13:56:43`},{locationId:`hongkeng`,rawTimes:[`13:59:59`,`14:00:39`],sourceY:[233.176,245.412],arrival:`13:59:59`,departure:`14:00:39`},{locationId:`xiyan`,rawTimes:[`14:02:46`,`14:03:16`],sourceY:[257.648,269.884],arrival:`14:02:46`,departure:`14:03:16`},{locationId:`chengchang`,rawTimes:[`14:07:15`,`14:07:45`],sourceY:[282.148,294.384],arrival:`14:07:15`,departure:`14:07:45`},{locationId:`bingzhou`,rawTimes:[`14:10:53`,`14:11:23`],sourceY:[306.62,318.856],arrival:`14:10:53`,departure:`14:11:23`},{locationId:`guanxun`,rawTimes:[`14:14:03`,`14:14:33`],sourceY:[331.092,343.328],arrival:`14:14:03`,departure:`14:14:33`},{locationId:`xiamen-north`,rawTimes:[`14:20:03`,`14:20:43`],sourceY:[355.564,367.828],arrival:`14:20:03`,departure:`14:20:43`},{locationId:`houxi`,rawTimes:[`14:23:19`,`14:23:49`],sourceY:[380.064,392.3],arrival:`14:23:19`,departure:`14:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`14:25:50`],sourceY:[429.008],arrival:`14:25:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00411`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:5,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`13:15:31`,`13:16:21`],sourceY:[135.26,147.496],departure:`13:16:21`,turnbackContextBefore:`13:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`13:16:48`],sourceY:[165.864],pass:`13:16:48`},{locationId:`dongting`,rawTimes:[`13:23:18`,`13:23:48`],sourceY:[184.204,196.468],arrival:`13:23:18`,departure:`13:23:48`},{locationId:`qianwu`,rawTimes:[`13:26:13`,`13:26:43`],sourceY:[208.704,220.94],arrival:`13:26:13`,departure:`13:26:43`},{locationId:`hongkeng`,rawTimes:[`13:29:59`,`13:30:39`],sourceY:[233.176,245.412],arrival:`13:29:59`,departure:`13:30:39`},{locationId:`xiyan`,rawTimes:[`13:32:46`,`13:33:16`],sourceY:[257.648,269.884],arrival:`13:32:46`,departure:`13:33:16`},{locationId:`chengchang`,rawTimes:[`13:37:15`,`13:37:45`],sourceY:[282.148,294.384],arrival:`13:37:15`,departure:`13:37:45`},{locationId:`bingzhou`,rawTimes:[`13:40:53`,`13:41:23`],sourceY:[306.62,318.856],arrival:`13:40:53`,departure:`13:41:23`},{locationId:`guanxun`,rawTimes:[`13:44:03`,`13:44:33`],sourceY:[331.092,343.328],arrival:`13:44:03`,departure:`13:44:33`},{locationId:`xiamen-north`,rawTimes:[`13:50:03`,`13:50:43`],sourceY:[355.564,367.828],arrival:`13:50:03`,departure:`13:50:43`},{locationId:`houxi`,rawTimes:[`13:53:19`,`13:53:49`],sourceY:[380.064,392.3],arrival:`13:53:19`,departure:`13:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`13:55:50`],sourceY:[429.008],arrival:`13:55:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00109`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:6,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`12:45:31`,`12:46:21`],sourceY:[135.26,147.496],departure:`12:46:21`,turnbackContextBefore:`12:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`12:46:48`],sourceY:[165.864],pass:`12:46:48`},{locationId:`dongting`,rawTimes:[`12:53:18`,`12:53:48`],sourceY:[184.204,196.468],arrival:`12:53:18`,departure:`12:53:48`},{locationId:`qianwu`,rawTimes:[`12:56:13`,`12:56:43`],sourceY:[208.704,220.94],arrival:`12:56:13`,departure:`12:56:43`},{locationId:`hongkeng`,rawTimes:[`12:59:59`,`13:00:39`],sourceY:[233.176,245.412],arrival:`12:59:59`,departure:`13:00:39`},{locationId:`xiyan`,rawTimes:[`13:02:46`,`13:03:16`],sourceY:[257.648,269.884],arrival:`13:02:46`,departure:`13:03:16`},{locationId:`chengchang`,rawTimes:[`13:07:15`,`13:07:45`],sourceY:[282.148,294.384],arrival:`13:07:15`,departure:`13:07:45`},{locationId:`bingzhou`,rawTimes:[`13:10:53`,`13:11:23`],sourceY:[306.62,318.856],arrival:`13:10:53`,departure:`13:11:23`},{locationId:`guanxun`,rawTimes:[`13:14:03`,`13:14:33`],sourceY:[331.092,343.328],arrival:`13:14:03`,departure:`13:14:33`},{locationId:`xiamen-north`,rawTimes:[`13:20:03`,`13:20:43`],sourceY:[355.564,367.828],arrival:`13:20:03`,departure:`13:20:43`},{locationId:`houxi`,rawTimes:[`13:23:19`,`13:23:49`],sourceY:[380.064,392.3],arrival:`13:23:19`,departure:`13:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`13:25:50`],sourceY:[429.008],arrival:`13:25:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00209`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:7,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`12:15:31`,`12:16:21`],sourceY:[135.26,147.496],departure:`12:16:21`,turnbackContextBefore:`12:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`12:16:48`],sourceY:[165.864],pass:`12:16:48`},{locationId:`dongting`,rawTimes:[`12:23:18`,`12:23:48`],sourceY:[184.204,196.468],arrival:`12:23:18`,departure:`12:23:48`},{locationId:`qianwu`,rawTimes:[`12:26:13`,`12:26:43`],sourceY:[208.704,220.94],arrival:`12:26:13`,departure:`12:26:43`},{locationId:`hongkeng`,rawTimes:[`12:29:59`,`12:30:39`],sourceY:[233.176,245.412],arrival:`12:29:59`,departure:`12:30:39`},{locationId:`xiyan`,rawTimes:[`12:32:46`,`12:33:16`],sourceY:[257.648,269.884],arrival:`12:32:46`,departure:`12:33:16`},{locationId:`chengchang`,rawTimes:[`12:37:15`,`12:37:45`],sourceY:[282.148,294.384],arrival:`12:37:15`,departure:`12:37:45`},{locationId:`bingzhou`,rawTimes:[`12:40:53`,`12:41:23`],sourceY:[306.62,318.856],arrival:`12:40:53`,departure:`12:41:23`},{locationId:`guanxun`,rawTimes:[`12:44:03`,`12:44:33`],sourceY:[331.092,343.328],arrival:`12:44:03`,departure:`12:44:33`},{locationId:`xiamen-north`,rawTimes:[`12:50:03`,`12:50:43`],sourceY:[355.564,367.828],arrival:`12:50:03`,departure:`12:50:43`},{locationId:`houxi`,rawTimes:[`12:53:19`,`12:53:49`],sourceY:[380.064,392.3],arrival:`12:53:19`,departure:`12:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`12:55:50`],sourceY:[429.008],arrival:`12:55:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00409`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:8,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`11:45:31`,`11:46:21`],sourceY:[135.26,147.496],departure:`11:46:21`,turnbackContextBefore:`11:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`11:46:48`],sourceY:[165.864],pass:`11:46:48`},{locationId:`dongting`,rawTimes:[`11:53:18`,`11:53:48`],sourceY:[184.204,196.468],arrival:`11:53:18`,departure:`11:53:48`},{locationId:`qianwu`,rawTimes:[`11:56:13`,`11:56:43`],sourceY:[208.704,220.94],arrival:`11:56:13`,departure:`11:56:43`},{locationId:`hongkeng`,rawTimes:[`11:59:59`,`12:00:39`],sourceY:[233.176,245.412],arrival:`11:59:59`,departure:`12:00:39`},{locationId:`xiyan`,rawTimes:[`12:02:46`,`12:03:16`],sourceY:[257.648,269.884],arrival:`12:02:46`,departure:`12:03:16`},{locationId:`chengchang`,rawTimes:[`12:07:15`,`12:07:45`],sourceY:[282.148,294.384],arrival:`12:07:15`,departure:`12:07:45`},{locationId:`bingzhou`,rawTimes:[`12:10:53`,`12:11:23`],sourceY:[306.62,318.856],arrival:`12:10:53`,departure:`12:11:23`},{locationId:`guanxun`,rawTimes:[`12:14:03`,`12:14:33`],sourceY:[331.092,343.328],arrival:`12:14:03`,departure:`12:14:33`},{locationId:`xiamen-north`,rawTimes:[`12:20:03`,`12:20:43`],sourceY:[355.564,367.828],arrival:`12:20:03`,departure:`12:20:43`},{locationId:`houxi`,rawTimes:[`12:23:19`,`12:23:49`],sourceY:[380.064,392.3],arrival:`12:23:19`,departure:`12:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`12:25:50`],sourceY:[429.008],arrival:`12:25:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00107`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:9,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`11:15:31`,`11:16:21`],sourceY:[135.26,147.496],departure:`11:16:21`,turnbackContextBefore:`11:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`11:16:48`],sourceY:[165.864],pass:`11:16:48`},{locationId:`dongting`,rawTimes:[`11:23:18`,`11:23:48`],sourceY:[184.204,196.468],arrival:`11:23:18`,departure:`11:23:48`},{locationId:`qianwu`,rawTimes:[`11:26:13`,`11:26:43`],sourceY:[208.704,220.94],arrival:`11:26:13`,departure:`11:26:43`},{locationId:`hongkeng`,rawTimes:[`11:29:59`,`11:30:39`],sourceY:[233.176,245.412],arrival:`11:29:59`,departure:`11:30:39`},{locationId:`xiyan`,rawTimes:[`11:32:46`,`11:33:16`],sourceY:[257.648,269.884],arrival:`11:32:46`,departure:`11:33:16`},{locationId:`chengchang`,rawTimes:[`11:37:15`,`11:37:45`],sourceY:[282.148,294.384],arrival:`11:37:15`,departure:`11:37:45`},{locationId:`bingzhou`,rawTimes:[`11:40:53`,`11:41:23`],sourceY:[306.62,318.856],arrival:`11:40:53`,departure:`11:41:23`},{locationId:`guanxun`,rawTimes:[`11:44:03`,`11:44:33`],sourceY:[331.092,343.328],arrival:`11:44:03`,departure:`11:44:33`},{locationId:`xiamen-north`,rawTimes:[`11:50:03`,`11:50:43`],sourceY:[355.564,367.828],arrival:`11:50:03`,departure:`11:50:43`},{locationId:`houxi`,rawTimes:[`11:53:19`,`11:53:49`],sourceY:[380.064,392.3],arrival:`11:53:19`,departure:`11:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`11:55:50`],sourceY:[429.008],arrival:`11:55:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00207`,direction:`down`,destinationCode:`092`,sourcePage:2,sourceColumn:10,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`10:45:31`,`10:46:21`],sourceY:[135.26,147.496],departure:`10:46:21`,turnbackContextBefore:`10:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`10:46:48`],sourceY:[165.864],pass:`10:46:48`},{locationId:`dongting`,rawTimes:[`10:53:18`,`10:53:48`],sourceY:[184.204,196.468],arrival:`10:53:18`,departure:`10:53:48`},{locationId:`qianwu`,rawTimes:[`10:56:13`,`10:56:43`],sourceY:[208.704,220.94],arrival:`10:56:13`,departure:`10:56:43`},{locationId:`hongkeng`,rawTimes:[`10:59:59`,`11:00:39`],sourceY:[233.176,245.412],arrival:`10:59:59`,departure:`11:00:39`},{locationId:`xiyan`,rawTimes:[`11:02:46`,`11:03:16`],sourceY:[257.648,269.884],arrival:`11:02:46`,departure:`11:03:16`},{locationId:`chengchang`,rawTimes:[`11:07:15`,`11:07:45`],sourceY:[282.148,294.384],arrival:`11:07:15`,departure:`11:07:45`},{locationId:`bingzhou`,rawTimes:[`11:10:53`,`11:11:23`],sourceY:[306.62,318.856],arrival:`11:10:53`,departure:`11:11:23`},{locationId:`guanxun`,rawTimes:[`11:14:03`,`11:14:33`],sourceY:[331.092,343.328],arrival:`11:14:03`,departure:`11:14:33`},{locationId:`xiamen-north`,rawTimes:[`11:20:03`,`11:20:43`],sourceY:[355.564,367.828],arrival:`11:20:03`,departure:`11:20:43`},{locationId:`houxi`,rawTimes:[`11:23:19`,`11:23:49`],sourceY:[380.064,392.3],arrival:`11:23:19`,departure:`11:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`11:25:50`],sourceY:[429.008],arrival:`11:25:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00206`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:1,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`10:39:59`,`10:39:09`],sourceY:[135.26,147.496],arrival:`10:39:09`,turnbackContextAfter:`10:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`10:38:43`],sourceY:[165.864],pass:`10:38:43`},{locationId:`dongting`,rawTimes:[`10:32:09`,`10:31:39`],sourceY:[184.204,196.468],arrival:`10:31:39`,departure:`10:32:09`},{locationId:`qianwu`,rawTimes:[`10:29:14`,`10:28:44`],sourceY:[208.704,220.94],arrival:`10:28:44`,departure:`10:29:14`},{locationId:`hongkeng`,rawTimes:[`10:25:35`,`10:24:55`],sourceY:[233.176,245.412],arrival:`10:24:55`,departure:`10:25:35`},{locationId:`xiyan`,rawTimes:[`10:22:44`,`10:22:14`],sourceY:[257.648,269.884],arrival:`10:22:14`,departure:`10:22:44`},{locationId:`chengchang`,rawTimes:[`10:18:15`,`10:17:45`],sourceY:[282.148,294.384],arrival:`10:17:45`,departure:`10:18:15`},{locationId:`bingzhou`,rawTimes:[`10:14:36`,`10:14:06`],sourceY:[306.62,318.856],arrival:`10:14:06`,departure:`10:14:36`},{locationId:`guanxun`,rawTimes:[`10:11:27`,`10:10:57`],sourceY:[331.092,343.328],arrival:`10:10:57`,departure:`10:11:27`},{locationId:`xiamen-north`,rawTimes:[`10:05:28`,`10:04:48`],sourceY:[355.564,367.828],arrival:`10:04:48`,departure:`10:05:28`},{locationId:`houxi`,rawTimes:[`10:02:15`,`10:01:45`],sourceY:[380.064,392.3],arrival:`10:01:45`,departure:`10:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`10:00:00`],sourceY:[429.008],departure:`10:00:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00106`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:2,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`11:09:59`,`11:09:09`],sourceY:[135.26,147.496],arrival:`11:09:09`,turnbackContextAfter:`11:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`11:08:43`],sourceY:[165.864],pass:`11:08:43`},{locationId:`dongting`,rawTimes:[`11:02:09`,`11:01:39`],sourceY:[184.204,196.468],arrival:`11:01:39`,departure:`11:02:09`},{locationId:`qianwu`,rawTimes:[`10:59:14`,`10:58:44`],sourceY:[208.704,220.94],arrival:`10:58:44`,departure:`10:59:14`},{locationId:`hongkeng`,rawTimes:[`10:55:35`,`10:54:55`],sourceY:[233.176,245.412],arrival:`10:54:55`,departure:`10:55:35`},{locationId:`xiyan`,rawTimes:[`10:52:44`,`10:52:14`],sourceY:[257.648,269.884],arrival:`10:52:14`,departure:`10:52:44`},{locationId:`chengchang`,rawTimes:[`10:48:15`,`10:47:45`],sourceY:[282.148,294.384],arrival:`10:47:45`,departure:`10:48:15`},{locationId:`bingzhou`,rawTimes:[`10:44:36`,`10:44:06`],sourceY:[306.62,318.856],arrival:`10:44:06`,departure:`10:44:36`},{locationId:`guanxun`,rawTimes:[`10:41:27`,`10:40:57`],sourceY:[331.092,343.328],arrival:`10:40:57`,departure:`10:41:27`},{locationId:`xiamen-north`,rawTimes:[`10:35:28`,`10:34:48`],sourceY:[355.564,367.828],arrival:`10:34:48`,departure:`10:35:28`},{locationId:`houxi`,rawTimes:[`10:32:15`,`10:31:45`],sourceY:[380.064,392.3],arrival:`10:31:45`,departure:`10:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`10:30:00`],sourceY:[429.008],departure:`10:30:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00408`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:3,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`11:39:59`,`11:39:09`],sourceY:[135.26,147.496],arrival:`11:39:09`,turnbackContextAfter:`11:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`11:38:43`],sourceY:[165.864],pass:`11:38:43`},{locationId:`dongting`,rawTimes:[`11:32:09`,`11:31:39`],sourceY:[184.204,196.468],arrival:`11:31:39`,departure:`11:32:09`},{locationId:`qianwu`,rawTimes:[`11:29:14`,`11:28:44`],sourceY:[208.704,220.94],arrival:`11:28:44`,departure:`11:29:14`},{locationId:`hongkeng`,rawTimes:[`11:25:35`,`11:24:55`],sourceY:[233.176,245.412],arrival:`11:24:55`,departure:`11:25:35`},{locationId:`xiyan`,rawTimes:[`11:22:44`,`11:22:14`],sourceY:[257.648,269.884],arrival:`11:22:14`,departure:`11:22:44`},{locationId:`chengchang`,rawTimes:[`11:18:15`,`11:17:45`],sourceY:[282.148,294.384],arrival:`11:17:45`,departure:`11:18:15`},{locationId:`bingzhou`,rawTimes:[`11:14:36`,`11:14:06`],sourceY:[306.62,318.856],arrival:`11:14:06`,departure:`11:14:36`},{locationId:`guanxun`,rawTimes:[`11:11:27`,`11:10:57`],sourceY:[331.092,343.328],arrival:`11:10:57`,departure:`11:11:27`},{locationId:`xiamen-north`,rawTimes:[`11:05:28`,`11:04:48`],sourceY:[355.564,367.828],arrival:`11:04:48`,departure:`11:05:28`},{locationId:`houxi`,rawTimes:[`11:02:15`,`11:01:45`],sourceY:[380.064,392.3],arrival:`11:01:45`,departure:`11:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`11:00:00`],sourceY:[429.008],departure:`11:00:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00208`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:4,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`12:09:59`,`12:09:09`],sourceY:[135.26,147.496],arrival:`12:09:09`,turnbackContextAfter:`12:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`12:08:43`],sourceY:[165.864],pass:`12:08:43`},{locationId:`dongting`,rawTimes:[`12:02:09`,`12:01:39`],sourceY:[184.204,196.468],arrival:`12:01:39`,departure:`12:02:09`},{locationId:`qianwu`,rawTimes:[`11:59:14`,`11:58:44`],sourceY:[208.704,220.94],arrival:`11:58:44`,departure:`11:59:14`},{locationId:`hongkeng`,rawTimes:[`11:55:35`,`11:54:55`],sourceY:[233.176,245.412],arrival:`11:54:55`,departure:`11:55:35`},{locationId:`xiyan`,rawTimes:[`11:52:44`,`11:52:14`],sourceY:[257.648,269.884],arrival:`11:52:14`,departure:`11:52:44`},{locationId:`chengchang`,rawTimes:[`11:48:15`,`11:47:45`],sourceY:[282.148,294.384],arrival:`11:47:45`,departure:`11:48:15`},{locationId:`bingzhou`,rawTimes:[`11:44:36`,`11:44:06`],sourceY:[306.62,318.856],arrival:`11:44:06`,departure:`11:44:36`},{locationId:`guanxun`,rawTimes:[`11:41:27`,`11:40:57`],sourceY:[331.092,343.328],arrival:`11:40:57`,departure:`11:41:27`},{locationId:`xiamen-north`,rawTimes:[`11:35:28`,`11:34:48`],sourceY:[355.564,367.828],arrival:`11:34:48`,departure:`11:35:28`},{locationId:`houxi`,rawTimes:[`11:32:15`,`11:31:45`],sourceY:[380.064,392.3],arrival:`11:31:45`,departure:`11:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`11:30:00`],sourceY:[429.008],departure:`11:30:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00108`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:5,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`12:39:59`,`12:39:09`],sourceY:[135.26,147.496],arrival:`12:39:09`,turnbackContextAfter:`12:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`12:38:43`],sourceY:[165.864],pass:`12:38:43`},{locationId:`dongting`,rawTimes:[`12:32:09`,`12:31:39`],sourceY:[184.204,196.468],arrival:`12:31:39`,departure:`12:32:09`},{locationId:`qianwu`,rawTimes:[`12:29:14`,`12:28:44`],sourceY:[208.704,220.94],arrival:`12:28:44`,departure:`12:29:14`},{locationId:`hongkeng`,rawTimes:[`12:25:35`,`12:24:55`],sourceY:[233.176,245.412],arrival:`12:24:55`,departure:`12:25:35`},{locationId:`xiyan`,rawTimes:[`12:22:44`,`12:22:14`],sourceY:[257.648,269.884],arrival:`12:22:14`,departure:`12:22:44`},{locationId:`chengchang`,rawTimes:[`12:18:15`,`12:17:45`],sourceY:[282.148,294.384],arrival:`12:17:45`,departure:`12:18:15`},{locationId:`bingzhou`,rawTimes:[`12:14:36`,`12:14:06`],sourceY:[306.62,318.856],arrival:`12:14:06`,departure:`12:14:36`},{locationId:`guanxun`,rawTimes:[`12:11:27`,`12:10:57`],sourceY:[331.092,343.328],arrival:`12:10:57`,departure:`12:11:27`},{locationId:`xiamen-north`,rawTimes:[`12:05:28`,`12:04:48`],sourceY:[355.564,367.828],arrival:`12:04:48`,departure:`12:05:28`},{locationId:`houxi`,rawTimes:[`12:02:15`,`12:01:45`],sourceY:[380.064,392.3],arrival:`12:01:45`,departure:`12:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`12:00:00`],sourceY:[429.008],departure:`12:00:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00410`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:6,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`13:09:59`,`13:09:09`],sourceY:[135.26,147.496],arrival:`13:09:09`,turnbackContextAfter:`13:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`13:08:43`],sourceY:[165.864],pass:`13:08:43`},{locationId:`dongting`,rawTimes:[`13:02:09`,`13:01:39`],sourceY:[184.204,196.468],arrival:`13:01:39`,departure:`13:02:09`},{locationId:`qianwu`,rawTimes:[`12:59:14`,`12:58:44`],sourceY:[208.704,220.94],arrival:`12:58:44`,departure:`12:59:14`},{locationId:`hongkeng`,rawTimes:[`12:55:35`,`12:54:55`],sourceY:[233.176,245.412],arrival:`12:54:55`,departure:`12:55:35`},{locationId:`xiyan`,rawTimes:[`12:52:44`,`12:52:14`],sourceY:[257.648,269.884],arrival:`12:52:14`,departure:`12:52:44`},{locationId:`chengchang`,rawTimes:[`12:48:15`,`12:47:45`],sourceY:[282.148,294.384],arrival:`12:47:45`,departure:`12:48:15`},{locationId:`bingzhou`,rawTimes:[`12:44:36`,`12:44:06`],sourceY:[306.62,318.856],arrival:`12:44:06`,departure:`12:44:36`},{locationId:`guanxun`,rawTimes:[`12:41:27`,`12:40:57`],sourceY:[331.092,343.328],arrival:`12:40:57`,departure:`12:41:27`},{locationId:`xiamen-north`,rawTimes:[`12:35:28`,`12:34:48`],sourceY:[355.564,367.828],arrival:`12:34:48`,departure:`12:35:28`},{locationId:`houxi`,rawTimes:[`12:32:15`,`12:31:45`],sourceY:[380.064,392.3],arrival:`12:31:45`,departure:`12:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`12:30:00`],sourceY:[429.008],departure:`12:30:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00210`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:7,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`13:39:59`,`13:39:09`],sourceY:[135.26,147.496],arrival:`13:39:09`,turnbackContextAfter:`13:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`13:38:43`],sourceY:[165.864],pass:`13:38:43`},{locationId:`dongting`,rawTimes:[`13:32:09`,`13:31:39`],sourceY:[184.204,196.468],arrival:`13:31:39`,departure:`13:32:09`},{locationId:`qianwu`,rawTimes:[`13:29:14`,`13:28:44`],sourceY:[208.704,220.94],arrival:`13:28:44`,departure:`13:29:14`},{locationId:`hongkeng`,rawTimes:[`13:25:35`,`13:24:55`],sourceY:[233.176,245.412],arrival:`13:24:55`,departure:`13:25:35`},{locationId:`xiyan`,rawTimes:[`13:22:44`,`13:22:14`],sourceY:[257.648,269.884],arrival:`13:22:14`,departure:`13:22:44`},{locationId:`chengchang`,rawTimes:[`13:18:15`,`13:17:45`],sourceY:[282.148,294.384],arrival:`13:17:45`,departure:`13:18:15`},{locationId:`bingzhou`,rawTimes:[`13:14:36`,`13:14:06`],sourceY:[306.62,318.856],arrival:`13:14:06`,departure:`13:14:36`},{locationId:`guanxun`,rawTimes:[`13:11:27`,`13:10:57`],sourceY:[331.092,343.328],arrival:`13:10:57`,departure:`13:11:27`},{locationId:`xiamen-north`,rawTimes:[`13:05:28`,`13:04:48`],sourceY:[355.564,367.828],arrival:`13:04:48`,departure:`13:05:28`},{locationId:`houxi`,rawTimes:[`13:02:15`,`13:01:45`],sourceY:[380.064,392.3],arrival:`13:01:45`,departure:`13:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`13:00:00`],sourceY:[429.008],departure:`13:00:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00110`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:8,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`14:09:59`,`14:09:09`],sourceY:[135.26,147.496],arrival:`14:09:09`,turnbackContextAfter:`14:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`14:08:43`],sourceY:[165.864],pass:`14:08:43`},{locationId:`dongting`,rawTimes:[`14:02:09`,`14:01:39`],sourceY:[184.204,196.468],arrival:`14:01:39`,departure:`14:02:09`},{locationId:`qianwu`,rawTimes:[`13:59:14`,`13:58:44`],sourceY:[208.704,220.94],arrival:`13:58:44`,departure:`13:59:14`},{locationId:`hongkeng`,rawTimes:[`13:55:35`,`13:54:55`],sourceY:[233.176,245.412],arrival:`13:54:55`,departure:`13:55:35`},{locationId:`xiyan`,rawTimes:[`13:52:44`,`13:52:14`],sourceY:[257.648,269.884],arrival:`13:52:14`,departure:`13:52:44`},{locationId:`chengchang`,rawTimes:[`13:48:15`,`13:47:45`],sourceY:[282.148,294.384],arrival:`13:47:45`,departure:`13:48:15`},{locationId:`bingzhou`,rawTimes:[`13:44:36`,`13:44:06`],sourceY:[306.62,318.856],arrival:`13:44:06`,departure:`13:44:36`},{locationId:`guanxun`,rawTimes:[`13:41:27`,`13:40:57`],sourceY:[331.092,343.328],arrival:`13:40:57`,departure:`13:41:27`},{locationId:`xiamen-north`,rawTimes:[`13:35:28`,`13:34:48`],sourceY:[355.564,367.828],arrival:`13:34:48`,departure:`13:35:28`},{locationId:`houxi`,rawTimes:[`13:32:15`,`13:31:45`],sourceY:[380.064,392.3],arrival:`13:31:45`,departure:`13:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`13:30:00`],sourceY:[429.008],departure:`13:30:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00412`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:9,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`14:39:59`,`14:39:09`],sourceY:[135.26,147.496],arrival:`14:39:09`,turnbackContextAfter:`14:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`14:38:43`],sourceY:[165.864],pass:`14:38:43`},{locationId:`dongting`,rawTimes:[`14:32:09`,`14:31:39`],sourceY:[184.204,196.468],arrival:`14:31:39`,departure:`14:32:09`},{locationId:`qianwu`,rawTimes:[`14:29:14`,`14:28:44`],sourceY:[208.704,220.94],arrival:`14:28:44`,departure:`14:29:14`},{locationId:`hongkeng`,rawTimes:[`14:25:35`,`14:24:55`],sourceY:[233.176,245.412],arrival:`14:24:55`,departure:`14:25:35`},{locationId:`xiyan`,rawTimes:[`14:22:44`,`14:22:14`],sourceY:[257.648,269.884],arrival:`14:22:14`,departure:`14:22:44`},{locationId:`chengchang`,rawTimes:[`14:18:15`,`14:17:45`],sourceY:[282.148,294.384],arrival:`14:17:45`,departure:`14:18:15`},{locationId:`bingzhou`,rawTimes:[`14:14:36`,`14:14:06`],sourceY:[306.62,318.856],arrival:`14:14:06`,departure:`14:14:36`},{locationId:`guanxun`,rawTimes:[`14:11:27`,`14:10:57`],sourceY:[331.092,343.328],arrival:`14:10:57`,departure:`14:11:27`},{locationId:`xiamen-north`,rawTimes:[`14:05:28`,`14:04:48`],sourceY:[355.564,367.828],arrival:`14:04:48`,departure:`14:05:28`},{locationId:`houxi`,rawTimes:[`14:02:15`,`14:01:45`],sourceY:[380.064,392.3],arrival:`14:01:45`,departure:`14:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`14:00:00`],sourceY:[429.008],departure:`14:00:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00212`,direction:`up`,destinationCode:`204`,sourcePage:2,sourceColumn:10,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`15:09:59`,`15:09:09`],sourceY:[135.26,147.496],arrival:`15:09:09`,turnbackContextAfter:`15:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`15:08:43`],sourceY:[165.864],pass:`15:08:43`},{locationId:`dongting`,rawTimes:[`15:02:09`,`15:01:39`],sourceY:[184.204,196.468],arrival:`15:01:39`,departure:`15:02:09`},{locationId:`qianwu`,rawTimes:[`14:59:14`,`14:58:44`],sourceY:[208.704,220.94],arrival:`14:58:44`,departure:`14:59:14`},{locationId:`hongkeng`,rawTimes:[`14:55:35`,`14:54:55`],sourceY:[233.176,245.412],arrival:`14:54:55`,departure:`14:55:35`},{locationId:`xiyan`,rawTimes:[`14:52:44`,`14:52:14`],sourceY:[257.648,269.884],arrival:`14:52:14`,departure:`14:52:44`},{locationId:`chengchang`,rawTimes:[`14:48:15`,`14:47:45`],sourceY:[282.148,294.384],arrival:`14:47:45`,departure:`14:48:15`},{locationId:`bingzhou`,rawTimes:[`14:44:36`,`14:44:06`],sourceY:[306.62,318.856],arrival:`14:44:06`,departure:`14:44:36`},{locationId:`guanxun`,rawTimes:[`14:41:27`,`14:40:57`],sourceY:[331.092,343.328],arrival:`14:40:57`,departure:`14:41:27`},{locationId:`xiamen-north`,rawTimes:[`14:35:28`,`14:34:48`],sourceY:[355.564,367.828],arrival:`14:34:48`,departure:`14:35:28`},{locationId:`houxi`,rawTimes:[`14:32:15`,`14:31:45`],sourceY:[380.064,392.3],arrival:`14:31:45`,departure:`14:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`14:30:00`],sourceY:[429.008],departure:`14:30:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00219`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:1,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`19:58:10`,`20:00:00`],sourceY:[135.26,147.496],departure:`20:00:00`,turnbackContextBefore:`19:58:10`},{locationId:`airport-west-reserved`,rawTimes:[`20:00:27`],sourceY:[165.864],pass:`20:00:27`},{locationId:`dongting`,rawTimes:[`20:06:57`,`20:07:27`],sourceY:[184.204,196.468],arrival:`20:06:57`,departure:`20:07:27`},{locationId:`qianwu`,rawTimes:[`20:09:52`,`20:10:22`],sourceY:[208.704,220.94],arrival:`20:09:52`,departure:`20:10:22`},{locationId:`hongkeng`,rawTimes:[`20:13:38`,`20:14:18`],sourceY:[233.176,245.412],arrival:`20:13:38`,departure:`20:14:18`},{locationId:`xiyan`,rawTimes:[`20:16:25`,`20:16:55`],sourceY:[257.648,269.884],arrival:`20:16:25`,departure:`20:16:55`},{locationId:`chengchang`,rawTimes:[`20:20:54`,`20:21:24`],sourceY:[282.148,294.384],arrival:`20:20:54`,departure:`20:21:24`},{locationId:`bingzhou`,rawTimes:[`20:24:32`,`20:25:02`],sourceY:[306.62,318.856],arrival:`20:24:32`,departure:`20:25:02`},{locationId:`guanxun`,rawTimes:[`20:27:42`,`20:28:12`],sourceY:[331.092,343.328],arrival:`20:27:42`,departure:`20:28:12`},{locationId:`xiamen-north`,rawTimes:[`20:33:42`,`20:34:22`],sourceY:[355.564,367.828],arrival:`20:33:42`,departure:`20:34:22`},{locationId:`houxi`,rawTimes:[`20:36:58`,`20:37:38`],sourceY:[380.064,392.3],arrival:`20:36:58`,departure:`20:37:38`},{locationId:`jimei-software-park-north`,rawTimes:[`20:39:39`],sourceY:[429.008],arrival:`20:39:39`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00501`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:2,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`19:37:20`,`19:38:10`],sourceY:[135.26,147.496],departure:`19:38:10`,turnbackContextBefore:`19:37:20`},{locationId:`airport-west-reserved`,rawTimes:[`19:38:37`],sourceY:[165.864],pass:`19:38:37`},{locationId:`dongting`,rawTimes:[`19:45:07`,`19:45:37`],sourceY:[184.204,196.468],arrival:`19:45:07`,departure:`19:45:37`},{locationId:`qianwu`,rawTimes:[`19:48:02`,`19:48:32`],sourceY:[208.704,220.94],arrival:`19:48:02`,departure:`19:48:32`},{locationId:`hongkeng`,rawTimes:[`19:51:48`,`19:52:28`],sourceY:[233.176,245.412],arrival:`19:51:48`,departure:`19:52:28`},{locationId:`xiyan`,rawTimes:[`19:54:35`,`19:55:05`],sourceY:[257.648,269.884],arrival:`19:54:35`,departure:`19:55:05`},{locationId:`chengchang`,rawTimes:[`19:59:04`,`19:59:34`],sourceY:[282.148,294.384],arrival:`19:59:04`,departure:`19:59:34`},{locationId:`bingzhou`,rawTimes:[`20:02:42`,`20:03:12`],sourceY:[306.62,318.856],arrival:`20:02:42`,departure:`20:03:12`},{locationId:`guanxun`,rawTimes:[`20:05:52`,`20:06:22`],sourceY:[331.092,343.328],arrival:`20:05:52`,departure:`20:06:22`},{locationId:`xiamen-north`,rawTimes:[`20:11:52`,`20:12:32`],sourceY:[355.564,367.828],arrival:`20:11:52`,departure:`20:12:32`},{locationId:`houxi`,rawTimes:[`20:15:08`,`20:15:38`],sourceY:[380.064,392.3],arrival:`20:15:08`,departure:`20:15:38`},{locationId:`jimei-software-park-north`,rawTimes:[`20:17:39`],sourceY:[429.008],arrival:`20:17:39`}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`revenue`,movementType:`passenger-service`,preTripState:`standby-xiangan-turnback-i`,preTripStateAt:`19:36:00`},{tripId:`00419`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:3,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`19:15:31`,`19:16:21`],sourceY:[135.26,147.496],departure:`19:16:21`,turnbackContextBefore:`19:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`19:16:48`],sourceY:[165.864],pass:`19:16:48`},{locationId:`dongting`,rawTimes:[`19:23:18`,`19:23:48`],sourceY:[184.204,196.468],arrival:`19:23:18`,departure:`19:23:48`},{locationId:`qianwu`,rawTimes:[`19:26:13`,`19:26:43`],sourceY:[208.704,220.94],arrival:`19:26:13`,departure:`19:26:43`},{locationId:`hongkeng`,rawTimes:[`19:29:59`,`19:30:39`],sourceY:[233.176,245.412],arrival:`19:29:59`,departure:`19:30:39`},{locationId:`xiyan`,rawTimes:[`19:32:46`,`19:33:16`],sourceY:[257.648,269.884],arrival:`19:32:46`,departure:`19:33:16`},{locationId:`chengchang`,rawTimes:[`19:37:15`,`19:37:45`],sourceY:[282.148,294.384],arrival:`19:37:15`,departure:`19:37:45`},{locationId:`bingzhou`,rawTimes:[`19:40:53`,`19:41:23`],sourceY:[306.62,318.856],arrival:`19:40:53`,departure:`19:41:23`},{locationId:`guanxun`,rawTimes:[`19:44:03`,`19:44:33`],sourceY:[331.092,343.328],arrival:`19:44:03`,departure:`19:44:33`},{locationId:`xiamen-north`,rawTimes:[`19:50:03`,`19:50:43`],sourceY:[355.564,367.828],arrival:`19:50:03`,departure:`19:50:43`},{locationId:`houxi`,rawTimes:[`19:53:19`,`19:53:49`],sourceY:[380.064,392.3],arrival:`19:53:19`,departure:`19:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`19:55:50`],sourceY:[429.008],arrival:`19:55:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00117`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:4,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`18:45:31`,`18:46:21`],sourceY:[135.26,147.496],departure:`18:46:21`,turnbackContextBefore:`18:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`18:46:48`],sourceY:[165.864],pass:`18:46:48`},{locationId:`dongting`,rawTimes:[`18:53:18`,`18:53:48`],sourceY:[184.204,196.468],arrival:`18:53:18`,departure:`18:53:48`},{locationId:`qianwu`,rawTimes:[`18:56:13`,`18:56:43`],sourceY:[208.704,220.94],arrival:`18:56:13`,departure:`18:56:43`},{locationId:`hongkeng`,rawTimes:[`18:59:59`,`19:00:39`],sourceY:[233.176,245.412],arrival:`18:59:59`,departure:`19:00:39`},{locationId:`xiyan`,rawTimes:[`19:02:46`,`19:03:16`],sourceY:[257.648,269.884],arrival:`19:02:46`,departure:`19:03:16`},{locationId:`chengchang`,rawTimes:[`19:07:15`,`19:07:45`],sourceY:[282.148,294.384],arrival:`19:07:15`,departure:`19:07:45`},{locationId:`bingzhou`,rawTimes:[`19:10:53`,`19:11:23`],sourceY:[306.62,318.856],arrival:`19:10:53`,departure:`19:11:23`},{locationId:`guanxun`,rawTimes:[`19:14:03`,`19:14:33`],sourceY:[331.092,343.328],arrival:`19:14:03`,departure:`19:14:33`},{locationId:`xiamen-north`,rawTimes:[`19:20:03`,`19:20:43`],sourceY:[355.564,367.828],arrival:`19:20:03`,departure:`19:20:43`},{locationId:`houxi`,rawTimes:[`19:23:19`,`19:23:49`],sourceY:[380.064,392.3],arrival:`19:23:19`,departure:`19:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`19:25:50`],sourceY:[429.008],arrival:`19:25:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00217`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:5,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`18:15:31`,`18:16:21`],sourceY:[135.26,147.496],departure:`18:16:21`,turnbackContextBefore:`18:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`18:16:48`],sourceY:[165.864],pass:`18:16:48`},{locationId:`dongting`,rawTimes:[`18:23:18`,`18:23:48`],sourceY:[184.204,196.468],arrival:`18:23:18`,departure:`18:23:48`},{locationId:`qianwu`,rawTimes:[`18:26:13`,`18:26:43`],sourceY:[208.704,220.94],arrival:`18:26:13`,departure:`18:26:43`},{locationId:`hongkeng`,rawTimes:[`18:29:59`,`18:30:39`],sourceY:[233.176,245.412],arrival:`18:29:59`,departure:`18:30:39`},{locationId:`xiyan`,rawTimes:[`18:32:46`,`18:33:16`],sourceY:[257.648,269.884],arrival:`18:32:46`,departure:`18:33:16`},{locationId:`chengchang`,rawTimes:[`18:37:15`,`18:37:45`],sourceY:[282.148,294.384],arrival:`18:37:15`,departure:`18:37:45`},{locationId:`bingzhou`,rawTimes:[`18:40:53`,`18:41:23`],sourceY:[306.62,318.856],arrival:`18:40:53`,departure:`18:41:23`},{locationId:`guanxun`,rawTimes:[`18:44:03`,`18:44:33`],sourceY:[331.092,343.328],arrival:`18:44:03`,departure:`18:44:33`},{locationId:`xiamen-north`,rawTimes:[`18:50:03`,`18:50:43`],sourceY:[355.564,367.828],arrival:`18:50:03`,departure:`18:50:43`},{locationId:`houxi`,rawTimes:[`18:53:19`,`18:53:49`],sourceY:[380.064,392.3],arrival:`18:53:19`,departure:`18:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`18:55:50`],sourceY:[429.008],arrival:`18:55:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00417`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:6,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`17:45:31`,`17:46:21`],sourceY:[135.26,147.496],departure:`17:46:21`,turnbackContextBefore:`17:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`17:46:48`],sourceY:[165.864],pass:`17:46:48`},{locationId:`dongting`,rawTimes:[`17:53:18`,`17:53:48`],sourceY:[184.204,196.468],arrival:`17:53:18`,departure:`17:53:48`},{locationId:`qianwu`,rawTimes:[`17:56:13`,`17:56:43`],sourceY:[208.704,220.94],arrival:`17:56:13`,departure:`17:56:43`},{locationId:`hongkeng`,rawTimes:[`17:59:59`,`18:00:39`],sourceY:[233.176,245.412],arrival:`17:59:59`,departure:`18:00:39`},{locationId:`xiyan`,rawTimes:[`18:02:46`,`18:03:16`],sourceY:[257.648,269.884],arrival:`18:02:46`,departure:`18:03:16`},{locationId:`chengchang`,rawTimes:[`18:07:15`,`18:07:45`],sourceY:[282.148,294.384],arrival:`18:07:15`,departure:`18:07:45`},{locationId:`bingzhou`,rawTimes:[`18:10:53`,`18:11:23`],sourceY:[306.62,318.856],arrival:`18:10:53`,departure:`18:11:23`},{locationId:`guanxun`,rawTimes:[`18:14:03`,`18:14:33`],sourceY:[331.092,343.328],arrival:`18:14:03`,departure:`18:14:33`},{locationId:`xiamen-north`,rawTimes:[`18:20:03`,`18:20:43`],sourceY:[355.564,367.828],arrival:`18:20:03`,departure:`18:20:43`},{locationId:`houxi`,rawTimes:[`18:23:19`,`18:23:49`],sourceY:[380.064,392.3],arrival:`18:23:19`,departure:`18:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`18:25:50`],sourceY:[429.008],arrival:`18:25:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00115`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:7,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`17:15:31`,`17:16:21`],sourceY:[135.26,147.496],departure:`17:16:21`,turnbackContextBefore:`17:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`17:16:48`],sourceY:[165.864],pass:`17:16:48`},{locationId:`dongting`,rawTimes:[`17:23:18`,`17:23:48`],sourceY:[184.204,196.468],arrival:`17:23:18`,departure:`17:23:48`},{locationId:`qianwu`,rawTimes:[`17:26:13`,`17:26:43`],sourceY:[208.704,220.94],arrival:`17:26:13`,departure:`17:26:43`},{locationId:`hongkeng`,rawTimes:[`17:29:59`,`17:30:39`],sourceY:[233.176,245.412],arrival:`17:29:59`,departure:`17:30:39`},{locationId:`xiyan`,rawTimes:[`17:32:46`,`17:33:16`],sourceY:[257.648,269.884],arrival:`17:32:46`,departure:`17:33:16`},{locationId:`chengchang`,rawTimes:[`17:37:15`,`17:37:45`],sourceY:[282.148,294.384],arrival:`17:37:15`,departure:`17:37:45`},{locationId:`bingzhou`,rawTimes:[`17:40:53`,`17:41:23`],sourceY:[306.62,318.856],arrival:`17:40:53`,departure:`17:41:23`},{locationId:`guanxun`,rawTimes:[`17:44:03`,`17:44:33`],sourceY:[331.092,343.328],arrival:`17:44:03`,departure:`17:44:33`},{locationId:`xiamen-north`,rawTimes:[`17:50:03`,`17:50:43`],sourceY:[355.564,367.828],arrival:`17:50:03`,departure:`17:50:43`},{locationId:`houxi`,rawTimes:[`17:53:19`,`17:53:49`],sourceY:[380.064,392.3],arrival:`17:53:19`,departure:`17:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`17:55:50`],sourceY:[429.008],arrival:`17:55:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00215`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:8,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`16:45:31`,`16:46:21`],sourceY:[135.26,147.496],departure:`16:46:21`,turnbackContextBefore:`16:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`16:46:48`],sourceY:[165.864],pass:`16:46:48`},{locationId:`dongting`,rawTimes:[`16:53:18`,`16:53:48`],sourceY:[184.204,196.468],arrival:`16:53:18`,departure:`16:53:48`},{locationId:`qianwu`,rawTimes:[`16:56:13`,`16:56:43`],sourceY:[208.704,220.94],arrival:`16:56:13`,departure:`16:56:43`},{locationId:`hongkeng`,rawTimes:[`16:59:59`,`17:00:39`],sourceY:[233.176,245.412],arrival:`16:59:59`,departure:`17:00:39`},{locationId:`xiyan`,rawTimes:[`17:02:46`,`17:03:16`],sourceY:[257.648,269.884],arrival:`17:02:46`,departure:`17:03:16`},{locationId:`chengchang`,rawTimes:[`17:07:15`,`17:07:45`],sourceY:[282.148,294.384],arrival:`17:07:15`,departure:`17:07:45`},{locationId:`bingzhou`,rawTimes:[`17:10:53`,`17:11:23`],sourceY:[306.62,318.856],arrival:`17:10:53`,departure:`17:11:23`},{locationId:`guanxun`,rawTimes:[`17:14:03`,`17:14:33`],sourceY:[331.092,343.328],arrival:`17:14:03`,departure:`17:14:33`},{locationId:`xiamen-north`,rawTimes:[`17:20:03`,`17:20:43`],sourceY:[355.564,367.828],arrival:`17:20:03`,departure:`17:20:43`},{locationId:`houxi`,rawTimes:[`17:23:19`,`17:23:49`],sourceY:[380.064,392.3],arrival:`17:23:19`,departure:`17:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`17:25:50`],sourceY:[429.008],arrival:`17:25:50`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00415`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:9,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`16:15:31`,`16:16:21`],sourceY:[135.26,147.496],departure:`16:16:21`,turnbackContextBefore:`16:15:31`},{locationId:`airport-west-reserved`,rawTimes:[`16:16:48`],sourceY:[165.864],pass:`16:16:48`},{locationId:`dongting`,rawTimes:[`16:23:18`,`16:23:48`],sourceY:[184.204,196.468],arrival:`16:23:18`,departure:`16:23:48`},{locationId:`qianwu`,rawTimes:[`16:26:13`,`16:26:43`],sourceY:[208.704,220.94],arrival:`16:26:13`,departure:`16:26:43`},{locationId:`hongkeng`,rawTimes:[`16:29:59`,`16:30:39`],sourceY:[233.176,245.412],arrival:`16:29:59`,departure:`16:30:39`},{locationId:`xiyan`,rawTimes:[`16:32:46`,`16:33:16`],sourceY:[257.648,269.884],arrival:`16:32:46`,departure:`16:33:16`},{locationId:`chengchang`,rawTimes:[`16:37:15`,`16:37:45`],sourceY:[282.148,294.384],arrival:`16:37:15`,departure:`16:37:45`},{locationId:`bingzhou`,rawTimes:[`16:40:53`,`16:41:23`],sourceY:[306.62,318.856],arrival:`16:40:53`,departure:`16:41:23`},{locationId:`guanxun`,rawTimes:[`16:44:03`,`16:44:33`],sourceY:[331.092,343.328],arrival:`16:44:03`,departure:`16:44:33`},{locationId:`xiamen-north`,rawTimes:[`16:50:03`,`16:50:43`],sourceY:[355.564,367.828],arrival:`16:50:03`,departure:`16:50:43`},{locationId:`houxi`,rawTimes:[`16:53:19`,`16:53:49`],sourceY:[380.064,392.3],arrival:`16:53:19`,departure:`16:53:49`},{locationId:`jimei-software-park-north`,rawTimes:[`16:55:50`],sourceY:[429.008],arrival:`16:55:50`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00113`,direction:`down`,destinationCode:`092`,sourcePage:3,sourceColumn:10,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`15:45:31`,`15:46:21`],sourceY:[135.26,147.496],departure:`15:46:21`,turnbackContextBefore:`15:45:31`},{locationId:`airport-west-reserved`,rawTimes:[`15:46:48`],sourceY:[165.864],pass:`15:46:48`},{locationId:`dongting`,rawTimes:[`15:53:18`,`15:53:48`],sourceY:[184.204,196.468],arrival:`15:53:18`,departure:`15:53:48`},{locationId:`qianwu`,rawTimes:[`15:56:13`,`15:56:43`],sourceY:[208.704,220.94],arrival:`15:56:13`,departure:`15:56:43`},{locationId:`hongkeng`,rawTimes:[`15:59:59`,`16:00:39`],sourceY:[233.176,245.412],arrival:`15:59:59`,departure:`16:00:39`},{locationId:`xiyan`,rawTimes:[`16:02:46`,`16:03:16`],sourceY:[257.648,269.884],arrival:`16:02:46`,departure:`16:03:16`},{locationId:`chengchang`,rawTimes:[`16:07:15`,`16:07:45`],sourceY:[282.148,294.384],arrival:`16:07:15`,departure:`16:07:45`},{locationId:`bingzhou`,rawTimes:[`16:10:53`,`16:11:23`],sourceY:[306.62,318.856],arrival:`16:10:53`,departure:`16:11:23`},{locationId:`guanxun`,rawTimes:[`16:14:03`,`16:14:33`],sourceY:[331.092,343.328],arrival:`16:14:03`,departure:`16:14:33`},{locationId:`xiamen-north`,rawTimes:[`16:20:03`,`16:20:43`],sourceY:[355.564,367.828],arrival:`16:20:03`,departure:`16:20:43`},{locationId:`houxi`,rawTimes:[`16:23:19`,`16:23:49`],sourceY:[380.064,392.3],arrival:`16:23:19`,departure:`16:23:49`},{locationId:`jimei-software-park-north`,rawTimes:[`16:25:50`],sourceY:[429.008],arrival:`16:25:50`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00112`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:1,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`15:39:59`,`15:39:09`],sourceY:[135.26,147.496],arrival:`15:39:09`,turnbackContextAfter:`15:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`15:38:43`],sourceY:[165.864],pass:`15:38:43`},{locationId:`dongting`,rawTimes:[`15:32:09`,`15:31:39`],sourceY:[184.204,196.468],arrival:`15:31:39`,departure:`15:32:09`},{locationId:`qianwu`,rawTimes:[`15:29:14`,`15:28:44`],sourceY:[208.704,220.94],arrival:`15:28:44`,departure:`15:29:14`},{locationId:`hongkeng`,rawTimes:[`15:25:35`,`15:24:55`],sourceY:[233.176,245.412],arrival:`15:24:55`,departure:`15:25:35`},{locationId:`xiyan`,rawTimes:[`15:22:44`,`15:22:14`],sourceY:[257.648,269.884],arrival:`15:22:14`,departure:`15:22:44`},{locationId:`chengchang`,rawTimes:[`15:18:15`,`15:17:45`],sourceY:[282.148,294.384],arrival:`15:17:45`,departure:`15:18:15`},{locationId:`bingzhou`,rawTimes:[`15:14:36`,`15:14:06`],sourceY:[306.62,318.856],arrival:`15:14:06`,departure:`15:14:36`},{locationId:`guanxun`,rawTimes:[`15:11:27`,`15:10:57`],sourceY:[331.092,343.328],arrival:`15:10:57`,departure:`15:11:27`},{locationId:`xiamen-north`,rawTimes:[`15:05:28`,`15:04:48`],sourceY:[355.564,367.828],arrival:`15:04:48`,departure:`15:05:28`},{locationId:`houxi`,rawTimes:[`15:02:15`,`15:01:45`],sourceY:[380.064,392.3],arrival:`15:01:45`,departure:`15:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`15:00:00`],sourceY:[429.008],departure:`15:00:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00414`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:2,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`16:09:59`,`16:09:09`],sourceY:[135.26,147.496],arrival:`16:09:09`,turnbackContextAfter:`16:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`16:08:43`],sourceY:[165.864],pass:`16:08:43`},{locationId:`dongting`,rawTimes:[`16:02:09`,`16:01:39`],sourceY:[184.204,196.468],arrival:`16:01:39`,departure:`16:02:09`},{locationId:`qianwu`,rawTimes:[`15:59:14`,`15:58:44`],sourceY:[208.704,220.94],arrival:`15:58:44`,departure:`15:59:14`},{locationId:`hongkeng`,rawTimes:[`15:55:35`,`15:54:55`],sourceY:[233.176,245.412],arrival:`15:54:55`,departure:`15:55:35`},{locationId:`xiyan`,rawTimes:[`15:52:44`,`15:52:14`],sourceY:[257.648,269.884],arrival:`15:52:14`,departure:`15:52:44`},{locationId:`chengchang`,rawTimes:[`15:48:15`,`15:47:45`],sourceY:[282.148,294.384],arrival:`15:47:45`,departure:`15:48:15`},{locationId:`bingzhou`,rawTimes:[`15:44:36`,`15:44:06`],sourceY:[306.62,318.856],arrival:`15:44:06`,departure:`15:44:36`},{locationId:`guanxun`,rawTimes:[`15:41:27`,`15:40:57`],sourceY:[331.092,343.328],arrival:`15:40:57`,departure:`15:41:27`},{locationId:`xiamen-north`,rawTimes:[`15:35:28`,`15:34:48`],sourceY:[355.564,367.828],arrival:`15:34:48`,departure:`15:35:28`},{locationId:`houxi`,rawTimes:[`15:32:15`,`15:31:45`],sourceY:[380.064,392.3],arrival:`15:31:45`,departure:`15:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`15:30:00`],sourceY:[429.008],departure:`15:30:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00214`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:3,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`16:39:59`,`16:39:09`],sourceY:[135.26,147.496],arrival:`16:39:09`,turnbackContextAfter:`16:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`16:38:43`],sourceY:[165.864],pass:`16:38:43`},{locationId:`dongting`,rawTimes:[`16:32:09`,`16:31:39`],sourceY:[184.204,196.468],arrival:`16:31:39`,departure:`16:32:09`},{locationId:`qianwu`,rawTimes:[`16:29:14`,`16:28:44`],sourceY:[208.704,220.94],arrival:`16:28:44`,departure:`16:29:14`},{locationId:`hongkeng`,rawTimes:[`16:25:35`,`16:24:55`],sourceY:[233.176,245.412],arrival:`16:24:55`,departure:`16:25:35`},{locationId:`xiyan`,rawTimes:[`16:22:44`,`16:22:14`],sourceY:[257.648,269.884],arrival:`16:22:14`,departure:`16:22:44`},{locationId:`chengchang`,rawTimes:[`16:18:15`,`16:17:45`],sourceY:[282.148,294.384],arrival:`16:17:45`,departure:`16:18:15`},{locationId:`bingzhou`,rawTimes:[`16:14:36`,`16:14:06`],sourceY:[306.62,318.856],arrival:`16:14:06`,departure:`16:14:36`},{locationId:`guanxun`,rawTimes:[`16:11:27`,`16:10:57`],sourceY:[331.092,343.328],arrival:`16:10:57`,departure:`16:11:27`},{locationId:`xiamen-north`,rawTimes:[`16:05:28`,`16:04:48`],sourceY:[355.564,367.828],arrival:`16:04:48`,departure:`16:05:28`},{locationId:`houxi`,rawTimes:[`16:02:15`,`16:01:45`],sourceY:[380.064,392.3],arrival:`16:01:45`,departure:`16:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`16:00:00`],sourceY:[429.008],departure:`16:00:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00114`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:4,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`17:09:59`,`17:09:09`],sourceY:[135.26,147.496],arrival:`17:09:09`,turnbackContextAfter:`17:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`17:08:43`],sourceY:[165.864],pass:`17:08:43`},{locationId:`dongting`,rawTimes:[`17:02:09`,`17:01:39`],sourceY:[184.204,196.468],arrival:`17:01:39`,departure:`17:02:09`},{locationId:`qianwu`,rawTimes:[`16:59:14`,`16:58:44`],sourceY:[208.704,220.94],arrival:`16:58:44`,departure:`16:59:14`},{locationId:`hongkeng`,rawTimes:[`16:55:35`,`16:54:55`],sourceY:[233.176,245.412],arrival:`16:54:55`,departure:`16:55:35`},{locationId:`xiyan`,rawTimes:[`16:52:44`,`16:52:14`],sourceY:[257.648,269.884],arrival:`16:52:14`,departure:`16:52:44`},{locationId:`chengchang`,rawTimes:[`16:48:15`,`16:47:45`],sourceY:[282.148,294.384],arrival:`16:47:45`,departure:`16:48:15`},{locationId:`bingzhou`,rawTimes:[`16:44:36`,`16:44:06`],sourceY:[306.62,318.856],arrival:`16:44:06`,departure:`16:44:36`},{locationId:`guanxun`,rawTimes:[`16:41:27`,`16:40:57`],sourceY:[331.092,343.328],arrival:`16:40:57`,departure:`16:41:27`},{locationId:`xiamen-north`,rawTimes:[`16:35:28`,`16:34:48`],sourceY:[355.564,367.828],arrival:`16:34:48`,departure:`16:35:28`},{locationId:`houxi`,rawTimes:[`16:32:15`,`16:31:45`],sourceY:[380.064,392.3],arrival:`16:31:45`,departure:`16:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`16:30:00`],sourceY:[429.008],departure:`16:30:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00416`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:5,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`17:39:59`,`17:39:09`],sourceY:[135.26,147.496],arrival:`17:39:09`,turnbackContextAfter:`17:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`17:38:43`],sourceY:[165.864],pass:`17:38:43`},{locationId:`dongting`,rawTimes:[`17:32:09`,`17:31:39`],sourceY:[184.204,196.468],arrival:`17:31:39`,departure:`17:32:09`},{locationId:`qianwu`,rawTimes:[`17:29:14`,`17:28:44`],sourceY:[208.704,220.94],arrival:`17:28:44`,departure:`17:29:14`},{locationId:`hongkeng`,rawTimes:[`17:25:35`,`17:24:55`],sourceY:[233.176,245.412],arrival:`17:24:55`,departure:`17:25:35`},{locationId:`xiyan`,rawTimes:[`17:22:44`,`17:22:14`],sourceY:[257.648,269.884],arrival:`17:22:14`,departure:`17:22:44`},{locationId:`chengchang`,rawTimes:[`17:18:15`,`17:17:45`],sourceY:[282.148,294.384],arrival:`17:17:45`,departure:`17:18:15`},{locationId:`bingzhou`,rawTimes:[`17:14:36`,`17:14:06`],sourceY:[306.62,318.856],arrival:`17:14:06`,departure:`17:14:36`},{locationId:`guanxun`,rawTimes:[`17:11:27`,`17:10:57`],sourceY:[331.092,343.328],arrival:`17:10:57`,departure:`17:11:27`},{locationId:`xiamen-north`,rawTimes:[`17:05:28`,`17:04:48`],sourceY:[355.564,367.828],arrival:`17:04:48`,departure:`17:05:28`},{locationId:`houxi`,rawTimes:[`17:02:15`,`17:01:45`],sourceY:[380.064,392.3],arrival:`17:01:45`,departure:`17:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`17:00:00`],sourceY:[429.008],departure:`17:00:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00216`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:6,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`18:09:59`,`18:09:09`],sourceY:[135.26,147.496],arrival:`18:09:09`,turnbackContextAfter:`18:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`18:08:43`],sourceY:[165.864],pass:`18:08:43`},{locationId:`dongting`,rawTimes:[`18:02:09`,`18:01:39`],sourceY:[184.204,196.468],arrival:`18:01:39`,departure:`18:02:09`},{locationId:`qianwu`,rawTimes:[`17:59:14`,`17:58:44`],sourceY:[208.704,220.94],arrival:`17:58:44`,departure:`17:59:14`},{locationId:`hongkeng`,rawTimes:[`17:55:35`,`17:54:55`],sourceY:[233.176,245.412],arrival:`17:54:55`,departure:`17:55:35`},{locationId:`xiyan`,rawTimes:[`17:52:44`,`17:52:14`],sourceY:[257.648,269.884],arrival:`17:52:14`,departure:`17:52:44`},{locationId:`chengchang`,rawTimes:[`17:48:15`,`17:47:45`],sourceY:[282.148,294.384],arrival:`17:47:45`,departure:`17:48:15`},{locationId:`bingzhou`,rawTimes:[`17:44:36`,`17:44:06`],sourceY:[306.62,318.856],arrival:`17:44:06`,departure:`17:44:36`},{locationId:`guanxun`,rawTimes:[`17:41:27`,`17:40:57`],sourceY:[331.092,343.328],arrival:`17:40:57`,departure:`17:41:27`},{locationId:`xiamen-north`,rawTimes:[`17:35:28`,`17:34:48`],sourceY:[355.564,367.828],arrival:`17:34:48`,departure:`17:35:28`},{locationId:`houxi`,rawTimes:[`17:32:15`,`17:31:45`],sourceY:[380.064,392.3],arrival:`17:31:45`,departure:`17:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`17:30:00`],sourceY:[429.008],departure:`17:30:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00116`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:7,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`18:39:59`,`18:39:09`],sourceY:[135.26,147.496],arrival:`18:39:09`,turnbackContextAfter:`18:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`18:38:43`],sourceY:[165.864],pass:`18:38:43`},{locationId:`dongting`,rawTimes:[`18:32:09`,`18:31:39`],sourceY:[184.204,196.468],arrival:`18:31:39`,departure:`18:32:09`},{locationId:`qianwu`,rawTimes:[`18:29:14`,`18:28:44`],sourceY:[208.704,220.94],arrival:`18:28:44`,departure:`18:29:14`},{locationId:`hongkeng`,rawTimes:[`18:25:35`,`18:24:55`],sourceY:[233.176,245.412],arrival:`18:24:55`,departure:`18:25:35`},{locationId:`xiyan`,rawTimes:[`18:22:44`,`18:22:14`],sourceY:[257.648,269.884],arrival:`18:22:14`,departure:`18:22:44`},{locationId:`chengchang`,rawTimes:[`18:18:15`,`18:17:45`],sourceY:[282.148,294.384],arrival:`18:17:45`,departure:`18:18:15`},{locationId:`bingzhou`,rawTimes:[`18:14:36`,`18:14:06`],sourceY:[306.62,318.856],arrival:`18:14:06`,departure:`18:14:36`},{locationId:`guanxun`,rawTimes:[`18:11:27`,`18:10:57`],sourceY:[331.092,343.328],arrival:`18:10:57`,departure:`18:11:27`},{locationId:`xiamen-north`,rawTimes:[`18:05:28`,`18:04:48`],sourceY:[355.564,367.828],arrival:`18:04:48`,departure:`18:05:28`},{locationId:`houxi`,rawTimes:[`18:02:15`,`18:01:45`],sourceY:[380.064,392.3],arrival:`18:01:45`,departure:`18:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`18:00:00`],sourceY:[429.008],departure:`18:00:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00418`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:8,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`19:09:59`,`19:09:09`],sourceY:[135.26,147.496],arrival:`19:09:09`,turnbackContextAfter:`19:09:59`},{locationId:`airport-west-reserved`,rawTimes:[`19:08:43`],sourceY:[165.864],pass:`19:08:43`},{locationId:`dongting`,rawTimes:[`19:02:09`,`19:01:39`],sourceY:[184.204,196.468],arrival:`19:01:39`,departure:`19:02:09`},{locationId:`qianwu`,rawTimes:[`18:59:14`,`18:58:44`],sourceY:[208.704,220.94],arrival:`18:58:44`,departure:`18:59:14`},{locationId:`hongkeng`,rawTimes:[`18:55:35`,`18:54:55`],sourceY:[233.176,245.412],arrival:`18:54:55`,departure:`18:55:35`},{locationId:`xiyan`,rawTimes:[`18:52:44`,`18:52:14`],sourceY:[257.648,269.884],arrival:`18:52:14`,departure:`18:52:44`},{locationId:`chengchang`,rawTimes:[`18:48:15`,`18:47:45`],sourceY:[282.148,294.384],arrival:`18:47:45`,departure:`18:48:15`},{locationId:`bingzhou`,rawTimes:[`18:44:36`,`18:44:06`],sourceY:[306.62,318.856],arrival:`18:44:06`,departure:`18:44:36`},{locationId:`guanxun`,rawTimes:[`18:41:27`,`18:40:57`],sourceY:[331.092,343.328],arrival:`18:40:57`,departure:`18:41:27`},{locationId:`xiamen-north`,rawTimes:[`18:35:28`,`18:34:48`],sourceY:[355.564,367.828],arrival:`18:34:48`,departure:`18:35:28`},{locationId:`houxi`,rawTimes:[`18:32:15`,`18:31:45`],sourceY:[380.064,392.3],arrival:`18:31:45`,departure:`18:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`18:30:00`],sourceY:[429.008],departure:`18:30:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00218`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:9,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`19:39:59`,`19:39:09`],sourceY:[135.26,147.496],arrival:`19:39:09`,turnbackContextAfter:`19:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`19:38:43`],sourceY:[165.864],pass:`19:38:43`},{locationId:`dongting`,rawTimes:[`19:32:09`,`19:31:39`],sourceY:[184.204,196.468],arrival:`19:31:39`,departure:`19:32:09`},{locationId:`qianwu`,rawTimes:[`19:29:14`,`19:28:44`],sourceY:[208.704,220.94],arrival:`19:28:44`,departure:`19:29:14`},{locationId:`hongkeng`,rawTimes:[`19:25:35`,`19:24:55`],sourceY:[233.176,245.412],arrival:`19:24:55`,departure:`19:25:35`},{locationId:`xiyan`,rawTimes:[`19:22:44`,`19:22:14`],sourceY:[257.648,269.884],arrival:`19:22:14`,departure:`19:22:44`},{locationId:`chengchang`,rawTimes:[`19:18:15`,`19:17:45`],sourceY:[282.148,294.384],arrival:`19:17:45`,departure:`19:18:15`},{locationId:`bingzhou`,rawTimes:[`19:14:36`,`19:14:06`],sourceY:[306.62,318.856],arrival:`19:14:06`,departure:`19:14:36`},{locationId:`guanxun`,rawTimes:[`19:11:27`,`19:10:57`],sourceY:[331.092,343.328],arrival:`19:10:57`,departure:`19:11:27`},{locationId:`xiamen-north`,rawTimes:[`19:05:28`,`19:04:48`],sourceY:[355.564,367.828],arrival:`19:04:48`,departure:`19:05:28`},{locationId:`houxi`,rawTimes:[`19:02:15`,`19:01:45`],sourceY:[380.064,392.3],arrival:`19:01:45`,departure:`19:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`19:00:00`],sourceY:[429.008],departure:`19:00:00`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00118`,direction:`up`,destinationCode:`204`,sourcePage:3,sourceColumn:10,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`20:10:39`,`20:09:09`],sourceY:[135.26,147.496],arrival:`20:09:09`,turnbackContextAfter:`20:10:39`},{locationId:`airport-west-reserved`,rawTimes:[`20:08:43`],sourceY:[165.864],pass:`20:08:43`},{locationId:`dongting`,rawTimes:[`20:02:09`,`20:01:39`],sourceY:[184.204,196.468],arrival:`20:01:39`,departure:`20:02:09`},{locationId:`qianwu`,rawTimes:[`19:59:14`,`19:58:44`],sourceY:[208.704,220.94],arrival:`19:58:44`,departure:`19:59:14`},{locationId:`hongkeng`,rawTimes:[`19:55:35`,`19:54:55`],sourceY:[233.176,245.412],arrival:`19:54:55`,departure:`19:55:35`},{locationId:`xiyan`,rawTimes:[`19:52:44`,`19:52:14`],sourceY:[257.648,269.884],arrival:`19:52:14`,departure:`19:52:44`},{locationId:`chengchang`,rawTimes:[`19:48:15`,`19:47:45`],sourceY:[282.148,294.384],arrival:`19:47:45`,departure:`19:48:15`},{locationId:`bingzhou`,rawTimes:[`19:44:36`,`19:44:06`],sourceY:[306.62,318.856],arrival:`19:44:06`,departure:`19:44:36`},{locationId:`guanxun`,rawTimes:[`19:41:27`,`19:40:57`],sourceY:[331.092,343.328],arrival:`19:40:57`,departure:`19:41:27`},{locationId:`xiamen-north`,rawTimes:[`19:35:28`,`19:34:48`],sourceY:[355.564,367.828],arrival:`19:34:48`,departure:`19:35:28`},{locationId:`houxi`,rawTimes:[`19:32:15`,`19:31:45`],sourceY:[380.064,392.3],arrival:`19:31:45`,departure:`19:32:15`},{locationId:`jimei-software-park-north`,rawTimes:[`19:30:00`],sourceY:[429.008],departure:`19:30:00`}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`revenue`,movementType:`passenger-service`},{tripId:`00221`,direction:`down`,destinationCode:`106`,sourcePage:4,sourceColumn:8,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`20:46:49`],sourceY:[410.66],pass:`20:46:49`},{locationId:`houxi-depot`,rawTimes:[`20:47:49`],sourceY:[422.896],boundaryTime:`20:47:49`,markers:[`▼G1010`]}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`non-revenue`,movementType:`depot-inbound`},{tripId:`00503`,direction:`down`,destinationCode:`105`,sourcePage:4,sourceColumn:9,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`20:25:09`],sourceY:[410.66],pass:`20:25:09`},{locationId:`houxi-depot`,rawTimes:[`20:26:09`],sourceY:[422.896],boundaryTime:`20:26:09`,markers:[`▼G1011`]}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`non-revenue`,movementType:`depot-inbound`},{tripId:`00119`,direction:`down`,destinationCode:`105`,sourcePage:4,sourceColumn:10,classificationHint:`partial-or-depot`,events:[{locationId:`xiangan-airport`,rawTimes:[`20:15:30`],sourceY:[159.724],departure:`20:15:30`},{locationId:`airport-west-reserved`,rawTimes:[`20:15:55`],sourceY:[184.224],pass:`20:15:55`},{locationId:`dongting`,rawTimes:[`20:21:48`],sourceY:[208.696],pass:`20:21:48`},{locationId:`qianwu`,rawTimes:[`20:23:59`],sourceY:[233.168],pass:`20:23:59`},{locationId:`hongkeng`,rawTimes:[`20:26:56`],sourceY:[257.668],pass:`20:26:56`},{locationId:`xiyan`,rawTimes:[`20:28:51`],sourceY:[282.14],pass:`20:28:51`},{locationId:`chengchang`,rawTimes:[`20:32:28`],sourceY:[306.612],pass:`20:32:28`},{locationId:`bingzhou`,rawTimes:[`20:35:19`],sourceY:[331.084],pass:`20:35:19`},{locationId:`guanxun`,rawTimes:[`20:37:44`],sourceY:[355.584],pass:`20:37:44`},{locationId:`xiamen-north`,rawTimes:[`20:42:43`],sourceY:[380.056],pass:`20:42:43`},{locationId:`houxi`,rawTimes:[`20:45:05`],sourceY:[404.528],arrival:`20:45:05`},{locationId:`houxi-depot`,rawTimes:[`20:46:05`],sourceY:[422.896],boundaryTime:`20:46:05`,markers:[`▼G1011`]}],circulationId:`C001`,vehicleId:`trainset-001`,classification:`non-revenue`,movementType:`depot-inbound`},{tripId:`00420`,direction:`up`,destinationCode:`203`,sourcePage:4,sourceColumn:1,classificationHint:`full-line-within-public-window`,events:[{locationId:`xiangan-airport`,rawTimes:[`20:39:59`,`20:39:09`],sourceY:[153.62,165.856],arrival:`20:39:09`,turnbackContextAfter:`20:39:59`},{locationId:`airport-west-reserved`,rawTimes:[`20:38:43`],sourceY:[184.224],pass:`20:38:43`},{locationId:`dongting`,rawTimes:[`20:32:09`,`20:31:39`],sourceY:[202.564,214.828],arrival:`20:31:39`,departure:`20:32:09`},{locationId:`qianwu`,rawTimes:[`20:29:14`,`20:28:44`],sourceY:[227.064,239.3],arrival:`20:28:44`,departure:`20:29:14`},{locationId:`hongkeng`,rawTimes:[`20:25:35`,`20:24:55`],sourceY:[251.536,263.772],arrival:`20:24:55`,departure:`20:25:35`},{locationId:`xiyan`,rawTimes:[`20:22:44`,`20:22:14`],sourceY:[276.008,288.244],arrival:`20:22:14`,departure:`20:22:44`},{locationId:`chengchang`,rawTimes:[`20:18:15`,`20:17:45`],sourceY:[300.508,312.744],arrival:`20:17:45`,departure:`20:18:15`},{locationId:`bingzhou`,rawTimes:[`20:14:36`,`20:14:06`],sourceY:[324.98,337.216],arrival:`20:14:06`,departure:`20:14:36`},{locationId:`guanxun`,rawTimes:[`20:11:27`,`20:10:57`],sourceY:[349.452,361.688],arrival:`20:10:57`,departure:`20:11:27`},{locationId:`xiamen-north`,rawTimes:[`20:05:28`,`20:04:48`],sourceY:[373.924,386.188],arrival:`20:04:48`,departure:`20:05:28`},{locationId:`houxi`,rawTimes:[`20:02:15`,`20:01:45`],sourceY:[398.424,410.66],arrival:`20:01:45`,departure:`20:02:15`},{locationId:`jimei-software-park-north`,rawTimes:[`20:00:00`],sourceY:[447.368],departure:`20:00:00`}],circulationId:`C004`,vehicleId:`trainset-004`,classification:`revenue`,movementType:`passenger-service`,postTripState:`stabled-xiangan-turnback-i`,postTripStateAt:`20:40:00`},{tripId:`00502`,direction:`up`,destinationCode:`102`,sourcePage:4,sourceColumn:2,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`20:22:59`],sourceY:[410.66],arrival:`20:22:59`},{locationId:`jimei-software-park-north`,rawTimes:[`20:21:14`],sourceY:[447.368],departure:`20:21:14`}],circulationId:`C003`,vehicleId:`trainset-003`,classification:`non-revenue`,movementType:`non-revenue-transition`},{tripId:`00220`,direction:`up`,destinationCode:`102`,sourcePage:4,sourceColumn:3,classificationHint:`partial-or-depot`,events:[{locationId:`houxi`,rawTimes:[`20:44:49`],sourceY:[410.66],arrival:`20:44:49`},{locationId:`jimei-software-park-north`,rawTimes:[`20:43:04`],sourceY:[447.368],departure:`20:43:04`}],circulationId:`C002`,vehicleId:`trainset-002`,classification:`non-revenue`,movementType:`non-revenue-transition`}],schemaVersion:`1.3.0`,circulations:[{circulationId:`C001`,vehicleId:`trainset-001`,tripIds:[`00101`,`00102`,`00103`,`00104`,`00105`,`00106`,`00107`,`00108`,`00109`,`00110`,`00111`,`00112`,`00113`,`00114`,`00115`,`00116`,`00117`,`00118`,`00119`],startsAt:{locationId:`xiangan-airport`,time:`06:51:09`},endsAt:{locationId:`houxi-depot`,time:`20:46:05`},connections:[{fromTripId:`00101`,toTripId:`00102`,locationId:`hongkeng`,fromTime:`07:15:06`,toTime:`07:18:31`,layoverSeconds:205,connectionType:`turnback`},{fromTripId:`00102`,toTripId:`00103`,locationId:`xiangan-airport`,fromTime:`07:42:28`,toTime:`08:00:00`,layoverSeconds:1052,connectionType:`turnback`},{fromTripId:`00103`,toTripId:`00104`,locationId:`jimei-software-park-north`,fromTime:`08:40:47`,toTime:`08:45:00`,layoverSeconds:253,connectionType:`turnback`},{fromTripId:`00104`,toTripId:`00105`,locationId:`xiangan-airport`,fromTime:`09:24:09`,toTime:`09:46:21`,layoverSeconds:1332,connectionType:`turnback`},{fromTripId:`00105`,toTripId:`00106`,locationId:`jimei-software-park-north`,fromTime:`10:25:50`,toTime:`10:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00106`,toTripId:`00107`,locationId:`xiangan-airport`,fromTime:`11:09:09`,toTime:`11:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00107`,toTripId:`00108`,locationId:`jimei-software-park-north`,fromTime:`11:55:50`,toTime:`12:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00108`,toTripId:`00109`,locationId:`xiangan-airport`,fromTime:`12:39:09`,toTime:`12:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00109`,toTripId:`00110`,locationId:`jimei-software-park-north`,fromTime:`13:25:50`,toTime:`13:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00110`,toTripId:`00111`,locationId:`xiangan-airport`,fromTime:`14:09:09`,toTime:`14:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00111`,toTripId:`00112`,locationId:`jimei-software-park-north`,fromTime:`14:55:50`,toTime:`15:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00112`,toTripId:`00113`,locationId:`xiangan-airport`,fromTime:`15:39:09`,toTime:`15:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00113`,toTripId:`00114`,locationId:`jimei-software-park-north`,fromTime:`16:25:50`,toTime:`16:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00114`,toTripId:`00115`,locationId:`xiangan-airport`,fromTime:`17:09:09`,toTime:`17:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00115`,toTripId:`00116`,locationId:`jimei-software-park-north`,fromTime:`17:55:50`,toTime:`18:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00116`,toTripId:`00117`,locationId:`xiangan-airport`,fromTime:`18:39:09`,toTime:`18:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00117`,toTripId:`00118`,locationId:`jimei-software-park-north`,fromTime:`19:25:50`,toTime:`19:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00118`,toTripId:`00119`,locationId:`xiangan-airport`,fromTime:`20:09:09`,toTime:`20:15:30`,layoverSeconds:381,connectionType:`turnback`}]},{circulationId:`C002`,vehicleId:`trainset-002`,tripIds:[`00202`,`00203`,`00204`,`00205`,`00206`,`00207`,`00208`,`00209`,`00210`,`00211`,`00212`,`00213`,`00214`,`00215`,`00216`,`00217`,`00218`,`00219`,`00220`,`00221`],startsAt:{locationId:`houxi-depot`,time:`07:00:00`},endsAt:{locationId:`houxi-depot`,time:`20:47:49`},connections:[{fromTripId:`00202`,toTripId:`00203`,locationId:`hongkeng`,fromTime:`07:39:45`,toTime:`07:48:54`,layoverSeconds:549,connectionType:`turnback`},{fromTripId:`00203`,toTripId:`00204`,locationId:`jimei-software-park-north`,fromTime:`08:18:05`,toTime:`08:22:30`,layoverSeconds:265,connectionType:`turnback`},{fromTripId:`00204`,toTripId:`00205`,locationId:`xiangan-airport`,fromTime:`09:01:39`,toTime:`09:16:21`,layoverSeconds:882,connectionType:`turnback`},{fromTripId:`00205`,toTripId:`00206`,locationId:`jimei-software-park-north`,fromTime:`09:55:50`,toTime:`10:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00206`,toTripId:`00207`,locationId:`xiangan-airport`,fromTime:`10:39:09`,toTime:`10:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00207`,toTripId:`00208`,locationId:`jimei-software-park-north`,fromTime:`11:25:50`,toTime:`11:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00208`,toTripId:`00209`,locationId:`xiangan-airport`,fromTime:`12:09:09`,toTime:`12:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00209`,toTripId:`00210`,locationId:`jimei-software-park-north`,fromTime:`12:55:50`,toTime:`13:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00210`,toTripId:`00211`,locationId:`xiangan-airport`,fromTime:`13:39:09`,toTime:`13:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00211`,toTripId:`00212`,locationId:`jimei-software-park-north`,fromTime:`14:25:50`,toTime:`14:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00212`,toTripId:`00213`,locationId:`xiangan-airport`,fromTime:`15:09:09`,toTime:`15:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00213`,toTripId:`00214`,locationId:`jimei-software-park-north`,fromTime:`15:55:50`,toTime:`16:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00214`,toTripId:`00215`,locationId:`xiangan-airport`,fromTime:`16:39:09`,toTime:`16:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00215`,toTripId:`00216`,locationId:`jimei-software-park-north`,fromTime:`17:25:50`,toTime:`17:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00216`,toTripId:`00217`,locationId:`xiangan-airport`,fromTime:`18:09:09`,toTime:`18:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00217`,toTripId:`00218`,locationId:`jimei-software-park-north`,fromTime:`18:55:50`,toTime:`19:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00218`,toTripId:`00219`,locationId:`xiangan-airport`,fromTime:`19:39:09`,toTime:`20:00:00`,layoverSeconds:1251,connectionType:`turnback`},{fromTripId:`00219`,toTripId:`00220`,locationId:`jimei-software-park-north`,fromTime:`20:39:39`,toTime:`20:43:04`,layoverSeconds:205,connectionType:`turnback`},{fromTripId:`00220`,toTripId:`00221`,locationId:`houxi`,fromTime:`20:44:49`,toTime:`20:46:49`,layoverSeconds:120,connectionType:`operational-reversal`}]},{circulationId:`C003`,vehicleId:`trainset-003`,tripIds:[`00302`,`00303`,`00304`,`00305`,`00306`,`00501`,`00502`,`00503`],startsAt:{locationId:`houxi-depot`,time:`07:05:00`},endsAt:{locationId:`houxi-depot`,time:`20:26:09`},connections:[{fromTripId:`00302`,toTripId:`00303`,locationId:`houxi`,fromTime:`07:06:00`,toTime:`07:08:29`,layoverSeconds:149,connectionType:`operational-reversal`},{fromTripId:`00303`,toTripId:`00304`,locationId:`jimei-software-park-north`,fromTime:`07:10:57`,toTime:`07:13:54`,layoverSeconds:177,connectionType:`turnback`},{fromTripId:`00304`,toTripId:`00305`,locationId:`xiangan-airport`,fromTime:`08:08:41`,toTime:`08:23:10`,layoverSeconds:869,connectionType:`turnback`},{fromTripId:`00305`,toTripId:`00306`,locationId:`jimei-software-park-north`,fromTime:`09:02:39`,toTime:`09:07:30`,layoverSeconds:291,connectionType:`turnback`},{fromTripId:`00306`,toTripId:`00501`,locationId:`xiangan-airport`,fromTime:`09:46:39`,toTime:`19:38:10`,layoverSeconds:35491,connectionType:`standby`},{fromTripId:`00501`,toTripId:`00502`,locationId:`jimei-software-park-north`,fromTime:`20:17:39`,toTime:`20:21:14`,layoverSeconds:215,connectionType:`turnback`},{fromTripId:`00502`,toTripId:`00503`,locationId:`houxi`,fromTime:`20:22:59`,toTime:`20:25:09`,layoverSeconds:130,connectionType:`operational-reversal`}]},{circulationId:`C004`,vehicleId:`trainset-004`,tripIds:[`00402`,`00403`,`00404`,`00405`,`00406`,`00407`,`00408`,`00409`,`00410`,`00411`,`00412`,`00413`,`00414`,`00415`,`00416`,`00417`,`00418`,`00419`,`00420`],startsAt:{locationId:`houxi-depot`,time:`07:47:00`},endsAt:{locationId:`xiangan-airport`,time:`20:39:09`},connections:[{fromTripId:`00402`,toTripId:`00403`,locationId:`houxi`,fromTime:`07:51:00`,toTime:`07:53:59`,layoverSeconds:179,connectionType:`operational-reversal`},{fromTripId:`00403`,toTripId:`00404`,locationId:`jimei-software-park-north`,fromTime:`07:56:00`,toTime:`08:00:00`,layoverSeconds:240,connectionType:`turnback`},{fromTripId:`00404`,toTripId:`00405`,locationId:`xiangan-airport`,fromTime:`08:39:09`,toTime:`08:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00405`,toTripId:`00406`,locationId:`jimei-software-park-north`,fromTime:`09:25:50`,toTime:`09:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00406`,toTripId:`00407`,locationId:`xiangan-airport`,fromTime:`10:09:09`,toTime:`10:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00407`,toTripId:`00408`,locationId:`jimei-software-park-north`,fromTime:`10:55:50`,toTime:`11:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00408`,toTripId:`00409`,locationId:`xiangan-airport`,fromTime:`11:39:09`,toTime:`11:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00409`,toTripId:`00410`,locationId:`jimei-software-park-north`,fromTime:`12:25:50`,toTime:`12:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00410`,toTripId:`00411`,locationId:`xiangan-airport`,fromTime:`13:09:09`,toTime:`13:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00411`,toTripId:`00412`,locationId:`jimei-software-park-north`,fromTime:`13:55:50`,toTime:`14:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00412`,toTripId:`00413`,locationId:`xiangan-airport`,fromTime:`14:39:09`,toTime:`14:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00413`,toTripId:`00414`,locationId:`jimei-software-park-north`,fromTime:`15:25:50`,toTime:`15:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00414`,toTripId:`00415`,locationId:`xiangan-airport`,fromTime:`16:09:09`,toTime:`16:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00415`,toTripId:`00416`,locationId:`jimei-software-park-north`,fromTime:`16:55:50`,toTime:`17:00:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00416`,toTripId:`00417`,locationId:`xiangan-airport`,fromTime:`17:39:09`,toTime:`17:46:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00417`,toTripId:`00418`,locationId:`jimei-software-park-north`,fromTime:`18:25:50`,toTime:`18:30:00`,layoverSeconds:250,connectionType:`turnback`},{fromTripId:`00418`,toTripId:`00419`,locationId:`xiangan-airport`,fromTime:`19:09:09`,toTime:`19:16:21`,layoverSeconds:432,connectionType:`turnback`},{fromTripId:`00419`,toTripId:`00420`,locationId:`jimei-software-park-north`,fromTime:`19:55:50`,toTime:`20:00:00`,layoverSeconds:250,connectionType:`turnback`}]}],standbyAssignments:[{assignmentId:`houxi-turnback-ii-reserve`,vehicleId:`reserve-houxi-ii`,locationId:`houxi`,operational:!1,startTime:`08:05:00`,endTime:`20:05:00`,notes:`Unnumbered reserve train; outbound via Houxi depot exit track and returns to depot at 20:05.`},{assignmentId:`xiangan-turnback-i-reserve`,vehicleId:`trainset-003`,circulationId:`C003`,locationId:`xiangan-airport`,operational:!1,startTime:`09:48:00`,endTime:`19:36:00`,sourceTripId:`00306`,resumeTripId:`00501`,notes:`00306 enters standby at 09:48; the same vehicle leaves standby at 19:36 and operates passenger trip 00501.`}]};function d(e={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_AMAP_API_KEY:`26fd26a858cd1f8e77e3c515c11eead9`,VITE_AMAP_AUTH_MODE:`direct`,VITE_AMAP_SERVICE_HOST:`https://amap-proxy-worker.bg2fou.workers.dev/_AMapService`,VITE_TIME_API_URL:``}){let t=typeof e.VITE_AMAP_API_KEY==`string`&&e.VITE_AMAP_API_KEY!==`your_amap_web_api_key`?e.VITE_AMAP_API_KEY.trim():void 0,n=e.PROD===!0,r=n||e.VITE_AMAP_AUTH_MODE===`proxy`?`proxy`:`direct`,i=typeof e.VITE_AMAP_SERVICE_HOST==`string`?e.VITE_AMAP_SERVICE_HOST.trim():void 0,a=!n&&typeof e.AMAP_SECURITY_JS_CODE==`string`?e.AMAP_SECURITY_JS_CODE.trim():void 0;if(r===`proxy`&&t&&!i)throw Error(`Proxy authentication requires VITE_AMAP_SERVICE_HOST`);return{...t?{amapKey:t}:{},authMode:r,...i?{serviceHost:i}:{},...a?{securityJsCode:a}:{},...typeof e.VITE_TIME_API_URL==`string`&&e.VITE_TIME_API_URL?{timeApiUrl:e.VITE_TIME_API_URL}:{}}}var f=6371008.8;function p(e){return e*Math.PI/180}function m(e,t){let n=p((e[1]+t[1])/2);return Math.hypot(p(t[0]-e[0])*Math.cos(n),p(t[1]-e[1]))*f}function h(e){let t=[],n=[],r=0;for(let i of e.parts){let e=r;for(let e of i.coordinates){let n=t.at(-1);if(n!==void 0){let t=m(n.coordinates,e);if(t===0)continue;r+=t}t.push({coordinates:e,chainageMeters:r})}n.push({partId:i.id,structureType:i.structureType,startMeters:e,endMeters:r})}let i=new Map,a=-1;for(let n of e.stations){let e=g(t,n.coordinates);if(e.distanceMeters>2)throw Error(`${n.id} is ${e.distanceMeters.toFixed(3)} m from route`);if(e.chainageMeters<=a)throw Error(`Station chainage is not increasing at ${n.id}`);i.set(n.id,e.chainageMeters),a=e.chainageMeters}return{points:t,parts:n,lengthMeters:r,stationChainage:i}}function g(e,t){let n={chainageMeters:0,distanceMeters:1/0},r=Math.cos(p(t[1]));for(let i=1;i<e.length;i+=1){let a=e[i-1],o=e[i],s=(a.coordinates[0]-t[0])*r,c=a.coordinates[1]-t[1],l=(o.coordinates[0]-t[0])*r,u=o.coordinates[1]-t[1],d=l-s,f=u-c,p=d*d+f*f;if(p===0)continue;let h=Math.max(0,Math.min(1,-(s*d+c*f)/p)),g=m([a.coordinates[0]+(o.coordinates[0]-a.coordinates[0])*h,a.coordinates[1]+(o.coordinates[1]-a.coordinates[1])*h],t);g<n.distanceMeters&&(n={chainageMeters:a.chainageMeters+(o.chainageMeters-a.chainageMeters)*h,distanceMeters:g})}return n}function _(e,t){let n=Math.max(0,Math.min(e.lengthMeters,t));for(let t=1;t<e.points.length;t+=1){let r=e.points[t-1],i=e.points[t];if(n<=i.chainageMeters){let e=i.chainageMeters-r.chainageMeters,t=e===0?0:(n-r.chainageMeters)/e;return[r.coordinates[0]+(i.coordinates[0]-r.coordinates[0])*t,r.coordinates[1]+(i.coordinates[1]-r.coordinates[1])*t]}}return e.points.at(-1)?.coordinates??[0,0]}function v(e,t){if(!e)throw Error(t)}function y(e,t){return v(typeof e==`object`&&!!e&&!Array.isArray(e),`${t} must be an object`),e}function b(e,t){return v(typeof e==`string`&&e.length>0,`${t} must be text`),e}function x(e,t){return v(typeof e==`number`&&Number.isInteger(e),`${t} must be an integer`),e}function S(e,t){return v(Array.isArray(e)&&e.length===2&&e.every(e=>typeof e==`number`&&Number.isFinite(e)),`${t} must be a position`),[e[0],e[1]]}function C(e){return v(e===`elevated`||e===`underground`,`Unknown structure type`),e}function ee(e){let t=y(e,`GeoJSON`);v(t.type===`FeatureCollection`&&t.coordinateSystem===`GCJ-02`&&Array.isArray(t.features),`Invalid normalized GeoJSON root`);let n=[],r=[],i=new Set;for(let[e,a]of t.features.entries()){let t=y(a,`feature ${e}`),o=y(t.properties,`properties ${e}`),s=y(t.geometry,`geometry ${e}`),c=b(o.id,`id`);if(v(!i.has(c),`Duplicate ID ${c}`),i.add(c),s.type===`Point`){let e=o.stationType;v(e===`operational`||e===`reserved`,`Unknown station type ${String(e)}`),n.push({id:c,nameZh:b(o.nameZh,`nameZh`),nameEn:b(o.nameEn,`nameEn`),sequence:x(o.sequence,`sequence`),stationType:e,structureType:C(o.structureType),coordinates:S(s.coordinates,c)})}else if(s.type===`LineString`)v(Array.isArray(s.coordinates),`${c} coordinates missing`),r.push({id:c,segmentId:b(o.segmentId,`segmentId`),sequence:x(o.sequence,`sequence`),partNo:x(o.partNo,`partNo`),partCount:x(o.partCount,`partCount`),fromId:b(o.fromId,`fromId`),toId:b(o.toId,`toId`),structureType:C(o.structureType),coordinates:s.coordinates.map((e,t)=>S(e,`${c}[${t}]`))});else throw Error(`Unsupported geometry ${String(s.type)}`)}return n.sort((e,t)=>e.sequence-t.sequence),r.sort((e,t)=>e.sequence-t.sequence||e.partNo-t.partNo),v(n.length===12&&r.length===16,`Line 4 must contain 12 stations and 16 parts`),{stations:n,parts:r}}function w(e){let t=/^(\d{2}):(\d{2}):(\d{2})$/.exec(e);if(!t)throw Error(`Invalid time ${e}`);return Number(t[1])*3600+Number(t[2])*60+Number(t[3])}function T(e){let t=[];return e.arrival&&t.push({kind:`arrival`,value:e.arrival,seconds:w(e.arrival)}),e.departure&&t.push({kind:`departure`,value:e.departure,seconds:w(e.departure)}),e.pass&&t.push({kind:`pass`,value:e.pass,seconds:w(e.pass)}),e.boundaryTime&&t.push({kind:`boundary`,value:e.boundaryTime,seconds:w(e.boundaryTime)}),t}function E(e){let t=e.events.flatMap(T).map(e=>e.seconds);return[Math.min(...t),Math.max(...t)]}function te(e){let t=new Intl.DateTimeFormat(`en-GB`,{timeZone:`Asia/Shanghai`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`,hourCycle:`h23`}).formatToParts(e),n=e=>Number(t.find(t=>t.type===e)?.value??0);return n(`hour`)*3600+n(`minute`)*60+n(`second`)}function D(e){return e===`houxi-depot`?`jimei-software-park-north`:e}function O(e,t){let n=e.stationChainage.get(D(t));if(n===void 0)throw Error(`No route chainage for ${t}`);return n}function ne(e,t){return e.classification===`revenue`?!0:e.classification===`non-revenue`?!1:e.serviceSegments?.some(e=>e.classification===`revenue`&&t>=w(e.departure)&&t<=w(e.arrival))??!1}function re(e){return e.events.flatMap(e=>T(e).map(t=>({event:e,locationId:D(e.locationId),kind:t.kind,seconds:t.seconds}))).sort((e,t)=>e.seconds-t.seconds)}function ie(e){return e?{passengerService:e}:{passengerService:e,notice:`本次列车不载客`}}function ae(e,t,n){let r=re(e),i=ie(ne(e,t));for(let r of e.events)if(r.arrival&&r.departure&&t>=w(r.arrival)&&t<w(r.departure)){let t=D(r.locationId);return{status:`dwelling`,tripId:e.tripId,locationId:t,position:_(n,O(n,t)),nextStationId:t,etaSeconds:0,...i}}let a=r.find(e=>e.seconds===t);if(a)return{status:a.kind===`arrival`?`dwelling`:`moving`,tripId:e.tripId,locationId:a.locationId,position:_(n,O(n,a.locationId)),nextStationId:a.locationId,etaSeconds:0,...i};for(let a=1;a<r.length;a+=1){let o=r[a-1],s=r[a];if(t>o.seconds&&t<s.seconds){let r=O(n,o.locationId),a=O(n,s.locationId),c=(t-o.seconds)/(s.seconds-o.seconds);return{status:o.locationId===s.locationId?`dwelling`:`moving`,tripId:e.tripId,...o.locationId===s.locationId?{locationId:o.locationId}:{},position:_(n,r+(a-r)*c),nextStationId:s.locationId,etaSeconds:s.seconds-t,...i}}}let o=r.at(-1);return{status:`dwelling`,tripId:e.tripId,locationId:o.locationId,position:_(n,O(n,o.locationId)),...i}}function oe(e,t,n){let r=new Map(t.trips.map(e=>[e.tripId,e]));return t.circulations.map(t=>{let i=t.tripIds.map(e=>{let t=r.get(e);if(!t)throw Error(`Unknown trip ${e}`);return t}),a=i.find(t=>{let[n,r]=E(t);return e>=n&&e<=r});if(a)return{vehicleId:t.vehicleId,circulationId:t.circulationId,...ae(a,e,n)};let o=t.connections.find(t=>e>w(t.fromTime)&&e<w(t.toTime));if(o){let e=D(o.locationId),r=o.connectionType===`standby`?`standby`:`turning`;return{vehicleId:t.vehicleId,circulationId:t.circulationId,status:r,locationId:e,position:_(n,O(n,e)),passengerService:!1,notice:`本次列车不载客`}}let s=E(i[0])[0];return{vehicleId:t.vehicleId,circulationId:t.circulationId,status:e<s?`waiting`:`out-of-service`,passengerService:!1}})}function se(e,t){let n=[...t.getLayers()],r=new e.TileLayer.Satellite({zIndex:0}),i=new e.TileLayer.RoadNet({zIndex:1}),a=`standard`,o=!0,s=()=>{t.setLayers(a===`standard`?n:o?[r,i]:[r])};return{get mode(){return a},get roadNetVisible(){return o},setMode(e){a=e,s()},setRoadNetVisible(e){o=e,s()}}}function ce(e,t,n){let r=n.parts.flatMap(t=>{let n={path:t.coordinates,lineJoin:`round`,lineCap:`round`};return t.structureType===`elevated`?[new e.Polyline({...n,strokeColor:`#E71419`,strokeWeight:10,strokeOpacity:.95,zIndex:49,extData:{partId:t.id,structureType:t.structureType,role:`rails`}}),new e.Polyline({...n,strokeColor:`#FFF6F6`,strokeWeight:3,strokeOpacity:.96,zIndex:50,extData:{partId:t.id,structureType:t.structureType,role:`track-gap`}})]:[new e.Polyline({...n,strokeColor:`#661F30`,strokeWeight:10,strokeOpacity:.72,zIndex:47,extData:{partId:t.id,structureType:t.structureType,role:`tunnel-casing`}}),new e.Polyline({...n,strokeColor:`#E71419`,strokeWeight:6,strokeOpacity:.94,zIndex:48,extData:{partId:t.id,structureType:t.structureType,role:`tunnel-core`}})]});return t.add(r),()=>t.remove(r)}var le=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2060.601%2060.601'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%3e%3ctitle%3e駅事務室/駅係員;%20Station%20office/Station%20staff%3c/title%3e%3cmetadata%3e%3crdf:RDF%3e%3ccc:Work%20rdf:about=''%3e%3cdc:format%3eimage/svg+xml%3c/dc:format%3e%3cdc:type%20rdf:resource='http://purl.org/dc/dcmitype/StillImage'/%3e%3cdc:title%3e駅事務室/駅係員;%20Station%20office/Station%20staff%3c/dc:title%3e%3cdc:source%3ehttp://www.ecomo.or.jp/barrierfree/pictogram/data/zukigo_panfu_20170719.pdf%3c/dc:source%3e%3c/cc:Work%3e%3c/rdf:RDF%3e%3c/metadata%3e%3cpath%20d='m7.9493%2055.845c-1.7638%200-3.1925-1.4312-3.1925-3.195v-44.701c0-1.7625%201.4288-3.1925%203.1925-3.1925h44.701c1.7638%200%203.1938%201.43%203.1938%203.1925v44.701c0%201.7638-1.43%203.195-3.1938%203.195h-44.701z'%20style='fill:%23ffffff;stroke-width:.60625;stroke:%23000'/%3e%3cpath%20d='m25.24%2026.762c2.3361%200%204.2249-1.8899%204.2249-4.2273v-2.4669h-8.8323l-1.7712%202.1136h2.1478v0.35326c0%202.3374%201.8947%204.2273%204.2308%204.2273'/%3e%3cpath%20d='m29.465%2019.008%200.83557-2.302-11.492-1.6191%201.8241%203.9211z'/%3e%3cpath%20d='m17.944%2036.565v14.283h16.864l1.424-16.279c0.21772-2.4787-1.3475-4.8455-3.8307-5.5402-1.4181-0.39447-2.8892-0.67118-4.3897-0.82427l-2.7597%204.7277-2.7597-4.7277c-1.5123%200.15309-2.9833%200.4298-4.4073%200.83016-0.39425%200.11183-0.78262%200.22372-1.1651%200.34735-0.24714%200.08244-0.45309%200.2355-0.60609%200.4298l-2.8833%203.7386-2.0536-5.0751h-3.7718l2.6067%209.7204c0.32952%201.2364%201.4534%202.149%202.7892%202.149%200.79437%200%201.5122-0.32381%202.036-0.84781z'/%3e%3cpath%20d='m38.903%2013.963c0-0.4298%200.34717-0.77717%200.77671-0.77717h9.003c0.42954%200%200.77672%200.34737%200.77672%200.77717v3.7916c0%200.4298-0.34718%200.77717-0.77672%200.77717h-9.003c-0.42954%200-0.77671-0.34737-0.77671-0.77717zm2.0124-3.2499c0-0.17075%200.13527-0.31205%200.31186-0.31205h5.9137c0.17065%200%200.31187%200.14123%200.31187%200.31205v0.85958c0%200.17074-0.14115%200.31204-0.31187%200.31204h-5.9137c-0.17652%200-0.31186-0.14123-0.31186-0.31204zm6.8964%2011.875c-0.58842%200-1.0651-0.47688-1.0651-1.0656%200-0.59464%200.47664-1.0715%201.0651-1.0715%200.59431%200%201.0709%200.4769%201.0709%201.0715%200%200.58876-0.47663%201.0656-1.0709%201.0656m-7.2612%200c-0.58843%200-1.0709-0.47688-1.0709-1.0656%200-0.59464%200.48251-1.0715%201.0709-1.0715%200.58842%200%201.0709%200.4769%201.0709%201.0715%200%200.58876-0.48252%201.0656-1.0709%201.0656m-0.26479%201.99-2.9598%203.6797h2.0889l1.7417-2.149h6.0549l1.7359%202.149h2.0889l-2.9539-3.6738c0.56489-0.08244%201.118-0.1884%201.6653-0.31204%200.65903-1.2364%201.0415-2.6435%201.0415-4.1448v-8.1543c0-1.2658-0.92971-2.3197-2.1536-2.4963h-8.9088c-1.218%200.17663-2.1536%201.2305-2.1536%202.4963v8.1543c0%201.4896%200.37659%202.8967%201.0297%204.1331%200.55313%200.12359%201.118%200.22961%201.6829%200.31792'/%3e%3c/svg%3e`,k=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`);function ue(e,t,n){let r=n.stations.map(t=>new e.Marker({position:t.coordinates,anchor:`center`,zIndex:120,content:`<div class="station-marker ${t.stationType===`reserved`?`reserved`:``}"><img src="${k(le)}" alt="" aria-hidden="true"><b>${k(t.nameZh)}</b></div>`,title:t.nameZh}));return t.add(r),{overlays:r,destroy:()=>t.remove(r)}}var de=`data:image/svg+xml,%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Transformed%20by:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%20width='800px'%20height='800px'%20fill='%23000000'%3e%3cg%20id='SVGRepo_bgCarrier'%20stroke-width='0'/%3e%3cg%20id='SVGRepo_tracerCarrier'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20id='SVGRepo_iconCarrier'%3e%3crect%20x='105.792'%20y='231.784'%20style='fill:%23F4B2B0;'%20width='300.414'%20height='134.628'/%3e%3cg%3e%3cpath%20style='fill:%23E71419;'%20d='M486.822,482.424h-58.005l-49.708-101.23h27.1c8.167,0,14.788-6.62,14.788-14.788V231.776%20c0-8.167-6.62-14.788-14.788-14.788H270.788V103.571c0-8.167-6.62-14.788-14.788-14.788s-14.788,6.62-14.788,14.788v113.418%20H120.579V73.982c0-24.486,19.921-44.406,44.406-44.406h182.03c24.486,0,44.406,19.921,44.406,44.406v84.576%20c0,8.167,6.62,14.788,14.788,14.788s14.788-6.62,14.788-14.788V73.982C420.998,33.188,387.809,0,347.016,0h-182.03%20c-40.795,0-73.982,33.188-73.982,73.982v157.794v134.631c0,8.167,6.62,14.788,14.788,14.788h27.1l-49.708,101.23H25.179%20c-8.167,0-14.788,6.62-14.788,14.788c0,8.167,6.62,14.788,14.788,14.788h67.218c5.639,0,10.788-3.207,13.273-8.269l9.559-19.467%20h187.167c8.167,0,14.788-6.62,14.788-14.788c0-8.167-6.62-14.788-14.788-14.788H129.751l11.647-23.72h116.607%20c8.167,0,14.788-6.62,14.788-14.788s-6.62-14.788-14.788-14.788H155.921l9.918-20.2h180.322l60.168,122.536%20c2.486,5.062,7.635,8.269,13.273,8.269h67.218c8.167,0,14.788-6.62,14.788-14.788S494.99,482.424,486.822,482.424z%20M120.579,246.564h270.842v105.055H120.579V246.564z'/%3e%3cpath%20style='fill:%23E71419;'%20d='M175.2,342.962c-24.19,0-43.871-19.681-43.871-43.871s19.681-43.871,43.871-43.871%20s43.871,19.68,43.871,43.871c0,8.167-6.62,14.788-14.788,14.788c-8.167,0-14.788-6.62-14.788-14.788%20c0-7.882-6.412-14.295-14.295-14.295c-7.883,0-14.295,6.412-14.295,14.295c0,7.883,6.412,14.295,14.295,14.295%20c8.167,0,14.788,6.62,14.788,14.788C189.987,336.342,183.367,342.962,175.2,342.962z'/%3e%3cpath%20style='fill:%23E71419;'%20d='M336.802,342.962c-24.19,0-43.871-19.681-43.871-43.871s19.68-43.871,43.871-43.871%20s43.871,19.68,43.871,43.871c0,8.167-6.621,14.788-14.788,14.788s-14.788-6.62-14.788-14.788c0-7.882-6.412-14.295-14.295-14.295%20c-7.882,0-14.295,6.412-14.295,14.295c0,7.883,6.412,14.295,14.295,14.295c8.167,0,14.788,6.62,14.788,14.788%20C351.59,336.342,344.969,342.962,336.802,342.962z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e`,fe=e=>`${e.vehicleId}${e.tripId?` · ${e.tripId}`:``}`,pe=(e,t)=>{let n=document.createElement(`button`);n.type=`button`,n.className=`train-marker ${e.status===`moving`?`moving`:``}`,n.setAttribute(`aria-label`,`查看列车 ${fe(e)} 状态`),n.innerHTML=`<img src="${de}" alt=""><span></span>`;let r=n.querySelector(`span`);return r&&(r.textContent=e.tripId??e.vehicleId),n.addEventListener(`click`,n=>{n.stopPropagation(),t(e)}),n};function me(e,t,n){let r=new Map;return{update(i){let a=new Set;for(let o of i){if(!o.position)continue;a.add(o.vehicleId);let i=r.get(o.vehicleId),s=pe(o,n);if(!i){let n=new e.Marker({position:o.position,anchor:`center`,zIndex:200,content:s});i={marker:n,state:o},r.set(o.vehicleId,i),t.add(n)}i.state=o,i.marker.setPosition(o.position),i.marker.setContent?.(s)}for(let[e,n]of r)a.has(e)||(t.remove(n.marker),r.delete(e))},destroy(){t.remove([...r.values()].map(e=>e.marker)),r.clear()}}}var he=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n||=self,n.AMapLoader=r())})(e,function(){function e(e){var r=[];return e.AMapUI&&r.push(t(e.AMapUI)),e.Loca&&r.push(n(e.Loca)),Promise.all(r)}function t(e){return new Promise(function(t,n){var s=[];if(e.plugins)for(var c=0;c<e.plugins.length;c+=1)i.AMapUI.plugins.indexOf(e.plugins[c])==-1&&s.push(e.plugins[c]);if(a.AMapUI===r.failed)n(`前次请求 AMapUI 失败`);else if(a.AMapUI===r.notload){a.AMapUI=r.loading,i.AMapUI.version=e.version||i.AMapUI.version,c=i.AMapUI.version;var l=document.body||document.head,u=document.createElement(`script`);u.type=`text/javascript`,u.src=`https://webapi.amap.com/ui/`+c+`/main.js`,u.onerror=function(e){a.AMapUI=r.failed,n(`请求 AMapUI 失败`)},u.onload=function(){if(a.AMapUI=r.loaded,s.length)window.AMapUI.loadUI(s,function(){for(var e=0,n=s.length;e<n;e++){var r=s[e].split(`/`).slice(-1)[0];window.AMapUI[r]=arguments[e]}for(t();o.AMapUI.length;)o.AMapUI.splice(0,1)[0]()});else for(t();o.AMapUI.length;)o.AMapUI.splice(0,1)[0]()},l.appendChild(u)}else a.AMapUI===r.loaded?e.version&&e.version!==i.AMapUI.version?n(`不允许多个版本 AMapUI 混用`):s.length?window.AMapUI.loadUI(s,function(){for(var e=0,n=s.length;e<n;e++){var r=s[e].split(`/`).slice(-1)[0];window.AMapUI[r]=arguments[e]}t()}):t():e.version&&e.version!==i.AMapUI.version?n(`不允许多个版本 AMapUI 混用`):o.AMapUI.push(function(e){e?n(e):s.length?window.AMapUI.loadUI(s,function(){for(var e=0,n=s.length;e<n;e++){var r=s[e].split(`/`).slice(-1)[0];window.AMapUI[r]=arguments[e]}t()}):t()})})}function n(e){return new Promise(function(t,n){if(a.Loca===r.failed)n(`前次请求 Loca 失败`);else if(a.Loca===r.notload){a.Loca=r.loading,i.Loca.version=e.version||i.Loca.version;var s=i.Loca.version,c=i.AMap.version.startsWith(`2`),l=s.startsWith(`2`);if(c&&!l||!c&&l)n(`JSAPI 与 Loca 版本不对应！！`);else{c=i.key,l=document.body||document.head;var u=document.createElement(`script`);u.type=`text/javascript`,u.src=`https://webapi.amap.com/loca?v=`+s+`&key=`+c,u.onerror=function(e){a.Loca=r.failed,n(`请求 AMapUI 失败`)},u.onload=function(){for(a.Loca=r.loaded,t();o.Loca.length;)o.Loca.splice(0,1)[0]()},l.appendChild(u)}}else a.Loca===r.loaded?e.version&&e.version!==i.Loca.version?n(`不允许多个版本 Loca 混用`):t():e.version&&e.version!==i.Loca.version?n(`不允许多个版本 Loca 混用`):o.Loca.push(function(e){e?n(e):n()})})}if(!window)throw Error(`AMap JSAPI can only be used in Browser.`);var r;(function(e){e.notload=`notload`,e.loading=`loading`,e.loaded=`loaded`,e.failed=`failed`})(r||={});var i={key:``,AMap:{version:`1.4.15`,plugins:[]},AMapUI:{version:`1.1`,plugins:[]},Loca:{version:`1.3.2`}},a={AMap:r.notload,AMapUI:r.notload,Loca:r.notload},o={AMap:[],AMapUI:[],Loca:[]},s=[],c=function(e){typeof e==`function`&&(a.AMap===r.loaded?e(window.AMap):s.push(e))};return{load:function(t){return new Promise(function(n,o){if(a.AMap==r.failed)o(``);else if(a.AMap==r.notload){var l=t.key,u=t.version,d=t.plugins;l?(window.AMap&&location.host!==`lbs.amap.com`&&o(`禁止多种API加载方式混用`),i.key=l,i.AMap.version=u||i.AMap.version,i.AMap.plugins=d||i.AMap.plugins,a.AMap=r.loading,u=document.body||document.head,window.___onAPILoaded=function(i){if(delete window.___onAPILoaded,i)a.AMap=r.failed,o(i);else for(a.AMap=r.loaded,e(t).then(function(){n(window.AMap)}).catch(o);s.length;)s.splice(0,1)[0]()},d=document.createElement(`script`),d.type=`text/javascript`,d.src=`https://webapi.amap.com/maps?callback=___onAPILoaded&v=`+i.AMap.version+`&key=`+l+`&plugin=`+i.AMap.plugins.join(`,`),d.onerror=function(e){a.AMap=r.failed,o(e)},u.appendChild(d)):o(`请填写key`)}else if(a.AMap==r.loaded){if(t.key&&t.key!==i.key)o(`多个不一致的 key`);else if(t.version&&t.version!==i.AMap.version)o(`不允许多个版本 JSAPI 混用`);else{if(l=[],t.plugins)for(u=0;u<t.plugins.length;u+=1)i.AMap.plugins.indexOf(t.plugins[u])==-1&&l.push(t.plugins[u]);l.length?window.AMap.plugin(l,function(){e(t).then(function(){n(window.AMap)}).catch(o)}):e(t).then(function(){n(window.AMap)}).catch(o)}}else if(t.key&&t.key!==i.key)o(`多个不一致的 key`);else if(t.version&&t.version!==i.AMap.version)o(`不允许多个版本 JSAPI 混用`);else{var f=[];if(t.plugins)for(u=0;u<t.plugins.length;u+=1)i.AMap.plugins.indexOf(t.plugins[u])==-1&&f.push(t.plugins[u]);c(function(){f.length?window.AMap.plugin(f,function(){e(t).then(function(){n(window.AMap)}).catch(o)}):e(t).then(function(){n(window.AMap)}).catch(o)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,i={key:``,AMap:{version:`1.4.15`,plugins:[]},AMapUI:{version:`1.1`,plugins:[]},Loca:{version:`1.3.2`}},a={AMap:r.notload,AMapUI:r.notload,Loca:r.notload},o={AMap:[],AMapUI:[],Loca:[]}}}})}))(),1),A;function ge(e){if(!e.amapKey)return Promise.reject(Error(`未配置高德 Web Key`));if(e.authMode===`proxy`){if(!e.serviceHost)return Promise.reject(Error(`未配置高德安全代理`));window._AMapSecurityConfig={serviceHost:e.serviceHost}}else e.securityJsCode?window._AMapSecurityConfig={securityJsCode:e.securityJsCode}:delete window._AMapSecurityConfig;return A??=he.default.load({key:e.amapKey,version:`2.0`,plugins:[]}).then(e=>e),A}async function j(e={}){let t=e.fetch??fetch,n=e.deviceNow??Date.now;if(e.timeApiUrl)try{let r=n(),i=await t(e.timeApiUrl,{cache:`no-store`}),a=n();if(i.ok){let e=await i.json(),t=Date.parse(e.datetime??e.now??``);if(Number.isFinite(t))return{now:new Date(t+(a-r)/2),source:`json-api`,degraded:!1}}}catch{}try{let e=n(),r=await t(globalThis.location?.href??`/`,{method:`HEAD`,cache:`no-store`}),i=n(),a=r.headers.get(`date`);if(a){let t=Date.parse(a);if(Number.isFinite(t))return{now:new Date(t+(i-e)/2),source:`http-date`,degraded:!1}}}catch{}return{now:new Date(n()),source:`device`,degraded:!0}}var M=class{wallNow;monotonicNow;#e=`realtime`;#t=1;#n;#r;constructor(e=Date.now,t=()=>performance.now()){this.wallNow=e,this.monotonicNow=t,this.#n=e(),this.#r=t()}snapshot(){return this.#e===`realtime`?{mode:`realtime`,now:new Date(this.wallNow()),rate:1}:{mode:`simulation`,now:new Date(this.#n+(this.monotonicNow()-this.#r)*this.#t),rate:this.#t}}setTime(e){this.#e=`simulation`,this.#n=e.getTime(),this.#r=this.monotonicNow()}setRate(e){let t=this.snapshot().now.getTime();this.#e=`simulation`,this.#n=t,this.#r=this.monotonicNow(),this.#t=e}returnToRealtime(){this.#e=`realtime`,this.#t=1}};function N(e,t){let n=()=>{e.open||e.showModal()},r=()=>{e.open&&e.close()},i=t=>{let n=t.target;(n===e||n instanceof Element&&n.closest(`[data-close-dialog]`))&&r()};return t.addEventListener(`click`,n),e.addEventListener(`click`,i),()=>{t.removeEventListener(`click`,n),e.removeEventListener(`click`,i),r()}}function P(e,t,n){e.innerHTML=`<div class="base-map-buttons" role="group" aria-label="底图类型"><button type="button" data-map-mode="standard" aria-pressed="true">标准地图</button><button type="button" data-map-mode="satellite" aria-pressed="false">卫星地图</button></div><label class="road-net-toggle"><input type="checkbox" data-road-net checked disabled>叠加路网</label><button type="button" data-train-view aria-pressed="false">列车信息：弹窗</button>`;let r=e.querySelector(`[data-road-net]`),i=e.querySelector(`[data-train-view]`),a=n=>{t.setMode(n),e.querySelectorAll(`[data-map-mode]`).forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.mapMode===n))),r.disabled=n===`standard`},o=e=>{let t=e.target,r=t.closest(`[data-map-mode]`)?.dataset.mapMode;if(r&&a(r),t.closest(`[data-train-view]`)){let e=i.getAttribute(`aria-pressed`)===`true`?`popup`:`sidebar`;i.setAttribute(`aria-pressed`,String(e===`sidebar`)),i.textContent=`列车信息：${e===`sidebar`?`侧栏`:`弹窗`}`,n(e)}},s=()=>t.setRoadNetVisible(r.checked);return e.addEventListener(`click`,o),r.addEventListener(`change`,s),()=>{e.removeEventListener(`click`,o),r.removeEventListener(`change`,s)}}function F(e,t,n){e.innerHTML=`<div class="clock-row"><strong data-clock-label>实时</strong><time data-clock-time></time></div><label>模拟时间<input type="datetime-local" step="1" data-time-input></label><div class="rates">${[0,1,5,10,30,60].map(e=>`<button data-rate="${e}">${e}×</button>`).join(``)}</div><button data-realtime>回到实时</button>`;let r=()=>{let n=t.snapshot(),r=e.querySelector(`[data-clock-label]`),i=e.querySelector(`[data-clock-time]`);r&&(r.textContent=n.mode===`simulation`?`模拟时间 · ${n.rate}×`:`实时推演`),i&&(i.textContent=n.now.toLocaleString(`zh-CN`,{timeZone:`Asia/Shanghai`,hour12:!1}))};e.addEventListener(`click`,e=>{let i=e.target,a=i.closest(`[data-rate]`)?.dataset.rate;a!==void 0&&t.setRate(Number(a)),i.closest(`[data-realtime]`)&&t.returnToRealtime(),r(),n()}),e.querySelector(`[data-time-input]`)?.addEventListener(`change`,e=>{let i=e.target.value;i&&(t.setTime(new Date(i)),r(),n())}),r();let i=window.setInterval(r,1e3);return()=>window.clearInterval(i)}var I={waiting:`等待上线`,moving:`运行中`,dwelling:`停站中`,turning:`折返中`,standby:`备用`,"out-of-service":`已下线`};function L(e,t,n){let r=new Map(n.map(e=>[e.id,e.nameZh])),i=t.filter(e=>e.status!==`out-of-service`);e.innerHTML=i.length===0?`<p class="empty">当前没有上线列车</p>`:i.map(e=>`<button class="state-card" data-vehicle-id="${e.vehicleId}"><b>${e.tripId??e.vehicleId}</b><span>${I[e.status]}</span><small>${e.status===`dwelling`&&e.locationId?`${r.get(e.locationId)??e.locationId}站停站中`:e.nextStationId?`前方 ${r.get(e.nextStationId)??e.nextStationId}${e.etaSeconds===void 0?``:` · ${e.etaSeconds} 秒`}`:``}</small>${e.notice?`<em>${e.notice}</em>`:``}</button>`).join(``)}var _e={waiting:`等待上线`,moving:`运行中`,dwelling:`停站中`,turning:`折返中`,standby:`备用`,"out-of-service":`已下线`},R=e=>e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`);function z(e,t){let n=new Map(t.map(e=>[e.id,e.nameZh])),r=e.locationId?n.get(e.locationId)??e.locationId:void 0,i=e.nextStationId?n.get(e.nextStationId)??e.nextStationId:void 0;return`<article class="train-detail"><h3>列车状态</h3><dl>${[[`车辆`,e.vehicleId],[`车次`,e.tripId??`待命`],[`状态`,_e[e.status]],...r?[[`当前位置`,`${r}站`]]:[],...i?[[`前方车站`,`${i}站`]]:[],...e.etaSeconds===void 0?[]:[[`预计到达`,`${e.etaSeconds} 秒后`]]].map(([e,t])=>`<div><dt>${R(e)}</dt><dd>${R(t)}</dd></div>`).join(``)}</dl>${!e.passengerService||e.notice?`<p>${R(e.notice??`本次列车不载客`)}</p>`:``}</article>`}var B=document.querySelector(`#app`);if(!B)throw Error(`Missing #app root`);B.innerHTML=`<header><div class="brand"><p class="eyebrow">AMTR · 4号线</p><h1>AMTR 4号线运行实时演示系统</h1></div><nav class="header-actions" aria-label="显示与时间控制"><button type="button" data-dialog-trigger="map-settings-dialog" aria-haspopup="dialog" aria-controls="map-settings-dialog">地图设置</button><button type="button" data-dialog-trigger="simulation-dialog" aria-haspopup="dialog" aria-controls="simulation-dialog">时间控制</button></nav><div class="disclaimer"><b>模拟位置</b><span>非 GPS 实时位置 · 非运营方实时数据</span><small id="clock-source">正在校时</small></div></header><dialog id="map-settings-dialog" class="control-dialog map-dialog" aria-labelledby="map-settings-title"><section class="dialog-card"><div class="dialog-heading"><h2 id="map-settings-title">地图与列车显示</h2><button type="button" data-close-dialog aria-label="关闭地图设置">×</button></div><div id="map-controls" class="map-toolbar" aria-label="地图显示设置"><p class="dialog-loading">正在加载地图设置…</p></div></section></dialog><dialog id="simulation-dialog" class="control-dialog simulation-dialog" aria-labelledby="simulation-title"><section class="dialog-card"><div class="dialog-heading"><h2 id="simulation-title">时间与模拟控制</h2><button type="button" data-close-dialog aria-label="关闭时间控制">×</button></div><div id="simulation" class="controls" aria-label="模拟控制"></div></section></dialog><main class="layout"><section class="map-card"><div id="map" aria-label="厦门地铁4号线地图"><div class="map-loading">正在加载地图…</div></div><details class="route-legend-module"><summary>线路结构</summary><div class="route-legend" aria-label="线路结构图例"><span><i class="elevated" aria-hidden="true"></i>高架段</span><span><i class="underground" aria-hidden="true"></i>隧道段</span></div></details><div id="map-error" class="map-error" hidden></div></section><aside id="side-dock" class="side-dock" hidden><section id="status-panel" class="panel"><h2>列车状态</h2><div id="status" class="states" aria-live="polite"></div></section></aside></main><footer><span class="footer-version">数据版本 T0402 · Asia/Shanghai</span><p class="legal">COPYRIGHT © <a href="https://github.com/BG2FOU" target="_blank" rel="noopener noreferrer"><strong>BG2FOU</strong></a> | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">闽ICP备2025114531号</a></p></footer>`;var ve=[[`map-settings-dialog`,`map-settings-dialog`],[`simulation-dialog`,`simulation-dialog`]].map(([e,t])=>N(document.querySelector(`#${e}`),document.querySelector(`[data-dialog-trigger="${t}"]`))),V=ee(JSON.parse(l)),ye=h(V),be=u,H=d({BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_AMAP_API_KEY:`26fd26a858cd1f8e77e3c515c11eead9`,VITE_AMAP_AUTH_MODE:`direct`,VITE_AMAP_SERVICE_HOST:`https://amap-proxy-worker.bg2fou.workers.dev/_AMapService`,VITE_TIME_API_URL:``}),U=0,W=new M(()=>Date.now()+U),xe=document.querySelector(`#status`),Se=document.querySelector(`#side-dock`),Ce=document.querySelector(`.layout`),G=`popup`,K=[],q,J;function Y(){let e=W.snapshot().now;K=oe(te(e),be,ye),L(xe,K,V.stations),q?.(K),J?.(K)}var we=F(document.querySelector(`#simulation`),W,Y);Y();var Te=window.setInterval(Y,1e3);async function X(){let e=await j({...H.timeApiUrl?{timeApiUrl:H.timeApiUrl}:{}});U=e.now.getTime()-Date.now();let t=document.querySelector(`#clock-source`);t&&(t.textContent=e.source===`json-api`?`时间源：远程校时`:e.source===`http-date`?`时间源：站点 HTTP Date`:`时间源：设备时间（降级）`),Y()}X();var Z=window.setInterval(()=>void X(),3e5),Q=()=>{document.visibilityState===`visible`&&X()};document.addEventListener(`visibilitychange`,Q);var $=document.querySelector(`#map-error`),Ee=e=>e instanceof Error?e.message:typeof e==`string`?e:e&&typeof e==`object`&&`message`in e&&typeof e.message==`string`?e.message:`未知错误`;ge(H).then(e=>{let t=new e.Map(document.querySelector(`#map`),{zoom:11,center:[118.19,24.6],viewMode:`2D`,resizeEnable:!0}),n=se(e,t),r=ce(e,t,V),i=ue(e,t,V),a=new e.InfoWindow({closeWhenClickMap:!0,offset:[0,-18]}),o,s=me(e,t,e=>{if(o=e.vehicleId,G===`sidebar`){document.querySelector(`[data-vehicle-id="${e.vehicleId}"]`)?.focus();return}e.position&&(a.setContent(z(e,V.stations)),a.open(t,e.position))}),c=P(document.querySelector(`#map-controls`),n,e=>{G=e;let t=e===`sidebar`;Se.hidden=!t,Ce.classList.toggle(`sidebar-open`,t),t&&a.close()});q=e=>s.update(e),J=e=>{if(G!==`popup`||!o)return;let t=e.find(e=>e.vehicleId===o);t?.position?a.setContent(z(t,V.stations)):(o=void 0,a.close())},Y(),t.setFitView(i.overlays),document.querySelector(`.map-loading`)?.remove(),window.addEventListener(`pagehide`,()=>{c(),a.close(),s.destroy(),i.destroy(),r(),t.destroy()},{once:!0})}).catch(e=>{document.querySelector(`.map-loading`)?.remove();let t=document.querySelector(`#map-controls`);t&&(t.innerHTML=`<p class="dialog-error">地图暂不可用，无法调整底图与列车显示。</p>`),$.hidden=!1,$.textContent=`地图暂不可用：${Ee(e)}。时间模拟和列车推演仍可使用。`}),window.addEventListener(`pagehide`,()=>{window.clearInterval(Te),window.clearInterval(Z),document.removeEventListener(`visibilitychange`,Q),ve.forEach(e=>e()),we()},{once:!0});
//# sourceMappingURL=index-cp3IsTut.js.map