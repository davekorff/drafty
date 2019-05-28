export default function transformDate(date) {
  let yyyy = date.slice(0,4)
  let mm = date.slice(5,7)
  let dd = date.slice(8,10)

  if (mm.slice(0,1) === '0' && dd.slice(0,1) === '0') {
    return `${mm.slice(1,2)}/${dd.slice(1,2)}/${yyyy}`
  } else if (mm.slice(0,1) === '0') {
    return `${mm.slice(1,2)}/${dd}/${yyyy}`
  } else if (dd.slice(0,1) === '0') {
    return `${mm}/${dd.slice(1,2)}/${yyyy}`
  } else {
    return `${mm}/${dd}/${yyyy}`
  }
}
