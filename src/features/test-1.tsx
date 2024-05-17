import { Button } from '@/components/ui/button';

const Test1 = () => {
  return (
    <div>
      <Button onClick={() => console.log('clicked!')}>Test 1</Button>
    </div>
  );
};

Test1.defaultProps = {
  width: 320,
  height: 600,
  componentName: 'Test1',
};

export default Test1;
