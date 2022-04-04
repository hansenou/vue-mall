1）开发项目流程：
    1、写静态页面（html+css）
    2、拆分组件
    3、获取服务器的数据动态展示
    4、完成相应的动态业务逻辑

2）路由分析：
    路由组件:
    Home首页路由组件，Search路由组件，login路由组件，register注册路由组件
    非路由组件：
    Header、（首页，搜索页）
    Foorter（在首页，搜索页有），登录没有

3）路由组件的搭建
    由分析可知，路由组件由4个
        -components文件夹，放置非路由组件（公用的全局组件）
        -pages文件夹，放置路由组件

4）配置路由
    项目的路由配置在router文件夹中

5）总结
    路由组件和非路由组件的区别
        1、非路由组件放在components文件夹
           路由组件放在pages文件夹
        2、路由组件需要在router文件中配置注册
           非路由组件标签的形式使用
        3、注册完的路由，不过是路由组件还是非路由组件，身上都有$route，$router属性
    $route:一般获取路由信息[路径、query]r
    $router:一般进行编程式导航进行跳转[push、replace]

6）Footer组件显示与隐藏
    显示：在Home、Search显示
    隐藏：注册和登录
        在路由信息里配置meta属性里的show为布尔值
        再到footer组件标签里使用v-show（判断真假来显示的）通过$route.meta.show属性来获取show为的值

7)路由传参：两种方式，对象的写法比较多
    声明式导航：a标签
    编程式导航：按钮，需要在方法中写回调函数
    query传参：
        {
            path:'/search',
            query:{
                sendSearch:this.sendSearch
            }
        }
        接收：{{$route.query.sendSearch}}
    params传参：不能用path的方式，需要去路由配置那设置name，并且path后需要占位符
        search的路由配置：
        {
            name:'search',
            path:'/search/:sendSearch',
            component:Search,
            meta:{show:true}
        },
        编程式导航写法：
        methods: {
            //搜索按钮的回调函数,需要向search路由进行跳转
            goSearch(){
                this.$router.push({
                    name:'search',
                    params:{
                        sendSearch:this.sendSearch
                    }
                })
            } 
        },
        接收：{{$route.params.sendSearch}}
8)把导航区三级联动的组件注册为全局组件
    好处：只需要注册一次，就可以在项目任意位置使用

9)axios二次封装
    1、为什么样axios需要二次封装：
        请求拦截器，响应拦截器；
        请求拦截器：可以在发请求之前处理一些业务
        响应拦截器：当服务器数据返回后，可以处理一些事情
    2、在src下新建一个文件夹为API
        接口当中：路径都带有/api
        baseURL：‘/api’

10)接口的统一管理
    项目小：完全可以在组件的生命周期函数中发请求
    项目大：axios.get('xxx')

11)跨域问题
    什么是跨越：协议、域名、端口号不同请求，称为跨越
    http://localhost:8080/#/home  前端项目本地服务器
    http://39.98.123.211 后台服务器
    JSONP,CROS,代理

12)vuex状态管理
    集中式管理项目中组件共用的数据
    模块化开发

13)三级联动路由跳转与参数传递
    使用编程式导航+事件委托实现+自定义属性dataset

type-nva总结
    1、商品分类的二级列表静态变为动态【获取服务器数据，解决跨域问题】
    2、函数的防抖与节流
    3、路由跳转：利用编程式导航+自定义属性

14)Search页面
    1、首先把三级联动的typeNav的组件拿过来，默认藏起来，鼠标
    移到全部商品分类后再显示，移除就消失，
    方法：使用V-show 在typeNav组件data中show：true
    第一、mounted中判断，路径不在home就false
    第二、search页面中的移入和移出显示，在全部商品分类的标签中利用鼠标移入移出的方法
    @mouseleave="leaveShow" 移出的话要判断，是否在‘/home’下，不在就false
    @mouseenter="enterShow" 移入就show为true
15)合并搜索的参数，保留querty参数和params参数
    先点击三级，然后再搜索
    先搜索，再点三级
    都能保留到数据

16)home首页的轮播图
    有banner和floor
    1、按照mockjs模拟服务器数据,安装mockjs
    2、新建json数据，和图片
    3、建里mockServer.js文件实现模拟数据
    4、mockServer.js引入到main.js中
    5、用到swiper插件来实现轮播图，再main.js中导入
        5.1引报 相应的（js和css）
        5.2页面结构必须要有
        5.3new Swiper实例
        5.4使用定时器输出
    6、最完美的方案
        watch+nextTick：数据监听：监听已有的数据变化

17)floor的数据
    1、去api写API接口
    2、home的路由模块写
        actions
        mutations
        data
    3、因为floor的数据是两组，需要v-for遍历数据，所以去home组件里面发请求
    4、组件通信：数据在home里面，但需要显示的数据是要在floor组件，父给子传数据，用props传
18)把轮播图封装成一个全局组件

19)Search模块开发
    1、静态页面+静态组件拆分
    2、发请求（API）
    3、vuex(三连环)
    4、Search组件获取仓库数据，动态展示数据
    利用mapgetter属性来获取，仓库中的getter属性项目中
    多用于简化数据
20)
21)售卖属性动态展示
22)售卖属性排序操作：
order：排序方式 
1: 综合,2: 价格 asc: 升序,desc: 降序  
示例: "1:desc"
问题
（1）排序的方式一共有多少种
1、1:asc
2、1:desc
3、2:asc
4、2:desc
（2）默认的排序
升序降序的箭头，使用了阿狸图库

23)分页功能（需要哪些数据）
1、需要知道当前第几页
2、需要知道每页展示多少条数据
3、一共有多少数据可知道一共有多少页
4、需要知道分页器连续页面的个数：5|7（奇数）对称，好看
总结，需要知道提前4个条件
pageNo：当前第几个
pageSize：每一页展示多少条数据
total：一共展示多少数据
continues：代表分页连续页码个数
5、先自己传递假数据调试
6、数据在父组件上，展示数据在子组件上，父====》子传数据，用props
7、计算分页器的起始页和结束页
8、分页器的动态展示
分为上，中，下  3个部分
v-for：可以遍历数组|字符串|数字

24)产品的详情页面开发
1、静态页面开发
2、分组件,点击图片时，跳转到详情页面，路由跳转时带上产品的id
3、路由跳转后的滚动行为，可找vue的API滚动行为
4、数据的API-----请求接口
5、vuex---获取数据
route，新建一个detail的js模块后再回到大仓库中引入

25)加入购物车
api

26)购物车结算
1、向服务器发请求，获取购物车数据，操作vuex三连环
（写接口，发请求，获取数据，展示数据）

27)删除购物车
1、接口，仓库，

28)切换商品选中状态

29)删除选中的商品

30)全选按钮的操作

31)注册的业务
1、获取验证码接口api
2、仓库写

32)用户登录业务

33)获取交易页面
自己写的html+css
用13700000000
111111

34)提交订单
不再用vuex了，在组件上用api
先在main中统一暴露api
97 25

35)
饿了么UI按需导入支付的二维码页面

二维码页面的显示 安装qercode

36)我的订单
103

115