import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react'
import { useThumbContext } from './context/thumb';

export const Player = (props) => {
    const { trackUri } = props
    const playlist = process.env.NEXT_PUBLIC_SONGS_NUMBER
    const [index, setIndex] = useThumbContext()
    console.log('track: ', trackUri);

    const handleClickPrevious = () => {
        setIndex(() => index === 0 ? playlist - 1 : index - 1)
        // this.setState((prevState) => ({
        //     currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
        // }))
    }

    const handleClickNext = () => {
        setIndex(() => index < playlist - 1 ? index + 1 : 0)
        //     this.setState((prevState) => ({
        //         currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
        //     }))
    }
    console.log(index)

    return (
        <>
            <AudioPlayer
                autoPlay
                showFilledProgress={false}
                showSkipControls={true}
                showJumpControls={false}
                customAdditionalControls={[]}
                customProgressBarSection={['RHAP_UI.CURRENT_TIME', 'RHAP_UI.DURATION']}
                src={trackUri}
                onPlay={e => console.log("onPlay")}
                onError={e => console.log(e)}
                onLoadedData={e => console.log(trackUri)}
                style={{
                    width: '220px',
                    margin: '0 auto',
                    // background: 'none'
                }}

                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
            />
        </>

    )
}