export interface IOutgoingFileBaseProperties {
  id: string
  name: string
}

export interface IOutgoingFileBaseMethods {
  hasError(): boolean
  hasUploadDate(): boolean
  hasSize(): boolean
  hasProgress(): boolean
  hasUploadDate(): boolean
  hasUserFileId(): boolean
  canBeDeleted(): boolean
}
