import { assign } from 'lodash'

export const prefix = (v, k) => (assign(...k.map(key => ({ [key]: `${v}_${key}` }))))
