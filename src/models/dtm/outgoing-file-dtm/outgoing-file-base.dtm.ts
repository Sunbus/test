import { IOutgoingFileBaseMethods } from './interfaces'


export class OutgoingFileBaseDtm<T> implements IOutgoingFileBaseMethods {
  hasUserFileId = (): this is T & Record<'userFileId', T> => 'userFileId' in this
  hasProgress = (): this is T & Record<'progress', T> => 'progress' in this
  hasSize = (): this is T & Record<'size', T> => 'size' in this
  hasUploadDate = (): this is T & Record<'uploadDate', T> => 'uploadDate' in this
  canBeDeleted = () => false
  hasError = () => false
}
