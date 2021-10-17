import parseTemplate from "./parseTemplate";
import renderTemplate from "./renderTemplate";

window.MyTemplateEngine = {
    render(template, data) {
        // console.log('render started')
        let tokens = parseTemplate(template);

        return renderTemplate(tokens, data);
        // console.log('render finished')
    }
}