import {  defineClientConfig } from "@vuepress/client";
// @ts-ignore
import uiDesign from "zodance-ui";

export default defineClientConfig({
    enhance({app}){
        app.use(uiDesign);
    }
})