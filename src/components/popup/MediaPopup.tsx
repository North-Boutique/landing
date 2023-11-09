import { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import useClickOutside from '../../useClickOutside';

const VideoPopup = ({ close, videoID }: any) => {
  const domNode = useClickOutside(() => {
    close(false);
  });

  return (
    <Fragment>
      <div className={'mfp-bg mfp-ready'} onClick={() => close(false)}></div>
      <div
        className={'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready'}
        tabIndex={-1}
        style={{ overflow: 'hidden auto' }}>
        <div
          className={
            'mfp-container popup-container mfp-s-ready mfp-iframe-holder'
          }>
          <div className={'mfp-content'} ref={domNode}>
            <div className={'mfp-iframe-scaler'}>
              <button
                title={'Close (Esc)'}
                type={'button'}
                className={'mfp-close'}
                onClick={() => close()}>
                {'×'}
              </button>
              <ReactPlayer url={videoID} playing={true} />
            </div>
          </div>
          <div className={'mfp-preloader'}>{'Loading...'}</div>
        </div>
      </div>
    </Fragment>
  );
};

const AudioPopup = ({ close, audioID }: any) => {
  const domNode = useClickOutside(() => {
    close(false);
  });

  return (
    <Fragment>
      <div className={'mfp-bg mfp-ready'} onClick={() => close(false)}></div>
      <div
        className={'mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready'}
        tabIndex={-1}
        style={{ overflow: 'hidden auto' }}>
        <div
          className={
            'mfp-container popup-container mfp-s-ready mfp-iframe-holder'
          }>
          <div className={'mfp-content'} ref={domNode}>
            <div className={'mfp-iframe-scaler'}>
              <button
                title={'Close (Esc)'}
                type={'button'}
                className={'mfp-close'}
                onClick={() => close()}>
                {'×'}
              </button>
              <iframe
                src={audioID}
                frameBorder={'0'}
                allow={
                  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                }
                allowFullScreen={true}></iframe>
            </div>
          </div>
          <div className={'mfp-preloader'}>{'Loading...'}</div>
        </div>
      </div>
    </Fragment>
  );
};

const MediaPopup = () => {
  const [videoValue, setVideoValue] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | false | null>(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll('a');

      a.forEach((ad) => {
        if (
          ad.href.includes('www.youtube.com') ||
          ad.href.includes('vimeo.com') ||
          ad.href.includes('soundcloud.com')
        ) {
          ad.addEventListener('click', (e) => {
            e.preventDefault();

            if (ad.href.includes('soundcloud')) {
              setAudio(ad.href);
              setToggle(true);
            } else {
              setVideoValue(ad.href);
              setToggle(true);
            }
          });
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {toggle && videoValue && (
        <VideoPopup
          close={() => {
            setToggle(false);
            setVideoValue(null);
          }}
          videoID={videoValue}
        />
      )}
      {toggle && audio && (
        <AudioPopup
          close={() => {
            setToggle(false);
            setAudio(null);
          }}
          audioID={audio}
        />
      )}
    </Fragment>
  );
};

export default MediaPopup;
