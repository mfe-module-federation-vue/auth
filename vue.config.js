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
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 3006,
    progress: false,
  },
};
