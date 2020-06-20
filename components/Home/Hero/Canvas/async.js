import dynamic from 'next/dynamic';

export const Canvas = dynamic(() => import('./index'), { ssr: false });
