import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useShare from '../.';

const ShareButton = () => {
  const { share, hasShared } = useShare({
    title: 'Check out use-share',
    text: 'use-share is a really cool library, you should check it out!',
    url: 'https://github.com/selbekk/use-share',
  });
  return (
    <button onClick={share} disabled={hasShared}>
      {hasShared ? 'Shared!' : 'Share'}
    </button>
  );
};

ReactDOM.render(<ShareButton />, document.getElementById('root'));
