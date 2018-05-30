export default class Gsheet {
  static url (tableId = 1) {
    let sheetId = '14c7p2JUfuRTC9JcbvG--pOu6IRtVuMZ7Flkv0EZ54Io'
    return `https://spreadsheets.google.com/feeds/list/${sheetId}/${tableId}/public/values?alt=json`
  }
}
