import useSWR from 'swr'
import { useRef, useEffect, useReducer } from 'react'


export default function Fn(id) {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`/api/stream?url=${id}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return { data }
}

export const useFetchTrack = (trackId) => {
    
    const cache = useRef({})
    const initialState = {
        status: 'idle',
        error: null,
        dataTrack: [],
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCHING':
                return { ...initialState, status: 'fetching' };
            case 'FETCHED':
                return { ...initialState, status: 'fetched', dataTrack: action.payload };
            case 'FETCH_ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        let cancelRequest = false;
        console.log("trackId from hook: ", trackId)
        if (trackId === '') return;

        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[trackId]) {
                const data = cache.current[trackId];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    // 0-10380331
                    const response = await fetch(`${process.env.NEXT_PUBLIC_DLVIDEO}${process.env.NEXT_PUBLIC_YTB_W}${trackId}`, { headers: { Range: 'bytes=0' } });
                    console.log(response);
                    const data = await response.json();
                    cache.current[trackId] = data;
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            }
        };
        fetchData();
        return function cleanup() {
            cancelRequest = true;
        };
    }, [trackId]);
    return state
}
// export const useFetchTrack = (track) => { // track: {}
//     const cache = useRef({})
//     const initialState = {
//         status: 'idle',
//         error: null,
//         data: [],
//          index: 0
//     };

//     const [state, dispatch] = useReducer((state, action) => {
//         switch (action.type) {
//             case 'FETCHING':
//                 return { ...initialState, status: 'fetching' };
//             case 'FETCHED':
//                 return { ...initialState, status: 'fetched', data: action.payload };
//             case 'FETCH_ERROR':
//                 return { ...initialState, status: 'error', error: action.payload };
//             default:
//                 return state;
//         }
//     }, initialState);

//     useEffect(() => {
//         let cancelRequest = false;
//         console.log("trackId from hook: ", trackId)
//         if (trackId === '') return;

//         const fetchData = async () => {
//             dispatch({ type: 'FETCHING' });
//             if (cache.current[trackId]) {
//                 const data = cache.current[trackId];
//                 dispatch({ type: 'FETCHED', payload: data });
//             } else {
//                 try {
//                     const response = await fetch(`${process.env.NEXT_PUBLIC_DLVIDEO}${process.env.NEXT_PUBLIC_YTB_W}${trackId}`, { headers: { Range: 'bytes=0-10380331' } });
//                     const data = await response.json();
//                     cache.current[trackId] = data;
//                     if (cancelRequest) return;
//                     dispatch({ type: 'FETCHED', payload: data });
//                 } catch (error) {
//                     if (cancelRequest) return;
//                     dispatch({ type: 'FETCH_ERROR', payload: error.message });
//                 }
//             }
//         };
//         fetchData();
//         return function cleanup() {
//             cancelRequest = true;
//         };
//     }, [trackId]);
//     return state
// }