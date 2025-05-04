'use client';
import * as React from 'react';
import { ServicesGrid } from '@/registry/vibe-default/blocks/services-grid/services-grid';
import { NumberFlow } from '@/registry/vibe-default/ui/number-flow';
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  const [value, setValue] = React.useState(Math.random() * 100);
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <ServicesGrid />

      <div>
        <NumberFlow
          value={value}
          onClick={() => setValue(Math.random() * 100)}
        />
      </div>
    </div>
  );
}
