import {  defineClientConfig } from "@vuepress/client";
// @ts-ignore
import uiDesign from "zodance-ui";
import 'zodance-ui/style'

export default defineClientConfig({
    enhance({app}){
        app.use(uiDesign);
    }
})