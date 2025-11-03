import { withInstall } from '@kg-design/utils';
import type { SFCWithInstall } from '@kg-design/utils';
import _Button from './src/button.vue';
import './style/index.scss';

export const Button: SFCWithInstall<typeof _Button> = withInstall(_Button);

export default Button;

declare module 'vue' {
    export interface GlobalComponents {
        KgButton: typeof Button;
    }
}
