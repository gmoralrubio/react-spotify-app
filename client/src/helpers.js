export function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

export function sliceText(text, length) {
  if (text.length >= length) {
    let slicedText = text.slice(0, length)
    slicedText += '...'
    return slicedText
  }
  return text
}
