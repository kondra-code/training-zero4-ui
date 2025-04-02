import devkit from '@nx/devkit';
import { resolve } from 'path';
const { readCachedProjectGraph } = devkit;
const [, , name, version] = process.argv;

import { readFileSync, writeFileSync } from 'fs';
import prettier from 'prettier';
const graph = readCachedProjectGraph();
const project = graph.nodes[name];

const dotKabFilePath = resolve(process.cwd(), project.data.root, '.kos.json');
const dotKabJson = JSON.parse(readFileSync(dotKabFilePath, 'utf8'));
if (dotKabJson) {
  const options = await prettier.resolveConfig(dotKabFilePath);

  const modified = {
    ...dotKabJson,
    version: version || dotKabJson.version,
  };
  const output = await prettier.format(JSON.stringify(modified, null, 2), {
    ...options,
    parser: 'json',
  });
  writeFileSync(dotKabFilePath, output);
} else {
  console.error(`File not found: ${dotKabFilePath}`);
  process.exit(1);
}
