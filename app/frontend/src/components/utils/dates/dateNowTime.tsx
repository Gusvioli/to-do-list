const dateNowTime = (): {
  dateNow: string;
  dateDb: string;
} => {
  const dateNow = new Date().toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  const dateDb = dateNow.split("/").reverse().join("-");
  return { dateNow, dateDb };
};

export default dateNowTime;