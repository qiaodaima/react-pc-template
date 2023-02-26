module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  // "off" or 0 - turn the rule off
  // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  // "error" or 2 - turn the rule on as an error (exit code will be 1)
  'rules': {
    'semi': ['warn', 'always'], // 语句末尾添加分号;
    'quotes': ['warn', 'single'], // 使用单引号
    'jsx-quotes': ['warn', 'prefer-single'], // jsx 使用单引号
    'eqeqeq': ['warn', 'always'], // 要求使用 === 和 !==
    'newline-after-var': ['warn', 'always'], // 变量声明语句后有一行空行
    'eol-last': ['warn', 'always'], // 要求文件末尾保留一行空行
    'no-nested-ternary': ['warn'], // 禁止使用嵌套的三元表达式
    'no-cond-assign': ['warn', 'always'], // 禁止在条件语句中出现赋值操作符
    'no-sparse-arrays': ['warn'], // 禁用稀疏数组
    'no-multi-assign': ['warn'], // 禁止连续赋值
    'prefer-const': ['warn'], // 建议使用const
    'no-duplicate-imports': ['warn'], // 禁止重复导入
    'max-params': ['warn', {
      max: 3, // 限制函数定义中最大参数个数
    }],
    'camelcase': ['warn', {
      properties: 'always', // 强制属性名称为驼峰风格
      ignoreDestructuring: true, // 不检查解构标识符
    }],
    'indent': ['warn', 2, {
      SwitchCase: 1, // switch 语句中的 case 子句的缩进级别
    }],
    'keyword-spacing': ['warn', {
      after: true // 要求在关键字之后至少有一个空格
    }],
    'padded-blocks': ['warn', 'never'], // 禁止块语句和类的开始或末尾有空行
    'spaced-comment': ['warn', 'always'], // 必须跟随至少一个空白
    'brace-style': ['warn', '1tbs'],// 大括号风格要求
    'max-lines': ['warn', {
      max: 500, // 强制文件的最大行数
      skipBlankLines: true, // 忽略空白行
      skipComments: true, // 忽略只包含注释的行
    }],
    'max-statements-per-line': ['warn', {
      max: 1, // 强制每一行中所允许的最大语句数量
    }],
    'max-statements': ['warn', 100], // 限制函数块中的语句的最大数量
    'no-multiple-empty-lines': ['warn', {
      max: 1, // 最大连续空行数
      maxEOF: 1, // 文件末尾的最大连续空行数
      maxBOF: 0, // 文件开始的最大连续空行数
    }],
    'no-trailing-spaces': ['warn', {
      skipBlankLines: false, // 禁止在空行使用空白符
      ignoreComments: false, // 禁止在注释块中使用空白符
    }],
    'no-inner-declarations': ['warn', 'both'], // 禁止在嵌套的语句块中出现变量或 function 声明
  }
};
