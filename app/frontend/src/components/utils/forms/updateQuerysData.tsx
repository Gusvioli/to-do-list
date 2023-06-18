import { useQueryClient } from 'react-query'

// eslint-disable-next-line react-hooks/rules-of-hooks
const dataUserQuery = useQueryClient()
export function updateQuerysData(data: {
  id: number
  emoji: string
  date: string
  time: string
  description: string
}) {
  const dataContents = dataUserQuery.getQueryData<any>('contents')
  if (dataContents) {
    const dataStatus = dataContents.map((dataContent: any) => {
      if (dataContent.id === data.id) {
        return {
          ...dataContent,
          emoji: data.emoji,
          date: data.date,
          time: data.time,
          description: data.description,
        }
      } else {
        return dataContent
      }
    })
    dataUserQuery.setQueryData('contents', dataStatus)
  }
}
