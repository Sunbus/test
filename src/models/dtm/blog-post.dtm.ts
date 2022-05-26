import { IsDefined, IsOptional, IsString, validateSync, } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { SrcSetDefinition } from 'srcset'


export interface IBlogPostDtm {
  title: string
  link: string
  description: string
  image: {
    src: string
    srcset: SrcSetDefinition[]
    width: number
    height: number
  }
}

export class BlogPostDtm implements IBlogPostDtm {
  @IsDefined()
  @IsString()
  title: string

  @IsDefined()
  @IsString()
  link: string

  @IsDefined()
  @IsString()
  description: string

  @IsOptional()
  image: {
    src: string
    srcset: SrcSetDefinition[]
    width: number
    height: number
  }

  static fromPlain = (input: IBlogPostDtm) => plainToClass(BlogPostDtm, input)

  validate = () => validateSync(this)

  isValid = () => validateSync(this).length === 0
}
