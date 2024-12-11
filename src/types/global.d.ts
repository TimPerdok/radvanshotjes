import 'styled-components';

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}