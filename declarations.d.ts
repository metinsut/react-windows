import 'react';

declare module 'react' {
  interface NamedExoticComponent {
    windowProps: unknown;
    componentName: string;
    defaultProps: object;
  }
}
