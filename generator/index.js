module.exports = (api, options, rootOptions) => {
  const projectName = rootOptions.projectName

  api.extendPackage({
    scripts: {
      serve:
        'node node_modules/app-plugin/bootstrap.js && vue-cli-service serve',
      build:
        'node node_modules/app-plugin/bootstrap.js && vue-cli-service build',
      lint: 'vue-cli-service lint',
      'build:testing':
        'node node_modules/app-plugin/bootstrap.js && vue-cli-service build --mode testing',
      'build:selfproduct':
        'node node_modules/app-plugin/bootstrap.js && vue-cli-service build --mode selfproduct',
    },
    dependencies: {
      'core-js': '^3.8.3',
      vue: '^3.2.13',
    },
    devDependencies: {
      'app-plugin': 'latest',
      'element-plus': '2.3.14',
      '@element-plus/icons-vue': '^2.1.0',
      pug: '3.0.3',
      'pug-plain-loader': '1.1.0',
      sass: '1.62.0',
      'sass-loader': '13.2.2',
    },
    publishConfig: {
      registry: 'http://10.40.192.217:4873',
    },
  })

  // 2. 渲染模板檔案 (傳入 projectName 供 .env 使用)
  api.render('./template', {
    projectName: projectName,
  })

  // 3. 刪除預設檔案
  api.render((files) => {
    delete files['src/assets/logo.png']
    delete files['src/components/HelloWorld.vue']
    // 你的 App.vue 和 main.js 會被 template 裡的直接蓋掉，所以不用刪
  })
}
