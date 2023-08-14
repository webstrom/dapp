Props

(1) 整体参数

参数名	类型	默认值	说明	可选值
type	String	"hori-connect"	通告栏的滚动方向与动画类型	hori-connect：水平衔接
hori-break：水平不衔接
vert：垂直滚动
width	String | Number	屏宽	通告栏的宽度（单位：px，内部转化为rpx，无需担心自适应问题）	-
height	String | Number	70	通告栏的高度（单位：rpx）	-
color	HexColor	"#f5a300"	通告栏的整体颜色，不能使用rgb(r,g,b)	-
bgColor	HexColor | RgbColor	color减淡85%	通告栏的背景颜色	-
text	Array	-	通告栏显示的文字，数组形式
hori-connect：数组中的所有元素一行显示
vert & hori-break：数组按元素一个一个显示	-
font-weight	String	normal	通告栏文字的粗细，同css	100~900，normal，bold，bolder
font-size	String | Number	27	通告栏文字字体大小（单位：rpx）	-
has-border	Boolean	flase	通告栏是否有边框	true | false
scroll	Boolean	true	通告栏是否滚动	true | false
show-icon	Boolean	true	是否显示通知图标	true | false
show-more	Boolean	true	是否显示查看更多图标	true | false
show-close	Boolean	false	是否显示关闭图标	true | false
url	String	-	点击查看更多时要跳转的url，相对/绝对路径均可	-
extend-more-area	Boolean	flase	点击文字部分是否同样触发查看更多事件	true | false
(2) hori-connect专用参数

参数名	类型	默认值	说明	可选值
join	String	4个空格	连接text数组元素的字符串	-
space-const	Number	0	每次重复出现的间隔常数
= 0 时代表前一次刚消失，下一次就出来；
< 0 时代表前一次还没消失，下一次就出来；
> 0 时代表前一次结束后，过一会儿下一次才出来	-
speed	Number	40	文字滚动速度（单位：px/s）	-
(3) vert & hori-break专用参数

参数名	类型	默认值	说明	可选值
time	Number	3000	每次切换后的停留时间（单位：ms）	-
duration	Number	1000	每次切换时的动画时间（单位：ms）