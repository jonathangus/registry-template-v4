import { Card } from '@/registry/vibe-default/ui/card';

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="p-4 bg-white shadow-md rounded-lg">Service 1</Card>
      <Card className="p-4 bg-white shadow-md rounded-lg">Service 2</Card>
      <Card className="p-4 bg-white shadow-md rounded-lg">Service 3</Card>
      <Card className="p-4 bg-white shadow-md rounded-lg">Service 4</Card>
      <Card className="p-4 bg-white shadow-md rounded-lg">Service 5</Card>
    </div>
  );
}
