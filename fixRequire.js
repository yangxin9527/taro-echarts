
const fs = require('fs');

const targetPath = './dist/weapp/pages/chartShow/components/ec-canvas/ec-canvas.js';
const data = fs.readFileSync(targetPath, 'utf8');
fs.writeFileSync(targetPath, 'require("../../echarts");\n'+data, 'utf8')


