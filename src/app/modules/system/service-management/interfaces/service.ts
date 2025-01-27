/**
 * enums
 */
import { SERVICE_TYPE } from "../enums/service-type"
import { SERVICE_STATUS } from "../enums/service-status"

export interface IService {
    id: number
    name: string
    code: string
    type: SERVICE_TYPE
    status: SERVICE_STATUS
}