var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadri_union_complet_1 = new ol.format.GeoJSON();
var features_cuadri_union_complet_1 = format_cuadri_union_complet_1.readFeatures(json_cuadri_union_complet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadri_union_complet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadri_union_complet_1.addFeatures(features_cuadri_union_complet_1);
var lyr_cuadri_union_complet_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadri_union_complet_1, 
                style: style_cuadri_union_complet_1,
                interactive: true,
    title: 'cuadri_union_complet<br />\
    <img src="styles/legend/cuadri_union_complet_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/cuadri_union_complet_1_1.png" /> 1 - 4<br />\
    <img src="styles/legend/cuadri_union_complet_1_2.png" /> 4 - 8<br />\
    <img src="styles/legend/cuadri_union_complet_1_3.png" /> 8 - 13<br />\
    <img src="styles/legend/cuadri_union_complet_1_4.png" /> 13 - 17<br />\
    <img src="styles/legend/cuadri_union_complet_1_5.png" /> 17 - 22<br />\
    <img src="styles/legend/cuadri_union_complet_1_6.png" /> 22 - 28<br />\
    <img src="styles/legend/cuadri_union_complet_1_7.png" /> 28 - 35<br />\
    <img src="styles/legend/cuadri_union_complet_1_8.png" /> 35 - 43<br />\
    <img src="styles/legend/cuadri_union_complet_1_9.png" /> 43 - 61<br />\
    <img src="styles/legend/cuadri_union_complet_1_10.png" /> 61 - 77<br />\
    <img src="styles/legend/cuadri_union_complet_1_11.png" /> 77 - 97<br />\
    <img src="styles/legend/cuadri_union_complet_1_12.png" /> 97 - 137<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadri_union_complet_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadri_union_complet_1];
lyr_cuadri_union_complet_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_cuadri_union_complet_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_cuadri_union_complet_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_cuadri_union_complet_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});