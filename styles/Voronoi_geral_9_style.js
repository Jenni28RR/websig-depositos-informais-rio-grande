var size = 0;
var placement = 'point';

var style_Voronoi_geral_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("area_m2");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 3634.699000 && value <= 130889.966000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(220,77,79,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 130889.966000 && value <= 334140.224000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(242,142,91,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 334140.224000 && value <= 746575.171000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(254,201,128,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 746575.171000 && value <= 1728080.269000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,255,191,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1728080.269000 && value <= 4041208.193000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(199,232,173,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4041208.193000 && value <= 6979084.899000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(128,191,171,0.8313725490196079)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6979084.899000 && value <= 13607591.690000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,63,39,0.8980392156862745)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(43,131,186,0.7254901960784313)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
