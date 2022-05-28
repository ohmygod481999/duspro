import PluginIcon from "./component/logo-duspro.jpg";

const pluginId = 'my-plugin';
const brandName = "Duspro";

export default {
    register(app) {
      app.addMenuLink({
        to: `/plugins/${pluginId}`,
        icon: PluginIcon,
        intlLabel: {
          id: `${pluginId}.plugin.name`,
          defaultMessage: 'My plugin',
        },
        Component: async () => {
          const component = await import(/* webpackChunkName: "my-plugin" */ './pages/App');
  
          return component;
        },
        permissions: [], // array of permissions (object), allow a user to access a plugin depending on its permissions
      });
      app.registerPlugin({
        id: pluginId,
        name,
      });
    },
  };