import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import Grid from '~/components/Grid.vue'
import Feature from '~/components/Feature.vue'
import AppNavigation from '~/components/AppNavigation.vue';
import BannerSlider from '~/components/slider/BannerSlider.vue';
import BannerSlide from '~/components/slider/BannerSlide.vue';
import HomeAbout from '~/components/home/HomeAbout.vue';
import HomeBusinessInfo from '~/components/home/HomeBusinessInfo.vue';
import HomeBusinessInfoItem from '~/components/home/HomeBusinessInfoItem.vue';
import HomeOurServices from '~/components/home/HomeOurServices.vue';
import HomeOurServicesFeature from '~/components/home/HomeOurServicesFeature.vue';
import HomeHero from '~/components/home/HomeHero.vue';
import HomeTestimonials from '~/components/home/HomeTestimonials.vue';
import HomeTestimonialsContent from '~/components/home/HomeTestimonialsContent.vue';

Vue.component('blok-page', Page)
Vue.component('blok-teaser', Teaser)
Vue.component('blok-grid', Grid)
Vue.component('blok-feature', Feature)
Vue.component('blok-app-navigation', AppNavigation);
Vue.component('blok-banner-slide', BannerSlide);
Vue.component('blok-banner-slider', BannerSlider);
Vue.component('blok-home-about', HomeAbout);
Vue.component('blok-home-business-info', HomeBusinessInfo);
Vue.component('blok-home-business-info-item', HomeBusinessInfoItem);
Vue.component('blok-home-our-services', HomeOurServices);
Vue.component('blok-home-our-services-feature', HomeOurServicesFeature);
Vue.component('blok-home-hero', HomeHero);
Vue.component('blok-home-testimonials', HomeTestimonials);
Vue.component('blok-home-testimonials-content', HomeTestimonialsContent);