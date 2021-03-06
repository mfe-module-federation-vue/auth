const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const dependencies = require("./package.json").dependencies;

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "auth",
        filename: "remoteEntry.js",
        exposes: {
          "./Login": "./src/components/Login",
          "./Logout": "./src/components/Logout",
          "./UserTools": "./src/exposes/UserTools",
        },
        remotes: {
          ds: process.env.REMOTE_DS,
        },
        shared: {
          ...dependencies,
          vuetify: {
            singleton: true,
          },
          vue: {
            singleton: true,
          },
          "@mfe-module-federation-vue/dealful-package": {
            requiredVersion:
              dependencies["@mfe-module-federation-vue/dealful-package"],
          },
        },
      }),
    ],
  },
  devServer: {
    port: 3006,
    
  },
};
