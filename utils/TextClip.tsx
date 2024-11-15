
const textClip = (text: string) => {
  if (text.length < 30) return text
    return text.substring(0, 30) + "..."
}

export default textClip