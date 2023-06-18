function diasMeses(): any {
  const meses = [
    {
      mes: { id: '01', nome: 'Janeiro' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '02', nome: 'Fevereiro' },
      dias: 28,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '03', nome: 'Março' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '04', nome: 'Abril' },
      dias: 30,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '05', nome: 'Maio' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '06', nome: 'Junho' },
      dias: 30,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '07', nome: 'Julho' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '08', nome: 'Agosto' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '09', nome: 'Setembro' },
      dias: 30,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '10', nome: 'Outubro' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '11', nome: 'Novembro' },
      dias: 30,
      ano: new Date().getFullYear(),
    },
    {
      mes: { id: '12', nome: 'Dezembro' },
      dias: 31,
      ano: new Date().getFullYear(),
    },
  ]
  return meses
}

export default diasMeses
