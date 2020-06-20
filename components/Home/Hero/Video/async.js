import { VideoLoadingLarge, VideoLoadingSmall } from './Loading';

import dynamic from 'next/dynamic';

export const VideoLarge = dynamic(() => import('./Large'), {
  ssr: false,
  loading: VideoLoadingLarge,
});

export const VideoSmall = dynamic(() => import('./Small'), {
  ssr: false,
  loading: VideoLoadingSmall,
});
