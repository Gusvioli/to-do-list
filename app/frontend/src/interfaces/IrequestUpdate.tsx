interface IrequestUpdate {
  id?: number;
  idUser: number | null;
  emoji?: string | null;
  date: string | null;
  time?: string | null;
  description?: string | null;
  status?: boolean | string | null;
  updatedAt?: Date | null;
  statusFront?: boolean | null;
  type?: string | null;
}

export default IrequestUpdate;