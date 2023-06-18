import { useQuery } from 'react-query'

export function GithubApi(
  emojis: string | any[],
  setEmojis: (arg0: any) => void,
) {
  useQuery<object>(['emojis'], async () => {
    if (emojis.length === 0) {
      const response = await fetch('https://api.github.com/emojis')
      const data = await response.json()
      const responseEmojis: any[] | any = Object.keys(data).map((key) => ({
        name: key,
        url: data[key],
      }))
      setEmojis(responseEmojis)
      return responseEmojis
    }
  })
}
