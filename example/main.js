System.register(["@angular/platform-browser-dynamic", "./module"], function (exports_1, context_1) {
    "use strict";
    var platform_browser_dynamic_1, module_1, platform;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (module_1_1) {
                module_1 = module_1_1;
            }
        ],
        execute: function () {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(module_1.AppModule);
        }
    };
});
//# sourceMappingURL=main.js.map