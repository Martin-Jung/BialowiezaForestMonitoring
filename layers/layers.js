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
var lyr_Landsat2016Summercomposite0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Landsat 2016 Summer composite",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Landsat2016Summercomposite0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [7568, 4723],
                                imageExtent: [2591520.000000, 6892909.229514, 2667200.000000, 6970888.741074]
                            })
                        });var lyr_Bialowiezaforestclassification1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bialowieza forest classification",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Bialowiezaforestclassification1.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [2167, 1431],
                                imageExtent: [2599920.000004, 6899023.742720, 2664930.000047, 6969926.507221]
                            })
                        });var lyr_Yearandmonthofforestchange2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Year and month of forest change",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Yearandmonthofforestchange2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [2523, 1575],
                                imageExtent: [2591519.972057, 6892908.964403, 2667210.546627, 6970922.769292]
                            })
                        });var format_Bialowieza3 = new ol.format.GeoJSON();
var features_Bialowieza3 = format_Bialowieza3.readFeatures(json_Bialowieza3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bialowieza3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bialowieza3.addFeatures(features_Bialowieza3);var lyr_Bialowieza3 = new ol.layer.Vector({
                source:jsonSource_Bialowieza3, 
                style: style_Bialowieza3,
                title: "Bialowieza"
            });

lyr_Landsat2016Summercomposite0.setVisible(true);lyr_Bialowiezaforestclassification1.setVisible(true);lyr_Yearandmonthofforestchange2.setVisible(false);lyr_Bialowieza3.setVisible(false);
var layersList = [baseLayer,lyr_Landsat2016Summercomposite0,lyr_Bialowiezaforestclassification1,lyr_Yearandmonthofforestchange2,lyr_Bialowieza3];
lyr_Bialowieza3.set('fieldAliases', {'WDPAID': 'WDPAID', 'WDPA_PID': 'WDPA_PID', 'PA_DEF': 'PA_DEF', 'NAME': 'NAME', 'ORIG_NAME': 'ORIG_NAME', 'DESIG': 'DESIG', 'DESIG_ENG': 'DESIG_ENG', 'DESIG_TYPE': 'DESIG_TYPE', 'IUCN_CAT': 'IUCN_CAT', 'INT_CRIT': 'INT_CRIT', 'MARINE': 'MARINE', 'REP_M_AREA': 'REP_M_AREA', 'GIS_M_AREA': 'GIS_M_AREA', 'REP_AREA': 'REP_AREA', 'GIS_AREA': 'GIS_AREA', 'NO_TAKE': 'NO_TAKE', 'NO_TK_AREA': 'NO_TK_AREA', 'STATUS': 'STATUS', 'STATUS_YR': 'STATUS_YR', 'GOV_TYPE': 'GOV_TYPE', 'OWN_TYPE': 'OWN_TYPE', 'MANG_AUTH': 'MANG_AUTH', 'MANG_PLAN': 'MANG_PLAN', 'VERIF': 'VERIF', 'METADATAID': 'METADATAID', 'SUB_LOC': 'SUB_LOC', 'PARENT_ISO': 'PARENT_ISO', 'ISO3': 'ISO3', 'wdpaid_2': 'wdpaid_2', 'wdpa_pid_2': 'wdpa_pid_2', 'pa_def_2': 'pa_def_2', 'name_2': 'name_2', 'orig_name_': 'orig_name_', 'desig_2': 'desig_2', 'desig_eng_': 'desig_eng_', 'desig_ty_1': 'desig_ty_1', 'iucn_cat_2': 'iucn_cat_2', 'int_crit_2': 'int_crit_2', 'marine_2': 'marine_2', 'rep_m_ar_1': 'rep_m_ar_1', 'gis_m_ar_1': 'gis_m_ar_1', 'rep_area_2': 'rep_area_2', 'gis_area_2': 'gis_area_2', 'no_take_2': 'no_take_2', 'no_tk_ar_1': 'no_tk_ar_1', 'status_2': 'status_2', 'status_yr_': 'status_yr_', 'gov_type_2': 'gov_type_2', 'own_type_2': 'own_type_2', 'mang_auth_': 'mang_auth_', 'mang_plan_': 'mang_plan_', 'verif_2': 'verif_2', 'metadata_1': 'metadata_1', 'sub_loc_2': 'sub_loc_2', 'parent_i_1': 'parent_i_1', 'iso3_2': 'iso3_2', });
lyr_Bialowieza3.set('fieldImages', {'WDPAID': 'TextEdit', 'WDPA_PID': 'TextEdit', 'PA_DEF': 'TextEdit', 'NAME': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'DESIG': 'TextEdit', 'DESIG_ENG': 'TextEdit', 'DESIG_TYPE': 'TextEdit', 'IUCN_CAT': 'TextEdit', 'INT_CRIT': 'TextEdit', 'MARINE': 'TextEdit', 'REP_M_AREA': 'TextEdit', 'GIS_M_AREA': 'TextEdit', 'REP_AREA': 'TextEdit', 'GIS_AREA': 'TextEdit', 'NO_TAKE': 'TextEdit', 'NO_TK_AREA': 'TextEdit', 'STATUS': 'TextEdit', 'STATUS_YR': 'TextEdit', 'GOV_TYPE': 'TextEdit', 'OWN_TYPE': 'TextEdit', 'MANG_AUTH': 'TextEdit', 'MANG_PLAN': 'TextEdit', 'VERIF': 'TextEdit', 'METADATAID': 'TextEdit', 'SUB_LOC': 'TextEdit', 'PARENT_ISO': 'TextEdit', 'ISO3': 'TextEdit', 'wdpaid_2': 'TextEdit', 'wdpa_pid_2': 'TextEdit', 'pa_def_2': 'TextEdit', 'name_2': 'TextEdit', 'orig_name_': 'TextEdit', 'desig_2': 'TextEdit', 'desig_eng_': 'TextEdit', 'desig_ty_1': 'TextEdit', 'iucn_cat_2': 'TextEdit', 'int_crit_2': 'TextEdit', 'marine_2': 'TextEdit', 'rep_m_ar_1': 'TextEdit', 'gis_m_ar_1': 'TextEdit', 'rep_area_2': 'TextEdit', 'gis_area_2': 'TextEdit', 'no_take_2': 'TextEdit', 'no_tk_ar_1': 'TextEdit', 'status_2': 'TextEdit', 'status_yr_': 'TextEdit', 'gov_type_2': 'TextEdit', 'own_type_2': 'TextEdit', 'mang_auth_': 'TextEdit', 'mang_plan_': 'TextEdit', 'verif_2': 'TextEdit', 'metadata_1': 'TextEdit', 'sub_loc_2': 'TextEdit', 'parent_i_1': 'TextEdit', 'iso3_2': 'TextEdit', });
lyr_Bialowieza3.set('fieldLabels', {'WDPAID': 'no label', 'WDPA_PID': 'no label', 'PA_DEF': 'no label', 'NAME': 'no label', 'ORIG_NAME': 'no label', 'DESIG': 'no label', 'DESIG_ENG': 'no label', 'DESIG_TYPE': 'no label', 'IUCN_CAT': 'no label', 'INT_CRIT': 'no label', 'MARINE': 'no label', 'REP_M_AREA': 'no label', 'GIS_M_AREA': 'no label', 'REP_AREA': 'no label', 'GIS_AREA': 'no label', 'NO_TAKE': 'no label', 'NO_TK_AREA': 'no label', 'STATUS': 'no label', 'STATUS_YR': 'no label', 'GOV_TYPE': 'no label', 'OWN_TYPE': 'no label', 'MANG_AUTH': 'no label', 'MANG_PLAN': 'no label', 'VERIF': 'no label', 'METADATAID': 'no label', 'SUB_LOC': 'no label', 'PARENT_ISO': 'no label', 'ISO3': 'no label', 'wdpaid_2': 'no label', 'wdpa_pid_2': 'no label', 'pa_def_2': 'no label', 'name_2': 'no label', 'orig_name_': 'no label', 'desig_2': 'no label', 'desig_eng_': 'no label', 'desig_ty_1': 'no label', 'iucn_cat_2': 'no label', 'int_crit_2': 'no label', 'marine_2': 'no label', 'rep_m_ar_1': 'no label', 'gis_m_ar_1': 'no label', 'rep_area_2': 'no label', 'gis_area_2': 'no label', 'no_take_2': 'no label', 'no_tk_ar_1': 'no label', 'status_2': 'no label', 'status_yr_': 'no label', 'gov_type_2': 'no label', 'own_type_2': 'no label', 'mang_auth_': 'no label', 'mang_plan_': 'no label', 'verif_2': 'no label', 'metadata_1': 'no label', 'sub_loc_2': 'no label', 'parent_i_1': 'no label', 'iso3_2': 'no label', });
lyr_Bialowieza3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});