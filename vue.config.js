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
        },
      }),
    ],
  },
  devServer: {
    port: 3006,
    progress: false,
  },
};
