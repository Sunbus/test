import { DateTime } from 'luxon'
import pluralize from 'pluralize'
import { IsBoolean, IsDefined, IsIn, IsNumber, IsString, ValidateNested, validateSync } from 'class-validator'
import { plainToClass, Type } from 'class-transformer'

import {
  DemoLicenseDtm,
  DevelopLicenseDtm,
  ILicenseMetadataDtm,
  InstanceLicenseDtm,
  IPlatformDtm,
  IProductDtm,
  LicenseMetadataDtm,
  LicenseUnionDtm,
  MobileLicenseDtm,
  OnlineLicenseType,
  PlatformDtm,
  ProductDtm,
  ProductionLicenseDtm,
  TrialLicenseDtm
} from '@models/dtm'
import { LicenseType, LicenseUnit } from './enums'
import { IAbstractOfflineLicense, IAbstractOnlineLicense } from './children'


export interface ILicensePrototype {
  id: number
  containerId: string
  unit: LicenseUnit
  type: LicenseType
  name: string
  createdAt: string
  expiresAt: string
  isActive: boolean
  orders: string[]
  products: IProductDtm[]
  platforms: IPlatformDtm[]
  metadata: ILicenseMetadataDtm
}

export class LicensePrototype implements ILicensePrototype {
  @IsDefined()
  @IsNumber()
  id: number

  @IsDefined()
  @IsString()
  containerId: string

  @IsDefined()
  @IsIn(Object.values(LicenseUnit))
  unit: LicenseUnit

  @IsDefined()
  @IsIn(Object.values(LicenseType))
  type: LicenseType

  @IsDefined()
  @IsString()
  name: string

  @IsDefined()
  @IsString()
  createdAt: string

  @IsDefined()
  @IsString()
  expiresAt: string

  @IsDefined()
  @IsBoolean()
  isActive: boolean

  @IsDefined()
  @IsString({ each: true })
  orders: string[]

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ProductDtm)
  products: ProductDtm[]

  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => PlatformDtm)
  platforms: PlatformDtm[]

  @IsDefined()
  @ValidateNested()
  @Type(() => LicenseMetadataDtm)
  metadata: LicenseMetadataDtm


  static fromPlain(input: Partial<IAbstractOfflineLicense | IAbstractOnlineLicense>): LicenseUnionDtm {
    switch (input.type) {
      case LicenseType.ONLINE:
        return LicensePrototype.createOnline(input)
      case LicenseType.OFFLINE:
        return LicensePrototype.createOffline(input)
    }

    throw new Error(`Unknown container type ${input.type}`)
  }

  private static createOffline(input: Partial<IAbstractOfflineLicense>): MobileLicenseDtm {
    return plainToClass(MobileLicenseDtm, input)
  }

  private static createOnline(input: Partial<IAbstractOnlineLicense>): DemoLicenseDtm | DevelopLicenseDtm | InstanceLicenseDtm | ProductionLicenseDtm | TrialLicenseDtm {
    switch (input.onlineType) {
      case OnlineLicenseType.TRIAL:
        return plainToClass(TrialLicenseDtm, input)
      case OnlineLicenseType.DEVELOP:
        return plainToClass(DevelopLicenseDtm, input)
      case OnlineLicenseType.INSTANCE:
        return plainToClass(InstanceLicenseDtm, input)
      case OnlineLicenseType.PRODUCTION:
        return plainToClass(ProductionLicenseDtm, input)
      case OnlineLicenseType.DEMO:
        return plainToClass(DemoLicenseDtm, input)
    }

    throw new Error(`Unknown license type ${input.onlineType}`)
  }

  isLimitExceeded = () => {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].isOverused()) {
        return true
      }
    }

    return false
  }

  isValid = () => validateSync(this).length === 0

  validate = () => validateSync(this)

  isExpired = () => DateTime.fromISO(this.expiresAt).diffNow().as('days') < 0

  isPreExpired = () => {
    const daysLeft = DateTime.fromISO(this.expiresAt).diffNow().as('days')

    return daysLeft >= 0 && daysLeft <= 90
  }

  getSortingPriority = () => {
    if (this.isExpired()) {
      return -1
    }

    const expiredAt = DateTime.fromISO(this.expiresAt)

    if (this.isPreExpired()) {
      return 1 / (0.001 + Math.abs(expiredAt.diffNow().as('days')))
    }

    return 1 / expiredAt.toMillis()
  }

  getOsTypes = (appId?: string) => {
    return this.platforms
      .filter((platform) => !appId || platform.app_id === appId)
      .map((platform) => platform.os)
      .filter((value, i, arr) => arr.indexOf(value) === i)
    || []
  }

  getExpirationDate = () => DateTime.fromISO(this.expiresAt)

  getDaysToExpire = () => {
    const days = ~~DateTime.fromISO(this.expiresAt).diffNow().as('days')

    if (days < 0) {
      return 0
    }

    return days
  }

  getIndexationString = () => {
    let text = ''

    const daysDiff = this.getDaysToExpire()

    let statusText
    if (this.isPreExpired()) {
      statusText = `${pluralize('day', daysDiff, true)} left`
    } else if (this.isExpired()) {
      statusText = 'Expired'
    } else {
      statusText = 'Active'
    }

    text += ` ${this.id}`
    text += ` ${this.name}`
    text += ` ${this.metadata.customerName}`
    text += ` ${this.metadata.project}`
    text += ` ${this.containerId}`
    text += ` ${statusText}`
    text += ` ${DateTime.fromISO(this.createdAt).toFormat('dd.LL.yy')}`
    text += ` ${DateTime.fromISO(this.expiresAt).toFormat('dd.LL.yy')}`

    for (let platform of this.platforms) {
      text += ` ${platform}`
    }

    for (let order of this.orders) {
      text += ` ${order}`
    }

    for (let product of this.products) {
      let productText = ` ${product.id}`

      for (let module of product.modules) {
        productText += ` ${module}`
      }

      text += ` ${productText}`
    }

    return text
  }
}
