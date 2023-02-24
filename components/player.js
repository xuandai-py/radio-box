import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react'

export const Player = (props) => {
    const { trackUri } = props
   
    console.log('track', trackUri);

    handleClickPrevious = () => {
        this.setState((prevState) => ({
            currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
        }))
    }

    handleClickNext = () => {
        this.setState((prevState) => ({
            currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
        }))
    }

    return (
        <>
            <AudioPlayer
                autoPlay
                showFilledProgress={false}
                showSkipControls={true}
                showJumpControls={false}
                customAdditionalControls={[]}
                customProgressBarSection={['RHAP_UI.CURRENT_TIME', 'RHAP_UI.DURATION']}
                src={trackUri != '' ? trackUri : process.env.DF_TRACK_URL}
                onPlay={e => console.log("onPlay")}
                onError={e => console.log(e)}
                onLoadedData={e => console.log(trackUri)}
                style={{
                    width: '220px',
                    margin: '0 auto',
                    // background: 'none'
                }}

                onClickNext={() => console.log(trackUri)}
            />
        </>

    )
}