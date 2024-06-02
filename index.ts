import { readdir } from "node:fs/promises";

// read all the files in the current directory
const countryCodes = await readdir(`./topography`);

countryCodes.forEach(async (code) => {
    console.log(code);

    const baseFile = Bun.file(`./topography/${code}/${code}_adm0.topo.json`);
    const json = await baseFile.json();
    const transform = json.transform;

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
