# react的设计模式：复合组件、babel 7、webpack4简单记录

## package.json 和 webpack配置

### package.json

```js
/* package.json */
"dependencies": {
"react": "^16.5.0", //注意生命周期的变化
"react-dom": "^16.5.0"
},
"devDependencies": {
"@babel/core": "^7.0.0",  //代替以前的babel-core
"@babel/preset-env": "^7.0.0", //代替以前使用的 babel-preset-env
"@babel/preset-react": "^7.0.0", //代替以前使用的 babel-preset-react
"babel-loader": "^8.0.2",
"html-webpack-plugin": "^3.2.0",
"webpack": "^4.17.2", //webpack 4需要注意与webpack 3 的区别
"webpack-cli": "^3.1.0",
"webpack-dev-server": "^3.1.8",
"webpack-merge": "^4.1.4"
}
```

### webpack配置

#### model设置

* development
  * 会将 process.env.NODE_ENV 的值设为development启用：
    * NamedChunksPlugin
    * NamedModulesPlugin
* production
  * 会将 process.env.NODE_ENV 的值设为 production启用：
    * FlagDependencyUsagePlugin
    * FlagIncludedChunksPlugin
    * ModuleConcatenationPlugin
    * NoEmitOnErrorsPlugin
    * OccurrenceOrderPlugin
    * SideEffectsFlagPlugin
    * UglifyJsPlugin.

```js
    /* Error:Plugin/Preset files are not allowed to export objects, only functions*/
    // babel 7 与之前的版本的依赖混用了
```

## [react的设计模式：复合组件](http://imweb.io/topic/5b3f03f44d378e703a4f4456)

### 动态组件

* 平常的静态组件使用方法

```js
// Stepper 组件有一个存储当前 stage 的状态对象，一个增加 stage 属性值的方法，以及一个 render 方法，它返回包含2个子组件的div。
// 目前，我们明确地将 Progress 和 Steps 组件直接放在 Stepper 组件中。 为了减少这种静态写法，我们可以使用 props 对象动态插入子组件。

// Stepper.js
class Stepper extends Component {
    state = {
        stage: this.props.stage
    }
    static defaultProps = {
        stage: 1
    }
    handleClick = () => {
        this.setState({ stage: this.state.stage + 1 })
    }
    render() {
        const { stage } = this.state;
        return (
            <div style={styles.container}>
            <Progress stage={stage}/>
            <Steps handleClick={this.handleClick} stage={stage}/>
            </div>
        );
    }
}
export default Stepper;

```

* 使用 props 对象动态插入子组件
  * React.Children.map()
  * React.cloneElement()

```js
/* 在 Stepper.js 文件中使用 props.children 对象替换 Progress 和 Steps 组件，并将它们放在 App.js中的 Stepper 组件内。

只需这简单的改变就给我们带来很大的收益。现在我们可以选择组件树中的哪个组件先渲染; 我们可以选择进度块是在左侧还是右侧。

但这种方法有一个问题： Progress 和 Steps 组件不能再访问 stage 和 handleClick 属性了。 为了让每个子组件获取它们需要的属性，我们需要手动遍历每个子组件并向其注入这些属性。 我们可以使用 react API 提供的一些辅助方法来实现。 两个方法是： Children.map() 和 cloneElement()。 */

// Children.map() 类似于 Array.map() 方法。但请务必使用Children.map()，因为 children.props 具有不透明的数据结构，使得 Array.map() 方法不适合此用例。

// cloneElement 如名称一样，它克隆这些子组件并可以注入额外的属性，最后返回新的组件。

// Stepper.js
const { stage } = this.state;
const children = React.Children.map(this.props.children, child => {
    return React.cloneElement(child, {stage, handleClick: this.handleClick})
});
return (
    <div style={styles.container}>
        {children}
    </div>
);

```

### 静态属性