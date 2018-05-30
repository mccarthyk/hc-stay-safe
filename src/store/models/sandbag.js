import GSheet from './gsheet'
import moment from 'moment'

export default class Sandbag {
  constructor (data) {
    this.location = data.gsx$location.$t
    this.address = data.gsx$address.$t || null
    this.link = data.gsx$link.$t
    this.startTime = moment(data.gsx$starttime.$t, 'MM/DD/YYYY hh:mm A')
    this.endTime = moment(data.gsx$endtime.$t, 'MM/DD/YYYY hh:mm A')
    this.info = data.gsx$info.$t
  }

  get range () {
    if (this.startTime.isSame(this.endTime, 'day')) {
      return `${this.startTime.format('lll')} - ${this.endTime.format('LT')}`
    } else {
      return `${this.startTime.format('lll')} - ${this.endTime.format('lll')}`
    }
  }

  get isActive () {
    return this.endTime.isAfter()
  }

  static get url () {
    return GSheet.url(1)
  }
}
