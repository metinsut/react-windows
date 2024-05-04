import { Button } from '@/components/ui/button';

export default function Test1() {
  return (
    <div>
      <Button onClick={() => console.log('clicked!')}>Test 1</Button>
    </div>
  );
}
