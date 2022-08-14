export default function sliceText(text, length) {
  if (text.length >= length) {
    let slicedText = text.slice(0, length)
    slicedText += '...'
    return slicedText
  }
  return text
}
