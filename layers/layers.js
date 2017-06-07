var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var lyr_LS_annual2014RGB0 = new ol.layer.Image({
                            opacity: 1,
                            title: "LS_annual2014RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LS_annual2014RGB0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [7568, 4723],
                                imageExtent: [2591520.000000, 6892909.229514, 2667200.000000, 6970888.741074]
                            })
                        });var lyr_LS_annual2015RGB1 = new ol.layer.Image({
                            opacity: 1,
                            title: "LS_annual2015RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LS_annual2015RGB1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [7568, 4723],
                                imageExtent: [2591520.000000, 6892909.229514, 2667200.000000, 6970888.741074]
                            })
                        });var lyr_LS_annual2016RGB2 = new ol.layer.Image({
                            opacity: 1,
                            title: "LS_annual2016RGB",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LS_annual2016RGB2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [7568, 4723],
                                imageExtent: [2591520.000000, 6892909.229514, 2667200.000000, 6970888.741074]
                            })
                        });var lyr_DeforestTypeClassificationChange3 = new ol.layer.Image({
                            opacity: 1,
                            title: "DeforestTypeClassificationChange",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DeforestTypeClassificationChange3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [2720, 1698],
                                imageExtent: [2591517.745667, 6892916.280596, 2667214.999407, 6970937.544793]
                            })
                        });

lyr_LS_annual2014RGB0.setVisible(true);lyr_LS_annual2015RGB1.setVisible(true);lyr_LS_annual2016RGB2.setVisible(true);lyr_DeforestTypeClassificationChange3.setVisible(true);
var layersList = [baseLayer,lyr_LS_annual2014RGB0,lyr_LS_annual2015RGB1,lyr_LS_annual2016RGB2,lyr_DeforestTypeClassificationChange3];
