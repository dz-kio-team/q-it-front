import type { ReactNode } from 'react';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

enum AffixEnum {
  PREFIX = 'PREFIX',
  SUFFIX = 'SUFFIX',
}

interface AffixContainerProps {
  type: AffixEnum;
  children: ReactNode;
}

const AffixContainer = React.forwardRef<HTMLDivElement, AffixContainerProps>(
  ({ type, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'text-muted-foreground pointer-events-none absolute top-1/2 flex h-full -translate-y-1/2 items-center justify-center peer-disabled:opacity-50',
          {
            'left-0 pl-3': type === AffixEnum.PREFIX,
            'right-0 pr-3': type === AffixEnum.SUFFIX,
          }
        )}
      >
        {children}
      </div>
    );
  }
);
AffixContainer.displayName = 'AffixContainer';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ prefixComponent, suffixComponent, className, ...props }, ref) => {
    const prefixRef = React.useRef<HTMLDivElement>(null);
    const suffixRef = React.useRef<HTMLDivElement>(null);
    const [prefixWidth, setPrefixWidth] = React.useState(0);
    const [suffixWidth, setSuffixWidth] = React.useState(0);

    React.useLayoutEffect(() => {
      if (prefixRef.current) {
        const width = prefixRef.current.offsetWidth;
        setPrefixWidth(width + 10); // width + 10px
      }
    }, [prefixComponent]);

    React.useLayoutEffect(() => {
      if (suffixRef.current) {
        const width = suffixRef.current.offsetWidth;
        setSuffixWidth(width + 10); // width + 10px
      }
    }, [suffixComponent]);

    const textareaStyle: React.CSSProperties = {
      paddingLeft: prefixComponent ? `${prefixWidth}px` : undefined,
      paddingRight: suffixComponent ? `${suffixWidth}px` : undefined,
    };

    return (
      <div className="w-full space-y-2">
        <div className="relative">
          {prefixComponent && (
            <AffixContainer ref={prefixRef} type={AffixEnum.PREFIX}>
              {prefixComponent}
            </AffixContainer>
          )}
          <textarea
            className={cn(
              'border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              className
            )}
            style={textareaStyle}
            ref={ref}
            {...props}
          />
          {suffixComponent && (
            <AffixContainer ref={suffixRef} type={AffixEnum.SUFFIX}>
              {suffixComponent}
            </AffixContainer>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
