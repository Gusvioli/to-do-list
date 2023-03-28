// 2023-03-27T13:38:58.033Z
enum datautc {
  BR = 3,
}

const formatarTime = (date: string): string => {
  if (date) {
    const dateIn = date.split('T')[1].split('-');
    const dataHour = Number(dateIn[0].split('.')[0].split(':')[0]) - datautc.BR;
    const dataMinutes = dateIn[0].split('.')[0].split(':')[1];
    const dataSeconds = dateIn[0].split('.')[0].split(':')[2];
    return `${dataHour}:${dataMinutes}:${dataSeconds}`;
  } else {
    return '';
  }
}

export default formatarTime;