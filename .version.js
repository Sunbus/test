const data = require('./package.json')
const fs = require('fs')

fs.writeFileSync('./dist/VERSION', `${data.version}`, 'utf8')
