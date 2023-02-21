import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useContext } from 'react'

export const Player = ({ trackUri }) => {

    const handleClickNExt = (items) => {

    }
    console.log('track', trackUri);


    return (
        <>
            <AudioPlayer
                autoPlay
                showFilledProgress={false}
                showSkipControls={true}
                showJumpControls={false}
                customAdditionalControls={[]}
                customProgressBarSection={['RHAP_UI.CURRENT_TIME', 'RHAP_UI.DURATION']}
                src={trackUri!='' ? trackUri : process.env.DF_TRACK_URL}
                onPlay={e => console.log("onPlay")}
                onError={e => console.log(e)}
                onLoadedData={e => console.log(trackUri)}
                style={{
                    width: '220px',
                    margin: '0 auto',
                }}
                onClickNext={() => console.log(trackUri)}
            /> 
        </>

    )
}