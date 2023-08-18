export interface IApiResponseList<T>{
  data?: T[],
  dataStruct?: string,
  status?: string,
  message?: string,
  logId?: number
}
