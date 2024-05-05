import { Button } from '@/components/ui/button';

function Test1() {
  return (
    <div>
      <Button onClick={() => console.log('clicked!')}>Test 1</Button>
    </div>
  );
}

Test1.displayName = 'Test1';

export default Test1;
