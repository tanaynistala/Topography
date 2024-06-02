import { readdir } from "node:fs/promises";
import { $ } from "bun";

// read all the files in the current directory
const countryCodes = await readdir(`./topography`);

const centroidsFile = Bun.file("./geography/centroids.geo.json");
const centroids = await centroidsFile.json();

countryCodes.forEach(async (code) => {
    console.log(code);

    const baseFile = Bun.file(`./topography/${code}/${code}_adm0.topo.json`);
    const json = await baseFile.json();
    const transform = json.transform;

    const code2 = json.objects.states.geometries[0].properties.ISO2
    const features: any[] = centroids.features;
    const feature = features.find((f) => f.properties.ISO === code2)
    transform.translate = feature.geometry.coordinates;


    const files = await readdir(`./topography/${code}`);
    files.forEach(async (fileName) => {
        const file = Bun.file(`./topography/${code}/${fileName}`);
        const json = await file.json();
        json.transform = transform;
        const contents = JSON.stringify(json);

        console.log("Writing", fileName);
        Bun.write(file, contents);
    })
})

await $`bunx prettier --write "./topography/*/*.json"`