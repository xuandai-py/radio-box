import useSWR from 'swr'

export default function Fn(id) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`/api/stream?url=${id}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return {data}
}