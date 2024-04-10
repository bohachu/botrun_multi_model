import * as path from "path"
import TerserPlugin from "terser-webpack-plugin"

const isProduction = process.env.NODE_ENV === "production"

const config = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
    plugins: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: !isProduction,
          compress: {
            drop_console: isProduction,
          },
          format: {
            comments: false,
          },
        },
      }),
    ],
    configure: {
      devtool: isProduction ? false : "eval-source-map",
    },
  },
}

export default config
