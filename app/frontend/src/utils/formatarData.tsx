const formatarData = (date: string): string => {
  const dateIn = date.split('-');
  const dateOut = `${dateIn[2]}/${dateIn[1]}/${dateIn[0]}`;
  return dateOut;
}

export default formatarData;