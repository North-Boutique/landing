import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import useClickOutside from '../../useClickOutside';

const ImgViews = ({ close, src }: any) => {
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
          className={` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}>
          <div className={'mfp-content'} ref={domNode}>
            <div className={'mfp-iframe-scaler'}>
              <Image className={'mfp-img'} src={src} alt={'any'} />
            </div>
          </div>
          <div className={'mfp-preloader'}>{'Loading...'}</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView = () => {
  const [img, setImg] = useState<boolean>(false);
  const [imgValue, setImgValue] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const a = document.querySelectorAll('a');

      a.forEach((ad) => {
        if (ad.href.includes('assets/img/')) {
          if (ad.getAttribute('download') === null) {
            ad.addEventListener('click', (e) => {
              e.preventDefault();
              setImgValue(ad.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </Fragment>
  );
};

export default ImageView;
