/*
 * @Author: Rainy
 * @Date: 2020-03-01 19:29:27
 * @LastEditors: Rainy
 * @LastEditTime: 2020-03-03 09:55:34
 */

module.exports = plop => {
  plop.setGenerator('template', {
    description: 'Create root template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please input the template name: ',
        default: 'template'
      },
      {
        type: 'confirm',
        name: 'needTest',
        message: 'Do you want test file ? '
      },
      {
        type: 'input',
        name: 'path',
        message: 'generator path (etc: src/template) ?',
        default: 'src'
      }
    ],
    actions: answer => {
      let actions = [
        {
          type: 'add',
          path: '{{path}}/{{name}}/index.ts',
          templateFile: 'plop-templates/code/index.ts.hbs'
        },
        {
          type: 'add',
          path: '{{path}}/{{name}}/README.md',
          templateFile: 'plop-templates/code/README.md.hbs'
        }
      ];
      if (answer.needTest) {
        actions.push({
          type: 'add',
          path: '{{path}}/{{name}}/__tests__.ts',
          templateFile: 'plop-templates/code/__tests__.ts.hbs'
        });
      }
      return actions;
    }
  });
  plop.setGenerator('docs', {
    description: 'Create zh docs',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please input the docs model name: ',
        default: 'model'
      },
      {
        type: 'input',
        name: 'path',
        message: 'generator model path (etc: docs/zh/model) ?',
        default: 'docs/zh'
      }
    ],
    actions: answer => {
      return [
        {
          type: 'add',
          path: '{{path}}/{{name}}/README.md',
          templateFile: 'plop-templates/docs/zh/README.md.hbs'
        }
      ];
    }
  });
  plop.setGenerator('template-docs', {
    description: 'Create root template and zh docs',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'please input the name: ',
        default: 'template'
      },
      {
        type: 'confirm',
        name: 'needTest',
        message: 'Do you want test file ? '
      },
      {
        type: 'input',
        name: 'templatePath',
        message: 'generator path (etc: src/template) ?',
        default: 'src'
      },
      {
        type: 'input',
        name: 'docsPath',
        message: 'generator model path (etc: docs/zh/model) ?',
        default: 'docs/zh'
      }
    ],
    actions: answer => {
      let actions = [
        {
          type: 'add',
          path: '{{templatePath}}/{{name}}/index.ts',
          templateFile: 'plop-templates/code/index.ts.hbs'
        },
        {
          type: 'add',
          path: '{{templatePath}}/{{name}}/README.md',
          templateFile: 'plop-templates/code/README.md.hbs'
        },
        {
          type: 'add',
          path: '{{docsPath}}/{{name}}/README.md',
          templateFile: 'plop-templates/docs/zh/README.md.hbs'
        }
      ];
      if (answer.needTest) {
        actions.push({
          type: 'add',
          path: '{{templatePath}}/{{name}}/__tests__.ts',
          templateFile: 'plop-templates/code/__tests__.ts.hbs'
        });
      }
      return actions;
    }
  });
};
