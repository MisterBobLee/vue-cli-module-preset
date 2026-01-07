const fs = require('fs')

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
      'app-plugin': '*',
      'element-plus': '2.3.14',
      pug: '3.0.3',
      'pug-plain-loader': '1.1.0',
      sass: '1.62.0',
      'sass-loader': '13.2.2',
    },
    eslintConfig: {
      root: true,
      env: { node: true },
      extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
      parserOptions: { parser: '@babel/eslint-parser' },
      rules: {},
    },
    browserslist: ['> 1%', 'last 2 versions', 'not dead', 'not ie 11'],
  })

  api.render('./template', {
    projectName: projectName,
  })

  api.render((files) => {
    delete files['src/assets/logo.png']
    delete files['src/components/HelloWorld.vue']
  })

  api.onCreateComplete(() => {
    const folders = ['src/api', 'src/assets/img', 'src/views/pages']

    folders.forEach((folder) => {
      const filePath = api.resolve(`${folder}/.gitkeep`)
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath)
      }
    })
  })
}
