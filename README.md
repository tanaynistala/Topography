# Topography

_TopoJSON tiles for building detailed maps._

Topography is a collection of TopoJSON tiles at the subdivision level for building maps on the web and powering the [Atlas](https://github.com/tanaynistala/atlas) project.

## Structure

This repository contains two directories:

- `topography`: contains shapefiles for a world map as well as subdivision-level data organized by ISO-3166/A3 codes.
- `geography`: contains additional datapoints, such as centroids and other data not suitable for the TopoJSON format. 

Incremental changes should allow for most data in the latter directory to be merged into `topography/world.topo.json` to consolidate data sources.

## Data Sources

This repository started as a fork of [piwodlaiwo's TopoJSON library](https://github.com/piwodlaiwo/TopoJSON-Data), fixing some minor issues in the original data. This was eventually spun off into a separate repository altogether to afford more control over the data source as the [Bedrock](https://github.com/tanaynistala/bedrock) project expands. The data in this repository is sourced from the following sources:

* [Map Data from DIVA-GIS](https://github.com/piwodlaiwo/TopoJSON-Data/wiki/DIVA-GIS-Data-by-Country)
    * Mostly Country Based, pulled from [DIVA-GIS](http://www.diva-gis.org/) and converted from ShapeFile (and DBF) into [TopoJSON](https://github.com/topojson/topojson) using [MapShaper](https://github.com/mbloch/mapshaper/)
        * Example: [Poland - Administrative Divisions](https://github.com/piwodlaiwo/TopoJSON-Data/blob/master/diva-gis/POL_adm/POL_adm1.topo.json)
        * Example: [Martinique - Communes](https://github.com/piwodlaiwo/TopoJSON-Data/blob/master/diva-gis/MTQ_adm/MTQ_adm2.topo.json)
        * Example of this map data file used in a D3 Map: [Map of Spain](https://bl.ocks.org/piwodlaiwo/8283bebe2ad96c0904ef3c8f0bf3a489/cbb0bed7bf6fdbcc1496c76e76d3af66f4a507ea)   
        
And here are some other great data sources for map files:

* [TopoJSON Collection](https://piwodlaiwo.github.io/topojson/)
    * [Example](http://bl.ocks.org/piwodlaiwo/5346af5ffb415c0df878c654193db721) of World Continents with D3v4 with Labels
* [World Atlas](https://github.com/topojson/world-atlas)
    * [Example](https://bl.ocks.org/piwodlaiwo/3734a1357696dcff203a94012646e932) of a [D3.js](https://github.com/d3/d3) World Map using World Atlas data via [UNPKG](https://unpkg.com/world-atlas@1.1.4/world/)  
* [US States Simplified](https://gist.github.com/piwodlaiwo/b051b4a4246270d0bec2d7235f4863d7) - if you do not have to use US counties, this TopoJSON file is more appropriate
