# useShare - your friendly web share API hook!

Trigger the Web Share API, and fall back to copying the value to clipboard.

The package is [1.2kb gzipped](https://bundlephobia.com/result?p=use-share@latest).

## Install

```
npm install use-share
# or
yarn add use-share
```

## Usage

This is how you use the `useShare` hook.

```tsx
import React from 'react';
import useShare from 'use-share';

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
```

You call the hook with an object describing what you want to share - a title, a text and the URL to the content you want to share. You don't have to specify all three - but since you don't know how the user will want to share your content, you probably should. If the user chooses the e-mail app on their phone, for instance, they'll get the title as the subject, the text as the body, and a link to the URL at the bottom.

You can read more about the Web Share API at [web.dev](https://web.dev/web-share/).

The hook returns an object with two properties - `share` and `hasShared`. When you call `share`, you share the content. `hasShared` is a boolean that is true for 1.5 seconds after you shared (so you can tell your user real quick).

### Fallback

If the user's device doesn't [support the Web Share API](https://caniuse.com/#feat=web-share), it will copy the URL parameter to the clipboard. If you didn't specify a `url` parameter, it will copy the `text`, and if that isn't specified, it will copy the `title`. If you didn't specify any of the three, you should talk to somebody about your life choices.

## No files?

The Web Share API supports sharing files too, but this hook doesn't. 🤷‍♂️ If you need support for this, use the Web Share API directly instead.

## Questions?

Feel free to create an issue if you got questions, or reach out to me on [Twitter](https://twitter.com/selbekk). I ❤️ pull requests too, so if you find a bug, please let me know.
