interface IrequestUpdate {
  id?: number;
  idUser: number | null;
  emoji?: string | null;
  date: string | null;
  time?: string | null;
  descript?: string | null;
  status?: boolean | null;
  updatedAt?: Date | null;
  statusFront?: boolean | null;
}

export default IrequestUpdate;