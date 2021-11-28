export const convertData = (data: Date):string => {
    let d = new Date(data)
    let day = d.getDay()
    let mm = d.getMonth()
    let yy = d.getFullYear()
    return `${day}/${mm}/${yy}`
}