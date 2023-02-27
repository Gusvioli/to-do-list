const formatarData = (data: string): string => {
  const dateIn = data.split('-');
  const dateOut = `${dateIn[2]}/${dateIn[1]}/${dateIn[0]}`;
  return dateOut;
}

export default formatarData;