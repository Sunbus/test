export enum ProductId {
  DOC_READER = 1,
  FACE_R = 41
}

export const isProductId = (value: number): value is ProductId => {
  return [ProductId.DOC_READER, ProductId.FACE_R].includes(value)
}
