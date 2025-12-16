ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([384755.213501, 6447008.700212, 400246.240218, 6463919.737712]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AmricadoSul_1 = new ol.format.GeoJSON();
var features_AmricadoSul_1 = format_AmricadoSul_1.readFeatures(json_AmricadoSul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AmricadoSul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmricadoSul_1.addFeatures(features_AmricadoSul_1);
var lyr_AmricadoSul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmricadoSul_1, 
                style: style_AmricadoSul_1,
                popuplayertitle: 'América do Sul',
                interactive: false,
                title: '<img src="styles/legend/AmricadoSul_1.png" /> América do Sul'
            });
var format_Brasil_2 = new ol.format.GeoJSON();
var features_Brasil_2 = format_Brasil_2.readFeatures(json_Brasil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Brasil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brasil_2.addFeatures(features_Brasil_2);
var lyr_Brasil_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brasil_2, 
                style: style_Brasil_2,
                popuplayertitle: 'Brasil',
                interactive: false,
                title: '<img src="styles/legend/Brasil_2.png" /> Brasil'
            });
var format_RioGrandedoSul_3 = new ol.format.GeoJSON();
var features_RioGrandedoSul_3 = format_RioGrandedoSul_3.readFeatures(json_RioGrandedoSul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RioGrandedoSul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RioGrandedoSul_3.addFeatures(features_RioGrandedoSul_3);
var lyr_RioGrandedoSul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RioGrandedoSul_3, 
                style: style_RioGrandedoSul_3,
                popuplayertitle: 'Rio Grande do Sul',
                interactive: false,
                title: '<img src="styles/legend/RioGrandedoSul_3.png" /> Rio Grande do Sul'
            });
var format_LagoadosPatos_4 = new ol.format.GeoJSON();
var features_LagoadosPatos_4 = format_LagoadosPatos_4.readFeatures(json_LagoadosPatos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LagoadosPatos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagoadosPatos_4.addFeatures(features_LagoadosPatos_4);
var lyr_LagoadosPatos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LagoadosPatos_4, 
                style: style_LagoadosPatos_4,
                popuplayertitle: 'Lagoa dos Patos',
                interactive: false,
                title: '<img src="styles/legend/LagoadosPatos_4.png" /> Lagoa dos Patos'
            });
var format_RioGrande_5 = new ol.format.GeoJSON();
var features_RioGrande_5 = format_RioGrande_5.readFeatures(json_RioGrande_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RioGrande_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RioGrande_5.addFeatures(features_RioGrande_5);
var lyr_RioGrande_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RioGrande_5, 
                style: style_RioGrande_5,
                popuplayertitle: 'Rio Grande',
                interactive: false,
                title: '<img src="styles/legend/RioGrande_5.png" /> Rio Grande'
            });
var lyr_Focos_descarte_kernel_2020_6 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Focos_descarte_kernel_2020',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Focos_descarte_kernel_2020_6.png",
                                attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [340618.334000, 6387064.708700, 399508.334000, 6483784.708700]
                            })
                        });
var lyr_Focos_descarte_kernel_2025_7 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Focos_descarte_kernel_2025',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Focos_descarte_kernel_2025_7.png",
                                attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [340644.007200, 6387077.819100, 399534.007200, 6483767.819100]
                            })
                        });
var lyr_Focos_descarte_kernel_geral_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Focos_descarte_kernel_geral',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Focos_descarte_kernel_geral_8.png",
                                attributions: ' ',
                                projection: 'EPSG:31982',
                                alwaysInRange: true,
                                imageExtent: [340644.007200, 6387077.819100, 399534.007200, 6483767.819100]
                            })
                        });
var format_Voronoi_geral_9 = new ol.format.GeoJSON();
var features_Voronoi_geral_9 = format_Voronoi_geral_9.readFeatures(json_Voronoi_geral_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Voronoi_geral_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voronoi_geral_9.addFeatures(features_Voronoi_geral_9);
var lyr_Voronoi_geral_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voronoi_geral_9, 
                style: style_Voronoi_geral_9,
                popuplayertitle: 'Voronoi_geral',
                interactive: true,
    title: 'Voronoi_geral<br />\
    <img src="styles/legend/Voronoi_geral_9_0.png" /> 3635 - 130890<br />\
    <img src="styles/legend/Voronoi_geral_9_1.png" /> 130890 - 334140<br />\
    <img src="styles/legend/Voronoi_geral_9_2.png" /> 334140 - 746575<br />\
    <img src="styles/legend/Voronoi_geral_9_3.png" /> 746575 - 1728080<br />\
    <img src="styles/legend/Voronoi_geral_9_4.png" /> 1728080 - 4041208<br />\
    <img src="styles/legend/Voronoi_geral_9_5.png" /> 4041208 - 6979085<br />\
    <img src="styles/legend/Voronoi_geral_9_6.png" /> 6979085 - 13607592<br />'
        });
var format_DensidadePopulacional_10 = new ol.format.GeoJSON();
var features_DensidadePopulacional_10 = format_DensidadePopulacional_10.readFeatures(json_DensidadePopulacional_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_DensidadePopulacional_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadePopulacional_10.addFeatures(features_DensidadePopulacional_10);
var lyr_DensidadePopulacional_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadePopulacional_10, 
                style: style_DensidadePopulacional_10,
                popuplayertitle: 'Densidade Populacional',
                interactive: true,
    title: 'Densidade Populacional<br />\
    <img src="styles/legend/DensidadePopulacional_10_0.png" /> 0 - 1653<br />\
    <img src="styles/legend/DensidadePopulacional_10_1.png" /> 1653 - 4144<br />\
    <img src="styles/legend/DensidadePopulacional_10_2.png" /> 4144 - 6764<br />\
    <img src="styles/legend/DensidadePopulacional_10_3.png" /> 6764 - 9439<br />\
    <img src="styles/legend/DensidadePopulacional_10_4.png" /> 9439 - 15300<br />\
    <img src="styles/legend/DensidadePopulacional_10_5.png" /> 15300 - 43624<br />\
    <img src="styles/legend/DensidadePopulacional_10_6.png" /> 43624 - 69780<br />'
        });
var format_DensidadeDomiciliar_11 = new ol.format.GeoJSON();
var features_DensidadeDomiciliar_11 = format_DensidadeDomiciliar_11.readFeatures(json_DensidadeDomiciliar_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_DensidadeDomiciliar_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeDomiciliar_11.addFeatures(features_DensidadeDomiciliar_11);
var lyr_DensidadeDomiciliar_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadeDomiciliar_11, 
                style: style_DensidadeDomiciliar_11,
                popuplayertitle: 'Densidade Domiciliar',
                interactive: true,
    title: 'Densidade Domiciliar<br />\
    <img src="styles/legend/DensidadeDomiciliar_11_0.png" /> 0 - 1585<br />\
    <img src="styles/legend/DensidadeDomiciliar_11_1.png" /> 1585 - 3745<br />\
    <img src="styles/legend/DensidadeDomiciliar_11_2.png" /> 3745 - 7403<br />\
    <img src="styles/legend/DensidadeDomiciliar_11_3.png" /> 7403 - 16798<br />\
    <img src="styles/legend/DensidadeDomiciliar_11_4.png" /> 16798 - 40842<br />'
        });
var format_nmr_pts_setor_cens_geral_12 = new ol.format.GeoJSON();
var features_nmr_pts_setor_cens_geral_12 = format_nmr_pts_setor_cens_geral_12.readFeatures(json_nmr_pts_setor_cens_geral_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_nmr_pts_setor_cens_geral_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nmr_pts_setor_cens_geral_12.addFeatures(features_nmr_pts_setor_cens_geral_12);
var lyr_nmr_pts_setor_cens_geral_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nmr_pts_setor_cens_geral_12, 
                style: style_nmr_pts_setor_cens_geral_12,
                popuplayertitle: 'nmr_pts_setor_cens_geral',
                interactive: true,
    title: 'nmr_pts_setor_cens_geral<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_0.png" /> 0<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_1.png" /> 1<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_2.png" /> 2<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_3.png" /> 3<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_4.png" /> 4<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_5.png" /> 5<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_6.png" /> 7<br />\
    <img src="styles/legend/nmr_pts_setor_cens_geral_12_7.png" /> 9<br />'
        });
var format_nmr_pts_setor_cens_2025_13 = new ol.format.GeoJSON();
var features_nmr_pts_setor_cens_2025_13 = format_nmr_pts_setor_cens_2025_13.readFeatures(json_nmr_pts_setor_cens_2025_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_nmr_pts_setor_cens_2025_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nmr_pts_setor_cens_2025_13.addFeatures(features_nmr_pts_setor_cens_2025_13);
var lyr_nmr_pts_setor_cens_2025_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nmr_pts_setor_cens_2025_13, 
                style: style_nmr_pts_setor_cens_2025_13,
                popuplayertitle: 'nmr_pts_setor_cens_2025',
                interactive: true,
    title: 'nmr_pts_setor_cens_2025<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2025_13_0.png" /> 0<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2025_13_1.png" /> 1<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2025_13_2.png" /> 2<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2025_13_3.png" /> 3<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2025_13_4.png" /> 4<br />'
        });
var format_nmr_pts_setor_cens_2020_14 = new ol.format.GeoJSON();
var features_nmr_pts_setor_cens_2020_14 = format_nmr_pts_setor_cens_2020_14.readFeatures(json_nmr_pts_setor_cens_2020_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_nmr_pts_setor_cens_2020_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nmr_pts_setor_cens_2020_14.addFeatures(features_nmr_pts_setor_cens_2020_14);
var lyr_nmr_pts_setor_cens_2020_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nmr_pts_setor_cens_2020_14, 
                style: style_nmr_pts_setor_cens_2020_14,
                popuplayertitle: 'nmr_pts_setor_cens_2020',
                interactive: true,
    title: 'nmr_pts_setor_cens_2020<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_0.png" /> 0<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_1.png" /> 1<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_2.png" /> 2<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_3.png" /> 3<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_4.png" /> 4<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_5.png" /> 6<br />\
    <img src="styles/legend/nmr_pts_setor_cens_2020_14_6.png" /> 7<br />'
        });
var format_nmr_pts_localidade_geral_15 = new ol.format.GeoJSON();
var features_nmr_pts_localidade_geral_15 = format_nmr_pts_localidade_geral_15.readFeatures(json_nmr_pts_localidade_geral_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_nmr_pts_localidade_geral_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nmr_pts_localidade_geral_15.addFeatures(features_nmr_pts_localidade_geral_15);
var lyr_nmr_pts_localidade_geral_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nmr_pts_localidade_geral_15, 
                style: style_nmr_pts_localidade_geral_15,
                popuplayertitle: 'nmr_pts_localidade_geral',
                interactive: true,
    title: 'nmr_pts_localidade_geral<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_0.png" /> 0<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_1.png" /> 1<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_2.png" /> 2<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_3.png" /> 3<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_4.png" /> 4<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_5.png" /> 5<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_6.png" /> 6<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_7.png" /> 7<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_8.png" /> 8<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_9.png" /> 9<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_10.png" /> 10<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_11.png" /> 11<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_12.png" /> 12<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_13.png" /> 13<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_14.png" /> 14<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_15.png" /> 15<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_16.png" /> 16<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_17.png" /> 17<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_18.png" /> 18<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_19.png" /> 19<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_20.png" /> 20<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_21.png" /> 21<br />\
    <img src="styles/legend/nmr_pts_localidade_geral_15_22.png" /> 22<br />'
        });
var format_nmr_pts_localidade_2025_16 = new ol.format.GeoJSON();
var features_nmr_pts_localidade_2025_16 = format_nmr_pts_localidade_2025_16.readFeatures(json_nmr_pts_localidade_2025_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_nmr_pts_localidade_2025_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nmr_pts_localidade_2025_16.addFeatures(features_nmr_pts_localidade_2025_16);
var lyr_nmr_pts_localidade_2025_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nmr_pts_localidade_2025_16, 
                style: style_nmr_pts_localidade_2025_16,
                popuplayertitle: 'nmr_pts_localidade_2025',
                interactive: true,
    title: 'nmr_pts_localidade_2025<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_0.png" /> 0<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_1.png" /> 1<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_2.png" /> 2<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_3.png" /> 3<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_4.png" /> 4<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_5.png" /> 5<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_6.png" /> 7<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_7.png" /> 10<br />\
    <img src="styles/legend/nmr_pts_localidade_2025_16_8.png" /> 11<br />'
        });
var format_nmr_pts_localidade_2020_17 = new ol.format.GeoJSON();
var features_nmr_pts_localidade_2020_17 = format_nmr_pts_localidade_2020_17.readFeatures(json_nmr_pts_localidade_2020_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_nmr_pts_localidade_2020_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nmr_pts_localidade_2020_17.addFeatures(features_nmr_pts_localidade_2020_17);
var lyr_nmr_pts_localidade_2020_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nmr_pts_localidade_2020_17, 
                style: style_nmr_pts_localidade_2020_17,
                popuplayertitle: 'nmr_pts_localidade_2020',
                interactive: true,
    title: 'nmr_pts_localidade_2020<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_0.png" /> 0<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_1.png" /> 2<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_2.png" /> 3<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_3.png" /> 4<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_4.png" /> 5<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_5.png" /> 7<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_6.png" /> 8<br />\
    <img src="styles/legend/nmr_pts_localidade_2020_17_7.png" /> 11<br />'
        });
var format_Sade_raio_1500m_18 = new ol.format.GeoJSON();
var features_Sade_raio_1500m_18 = format_Sade_raio_1500m_18.readFeatures(json_Sade_raio_1500m_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Sade_raio_1500m_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sade_raio_1500m_18.addFeatures(features_Sade_raio_1500m_18);
var lyr_Sade_raio_1500m_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sade_raio_1500m_18, 
                style: style_Sade_raio_1500m_18,
                popuplayertitle: 'Saúde_raio_1500m',
                interactive: true,
                title: '<img src="styles/legend/Sade_raio_1500m_18.png" /> Saúde_raio_1500m'
            });
var format_Sade_raio_300m_19 = new ol.format.GeoJSON();
var features_Sade_raio_300m_19 = format_Sade_raio_300m_19.readFeatures(json_Sade_raio_300m_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Sade_raio_300m_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sade_raio_300m_19.addFeatures(features_Sade_raio_300m_19);
var lyr_Sade_raio_300m_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sade_raio_300m_19, 
                style: style_Sade_raio_300m_19,
                popuplayertitle: 'Saúde_raio_300m',
                interactive: true,
                title: '<img src="styles/legend/Sade_raio_300m_19.png" /> Saúde_raio_300m'
            });
var format_Unidades_sade_20 = new ol.format.GeoJSON();
var features_Unidades_sade_20 = format_Unidades_sade_20.readFeatures(json_Unidades_sade_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Unidades_sade_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Unidades_sade_20.addFeatures(features_Unidades_sade_20);
var lyr_Unidades_sade_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Unidades_sade_20, 
                style: style_Unidades_sade_20,
                popuplayertitle: 'Unidades_saúde',
                interactive: true,
                title: '<img src="styles/legend/Unidades_sade_20.png" /> Unidades_saúde'
            });
var format_Praas_influncia_300m_21 = new ol.format.GeoJSON();
var features_Praas_influncia_300m_21 = format_Praas_influncia_300m_21.readFeatures(json_Praas_influncia_300m_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Praas_influncia_300m_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praas_influncia_300m_21.addFeatures(features_Praas_influncia_300m_21);
var lyr_Praas_influncia_300m_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praas_influncia_300m_21, 
                style: style_Praas_influncia_300m_21,
                popuplayertitle: 'Praças_influência_300m',
                interactive: false,
                title: '<img src="styles/legend/Praas_influncia_300m_21.png" /> Praças_influência_300m'
            });
var format_Praaslocalizao_22 = new ol.format.GeoJSON();
var features_Praaslocalizao_22 = format_Praaslocalizao_22.readFeatures(json_Praaslocalizao_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Praaslocalizao_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Praaslocalizao_22.addFeatures(features_Praaslocalizao_22);
var lyr_Praaslocalizao_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Praaslocalizao_22, 
                style: style_Praaslocalizao_22,
                popuplayertitle: 'Praças localização',
                interactive: false,
                title: '<img src="styles/legend/Praaslocalizao_22.png" /> Praças localização'
            });
var format_Escola_mdio_3000m_23 = new ol.format.GeoJSON();
var features_Escola_mdio_3000m_23 = format_Escola_mdio_3000m_23.readFeatures(json_Escola_mdio_3000m_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Escola_mdio_3000m_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escola_mdio_3000m_23.addFeatures(features_Escola_mdio_3000m_23);
var lyr_Escola_mdio_3000m_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escola_mdio_3000m_23, 
                style: style_Escola_mdio_3000m_23,
                popuplayertitle: 'Escola_médio_3000m',
                interactive: true,
                title: '<img src="styles/legend/Escola_mdio_3000m_23.png" /> Escola_médio_3000m'
            });
var format_Escola_mdio_300m_24 = new ol.format.GeoJSON();
var features_Escola_mdio_300m_24 = format_Escola_mdio_300m_24.readFeatures(json_Escola_mdio_300m_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Escola_mdio_300m_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escola_mdio_300m_24.addFeatures(features_Escola_mdio_300m_24);
var lyr_Escola_mdio_300m_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escola_mdio_300m_24, 
                style: style_Escola_mdio_300m_24,
                popuplayertitle: 'Escola_médio_300m',
                interactive: true,
                title: '<img src="styles/legend/Escola_mdio_300m_24.png" /> Escola_médio_300m'
            });
var format_Escola_fundamental_1500m_25 = new ol.format.GeoJSON();
var features_Escola_fundamental_1500m_25 = format_Escola_fundamental_1500m_25.readFeatures(json_Escola_fundamental_1500m_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Escola_fundamental_1500m_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escola_fundamental_1500m_25.addFeatures(features_Escola_fundamental_1500m_25);
var lyr_Escola_fundamental_1500m_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escola_fundamental_1500m_25, 
                style: style_Escola_fundamental_1500m_25,
                popuplayertitle: 'Escola_fundamental_1500m',
                interactive: true,
                title: '<img src="styles/legend/Escola_fundamental_1500m_25.png" /> Escola_fundamental_1500m'
            });
var format_Escola_fundamental_300m_26 = new ol.format.GeoJSON();
var features_Escola_fundamental_300m_26 = format_Escola_fundamental_300m_26.readFeatures(json_Escola_fundamental_300m_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Escola_fundamental_300m_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escola_fundamental_300m_26.addFeatures(features_Escola_fundamental_300m_26);
var lyr_Escola_fundamental_300m_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escola_fundamental_300m_26, 
                style: style_Escola_fundamental_300m_26,
                popuplayertitle: 'Escola_fundamental_300m',
                interactive: true,
                title: '<img src="styles/legend/Escola_fundamental_300m_26.png" /> Escola_fundamental_300m'
            });
var format_Escola_infantil_300m_27 = new ol.format.GeoJSON();
var features_Escola_infantil_300m_27 = format_Escola_infantil_300m_27.readFeatures(json_Escola_infantil_300m_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Escola_infantil_300m_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escola_infantil_300m_27.addFeatures(features_Escola_infantil_300m_27);
var lyr_Escola_infantil_300m_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escola_infantil_300m_27, 
                style: style_Escola_infantil_300m_27,
                popuplayertitle: 'Escola_infantil_300m',
                interactive: true,
                title: '<img src="styles/legend/Escola_infantil_300m_27.png" /> Escola_infantil_300m'
            });
var format_EscolaEnsinoMdio_28 = new ol.format.GeoJSON();
var features_EscolaEnsinoMdio_28 = format_EscolaEnsinoMdio_28.readFeatures(json_EscolaEnsinoMdio_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_EscolaEnsinoMdio_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaEnsinoMdio_28.addFeatures(features_EscolaEnsinoMdio_28);
var lyr_EscolaEnsinoMdio_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EscolaEnsinoMdio_28, 
                style: style_EscolaEnsinoMdio_28,
                popuplayertitle: 'Escola Ensino Médio',
                interactive: true,
                title: '<img src="styles/legend/EscolaEnsinoMdio_28.png" /> Escola Ensino Médio'
            });
var format_EscolaFundamental_29 = new ol.format.GeoJSON();
var features_EscolaFundamental_29 = format_EscolaFundamental_29.readFeatures(json_EscolaFundamental_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_EscolaFundamental_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaFundamental_29.addFeatures(features_EscolaFundamental_29);
var lyr_EscolaFundamental_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EscolaFundamental_29, 
                style: style_EscolaFundamental_29,
                popuplayertitle: 'Escola Fundamental',
                interactive: true,
                title: '<img src="styles/legend/EscolaFundamental_29.png" /> Escola Fundamental'
            });
var format_EscolaInfantil_30 = new ol.format.GeoJSON();
var features_EscolaInfantil_30 = format_EscolaInfantil_30.readFeatures(json_EscolaInfantil_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_EscolaInfantil_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EscolaInfantil_30.addFeatures(features_EscolaInfantil_30);
var lyr_EscolaInfantil_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EscolaInfantil_30, 
                style: style_EscolaInfantil_30,
                popuplayertitle: 'Escola Infantil',
                interactive: true,
                title: '<img src="styles/legend/EscolaInfantil_30.png" /> Escola Infantil'
            });
var format_Hdricos_prximos_100m_31 = new ol.format.GeoJSON();
var features_Hdricos_prximos_100m_31 = format_Hdricos_prximos_100m_31.readFeatures(json_Hdricos_prximos_100m_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Hdricos_prximos_100m_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hdricos_prximos_100m_31.addFeatures(features_Hdricos_prximos_100m_31);
var lyr_Hdricos_prximos_100m_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hdricos_prximos_100m_31, 
                style: style_Hdricos_prximos_100m_31,
                popuplayertitle: 'Hídricos_próximos_100m',
                interactive: false,
                title: '<img src="styles/legend/Hdricos_prximos_100m_31.png" /> Hídricos_próximos_100m'
            });
var format_Lagoa_Verde_200m_32 = new ol.format.GeoJSON();
var features_Lagoa_Verde_200m_32 = format_Lagoa_Verde_200m_32.readFeatures(json_Lagoa_Verde_200m_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Lagoa_Verde_200m_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagoa_Verde_200m_32.addFeatures(features_Lagoa_Verde_200m_32);
var lyr_Lagoa_Verde_200m_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagoa_Verde_200m_32, 
                style: style_Lagoa_Verde_200m_32,
                popuplayertitle: 'Lagoa_Verde_200m',
                interactive: false,
                title: '<img src="styles/legend/Lagoa_Verde_200m_32.png" /> Lagoa_Verde_200m'
            });
var format_PNMBarra_33 = new ol.format.GeoJSON();
var features_PNMBarra_33 = format_PNMBarra_33.readFeatures(json_PNMBarra_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PNMBarra_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PNMBarra_33.addFeatures(features_PNMBarra_33);
var lyr_PNMBarra_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PNMBarra_33, 
                style: style_PNMBarra_33,
                popuplayertitle: 'PNM Barra',
                interactive: false,
                title: '<img src="styles/legend/PNMBarra_33.png" /> PNM Barra'
            });
var format_Lagoa_Patos_30m_34 = new ol.format.GeoJSON();
var features_Lagoa_Patos_30m_34 = format_Lagoa_Patos_30m_34.readFeatures(json_Lagoa_Patos_30m_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Lagoa_Patos_30m_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagoa_Patos_30m_34.addFeatures(features_Lagoa_Patos_30m_34);
var lyr_Lagoa_Patos_30m_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagoa_Patos_30m_34, 
                style: style_Lagoa_Patos_30m_34,
                popuplayertitle: 'Lagoa_Patos_30m',
                interactive: false,
                title: '<img src="styles/legend/Lagoa_Patos_30m_34.png" /> Lagoa_Patos_30m'
            });
var format_LocalidadesRG_35 = new ol.format.GeoJSON();
var features_LocalidadesRG_35 = format_LocalidadesRG_35.readFeatures(json_LocalidadesRG_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_LocalidadesRG_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesRG_35.addFeatures(features_LocalidadesRG_35);
var lyr_LocalidadesRG_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalidadesRG_35, 
                style: style_LocalidadesRG_35,
                popuplayertitle: 'Localidades RG',
                interactive: true,
                title: '<img src="styles/legend/LocalidadesRG_35.png" /> Localidades RG'
            });
var format_reaurbanizada_36 = new ol.format.GeoJSON();
var features_reaurbanizada_36 = format_reaurbanizada_36.readFeatures(json_reaurbanizada_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reaurbanizada_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbanizada_36.addFeatures(features_reaurbanizada_36);
var lyr_reaurbanizada_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaurbanizada_36, 
                style: style_reaurbanizada_36,
                popuplayertitle: 'Área urbanizada',
                interactive: false,
                title: '<img src="styles/legend/reaurbanizada_36.png" /> Área urbanizada'
            });
var format_Focos_geral_30m_37 = new ol.format.GeoJSON();
var features_Focos_geral_30m_37 = format_Focos_geral_30m_37.readFeatures(json_Focos_geral_30m_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Focos_geral_30m_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_geral_30m_37.addFeatures(features_Focos_geral_30m_37);
var lyr_Focos_geral_30m_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focos_geral_30m_37, 
                style: style_Focos_geral_30m_37,
                popuplayertitle: 'Focos_geral_30m',
                interactive: true,
                title: '<img src="styles/legend/Focos_geral_30m_37.png" /> Focos_geral_30m'
            });
var format_Focos_2025_30m_38 = new ol.format.GeoJSON();
var features_Focos_2025_30m_38 = format_Focos_2025_30m_38.readFeatures(json_Focos_2025_30m_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Focos_2025_30m_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_2025_30m_38.addFeatures(features_Focos_2025_30m_38);
var lyr_Focos_2025_30m_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focos_2025_30m_38, 
                style: style_Focos_2025_30m_38,
                popuplayertitle: 'Focos_2025_30m',
                interactive: true,
                title: '<img src="styles/legend/Focos_2025_30m_38.png" /> Focos_2025_30m'
            });
var format_Focos_2020_30m_39 = new ol.format.GeoJSON();
var features_Focos_2020_30m_39 = format_Focos_2020_30m_39.readFeatures(json_Focos_2020_30m_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Focos_2020_30m_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focos_2020_30m_39.addFeatures(features_Focos_2020_30m_39);
var lyr_Focos_2020_30m_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focos_2020_30m_39, 
                style: style_Focos_2020_30m_39,
                popuplayertitle: 'Focos_2020_30m',
                interactive: true,
                title: '<img src="styles/legend/Focos_2020_30m_39.png" /> Focos_2020_30m'
            });
var format_Focosdelixogeral_40 = new ol.format.GeoJSON();
var features_Focosdelixogeral_40 = format_Focosdelixogeral_40.readFeatures(json_Focosdelixogeral_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Focosdelixogeral_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focosdelixogeral_40.addFeatures(features_Focosdelixogeral_40);
var lyr_Focosdelixogeral_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focosdelixogeral_40, 
                style: style_Focosdelixogeral_40,
                popuplayertitle: 'Focos de lixo geral',
                interactive: true,
                title: '<img src="styles/legend/Focosdelixogeral_40.png" /> Focos de lixo geral'
            });
var format_Focodelixo2025_41 = new ol.format.GeoJSON();
var features_Focodelixo2025_41 = format_Focodelixo2025_41.readFeatures(json_Focodelixo2025_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Focodelixo2025_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focodelixo2025_41.addFeatures(features_Focodelixo2025_41);
var lyr_Focodelixo2025_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focodelixo2025_41, 
                style: style_Focodelixo2025_41,
                popuplayertitle: 'Foco de lixo 2025',
                interactive: true,
                title: '<img src="styles/legend/Focodelixo2025_41.png" /> Foco de lixo 2025'
            });
var format_Focosdelixo2020_42 = new ol.format.GeoJSON();
var features_Focosdelixo2020_42 = format_Focosdelixo2020_42.readFeatures(json_Focosdelixo2020_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Focosdelixo2020_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Focosdelixo2020_42.addFeatures(features_Focosdelixo2020_42);
var lyr_Focosdelixo2020_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Focosdelixo2020_42, 
                style: style_Focosdelixo2020_42,
                popuplayertitle: 'Focos de lixo 2020',
                interactive: true,
                title: '<img src="styles/legend/Focosdelixo2020_42.png" /> Focos de lixo 2020'
            });
var group_Focosdedescarteirregular = new ol.layer.Group({
                                layers: [lyr_Focosdelixogeral_40,lyr_Focodelixo2025_41,lyr_Focosdelixo2020_42,],
                                fold: "open",
                                title: 'Focos de descarte irregular'});
var group_RaiosdeInfluncia = new ol.layer.Group({
                                layers: [lyr_Focos_geral_30m_37,lyr_Focos_2025_30m_38,lyr_Focos_2020_30m_39,],
                                fold: "open",
                                title: 'Raios de Influência'});
var group_reasdeConservao = new ol.layer.Group({
                                layers: [lyr_Hdricos_prximos_100m_31,lyr_Lagoa_Verde_200m_32,lyr_PNMBarra_33,lyr_Lagoa_Patos_30m_34,],
                                fold: "open",
                                title: 'Áreas de Conservação'});
var group_Escolaslocalizao = new ol.layer.Group({
                                layers: [lyr_EscolaEnsinoMdio_28,lyr_EscolaFundamental_29,lyr_EscolaInfantil_30,],
                                fold: "open",
                                title: 'Escolas localização'});
var group_RaiodeInfluncia = new ol.layer.Group({
                                layers: [lyr_Escola_mdio_3000m_23,lyr_Escola_mdio_300m_24,lyr_Escola_fundamental_1500m_25,lyr_Escola_fundamental_300m_26,lyr_Escola_infantil_300m_27,],
                                fold: "open",
                                title: 'Raio de Influência'});
var group_Praas = new ol.layer.Group({
                                layers: [lyr_Praas_influncia_300m_21,lyr_Praaslocalizao_22,],
                                fold: "open",
                                title: 'Praças'});
var group_UnidadesdeSade = new ol.layer.Group({
                                layers: [lyr_Sade_raio_1500m_18,lyr_Sade_raio_300m_19,lyr_Unidades_sade_20,],
                                fold: "open",
                                title: 'Unidades de Saúde'});
var group_NmerodeFocosporLocalidade = new ol.layer.Group({
                                layers: [lyr_nmr_pts_localidade_geral_15,lyr_nmr_pts_localidade_2025_16,lyr_nmr_pts_localidade_2020_17,],
                                fold: "open",
                                title: 'Número de Focos por Localidade'});
var group_SetoresCensitrios = new ol.layer.Group({
                                layers: [lyr_DensidadePopulacional_10,lyr_DensidadeDomiciliar_11,lyr_nmr_pts_setor_cens_geral_12,lyr_nmr_pts_setor_cens_2025_13,lyr_nmr_pts_setor_cens_2020_14,],
                                fold: "open",
                                title: 'Setores Censitários'});
var group_DemaisResultados = new ol.layer.Group({
                                layers: [lyr_Voronoi_geral_9,],
                                fold: "open",
                                title: 'Demais Resultados'});
var group_Kernel = new ol.layer.Group({
                                layers: [lyr_Focos_descarte_kernel_2020_6,lyr_Focos_descarte_kernel_2025_7,lyr_Focos_descarte_kernel_geral_8,],
                                fold: "open",
                                title: 'Kernel'});
var group_Overview = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_AmricadoSul_1,lyr_Brasil_2,lyr_RioGrandedoSul_3,lyr_LagoadosPatos_4,lyr_RioGrande_5,],
                                fold: "open",
                                title: 'Overview'});

lyr_OSMStandard_0.setVisible(true);lyr_AmricadoSul_1.setVisible(true);lyr_Brasil_2.setVisible(true);lyr_RioGrandedoSul_3.setVisible(true);lyr_LagoadosPatos_4.setVisible(true);lyr_RioGrande_5.setVisible(true);lyr_Focos_descarte_kernel_2020_6.setVisible(true);lyr_Focos_descarte_kernel_2025_7.setVisible(true);lyr_Focos_descarte_kernel_geral_8.setVisible(true);lyr_Voronoi_geral_9.setVisible(true);lyr_DensidadePopulacional_10.setVisible(true);lyr_DensidadeDomiciliar_11.setVisible(true);lyr_nmr_pts_setor_cens_geral_12.setVisible(true);lyr_nmr_pts_setor_cens_2025_13.setVisible(true);lyr_nmr_pts_setor_cens_2020_14.setVisible(true);lyr_nmr_pts_localidade_geral_15.setVisible(true);lyr_nmr_pts_localidade_2025_16.setVisible(true);lyr_nmr_pts_localidade_2020_17.setVisible(true);lyr_Sade_raio_1500m_18.setVisible(true);lyr_Sade_raio_300m_19.setVisible(true);lyr_Unidades_sade_20.setVisible(true);lyr_Praas_influncia_300m_21.setVisible(true);lyr_Praaslocalizao_22.setVisible(true);lyr_Escola_mdio_3000m_23.setVisible(true);lyr_Escola_mdio_300m_24.setVisible(true);lyr_Escola_fundamental_1500m_25.setVisible(true);lyr_Escola_fundamental_300m_26.setVisible(true);lyr_Escola_infantil_300m_27.setVisible(true);lyr_EscolaEnsinoMdio_28.setVisible(true);lyr_EscolaFundamental_29.setVisible(true);lyr_EscolaInfantil_30.setVisible(true);lyr_Hdricos_prximos_100m_31.setVisible(true);lyr_Lagoa_Verde_200m_32.setVisible(true);lyr_PNMBarra_33.setVisible(true);lyr_Lagoa_Patos_30m_34.setVisible(true);lyr_LocalidadesRG_35.setVisible(true);lyr_reaurbanizada_36.setVisible(true);lyr_Focos_geral_30m_37.setVisible(true);lyr_Focos_2025_30m_38.setVisible(true);lyr_Focos_2020_30m_39.setVisible(true);lyr_Focosdelixogeral_40.setVisible(true);lyr_Focodelixo2025_41.setVisible(true);lyr_Focosdelixo2020_42.setVisible(true);
var layersList = [group_Overview,group_Kernel,group_DemaisResultados,group_SetoresCensitrios,group_NmerodeFocosporLocalidade,group_UnidadesdeSade,group_Praas,group_RaiodeInfluncia,group_Escolaslocalizao,group_reasdeConservao,lyr_LocalidadesRG_35,lyr_reaurbanizada_36,group_RaiosdeInfluncia,group_Focosdedescarteirregular];
lyr_AmricadoSul_1.set('fieldAliases', {'nome': 'nome', 'geometriaa': 'geometriaa', 'sigla': 'sigla', 'codiso3166': 'codiso3166', });
lyr_Brasil_2.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_RioGrandedoSul_3.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_LagoadosPatos_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RDPOL2_': 'RDPOL2_', 'RDPOL2_ID': 'RDPOL2_ID', 'NOME': 'NOME', 'TRRE_ID': 'TRRE_ID', });
lyr_RioGrande_5.set('fieldAliases', {'_uid_': '_uid_', 'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'area_km': 'area_km', 'pop2010': 'pop2010', 'legenda': 'legenda', });
lyr_Voronoi_geral_9.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', 'area_m2': 'area_m2', });
lyr_DensidadePopulacional_10.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'AREA_KM2': 'AREA_KM2', 'v0001': 'v0001', 'v0002': 'v0002', 'dens_pop': 'dens_pop', 'dens_dom': 'dens_dom', 'n_pts_2020': 'n_pts_2020', 'n_pts_2025': 'n_pts_2025', 'n_pts_gera': 'n_pts_gera', });
lyr_DensidadeDomiciliar_11.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'AREA_KM2': 'AREA_KM2', 'v0001': 'v0001', 'v0002': 'v0002', 'dens_pop': 'dens_pop', 'dens_dom': 'dens_dom', 'n_pts_2020': 'n_pts_2020', 'n_pts_2025': 'n_pts_2025', 'n_pts_gera': 'n_pts_gera', });
lyr_nmr_pts_setor_cens_geral_12.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'AREA_KM2': 'AREA_KM2', 'v0001': 'v0001', 'v0002': 'v0002', 'dens_pop': 'dens_pop', 'dens_dom': 'dens_dom', 'n_pts_2020': 'n_pts_2020', 'n_pts_2025': 'n_pts_2025', 'n_pts_gera': 'n_pts_gera', });
lyr_nmr_pts_setor_cens_2025_13.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'AREA_KM2': 'AREA_KM2', 'v0001': 'v0001', 'v0002': 'v0002', 'dens_pop': 'dens_pop', 'dens_dom': 'dens_dom', 'n_pts_2020': 'n_pts_2020', 'n_pts_2025': 'n_pts_2025', 'n_pts_gera': 'n_pts_gera', });
lyr_nmr_pts_setor_cens_2020_14.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'SITUACAO': 'SITUACAO', 'AREA_KM2': 'AREA_KM2', 'v0001': 'v0001', 'v0002': 'v0002', 'dens_pop': 'dens_pop', 'dens_dom': 'dens_dom', 'n_pts_2020': 'n_pts_2020', 'n_pts_2025': 'n_pts_2025', 'n_pts_gera': 'n_pts_gera', });
lyr_nmr_pts_localidade_geral_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'nr_pt_2020': 'nr_pt_2020', 'nr_pt_2025': 'nr_pt_2025', 'n_pt_geral': 'n_pt_geral', });
lyr_nmr_pts_localidade_2025_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'nr_pt_2020': 'nr_pt_2020', 'nr_pt_2025': 'nr_pt_2025', 'n_pt_geral': 'n_pt_geral', });
lyr_nmr_pts_localidade_2020_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'nr_pt_2020': 'nr_pt_2020', 'nr_pt_2025': 'nr_pt_2025', 'n_pt_geral': 'n_pt_geral', });
lyr_Sade_raio_1500m_18.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'NOME': 'NOME', 'Tipo': 'Tipo', 'BAIRRO': 'BAIRRO', 'ENDEREÇO': 'ENDEREÇO', 'NÚMERO': 'NÚMERO', 'CEP': 'CEP', 'TELEFONE': 'TELEFONE', 'Zona': 'Zona', });
lyr_Sade_raio_300m_19.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'NOME': 'NOME', 'Tipo': 'Tipo', 'BAIRRO': 'BAIRRO', 'ENDEREÇO': 'ENDEREÇO', 'NÚMERO': 'NÚMERO', 'CEP': 'CEP', 'TELEFONE': 'TELEFONE', 'Zona': 'Zona', });
lyr_Unidades_sade_20.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'NOME': 'NOME', 'Tipo': 'Tipo', 'BAIRRO': 'BAIRRO', 'ENDEREÇO': 'ENDEREÇO', 'NÚMERO': 'NÚMERO', 'CEP': 'CEP', 'TELEFONE': 'TELEFONE', 'Zona': 'Zona', });
lyr_Praas_influncia_300m_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'x': 'x', 'y': 'y', 'OBJECTID_2': 'OBJECTID_2', 'TIPO_2': 'TIPO_2', 'Nome_Zona_': 'Nome_Zona_', 'Zona_2': 'Zona_2', 'Localida_1': 'Localida_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_Praaslocalizao_22.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO': 'TIPO', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'x': 'x', 'y': 'y', 'OBJECTID_2': 'OBJECTID_2', 'TIPO_2': 'TIPO_2', 'Nome_Zona_': 'Nome_Zona_', 'Zona_2': 'Zona_2', 'Localida_1': 'Localida_1', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_Escola_mdio_3000m_23.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_Escola_mdio_300m_24.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_Escola_fundamental_1500m_25.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_Escola_fundamental_300m_26.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_Escola_infantil_300m_27.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_EscolaEnsinoMdio_28.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_EscolaFundamental_29.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_EscolaInfantil_30.set('fieldAliases', {'fid': 'fid', 'X': 'X', 'Y': 'Y', 'NOME_DA_ES': 'NOME_DA_ES', 'ENSINO': 'ENSINO', 'TIPO': 'TIPO', });
lyr_Hdricos_prximos_100m_31.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'layer': 'layer', });
lyr_Lagoa_Verde_200m_32.set('fieldAliases', {'id': 'id', 'Nome': 'Nome', 'layer': 'layer', });
lyr_PNMBarra_33.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descript_1': 'descript_1', 'altitude_1': 'altitude_1', 'descript_2': 'descript_2', 'altitude_2': 'altitude_2', 'id_2': 'id_2', 'tipo': 'tipo', 'area_ha': 'area_ha', 'fid': 'fid', 'Area_Hec_': 'Area_Hec_', 'layer': 'layer', 'path': 'path', 'mrb_dist': 'mrb_dist', });
lyr_Lagoa_Patos_30m_34.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'RDPOL2_': 'RDPOL2_', 'RDPOL2_ID': 'RDPOL2_ID', 'NOME': 'NOME', 'TRRE_ID': 'TRRE_ID', });
lyr_LocalidadesRG_35.set('fieldAliases', {'_uid_': '_uid_', 'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'area_km': 'area_km', 'pop2010': 'pop2010', 'legenda': 'legenda', });
lyr_reaurbanizada_36.set('fieldAliases', {'Densidade': 'Densidade', 'Tipo': 'Tipo', 'Comparacao': 'Comparacao', });
lyr_Focos_geral_30m_37.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', });
lyr_Focos_2025_30m_38.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', });
lyr_Focos_2020_30m_39.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', });
lyr_Focosdelixogeral_40.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', 'Foto': 'Foto', 'Foto_2': 'Foto_2', 'path_photo': 'path_photo', 'photo2': 'photo2', });
lyr_Focodelixo2025_41.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', });
lyr_Focosdelixo2020_42.set('fieldAliases', {'Id': 'Id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nome_Zona': 'Nome_Zona', 'Zona': 'Zona', 'Localidade': 'Localidade', 'Enderecos': 'Enderecos', 'Ano': 'Ano', });
lyr_AmricadoSul_1.set('fieldImages', {'nome': '', 'geometriaa': '', 'sigla': '', 'codiso3166': '', });
lyr_Brasil_2.set('fieldImages', {'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'AREA_KM2': '', });
lyr_RioGrandedoSul_3.set('fieldImages', {'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'CD_REGIA': '', 'NM_REGIA': '', 'SIGLA_RG': '', 'AREA_KM2': '', });
lyr_LagoadosPatos_4.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'RDPOL2_': '', 'RDPOL2_ID': '', 'NOME': '', 'TRRE_ID': '', });
lyr_RioGrande_5.set('fieldImages', {'_uid_': '', 'id': '', 'objectid': '', 'tipo': '', 'nome_zona': '', 'zona': '', 'localidade': '', 'area_km': '', 'pop2010': '', 'legenda': '', });
lyr_Voronoi_geral_9.set('fieldImages', {'Id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'Enderecos': 'TextEdit', 'Ano': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_DensidadePopulacional_10.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'dens_pop': 'TextEdit', 'dens_dom': 'TextEdit', 'n_pts_2020': 'TextEdit', 'n_pts_2025': 'TextEdit', 'n_pts_gera': 'TextEdit', });
lyr_DensidadeDomiciliar_11.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'dens_pop': 'TextEdit', 'dens_dom': 'TextEdit', 'n_pts_2020': 'TextEdit', 'n_pts_2025': 'TextEdit', 'n_pts_gera': 'TextEdit', });
lyr_nmr_pts_setor_cens_geral_12.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'dens_pop': 'TextEdit', 'dens_dom': 'TextEdit', 'n_pts_2020': 'TextEdit', 'n_pts_2025': 'TextEdit', 'n_pts_gera': 'TextEdit', });
lyr_nmr_pts_setor_cens_2025_13.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'dens_pop': 'TextEdit', 'dens_dom': 'TextEdit', 'n_pts_2020': 'TextEdit', 'n_pts_2025': 'TextEdit', 'n_pts_gera': 'TextEdit', });
lyr_nmr_pts_setor_cens_2020_14.set('fieldImages', {'CD_SETOR': 'TextEdit', 'SITUACAO': 'TextEdit', 'AREA_KM2': 'TextEdit', 'v0001': 'TextEdit', 'v0002': 'TextEdit', 'dens_pop': 'TextEdit', 'dens_dom': 'TextEdit', 'n_pts_2020': 'TextEdit', 'n_pts_2025': 'TextEdit', 'n_pts_gera': 'TextEdit', });
lyr_nmr_pts_localidade_geral_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'nr_pt_2020': 'TextEdit', 'nr_pt_2025': 'TextEdit', 'n_pt_geral': 'TextEdit', });
lyr_nmr_pts_localidade_2025_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'nr_pt_2020': 'TextEdit', 'nr_pt_2025': 'TextEdit', 'n_pt_geral': 'TextEdit', });
lyr_nmr_pts_localidade_2020_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'nr_pt_2020': 'TextEdit', 'nr_pt_2025': 'TextEdit', 'n_pt_geral': 'TextEdit', });
lyr_Sade_raio_1500m_18.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'NOME': 'TextEdit', 'Tipo': 'TextEdit', 'BAIRRO': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'NÚMERO': 'TextEdit', 'CEP': 'TextEdit', 'TELEFONE': 'TextEdit', 'Zona': 'Range', });
lyr_Sade_raio_300m_19.set('fieldImages', {'X': '', 'Y': '', 'NOME': '', 'Tipo': '', 'BAIRRO': '', 'ENDEREÇO': '', 'NÚMERO': '', 'CEP': '', 'TELEFONE': '', 'Zona': '', });
lyr_Unidades_sade_20.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'NOME': 'TextEdit', 'Tipo': 'TextEdit', 'BAIRRO': 'TextEdit', 'ENDEREÇO': 'TextEdit', 'NÚMERO': 'TextEdit', 'CEP': 'TextEdit', 'TELEFONE': 'TextEdit', 'Zona': 'Range', });
lyr_Praas_influncia_300m_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'TIPO_2': 'TextEdit', 'Nome_Zona_': 'TextEdit', 'Zona_2': 'TextEdit', 'Localida_1': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', });
lyr_Praaslocalizao_22.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TIPO': '', 'Nome_Zona': '', 'Zona': '', 'Localidade': '', 'Shape_Leng': '', 'Shape_Area': '', 'x': '', 'y': '', 'OBJECTID_2': '', 'TIPO_2': '', 'Nome_Zona_': '', 'Zona_2': '', 'Localida_1': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', });
lyr_Escola_mdio_3000m_23.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Escola_mdio_300m_24.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Escola_fundamental_1500m_25.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Escola_fundamental_300m_26.set('fieldImages', {'fid': '', 'X': '', 'Y': '', 'NOME_DA_ES': '', 'ENSINO': '', 'TIPO': '', });
lyr_Escola_infantil_300m_27.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_EscolaEnsinoMdio_28.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_EscolaFundamental_29.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_EscolaInfantil_30.set('fieldImages', {'fid': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOME_DA_ES': 'TextEdit', 'ENSINO': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Hdricos_prximos_100m_31.set('fieldImages', {'id': '', 'Nome': '', 'layer': '', });
lyr_Lagoa_Verde_200m_32.set('fieldImages', {'id': '', 'Nome': '', 'layer': '', });
lyr_PNMBarra_33.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'descript_1': 'TextEdit', 'altitude_1': 'TextEdit', 'descript_2': 'TextEdit', 'altitude_2': 'TextEdit', 'id_2': 'TextEdit', 'tipo': 'TextEdit', 'area_ha': 'TextEdit', 'fid': 'TextEdit', 'Area_Hec_': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_Lagoa_Patos_30m_34.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'RDPOL2_': '', 'RDPOL2_ID': '', 'NOME': '', 'TRRE_ID': '', });
lyr_LocalidadesRG_35.set('fieldImages', {'_uid_': '', 'id': '', 'objectid': '', 'tipo': '', 'nome_zona': '', 'zona': '', 'localidade': '', 'area_km': '', 'pop2010': '', 'legenda': '', });
lyr_reaurbanizada_36.set('fieldImages', {'Densidade': '', 'Tipo': '', 'Comparacao': '', });
lyr_Focos_geral_30m_37.set('fieldImages', {'Id': '', 'Latitude': '', 'Longitude': '', 'Nome_Zona': '', 'Zona': '', 'Localidade': '', 'Enderecos': '', 'Ano': '', });
lyr_Focos_2025_30m_38.set('fieldImages', {'Id': '', 'Latitude': '', 'Longitude': '', 'Nome_Zona': '', 'Zona': '', 'Localidade': '', 'Enderecos': '', 'Ano': '', });
lyr_Focos_2020_30m_39.set('fieldImages', {'Id': '', 'Latitude': '', 'Longitude': '', 'Nome_Zona': '', 'Zona': '', 'Localidade': '', 'Enderecos': '', 'Ano': '', });
lyr_Focosdelixogeral_40.set('fieldImages', {'Id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'Enderecos': 'TextEdit', 'Ano': 'TextEdit', 'Foto': 'ExternalResource', 'Foto_2': 'ExternalResource', 'path_photo': 'ExternalResource', 'photo2': 'ExternalResource', });
lyr_Focodelixo2025_41.set('fieldImages', {'Id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'Enderecos': 'TextEdit', 'Ano': 'TextEdit', });
lyr_Focosdelixo2020_42.set('fieldImages', {'Id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nome_Zona': 'TextEdit', 'Zona': 'TextEdit', 'Localidade': 'TextEdit', 'Enderecos': 'TextEdit', 'Ano': 'TextEdit', });
lyr_AmricadoSul_1.set('fieldLabels', {'nome': 'no label', 'geometriaa': 'no label', 'sigla': 'no label', 'codiso3166': 'no label', });
lyr_Brasil_2.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', });
lyr_RioGrandedoSul_3.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', });
lyr_LagoadosPatos_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'RDPOL2_': 'no label', 'RDPOL2_ID': 'no label', 'NOME': 'no label', 'TRRE_ID': 'no label', });
lyr_RioGrande_5.set('fieldLabels', {'_uid_': 'no label', 'id': 'no label', 'objectid': 'no label', 'tipo': 'no label', 'nome_zona': 'no label', 'zona': 'no label', 'localidade': 'no label', 'area_km': 'no label', 'pop2010': 'no label', 'legenda': 'no label', });
lyr_Voronoi_geral_9.set('fieldLabels', {'Id': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Nome_Zona': 'hidden field', 'Zona': 'hidden field', 'Localidade': 'inline label - visible with data', 'Enderecos': 'hidden field', 'Ano': 'hidden field', 'area_m2': 'inline label - visible with data', });
lyr_DensidadePopulacional_10.set('fieldLabels', {'CD_SETOR': 'inline label - always visible', 'SITUACAO': 'hidden field', 'AREA_KM2': 'inline label - visible with data', 'v0001': 'inline label - visible with data', 'v0002': 'hidden field', 'dens_pop': 'inline label - always visible', 'dens_dom': 'hidden field', 'n_pts_2020': 'no label', 'n_pts_2025': 'no label', 'n_pts_gera': 'inline label - visible with data', });
lyr_DensidadeDomiciliar_11.set('fieldLabels', {'CD_SETOR': 'inline label - always visible', 'SITUACAO': 'hidden field', 'AREA_KM2': 'inline label - visible with data', 'v0001': 'hidden field', 'v0002': 'inline label - visible with data', 'dens_pop': 'hidden field', 'dens_dom': 'inline label - always visible', 'n_pts_2020': 'no label', 'n_pts_2025': 'no label', 'n_pts_gera': 'inline label - visible with data', });
lyr_nmr_pts_setor_cens_geral_12.set('fieldLabels', {'CD_SETOR': 'inline label - always visible', 'SITUACAO': 'hidden field', 'AREA_KM2': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'dens_pop': 'inline label - visible with data', 'dens_dom': 'inline label - visible with data', 'n_pts_2020': 'no label', 'n_pts_2025': 'no label', 'n_pts_gera': 'inline label - always visible', });
lyr_nmr_pts_setor_cens_2025_13.set('fieldLabels', {'CD_SETOR': 'inline label - always visible', 'SITUACAO': 'hidden field', 'AREA_KM2': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'dens_pop': 'inline label - visible with data', 'dens_dom': 'inline label - visible with data', 'n_pts_2020': 'hidden field', 'n_pts_2025': 'inline label - always visible', 'n_pts_gera': 'hidden field', });
lyr_nmr_pts_setor_cens_2020_14.set('fieldLabels', {'CD_SETOR': 'inline label - always visible', 'SITUACAO': 'hidden field', 'AREA_KM2': 'hidden field', 'v0001': 'hidden field', 'v0002': 'hidden field', 'dens_pop': 'inline label - visible with data', 'dens_dom': 'inline label - visible with data', 'n_pts_2020': 'inline label - always visible', 'n_pts_2025': 'hidden field', 'n_pts_gera': 'hidden field', });
lyr_nmr_pts_localidade_geral_15.set('fieldLabels', {'OBJECTID': 'hidden field', 'TIPO': 'hidden field', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - always visible', 'nr_pt_2020': 'hidden field', 'nr_pt_2025': 'hidden field', 'n_pt_geral': 'inline label - always visible', });
lyr_nmr_pts_localidade_2025_16.set('fieldLabels', {'OBJECTID': 'hidden field', 'TIPO': 'hidden field', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - always visible', 'nr_pt_2020': 'hidden field', 'nr_pt_2025': 'inline label - always visible', 'n_pt_geral': 'hidden field', });
lyr_nmr_pts_localidade_2020_17.set('fieldLabels', {'OBJECTID': 'hidden field', 'TIPO': 'hidden field', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - always visible', 'nr_pt_2020': 'inline label - always visible', 'nr_pt_2025': 'hidden field', 'n_pt_geral': 'hidden field', });
lyr_Sade_raio_1500m_18.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'NOME': 'no label', 'Tipo': 'hidden field', 'BAIRRO': 'hidden field', 'ENDEREÇO': 'hidden field', 'NÚMERO': 'hidden field', 'CEP': 'hidden field', 'TELEFONE': 'hidden field', 'Zona': 'hidden field', });
lyr_Sade_raio_300m_19.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'NOME': 'no label', 'Tipo': 'hidden field', 'BAIRRO': 'hidden field', 'ENDEREÇO': 'hidden field', 'NÚMERO': 'hidden field', 'CEP': 'hidden field', 'TELEFONE': 'hidden field', 'Zona': 'hidden field', });
lyr_Unidades_sade_20.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'NOME': 'no label', 'Tipo': 'hidden field', 'BAIRRO': 'hidden field', 'ENDEREÇO': 'hidden field', 'NÚMERO': 'hidden field', 'CEP': 'hidden field', 'TELEFONE': 'hidden field', 'Zona': 'hidden field', });
lyr_Praas_influncia_300m_21.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO': 'no label', 'Nome_Zona': 'no label', 'Zona': 'no label', 'Localidade': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'x': 'no label', 'y': 'no label', 'OBJECTID_2': 'no label', 'TIPO_2': 'no label', 'Nome_Zona_': 'no label', 'Zona_2': 'no label', 'Localida_1': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_Praaslocalizao_22.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'TIPO': 'hidden field', 'Nome_Zona': 'hidden field', 'Zona': 'hidden field', 'Localidade': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'OBJECTID_2': 'hidden field', 'TIPO_2': 'hidden field', 'Nome_Zona_': 'hidden field', 'Zona_2': 'hidden field', 'Localida_1': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Ar_1': 'hidden field', });
lyr_Escola_mdio_3000m_23.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_Escola_mdio_300m_24.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_Escola_fundamental_1500m_25.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_Escola_fundamental_300m_26.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_Escola_infantil_300m_27.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_EscolaEnsinoMdio_28.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_EscolaFundamental_29.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_EscolaInfantil_30.set('fieldLabels', {'fid': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'NOME_DA_ES': 'no label', 'ENSINO': 'hidden field', 'TIPO': 'hidden field', });
lyr_Hdricos_prximos_100m_31.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'layer': 'no label', });
lyr_Lagoa_Verde_200m_32.set('fieldLabels', {'id': 'no label', 'Nome': 'no label', 'layer': 'no label', });
lyr_PNMBarra_33.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descript_1': 'no label', 'altitude_1': 'no label', 'descript_2': 'no label', 'altitude_2': 'no label', 'id_2': 'no label', 'tipo': 'no label', 'area_ha': 'no label', 'fid': 'no label', 'Area_Hec_': 'no label', 'layer': 'no label', 'path': 'no label', 'mrb_dist': 'no label', });
lyr_Lagoa_Patos_30m_34.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'RDPOL2_': 'no label', 'RDPOL2_ID': 'no label', 'NOME': 'no label', 'TRRE_ID': 'no label', });
lyr_LocalidadesRG_35.set('fieldLabels', {'_uid_': 'hidden field', 'id': 'hidden field', 'objectid': 'hidden field', 'tipo': 'hidden field', 'nome_zona': 'inline label - visible with data', 'zona': 'inline label - visible with data', 'localidade': 'inline label - always visible', 'area_km': 'hidden field', 'pop2010': 'hidden field', 'legenda': 'hidden field', });
lyr_reaurbanizada_36.set('fieldLabels', {'Densidade': 'no label', 'Tipo': 'no label', 'Comparacao': 'no label', });
lyr_Focos_geral_30m_37.set('fieldLabels', {'Id': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Enderecos': 'inline label - visible with data', 'Ano': 'inline label - visible with data', });
lyr_Focos_2025_30m_38.set('fieldLabels', {'Id': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Enderecos': 'inline label - visible with data', 'Ano': 'inline label - visible with data', });
lyr_Focos_2020_30m_39.set('fieldLabels', {'Id': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Enderecos': 'inline label - visible with data', 'Ano': 'inline label - visible with data', });
lyr_Focosdelixogeral_40.set('fieldLabels', {'Id': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Enderecos': 'inline label - visible with data', 'Ano': 'inline label - visible with data', 'Foto': 'inline label - visible with data', 'Foto_2': 'inline label - visible with data', 'path_photo': 'no label', 'photo2': 'no label', });
lyr_Focodelixo2025_41.set('fieldLabels', {'Id': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Enderecos': 'inline label - visible with data', 'Ano': 'inline label - visible with data', });
lyr_Focosdelixo2020_42.set('fieldLabels', {'Id': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Nome_Zona': 'inline label - visible with data', 'Zona': 'inline label - visible with data', 'Localidade': 'inline label - visible with data', 'Enderecos': 'inline label - visible with data', 'Ano': 'inline label - visible with data', });
lyr_Focosdelixo2020_42.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});