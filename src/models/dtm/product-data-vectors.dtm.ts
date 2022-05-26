import { IsArray, IsDefined, validateSync } from 'class-validator'
import { plainToClass } from 'class-transformer'


export interface IProductDataVectors {
  values: [Date, number | null][],
  extraValues: [Date, number | null][],
}

export class ProductDataVectors implements IProductDataVectors {
  @IsDefined()
  @IsArray()
  values: [Date, number | null][]

  @IsDefined()
  @IsArray()
  extraValues: [Date, number | null][]

  static fromPlain = (input: IProductDataVectors) => plainToClass(ProductDataVectors, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
