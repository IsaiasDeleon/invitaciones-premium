'use client';

import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import { cn } from '@/lib/utils';

function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }: SliderPrimitive.Root.Props) {
  const values = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max];
  return (
    <SliderPrimitive.Root className={cn('data-horizontal:w-full data-vertical:h-full', className)} data-slot="slider" defaultValue={defaultValue} value={value} min={min} max={max} thumbAlignment="edge" {...props}>
      <SliderPrimitive.Control className="relative flex w-full touch-none items-center select-none data-disabled:opacity-50">
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-white/25 select-none">
          <SliderPrimitive.Indicator className="h-full bg-white select-none" />
        </SliderPrimitive.Track>
        {values.map((_, index) => <SliderPrimitive.Thumb key={index} className="relative block size-3 shrink-0 rounded-full border border-white bg-white outline-none after:absolute after:-inset-2 focus-visible:ring-3 focus-visible:ring-white/30" />)}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
