const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

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
          vuetify: {
            singleton: true,
          },
          vue: {
            singleton: true,
          },
          "@mfe-module-federation-vue/dealful-package": {
            requiredVersion:
              dependencies["@mfe-module-federation-vue/dealful-package"],
            singleton: true, // only a single version of the shared module is allowed
          },
        },
      }),
    ],
  },
  devServer: {
    port: 3006,
    progress: false,
  },
};
