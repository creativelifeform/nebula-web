import { VideoLoadingLarge, VideoLoadingSmall } from './Loading';

import dynamic from 'next/dynamic';

export const VideoLarge = dynamic(() => import('./Large'), {
  loading: VideoLoadingLarge,
});

export const VideoSmall = dynamic(() => import('./Small'), {
  loading: VideoLoadingSmall,
});
