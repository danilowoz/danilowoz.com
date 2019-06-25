import regexCreator from 'emoji-regex'

const emojiRegex = regexCreator()

export default string => {
  return string.replace(emojiRegex, '')
}
