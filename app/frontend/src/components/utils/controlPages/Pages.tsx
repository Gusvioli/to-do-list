function pages(
  qtdsPagesDisplay: number = 5,
  contents: [{
  id: number;
  idUser: number;
  status: string;
  date: string;
  horaMinutes: string;
  description: string;
  emoji: string;
  createdAt: string;
  updatedAt: string;
}],
dateDb: string): any{
  if (contents) {
    const returnFilter = contents
    ? contents?.filter((content: any) => content.date === dateDb)
    : [];
    let returnFilterArr: any = [];
    for (let i = 0; i < returnFilter.length; i += qtdsPagesDisplay) {
      returnFilterArr.push(returnFilter.slice(i, i + qtdsPagesDisplay));
    }
    return returnFilterArr;
  } else {
    return [];
  }
}

export default pages;