declare module 'react-show-more-text' {
  import { ComponentType, ReactNode } from 'react';

  interface ShowMoreTextProps {
    children: ReactNode;
    lines: number;
    more: string;
    less: string;
    className?: string;
    anchorClass?: string;
    expanded?: boolean;
    truncatedEndingComponent?: ReactNode;
  }

  const ShowMoreText: ComponentType<ShowMoreTextProps>;
  export default ShowMoreText;
}