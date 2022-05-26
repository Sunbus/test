import { DateTime } from 'luxon'

import { Granularity } from '@models/enums'


export const DEFAULT_START_DATE = DateTime.now().minus({ days: 30 })
export const DEFAULT_END_DATE = DateTime.now()
export const DEFAULT_GRANULARITY = Granularity.DAY
