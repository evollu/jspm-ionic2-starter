System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "noImplicitAny": false,
    "tsconfig": true
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*",
    "www": "www"
  },
  bundles: {
    "build.js": [
      "npm:zone.js@0.5.8",
      "npm:reflect-metadata@0.1.2",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/ionic",
      "npm:angular2@2.0.0-alpha.46/angular2",
      "npm:reflect-metadata@0.1.2/Reflect",
      "npm:zone.js@0.5.8/lib/zone",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/config/bootstrap",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/config/modes",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/config/config",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/config/decorators",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/platform/registry",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/platform/storage",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/click-block",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/platform/platform",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/events",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/animations/animation",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/animations/builtins",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/transitions/transition",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/transitions/ios-transition",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/transitions/md-transition",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/translation/translate",
      "npm:angular2@2.0.0-alpha.46/core",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/translation/translate_pipe",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/config/directives",
      "npm:angular2@2.0.0-alpha.46/profile",
      "npm:angular2@2.0.0-alpha.46/common",
      "npm:angular2@2.0.0-alpha.46/lifecycle_hooks",
      "npm:angular2@2.0.0-alpha.46/upgrade",
      "npm:angular2@2.0.0-alpha.46/bootstrap",
      "github:jspm/nodelibs-process@0.1.2",
      "npm:zone.js@0.5.8/lib/patch/browser",
      "npm:zone.js@0.5.8/lib/core",
      "npm:angular2@2.0.0-alpha.46/http",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/app/app",
      "npm:angular2@2.0.0-alpha.46/router",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/overlay/overlay-controller",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/form",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/fastdom",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/keyboard",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/action-sheet/action-sheet",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/modal/modal",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/popup/popup",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/nav-registry",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/feature-detect",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/tap-click/tap-click",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/dom",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util/util",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/util",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/app/id",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/blur/blur",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/button/button",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/content/content",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/checkbox/checkbox",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/icon/icon",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/item/item",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/item/item-group",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/item/item-sliding",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/menu/menu",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/menu/menu-toggle",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/menu/menu-types",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/menu/menu-close",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/text-input/text-input",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/list/list",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/text-input/label",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/show-hide-when/show-hide-when",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/nav",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/view-controller",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/nav-controller",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/nav-push",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/nav-router",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/navbar/navbar",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/overlay/overlay",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/slides/slides",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/radio/radio",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/scroll/scroll",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/scroll/pull-to-refresh",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/searchbar/searchbar",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/switch/switch",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/tabs/tabs",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/segment/segment",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/tabs/tab",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/toolbar/toolbar",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/platform/storage/storage",
      "npm:angular2@2.0.0-alpha.46/src/core/util",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/platform/storage/sql",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/platform/storage/local-storage",
      "npm:angular2@2.0.0-alpha.46/src/core/di",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes",
      "npm:angular2@2.0.0-alpha.46/src/facade/facade",
      "npm:angular2@2.0.0-alpha.46/src/core/application",
      "npm:angular2@2.0.0-alpha.46/src/core/metadata",
      "npm:angular2@2.0.0-alpha.46/src/core/bootstrap",
      "npm:angular2@2.0.0-alpha.46/src/core/services",
      "npm:angular2@2.0.0-alpha.46/src/core/linker",
      "npm:angular2@2.0.0-alpha.46/src/core/application_ref",
      "npm:angular2@2.0.0-alpha.46/src/core/zone",
      "npm:angular2@2.0.0-alpha.46/src/core/debug",
      "npm:angular2@2.0.0-alpha.46/src/core/render",
      "npm:angular2@2.0.0-alpha.46/src/common/directives",
      "npm:angular2@2.0.0-alpha.46/src/common/forms",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection",
      "npm:angular2@2.0.0-alpha.46/src/core/platform_directives_and_pipes",
      "npm:angular2@2.0.0-alpha.46/src/core/dev_mode",
      "npm:angular2@2.0.0-alpha.46/src/core/profile/profile",
      "npm:angular2@2.0.0-alpha.46/src/common/common_directives",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/upgrade_adapter",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:zone.js@0.5.8/lib/patch/promise",
      "npm:zone.js@0.5.8/lib/patch/functions",
      "npm:zone.js@0.5.8/lib/patch/mutation-observer",
      "npm:zone.js@0.5.8/lib/patch/register-element",
      "npm:zone.js@0.5.8/lib/patch/event-target",
      "npm:zone.js@0.5.8/lib/patch/websocket",
      "npm:zone.js@0.5.8/lib/patch/property-descriptor",
      "npm:zone.js@0.5.8/lib/patch/geolocation",
      "npm:zone.js@0.5.8/lib/patch/file-reader",
      "npm:angular2@2.0.0-alpha.46/src/http/http",
      "npm:zone.js@0.5.8/lib/keys",
      "npm:angular2@2.0.0-alpha.46/src/http/backends/xhr_backend",
      "npm:angular2@2.0.0-alpha.46/src/http/backends/jsonp_backend",
      "npm:angular2@2.0.0-alpha.46/src/http/backends/browser_xhr",
      "npm:angular2@2.0.0-alpha.46/src/http/backends/browser_jsonp",
      "npm:angular2@2.0.0-alpha.46/src/http/base_request_options",
      "npm:angular2@2.0.0-alpha.46/src/http/static_response",
      "npm:angular2@2.0.0-alpha.46/src/http/base_response_options",
      "npm:angular2@2.0.0-alpha.46/src/http/static_request",
      "npm:angular2@2.0.0-alpha.46/src/http/backends/mock_backend",
      "npm:angular2@2.0.0-alpha.46/src/http/headers",
      "npm:angular2@2.0.0-alpha.46/src/http/interfaces",
      "npm:angular2@2.0.0-alpha.46/src/http/enums",
      "npm:angular2@2.0.0-alpha.46/src/router/router",
      "npm:angular2@2.0.0-alpha.46/src/http/url_search_params",
      "npm:angular2@2.0.0-alpha.46/src/router/router_outlet",
      "npm:angular2@2.0.0-alpha.46/src/router/router_link",
      "npm:angular2@2.0.0-alpha.46/src/router/instruction",
      "npm:angular2@2.0.0-alpha.46/src/router/route_registry",
      "npm:angular2@2.0.0-alpha.46/src/router/location_strategy",
      "npm:angular2@2.0.0-alpha.46/src/router/hash_location_strategy",
      "npm:angular2@2.0.0-alpha.46/src/router/path_location_strategy",
      "npm:angular2@2.0.0-alpha.46/src/router/location",
      "npm:angular2@2.0.0-alpha.46/src/router/route_config_decorator",
      "npm:angular2@2.0.0-alpha.46/src/router/route_definition",
      "npm:angular2@2.0.0-alpha.46/src/facade/lang",
      "npm:angular2@2.0.0-alpha.46/src/router/lifecycle_annotations",
      "npm:angular2@2.0.0-alpha.46/src/facade/exceptions",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/tap-click/ripple",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/tap-click/activator",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/list/virtual",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/animations/scroll-to",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/ion",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/menu/menu-gestures",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/item/item-sliding-gesture",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/nav/swipe-back",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/gestures/gesture",
      "npm:angular2@2.0.0-alpha.46/src/core/util/decorators",
      "npm:angular2@2.0.0-alpha.46/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.46/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.46/src/core/di/forward_ref",
      "npm:angular2@2.0.0-alpha.46/src/core/di/injector",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/components/slides/swiper-widget",
      "npm:angular2@2.0.0-alpha.46/src/core/di/provider",
      "npm:angular2@2.0.0-alpha.46/src/core/di/key",
      "npm:angular2@2.0.0-alpha.46/src/core/di/opaque_token",
      "npm:angular2@2.0.0-alpha.46/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/async_pipe",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/json_pipe",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/date_pipe",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/slice_pipe",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/number_pipe",
      "npm:angular2@2.0.0-alpha.46/src/facade/exception_handler",
      "npm:angular2@2.0.0-alpha.46/src/facade/async",
      "npm:angular2@2.0.0-alpha.46/src/compiler/compiler",
      "npm:angular2@2.0.0-alpha.46/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.46/src/core/application_common",
      "npm:angular2@2.0.0-alpha.46/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.46/src/core/metadata/di",
      "npm:angular2@2.0.0-alpha.46/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.46/src/compiler/url_resolver",
      "npm:angular2@2.0.0-alpha.46/src/core/services/title",
      "npm:angular2@2.0.0-alpha.46/src/compiler/app_root_url",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/directive_resolver",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_resolver",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/compiler",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_manager",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/query_list",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/element_ref",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/template_ref",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_ref",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_container_ref",
      "npm:angular2@2.0.0-alpha.46/src/facade/collection",
      "npm:angular2@2.0.0-alpha.46/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.46/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.46/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.46/src/core/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_pool",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_manager_utils",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view_listener",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/proto_view_factory",
      "npm:angular2@2.0.0-alpha.46/src/core/debug/debug_element",
      "npm:angular2@2.0.0-alpha.46/src/core/debug/debug_element_view_listener",
      "npm:angular2@2.0.0-alpha.46/src/core/render/render",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/pipe_resolver",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/ng_class",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/ng_if",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/ng_for",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/ng_style",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/observable_list_diff",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/ng_switch",
      "npm:angular2@2.0.0-alpha.46/src/common/directives/core_directives",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/model",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/control_value_accessor",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/validators",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/form_builder",
      "npm:angular2@2.0.0-alpha.46/src/core/profile/wtf_impl",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/metadata",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/constants",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/util",
      "npm:zone.js@0.5.8/lib/patch/define-property",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/upgrade_ng1_adapter",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/downgrade_ng2_adapter",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/ng_control_status",
      "npm:angular2@2.0.0-alpha.46/src/upgrade/angular_js",
      "npm:process@0.11.2",
      "npm:zone.js@0.5.8/lib/utils",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Rx",
      "npm:angular2@2.0.0-alpha.46/src/router/route_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.46/src/http/http_utils",
      "npm:angular2@2.0.0-alpha.46/src/router/route_recognizer",
      "npm:angular2@2.0.0-alpha.46/src/router/route_config_nomalizer",
      "npm:angular2@2.0.0-alpha.46/src/router/route_config_impl",
      "npm:angular2@2.0.0-alpha.46/src/router/url_parser",
      "npm:angular2@2.0.0-alpha.46/src/router/lifecycle_annotations_impl",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/gestures/slide-edge-gesture",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/gestures/drag-gesture",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/gestures/hammer",
      "npm:angular2@2.0.0-alpha.46/src/core/di/type_literal",
      "npm:angular2@2.0.0-alpha.46/src/common/pipes/invalid_pipe_argument_exception",
      "npm:angular2@2.0.0-alpha.46/src/facade/intl",
      "npm:angular2@2.0.0-alpha.46/src/facade/promise",
      "npm:angular2@2.0.0-alpha.46/src/compiler/runtime_compiler",
      "npm:angular2@2.0.0-alpha.46/src/compiler/html_parser",
      "npm:angular2@2.0.0-alpha.46/src/compiler/template_normalizer",
      "npm:angular2@2.0.0-alpha.46/src/compiler/template_parser",
      "npm:angular2@2.0.0-alpha.46/src/compiler/runtime_metadata",
      "npm:angular2@2.0.0-alpha.46/src/compiler/change_detector_compiler",
      "npm:angular2@2.0.0-alpha.46/src/compiler/style_compiler",
      "npm:angular2@2.0.0-alpha.46/src/compiler/schema/element_schema_registry",
      "npm:angular2@2.0.0-alpha.46/src/compiler/command_compiler",
      "npm:angular2@2.0.0-alpha.46/src/compiler/schema/dom_element_schema_registry",
      "npm:angular2@2.0.0-alpha.46/src/compiler/anchor_based_app_root_url",
      "npm:angular2@2.0.0-alpha.46/src/core/dom/browser_adapter",
      "npm:angular2@2.0.0-alpha.46/src/compiler/template_compiler",
      "npm:angular2@2.0.0-alpha.46/src/compiler/directive_metadata",
      "npm:angular2@2.0.0-alpha.46/src/core/testability/browser_testability",
      "npm:angular2@2.0.0-alpha.46/src/compiler/source_module",
      "npm:angular2@2.0.0-alpha.46/src/compiler/xhr_impl",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-alpha.46/src/core/render/api",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/shared_styles_host",
      "npm:angular2@2.0.0-alpha.46/src/core/platform_bindings",
      "npm:angular2@2.0.0-alpha.46/src/animate/browser_details",
      "npm:angular2@2.0.0-alpha.46/src/animate/animation_builder",
      "npm:angular2@2.0.0-alpha.46/src/core/profile/wtf_init",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/events/key_events",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/template_commands",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/view",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/differs/iterable_differs",
      "npm:angular2@2.0.0-alpha.46/src/compiler/xhr",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/differs/default_iterable_differ",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/differs/keyvalue_differs",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/differs/default_keyvalue_differ",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/parser/parser",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/parser/locals",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.46/src/core/reflection/reflector",
      "npm:angular2@2.0.0-alpha.46/src/core/reflection/reflection_capabilities",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/element_injector",
      "npm:angular2@2.0.0-alpha.46/render",
      "npm:angular2@2.0.0-alpha.46/src/core/pipes/pipes",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/element_binder",
      "npm:angular2@2.0.0-alpha.46/src/core/pipes/pipe_provider",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/number_value_accessor",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/shared",
      "npm:process@0.11.2/browser",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Observable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/combineLatest-static",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/concat-static",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/DeferObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/ForkJoinObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/FromObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/EmptyObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/FromEventObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/ArrayObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/FromEventPatternObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/PromiseObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/merge-static",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/IntervalObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/InfiniteObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/RangeObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/ErrorObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/TimerObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/zip-static",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/buffer",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/bufferCount",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/bufferToggle",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/bufferTime",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/bufferWhen",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/combineAll",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/catch",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/combineLatest",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/concatAll",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/concat",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/concatMap",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/concatMapTo",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/count",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/dematerialize",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/debounceTime",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/debounce",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/defaultIfEmpty",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/distinctUntilChanged",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/expand",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/do",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/delay",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/finally",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/ignoreElements",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/filter",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/groupBy",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/first",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/every",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/last",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/map",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/materialize",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mapTo",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mergeAll",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/merge",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mergeMapTo",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mergeMap",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/multicast",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/partition",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/observeOn",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/publish",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/publishBehavior",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/publishReplay",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/reduce",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/retry",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/repeat",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/sample",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/retryWhen",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/scan",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/sampleTime",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/share",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/shareBehavior",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/shareReplay",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/single",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/skip",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/skipUntil",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/startWith",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/subscribeOn",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/switch",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/switchMap",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/take",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/switchMapTo",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/throttle",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/takeUntil",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/timeout",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/timeoutWith",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/toArray",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/toPromise",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/window",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/windowTime",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/windowCount",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/windowToggle",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/windowWhen",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/withLatestFrom",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/zip",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/zipAll",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Subscription",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Subject",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Subscriber",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/subjects/ReplaySubject",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/subjects/BehaviorSubject",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/Notification",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/ConnectableObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/EmptyError",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/ArgumentOutOfRangeError",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/nextTick",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/immediate",
      "npm:angular2@2.0.0-alpha.46/src/router/async_route_handler",
      "npm:angular2@2.0.0-alpha.46/src/router/path_recognizer",
      "npm:angular2@2.0.0-alpha.46/src/router/sync_route_handler",
      "npm:angular2@2.0.0-alpha.46/src/compiler/html_ast",
      "npm:angular2@2.0.0-alpha.46/src/compiler/util",
      "npm:ionic-framework@2.0.0-alpha.34/dist/src/es5/common/ionic/gestures/slide-gesture",
      "npm:angular2@2.0.0-alpha.46/src/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.46/src/compiler/template_preparser",
      "npm:angular2@2.0.0-alpha.46/src/compiler/selector",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/interfaces",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.46/src/compiler/template_ast",
      "npm:angular2@2.0.0-alpha.46/src/compiler/change_definition_factory",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-alpha.46/src/transform/template_compiler/change_detector_codegen",
      "npm:angular2@2.0.0-alpha.46/src/compiler/shadow_css",
      "npm:angular2@2.0.0-alpha.46/src/core/render/view_factory",
      "npm:angular2@2.0.0-alpha.46/src/core/dom/generic_browser_adapter",
      "npm:angular2@2.0.0-alpha.46/src/facade/math",
      "npm:angular2@2.0.0-alpha.46/src/animate/css_animation_builder",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/events/hammer_common",
      "npm:angular2@2.0.0-alpha.46/src/core/render/dom/util",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/event_binding",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/coalesce",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/pipe_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/pipes",
      "npm:angular2@2.0.0-alpha.46/src/core/render/view",
      "npm:angular2@2.0.0-alpha.46/src/core/linker/event_config",
      "npm:angular2@2.0.0-alpha.46/src/common/forms/directives/normalize_validator",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/combineLatest-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/Symbol_observable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/root",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/tryCatch",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/errorObject",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/observeOn-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/IteratorObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mergeAll-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/ScalarObservable",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/isNumeric",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/zip-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mergeMapTo-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/bindCallback",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/expand-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/noop",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/Symbol_iterator",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/FastMap",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/Map",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/groupBy-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/not",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/reduce-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/observables/SubscribeOnObservable",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/OuterSubscriber",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/subscribeToResult",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/operators/mergeMap-support",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/subjects/SubjectSubscription",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/throwError",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/tryOrOnError",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/NextTickScheduler",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/ImmediateScheduler",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/codegen_logic_util",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/codegen_facade",
      "npm:angular2@2.0.0-alpha.46/src/animate/css_animation_options",
      "npm:angular2@2.0.0-alpha.46/src/animate/animation",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/isDate",
      "npm:angular2@2.0.0-alpha.46/src/core/change_detection/observable_facade",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/InnerSubscriber",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/ImmediateAction",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/NextTickAction",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/schedulers/FutureAction",
      "npm:buffer@3.5.2",
      "npm:@reactivex/rxjs@5.0.0-alpha.7/dist/cjs/util/Immediate",
      "npm:buffer@3.5.2/index",
      "npm:ieee754@1.1.6",
      "npm:is-array@1.0.1",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.6/index",
      "npm:is-array@1.0.1/index",
      "npm:base64-js@0.0.8/lib/b64"
    ]
  },

  packages: {
    "www": {
      "main": "app",
      "defaultExtension": "js",
      "map": {
        "ionic": "ionic/dist/src/es5/common/ionic",
        "angular2": "npm:angular2@2.0.0-alpha.46"
      },
      "modules": {
        "*.ts": {
          "loader": "ts"
        },
        "*.css": {
          "loader": "css"
        },
        "*.html": {
          "loader": "text"
        }
      }
    },
    "npm:ionic-framework@2.0.0-alpha.34": {
      "map": {
        "ionic": "./dist/src/es5/common/ionic"
      },
      "modules": {
        "*.ts": {
          "loader": "ts"
        },
        "*.css": {
          "loader": "css"
        },
        "*.html": {
          "loader": "text"
        }
      }
    }
  },

  map: {
    "clean-css": "npm:clean-css@3.4.8",
    "css": "github:systemjs/plugin-css@0.1.19",
    "ionic": "npm:ionic-framework@2.0.0-alpha.34",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "ts": "github:frankwallis/plugin-typescript@2.2.2",
    "typescript": "npm:typescript@1.6.2",
    "zone.js": "npm:zone.js@0.5.8",
    "github:frankwallis/plugin-typescript@2.2.2": {
      "typescript": "npm:typescript@1.6.2"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@reactivex/rxjs@5.0.0-alpha.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2@2.0.0-alpha.46": {
      "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "zone.js": "npm:zone.js@0.5.8"
    },
    "npm:asn1.js@4.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:cli-cursor@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "restore-cursor": "npm:restore-cursor@1.0.1"
    },
    "npm:cli-width@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:code-point-at@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:colors@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.0.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.0",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@6.0.2": {
      "bn.js": "npm:bn.js@4.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-shim@0.33.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:exit-hook@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:figures@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inquirer@0.11.0": {
      "ansi-escapes": "npm:ansi-escapes@1.1.0",
      "ansi-regex": "npm:ansi-regex@2.0.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "chalk": "npm:chalk@1.1.1",
      "cli-cursor": "npm:cli-cursor@1.0.2",
      "cli-width": "npm:cli-width@1.1.0",
      "figures": "npm:figures@1.4.0",
      "lodash": "npm:lodash@3.10.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline2": "npm:readline2@1.0.1",
      "run-async": "npm:run-async@0.1.0",
      "rx-lite": "npm:rx-lite@3.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ionic-framework@2.0.0-alpha.34": {
      "@reactivex/rxjs": "npm:@reactivex/rxjs@5.0.0-alpha.7",
      "angular2": "npm:angular2@2.0.0-alpha.46",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "colors": "npm:colors@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "es6-shim": "npm:es6-shim@0.33.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inquirer": "npm:inquirer@0.11.0",
      "lodash": "npm:lodash@3.10.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "shelljs": "npm:shelljs@0.5.3",
      "zone.js": "npm:zone.js@0.5.8"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mute-stream@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.0.0",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.2.0",
      "browserify-rsa": "npm:browserify-rsa@4.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readline2@1.0.1": {
      "code-point-at": "npm:code-point-at@1.0.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "mute-stream": "npm:mute-stream@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:restore-cursor@1.0.1": {
      "exit-hook": "npm:exit-hook@1.1.1",
      "onetime": "npm:onetime@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:run-async@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "once": "npm:once@1.3.2"
    },
    "npm:rx-lite@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shelljs@0.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.5.8": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
