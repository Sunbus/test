export enum Granularity {
  HOUR = 'hour',
  DAY = 'day',
  MONTH = 'month'
}

export const isGranularity = (granularity?: string): granularity is Granularity => {
  if (!granularity) {
    return false
  }

  return ['hour', 'day', 'month'].includes(granularity)
}
