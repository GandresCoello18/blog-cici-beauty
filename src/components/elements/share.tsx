import React, { useEffect, useState } from 'react';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const Share = () => {
  const [ShareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  return (
    <div className="w-full md:w-48 grid grid-cols-5 gap-1">
      <WhatsappShareButton url={ShareUrl} openShareDialogOnClick>
        <WhatsappIcon size={35} borderRadius={15} />
      </WhatsappShareButton>

      <FacebookShareButton url={ShareUrl} openShareDialogOnClick>
        <FacebookIcon size={35} borderRadius={15} />
      </FacebookShareButton>

      <EmailShareButton url={ShareUrl} openShareDialogOnClick>
        <EmailIcon size={35} borderRadius={15} />
      </EmailShareButton>

      <TwitterShareButton url={ShareUrl} openShareDialogOnClick>
        <TwitterIcon size={35} borderRadius={15} />
      </TwitterShareButton>

      <TelegramShareButton url={ShareUrl} openShareDialogOnClick>
        <TelegramIcon size={35} borderRadius={15} />
      </TelegramShareButton>
    </div>
  );
};

export default Share;
