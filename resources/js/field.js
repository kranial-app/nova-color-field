import {
    Chrome,
    Compact,
    Grayscale,
    Material,
    Photoshop,
    Sketch,
    Slider,
    Swatches,
    Twitter
} from "vue-color";

Nova.booting((Vue, router) => {
    Vue.component("chrome-picker", Chrome);
    Vue.component("compact-picker", Compact);
    Vue.component("grayscale-picker", Grayscale);
    Vue.component("material-picker", Material);
    Vue.component("photoshop-picker", Photoshop);
    Vue.component("sketch-picker", Sketch);
    Vue.component("slider-picker", Slider);
    Vue.component("swatches-picker", Swatches);
    Vue.component("twitter-picker", Twitter);
    Vue.component("index-color", require("./components/IndexField"));
    Vue.component("detail-color", require("./components/DetailField"));
    Vue.component("form-color", require("./components/FormField"));
});
