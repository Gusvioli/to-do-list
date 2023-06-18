const formatarData = (date: string): string => {
  if (date) {
    const dateIn = date.split('-')
    const dateOut = `${dateIn[2]}/${dateIn[1]}/${dateIn[0]}`
    return dateOut
  } else {
    return ''
  }
}

export default formatarData
