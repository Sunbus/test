import {
  IUploadedOutgoingFileDtm,
  IUploadFailedOutgoingFileDtm,
  IUploadInProgressOutgoingFileDtm,
  UploadedOutgoingFileDtm,
  UploadFailedOutgoingFileDtm,
  UploadInProgressOutgoingFileDtm
} from './types'


export type OutgoingFileUnionDtm = UploadFailedOutgoingFileDtm | UploadInProgressOutgoingFileDtm | UploadedOutgoingFileDtm
export type IOutgoingFileUnionDtm = IUploadFailedOutgoingFileDtm | IUploadInProgressOutgoingFileDtm | IUploadedOutgoingFileDtm
