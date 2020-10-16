import os from 'os'
export const PACKAGE_NAME = 'es-modules-walker'

export const debug = require('debug')(PACKAGE_NAME)

export const MAX_IO_OPS: number = os.cpus().length * 4
