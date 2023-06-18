export const hendleClearAll = (
  setFormCreateAndEditTask: (arg0: {
    date: string
    horaMinutes: string
    description: string
    caracters: number
    id: number
  }) => void,
  setNameEmojiUrl: (arg0: { name: string; url: string }) => void,
) => {
  setFormCreateAndEditTask({
    date: '',
    horaMinutes: '',
    description: '',
    caracters: 0,
    id: 0,
  })
  setNameEmojiUrl({
    name: '',
    url: '',
  })
}
