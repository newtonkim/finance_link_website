import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/app.css';

createInertiaApp({
    resolve: (name: string) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true }) as Record<string, any>;
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({
                mounted() {
                    AOS.init({
                        duration: 800,
                        easing: 'ease-in-out',
                        once: true,
                        offset: 50,
                    });
                }
            })
            .mount(el);
    },
});
