import React, { useEffect, useState } from 'react'
import Talk from "talkjs";

const TalkJS = () => {
  const [talkLoaded, markTalkLoaded] = useState(false);
  Talk.ready.then(() => markTalkLoaded(true));

  useEffect(() => {
    if (talkLoaded) {
      // Safe to use the SDK here
      console.log('test')
    }
  }, [talkLoaded]);

  return (
    <div>TalkJS</div>
  )
}

export default TalkJS