//改善或恶化的参数
const ParameterList = [
    "运动物体的重量",
    "静止物体的重量",
    "运动物体的尺寸",
    "静止物体的尺寸",
    "运动物体的面积",
    "静止物体的面积",
    "运动物体的体积",
    "静止物体的体积",
    "速度",
    "力",
    "应力、压强",
    "形状",
    "稳定性",
    "强度",
    "运动物体的作用时间",
    "静止物体的作用时间",
    "温度",
    "光照度",
    "运动物体的能量消耗",
    "静止物体的能量消耗",
    "功率",
    "能量损失",
    "物质损失",
    "信息损失",
    "时间损失",
    "物质的量",
    "可靠性",
    "测量精度",
    "制造精度",
    "作用于物体的有害因素作用的敏感性",
    "物质产生的有害因素",
    "可制造性",
    "可操作性",
    "可维修性",
    "适应性、通用性",
    "装置的复杂性",
    "控制与测量的复杂性",
    "自动化程度",
    "生产率"
];
//矛盾矩阵解决方法（发明原理）
SOLUTIONS = [
    "分割",
    "抽取（提取、找回、移走）",
    "局部质量",
    "增加非对称性",
    "合并、组合",
    "使之普遍性、多用性",
    "用嵌套（俄罗斯套娃）",
    "用配重（重量补偿）",
    "预先反作用（预先采取行动来抵消、控制、防止）",
    "预先作用（预先对物体施加改变）",
    "预先应急措施（防范）",
    "利用等势",
    "反过来做（反向作用）",
    "曲面化",
    "动态化（或各部分可改变相对位置）",
    "部分或超额行动（未达到或过度的作用）",
    "转变到新空间维度",
    "机械振动（共振、电压振动、超声波和电磁场耦合）",
    "用周期性的行动（作用、脉冲）替代",
    "（保持）有效动作（作用）的连续性",
    "快速通过，减少有害作用的时间",
    "变害为利",
    "引入反馈",
    "借助中介物",
    "自服务",
    "用复制（品）（虚拟物体）",
    "一次性用品(廉价替代品）",
    "替代机械系统（声、光、电磁或影响人类感觉）",
    "用气动或液压结构（替代固体部分）",
    "用柔性壳体或薄膜",
    "用多孔材料",
    "改变颜色",
    "使同质性、匀质性",
    "使抛弃或再生部件",
    "改变特征（物理或化学参数改变）",
    "状态转变（物质相变）",
    "热膨胀（组合不同的热膨胀系数的几种材料）",
    "加速氧化（强氧化剂）",
    "用惰性环境或真空环境替代",
    "用复合材料替代",
    "Any",
    "All",
];
//发明原理介绍
introduce = [
    ["1.将一个物体分成相互独立的部分;2.将物体分成容易组装及拆卸的部分;3.增加物体相互独立部分的程度"],
    ["1.将物体中的‘负面’部分或特性抽取出来；2.只从物体中抽取必要的部分和特性"],
    ["1.将物体或环境的同类结构转化成异类结构；2.使组成物体的不同部分实现不同的功能；3.使组成物体的每一部分都最大限度的发挥作用"],
    ["1.用不对称形式代替对称形式；2.如果对象已经是不对称的，增加其不对称的程度"],
    ["1.合并空间上的同类或相邻的物体或操作；2.合并时间上的同类或相邻的物体或操作"],
    ["1.使物体或物体的一部分实现多种功能，以替代其它部分功能"],
    ["1.将一个物体放在第二个物体中，将第二个物体放在第三个物体中...；2.使一个物体穿过另一个物体的空腔"],
    ["1.用另一个能产生提升力的物体补偿第一个物体的重量；2.通过与环境（利用气体、液体的动力或浮力等）相互作用实现物体重量的补偿"],
    ["1.预先施加反作用；2.如果物体处于或将处于受拉伸状态，预先增加压力"],
    ["1.事先完成部分或全部功能；2.在方便的位置预先安置物体，使其在第一时间发挥作用，避免浪费"],
    ["1.采用预先准备好的应急措施补偿物体相对较低的可靠性"],
    ["1.在势能场中，避免物体位置的改变"],
    ["1.颠倒过去解决问题的办法；2.使物体中的运动部分静止，静止部分运动；3.使一个物体的位置颠倒"],
    ["1.将直线、平面用曲线、曲面代替，将立方结构改变成球体结构；2.采用滚筒、球体、螺旋状等结构；3.用旋转运动代替直线运动，利用离心力"],
    ["1.使物体或环境自动调整，以使其在每个动作阶段的性能达到最佳；2.把物体分成几个部分，各部分之间可改变相对位置；3.将静止的物体改变成可动的或使物体具有自适应性"],
    ["1.如果用现有方法很难完成对象的100%，可用同样的方法“稍多”或“稍少”一点，问题的解决将被大大简化"],
    ["1.将物体从一维变成二维或三维空间；2.将物体用多层结构代替单层结构；3.使物体倾斜或侧向放置；4.使用给定表面的反面"],
    ["1.使物体处于振动状态；2.对于振动物体，增加其振动频率，甚至到超声波；3.使用共振频率；4.使用压电振动器代替机械振动器；5.使用超声波与电磁场振动耦合"],
    ["1.用周期性动作或脉动代替连续动作；2.对周期性的动作改变其动作频率；3.利用脉动之间的间隙来执行另一动作"],
    ["1.持续采取行动，使对象的所有部分一直处于满负荷状态；2.消除空闲的、间歇的行动"],
    ["1.以最快的快速完成有害的操作"],
    ["1.利用有害因素，特别是对环境有害的因素，获得有益的结果；2.以毒攻毒，将有害作用相结合以消除另一种有害因素；3.加大一种有害因素的程度，使其不再有害"],
    ["1.引入反馈，改善性能；2.如果已引入反馈，改变其控制信号的大小或灵敏度"],
    ["1.使用中介物传递或完成所需的动作；2.使一物体与另一容易去除物暂时接合"],
    ["1.使物体具有自补充、自恢复的功能；2.灵活利用废弃的材料、能量与物质"],
    ["1.用简单的、低廉的复制品代替复杂的、昂贵的、易碎的或不易获得的物体；2.用光学拷贝或图像代替实物，可以按比例放大或缩小图像；3.如果已使用了可见光拷贝，进一步扩展到红外线或紫外线拷贝"],
    ["1.用便宜的物体代替昂贵的物体，同时降低某些质量要求，实现同样的功能"],
    ["1.用视觉、听觉、嗅觉系统代替机械系统；2.使用与物体相互作用电场、磁场及电磁场；3.用动态场替代静态场，确定场替代随机场；4.将场合铁磁粒子组合使用"],
    ["1.将物体的固体部分用气体或流体代替（如利用 气垫、液体静压、流体动压产生缓冲功能"],
    ["1.用柔性壳体或薄膜代替传统三维结构；2.使用柔性壳体或薄膜将物体与环境隔离"],
    ["1.使用多孔或增加多孔元素；2.如果物体已是多孔结构，利用多孔结构引入有用的物体或功能"],
    ["1.改变物体或环境的颜色；2.改变一个物体的透明度，或改变某一过程的可视度；3.采用由颜色的添加物，使不易被视察到的物体或过程被观察到；4.如果已添加了颜色添加物，则用发光迹线追踪物质"],
    ["1.主要物体与其相互作用的其它物体采用同一材料或特性相近的材料"],
    ["1.采用溶解、蒸发等手段废弃已完成功能的零部件或在工作中直接变化；2.在工作过程中迅速补充消耗或减少的部分"],
    ["1.改变物体的物理状态；2.改变物体的浓度或粘度；3.改变物体的柔性；4.改变物体的温度；5.改变物体的压力"],
    ["1.利用物质相变时产生的某种效应（如：体积变化、吸热或放热）"],
    ["1.利用材料的热膨胀或热收缩性质；2.使用具有不同热膨胀系数的材料"],
    ["1.用富氧空气代替普通空气；2.用纯氧代替富氧空气；3.用电离射线处理空气或氧气，使用离子化的氧气；4.用臭氧代替离子化的氧气"],
    ["1.用惰性气体环境代替通常环境；2.在物体中添加惰性或中性添加剂；3.使用真空环境"],
    ["1.使用复合材料代替均质材料"],
]
//矛盾矩阵
conflictMatrix=[
    ["41","42","15,8,29,34 ","42","29,17,38,34","42","29,2,40,28","42","2,8,15,38","8,10,18,37","10,36,37,40","10,14,35,40","1,35,19,39","28,27,18,40","5,34,31,35","42","6,29,4,38","19,1,32","35,12,34,31","42","12,36,18,31","6,2,34,19","5,35,3,31","10,24,35","10,35,20,28","3,26,18,31","1,3,11,27","28,27,35,26","28,35,26,18","22,21,18,27","22,35,31,39","27,28,1,36","35,3,2,24","2,27,28,11","29,5,15,8","26,30,36,34","28,29,26,32","26,35,18,19","35,3,24,37"],
    ["42","41","42","10,1,29,35","42","35,30,13,2","42","5,35,14,2","42","8,10,19,35","13,29,10,18","13,10,29,14","26,39,1,40","28,2,10,27","42","2,27,19,6","28,19,32,22","19,32,35","42","18,19,28,1","15,19,18,22","18,19,28,15","5,8,13,30","10,15,35","10,20,35,26","19,6,18,26","10,28,8,3","18,26,28","10,1,35,17","2,19,22,37","35,22,1,39","28,1,9","6,13,1,32","2,27,28,11","19,15,29","1,10,26,39","25,28,17,15","2,26,35","1,28,15,35"],
    ["8,15,29,34","42","41","42","15,17,4","42","7,17,4,35","42","13,4,8","17,10,4","1,8,35","1,8,10,29","1,8,15,34","8,35,29,34","19","42","10,15,19","32","8,35,24","42","1,35","7,2,35,39","4,29,23,10","1,24","15,2,29","29,35","10,14,29,40","28,32,4","10,28,29,37","1,15,17,24","17,15","1,29,17","15,29,35,4","1,28,10","14,15,1,16","1,19,26,24","35,1,26,24","17,24,26,16","14,4,28,29"],
    ["42","35,28,40,29  ","42","41","42","17,7,10,40","42","35,8,2,14","42","28,10","1,14,35","13,14,15,7","39,37,35","15,14,28,26","42","1,10,35","3,35,38,18","3,25","42","42","12,8","6,28","10,28,24,35","24,26","30,29,14","42","15,29,28","32,28,3","2,32,10","1,18","42","15,17,27","2,25","3","1,35","1,26","26","42","30,14,7,26"],
    ["2,17,29,4","42","14,15,18,4","42","41","42","7,14,17,4","42","29,30,4,34","19,30,35,2","10,15,36,28","5,34,29,4","11,2,13,39","3,15,40,14","6,3","42","2,15,16","15,32,19,13","19,32","42","19,10,32,18","15,17,30,26","10,35,2,39","30,26","26,4","29,30,6,13","29,9","26,28,32,3","2,32","22,33,28,1","17,2,18,39","13,1,26,24","15,17,13,16","15,13,10,1","15,30","14,1,13","2,36,26,18","14,30,28,23","10,26,34,2"],
    ["42","30,2,14,18    ","42","26,7,9,39","42","41","42","42","42","1,18,35,36","10,15,36,37","42","2,38","40","42","2,10,19,30","35,39,38","42","42","42","17,32","17,7,30","10,14,18,39","30,16","10,35,4,18","2,18,40,4","32,35,40,4","26,28,32,3","2,29,18,36","27,2,39,35","22,1,40","40,16","16,4","16","15,16","1,18,36","2,35,30,18","23","10,15,17,7"],
    ["2,26,29,40","42","1,7,4,35","42","1,7,4,17","42","41","42","29,4,38,34","15,35,36,37","6,35,36,37","1,15,29,4","28,10,1,39","9,14,15,7","6,35,4","42","34,39,10,18","2,13,10","35","42","35,6,13,18","7,15,13,16","36,39,34,10","2,22","2,6,34,10","29,30,7","14,1,40,11","25,26,28","25,28,2,16","22,21,27,35","17,2,40,1","29,1,40","15,13,30,12","10","15,29","26,1","29,26,4","35,34,16,24","10,6,2,34"],
    ["42","35,10,19,14","19,14","35,8,2,14","42","42","42","41","42","2,18,37","24,35","7,2,35","34,28,35,40","9,14,17,15","42","35,34,38","35,6,4","42","42","42","30,6","42","10,39,35,34","42","35,16,32,18","35,3","2,35,16","42","35,10,25","34,39,19,27","30,18,35,4","35","42","1","42","1,31","2,17,26","42","35,37,10,2"],
    ["2,28,13,38","42","13,14,8","42","29,30,34","42","7,29,34","42","41","13,28,15,19","6,18,38,40","35,15,18,34","28,33,1,18","8,3,26,14","3,19,35,5","42","28,30,36,2","10,13,19","8,15,35,38","42","19,35,38,2","14,20,19,35","10,13,28,38","13,26","42","10,19,29,38","11,35,27,28","28,32,1,24","10,28,32,25","1,28,35,23","2,24,35,21","35,13,8,1","32,28,13,12","34,2,28,27","15,10,26","10,28,4,34","3,34,27,16","10,18","42"],
    ["8,1,37,18","18,13,1,28","17,19,9,36","28,10","19,10,15","1,18,36,37","15,9,12,37","2,36,18,37","13,28,15,12","41","18,21,11","10,35,40,34","35,10,21","35,10,14,27","19,2","42","35,10,21","42","19,17,10","1,16,36,37","19,35,18,37","14,15","8,35,40,5","42","10,37,36","14,29,18,36","3,35,13,21","35,10,23,24","28,29,37,36","1,35,40,18","13,3,36,24","15,37,18,1","1,28,3,25","15,1,11","15,17,18,20","26,35,10,18","36,37,10,19","2,35","3,28,35,37"],
    ["10,36,37,40","13,29,10,18","35,10,36","35,1,14,16","10,15,36,28","10,15,36,37","6,35,10","35,24","6,35,36","36,35,21","41","35,4,15,10","35,33,2,40","9,18,3,40","19,3,27","42","35,39,19,2","42","14,24,10,37","42","10,35,14","2,36,25","10,36,3,37","42","37,36,4","10,14,36","10,13,19,35","6,28,25","3,35","22,2,37","2,33,27,18","1,35,16","11","2","35","19,1,35","2,36,37","35,24","10,14,35,37"],
    ["8,10,29,40","15,10,26,3","29,34,5,4","13,14,10,7","5,34,4,10","42","14,4,15,22","7,2,35","35,15,34,18","35,10,37,40","34,15,10,14","41","33,1,18,4","30,14,10,40","14,26,9,25","42","22,14,19,32","13,15,32","2,6,34,14","42","4,6,2","14","35,29,3,5","42","14,10,34,17","36,22","10,40,16","28,32,1","32,30,40","22,1,2,35","35,1","1,32,17,28","32,15,26","2,13,1","1,15,29","16,29,1,28","15,13,39","15,1,32","17,26,34,10"],
    ["21,35,2,39","26,39,1,40","13,15,1,28","37","2,11,13","39","28,10,19,39","34,28,35,40","33,15,28,18","10,35,21,16","2,35,40","22,1,18,4","41","17,9,15","13,27,10,35","39,3,35,23","35,1,32","32,3,27,16","13,19","27,4,29,18","32,35,27,31","14,2,39,6","2,14,30,40","42","35,27","15,32,35","42","13","18","35,24,30,18","35,40,27,39","35,19","32,35,30","2,35,10,16","35,30,34,2","2,35,22,26","35,22,39,23","1,8,35","23,35,40,3"],
    ["1,8,40,15","40,26,27,1","1,15,8,35","15,14,28,26","3,34,40,29","9,40,28","10,15,14,7","9,14,17,15","8,13,26,14","10,18,3,14","10,3,18,40","10,30,35,40","13,17,35","41","27,3,26","42","30,10,40","35,19","19,35,10","35","10,26,35,28","35","35,28,31,40","42","29,3,28,10","29,10,27","11,3","3,27,16","3,27","18,35,37,1","15,35,22,2","11,3,10,32","32,40,25,2","27,11,3","15,3,32","2,13,25,28","27,3,15,40","15","29,35,10,14"],
    ["19,5,34,31","42","2,19,9","42","3,17,19","42","10,2,19,30","42","3,35,5","19,2,16","19,3,27","14,26,28,25","13,3,35","27,3,10","41","42","19,35,39","2,19,4,35","28,6,35,18","42","19,10,35,38","42","28,27,3,18","10","20,10,28,18","3,35,10,40","11,2,13","3","3,27,16,40","22,15,33,28","21,39,16,22","27,1,4","12,27","29,10,27","1,35,13","10,4,29,15","19,29,39,35","6,10","35,17,14,19"],
    ["42","6,27,19,16","42","1,40,35","42","42","42","35,34,38","42","42","42","42","39,3,35,23","42","42","41","19,18,36,40","42","42","42","16","42","27,16,18,38","10","28,20,10,16","3,35,31","34,27,6,40","10,26,24","42","17,1,40,33","22","35,10","1","1","2","42","25,34,6,35","1","20,10,16,38"],
    ["36,22,6,38","22,35,32","15,19,9","15,19,9","3,35,39,18","35,38","34,39,40,18","35,6,4","2,28,36,30","35,10,3,21","35,39,19,2","14,22,19,32","1,35,32","10,30,22,40","19,13,39","19,18,36,40","41","32,30,21,16","19,15,3,17","42","2,14,17,25","21,17,35,38","21,36,29,31","42","35,28,21,18","3,17,30,39","19,35,3,10","32,19,24","24","22,33,35,2","22,35,2,24","26,27","26,27","4,10,16","2,18,27","2,17,16","3,27,35,31","26,2,19,16","15,28,35"],
    ["19,1,32","2,35,32","19,32,16","42","19,32,26","42","2,13,10","42","10,13,19","26,19,6","42","32,30","32,3,27","35,19","2,19,6","42","32,35,19","41","32,1,19","32,35,1,15","32","13,16,1,6","13,1","1,6","19,1,26,17","1,19","42","11,15,32","3,32","15,19","35,19,32,39","19,35,28,26","28,26,19","15,17,13,16","15,1,19","6,32,13","32,15","2,26,10","2,25,16"],
    ["12,18,28,31","42","12,28","42","15,19,25","42","35,13,18","42","8,15,35,","16,26,21,2","23,14,25","12,2,29","19,13,17,24","5,19,9,35","28,35,6,18","42","19,24,3,14","2,15,19","41","42","6,19,37,18","12,22,15,24","35,24,18,5","42","35,38,19,18","34,23,16,18","19,21,11,27","3,1,32","42","1,35,6,27","2,35,6","28,26,30","19,35","1,15,17,28","15,17,13,16","2,29,27,28","35,38","32,2","12,28,35"],
    ["42","19,9,6,27","42","42","42","42","42","42","42","36,37","42","42","27,4,29,18","35","42","42","42","19,2,35,32","42","41","42","42","28,27,18,31","42","42","3,35,31","10,36,23","42","42","10,2,22,37","19,22,18","1,4","42","42","42","42","19,35,16,25","42","1,6"],
    ["8,36,38,31","19,26,17,27","1,10,35,37","42","19,38","17,32,13,38","35,6,38","30,6,25","15,35,2","26,2,36,35","22,10,35","29,14,2,40","35,32,15,31","26,10,28","19,35,10,38","16","2,14,17,25","16,6,19","16,6,19,37","42","41","10,35,38","28,27,18,38","10,19","35,20,10,6","4,34,19","19,24,26,31","32,15,2","32,2","19,22,31,2","2,35,18","26,10,34","26,35,10","35,2,10,34","19,17,34","20,19,30,34","19,35,16","28,2,17","28,35,34"],
    ["15,6,19,28","19,6,18,9","7,2,6,13","6,38,7","15,26,17,30","17,7,30,18","7,18,23","7","16,35,38","36,38","42","42","14,2,39,6","26","42","42","19,38,7","1,13,32,15","42","42","3,38","41","35,27,2,37","19,10","10,18,32,7","7,18,25","11,10,35","32","42","21,22,35,2","21,35,2,22","42","35,32,1","2,19","42","7,23","35,3,15,23","2","28,10,29,35"],
    ["35,6,23,40","35,6,22,32","14,29,10,39","10,28,24","35,2,10,31","10,18,39,31","1,29,30,36","3,39,18,31","10,13,28,38","14,15,18,40","3,36,37,10","29,35,3,5","2,14,30,40","35,28,31,40","28,27,3,18","27,16,18,38","21,36,39,31","1,6,13","35,18,24,5","28,27,12,31","28,27,18,38","35,27,2,31","41","42","15,18,35,10","6,3,10,24","10,29,39,35","16,34,31,28","35,10,24,31","33,22,30,40","10,1,34,29","15,34,33","32,28,2,24","2,35,34,27","15,10,2","35,10,28,24","35,18,10,13","35,10,18","28,35,10,23"],
    ["10,24,35","10,35,5","1,26","26","30,26","30,16","42","2,22","26,32","42","42","42","42","42","10","10","42","19","42","42","10,19","19,10","42","41","24,26,28,32","24,28,35","10,28,23","42","42","22,10,1","10,21,22","32","27,22","42","42","42","35,33","35","13,23,15"],
    ["10,20,37,35","10,20,26,5","15,2,29","30,24,14,5","26,4,5,16","10,35,17,4","2,5,34,10","35,16,32,18","42","10,37,36,5","37,36,4","4,10,34,17","35,3,22,5","29,3,28,18","20,10,28,18","28,20,10,16","35,29,21,18","1,19,26,17","35,38,19,18","1","35,20,10,6","10,5,18,32","35,18,10,39","24,26,28,32","41","35,38,18,16","10,30,4","24,34,28,32","24,26,28,18","35,18,34","35,22,18,39","35,28,34,4","4,28,10,34","32,1,10","35,28","6,29","18,28,32,10","24,28,35,30","42"],
    ["35,6,18,31","27,26,18,35","29,14,35,18","42","15,14,29","2,18,40,4","15,20,29","42","35,29,34,28","35,14,3","10,36,14,3","35,14","15,2,17,40","14,35,34,10","3,35,10,40","3,35,31","3,17,39","42","34,29,16,18","3,35,31","35","7,18,25","6,3,10,24","24,28,35","35,38,18,16","41","18,3,28,40","13,2,28","33,30","35,33,29,31","3,35,40,39","29,1,35,27","35,29,25,10","2,32,10,25","15,3,29","3,13,27,10","3,27,29,18","8,35","13,29,3,27"],
    ["3,8,10,40","3,10,8,28","15,9,14,4","15,29,28,11","17,10,14,16","32,35,40,4","3,10,14,24","2,35,24","21,35,11,28","8,28,10,3","10,24,35,19","35,1,16,11","42","11,28","2,35,3,25","34,27,6,40","3,35,10","11,32,13","21,11,27,19","36,23","21,11,26,31","10,11,35","10,35,29,39","10,28","10,30,4","21,28,40,3","41","32,3,11,23","11,32,1","27,35,2,40","35,2,40,26","42","27,17,40","1,11","13,35,8,24","13,35,1","27,40,28","11,13,27","1,35,29,38"],
    ["32,35,26,28","28,35,25,26","28,26,5,16","32,28,3,16","26,28,32,3","26,28,32,3","32,13,6","42","28,13,32,24","32,2","6,28,32","6,28,32","32,35,13","28,6,32","28,6,32","10,26,24","6,19,28,24","6,1,32","3,6,32","42","3,6,32","26,32,27","10,16,31,28","42","24,34,28,32","2,6,32","5,11,1,23","41","42","28,24,22,26","3,33,39,10","6,35,25,18","1,13,17,34","1,32,13,11","13,35,2","27,35,10,34","26,24,32,28","28,2,10,34","10,34,28,32"],
    ["28,32,13,18","28,35,27,9","10,28,29,37","2,32,10","28,33,29,32","2,29,18,36","32,23,2","25,10,35","10,28,32","28,19,34,36","3,35","32,30,40","30,18","3,27","3,27,40","42","19,26","3,32","32,2","42","32,2","13,32,2","35,31,10,24","42","32,26,28,18","32,30","11,32,1","42","41","26,28,10,36","4,17,34,26","42","1,32,35,23","25,10","42","26,2,18","42","26,28,18,23","10,18,32,39"],
    ["22,21,27,39","2,22,13,24","17,1,39,4","1,18","22,1,33,28","27,2,39,35","22,23,37,35","34,39,19,27","21,22,35,28","13,35,39,18","22,2,37","22,1,3,35","35,24,30,18","18,35,37,1","22,15,33,28","17,1,40,33","22,33,35,2","1,19,32,13","1,24,6,27","10,2,22,37","19,22,31,2","21,22,35,2","33,22,19,40","22,10,2","35,18,34","35,33,29,31","27,24,2,40","28,33,23,26","26,28,10,18","41","42","24,35,2","2,25,28,39","35,10,2","35,11,22,31","22,19,29,40","22,19,29,40","33,3,34","22,35,13,24"],
    ["19,22,15,39","35,22,1,39","17,15,16,22","42","17,2,18,39","22,1,40","17,2,40","30,18,35,4","35,28,3,23","35,28,1,40","2,33,27,18","35,1","35,40,27,39","15,35,22,2","15,22,33,31","21,39,16,22","22,35,2,24","19,24,39,32","2,35,6","19,22,18","2,35,18","21,35,2,22","10,1,34","10,21,29","1,22","3,24,39,1","24,2,40,39","3,33,26","4,17,34,26","42","41","42","42","42","42","19,1,31","2,21,27,1","2","22,35,18,39"],
    ["28,29,15,16","1,27,36,13","1,29,13,17","15,17,27","13,1,26,12","16,40","13,29,1,40","35","35,13,8,1","35,12","35,19,1,37","1,28,13,27","11,13,1","1,3,10,32","27,1,4","35,16","27,26,18","28,24,27,1","28,26,27,1","1,4","27,1,12,24","19,35","15,34,33","32,24,18,16","35,28,34,4","35,23,1,24","42","1,35,12,18","42","24,2","42","41","2,5,13,16","35,1,11,9","2,13,15","27,26,1","6,28,11,1","8,28,1","35,1,10,28"],
    ["25,2,13,15","6,13,1,25","1,17,13,12","42","1,17,13,16","18,16,15,39","1,16,35,15","4,18,39,31","18,13,34","28,13,35","2,32,12","15,34,29,28","32,35,30","32,40,3,28","29,3,8,25","1,16,25","26,27,13","13,17,1,24","1,13,24","42","35,34,2,10","2,19,13","28,32,2,24","4,10,27,22","4,28,10,34","12,35","17,27,8,40","25,13,2,34","1,32,35,23","2,25,28,39","42","2,5,12","41","12,26,1,32","15,34,1,16","32,26,12,17","42","1,34,12,3","15,1,28"],
    ["2,27,35,11","2,27,35,11","1,28,10,25","3,18,31","15,13,32","16,25","25,2,35,11","1","34,9","1,11,10","13","1,13,2,4","2,35","11,1,2,9","11,29,28,27","1","4,10","15,1,13","15,1,28,16","42","15,10,32,2","15,1,32,19","2,35,34,27","42","32,1,10,25","2,28,10,25","11,10,1,16","10,2,13","25,10","35,10,2,16","42","1,35,11,10","1,12,26,15","41","7,1,4,16","35,1,13,11","42","34,35,7,13","1,32,10"],
    ["1,6,15,8","19,15,29,16","35,1,29,2","1,35,16","35,30,29,7","15,16","15,35,29","42","35,10,14","15,17,20","35,16","15,37,1,8","35,30,14","35,3,32,6","13,1,35","2,16","27,2,3,35","6,22,26,1","19,35,29,13","42","19,1,29","18,15,1","15,10,2,13","42","35,28","3,35,15","35,13,8,24","35,5,1,10","42","35,11,32,31","42","1,13,31","15,34,1,16","1,16,7,4","41","15,29,37,28","1","27,34,35","35,28,6,37"],
    ["26,30,34,36","2,26,35,39","1,19,26,24","26","14,1,13,16","6,36","34,26,6","1,16","34,10,28","26,16","19,1,35","29,13,28,15","2,22,17,19","2,13,28","10,4,28,15","42","2,17,13","24,17,13","27,2,29,28","42","20,19,30,34","10,35,13,2","35,10,28,29","42","6,29","13,3,27,10","13,35,1","2,26,10,34","26,24,32","22,19,29,40","19,1","27,26,1,13","27,9,26,24","1,13","29,15,28,37","41","15,10,37,28","15,1,24","12,17,28"],
    ["27,26,28,13","6,13,28,1","16,17,26,24","26","2,13,18,17","2,39,30,16","29,1,4,16","2,18,26,31","3,4,16,35","30,28,40,19","35,36,37,32","27,13,1,39","11,22,39,30","27,3,15,28","19,29,39,25","25,34,6,35","3,27,35,16","2,24,26","35,38","19,35,16","18,1,16,10","35,3,15,19","1,18,10,24","35,33,27,22","18,28,32,9","3,27,29,18","27,40,28,8","26,24,32,28","42","22,19,29,28","2,21","5,28,11,29","2,5","12,26","1,15","15,10,37,28","41","34,21","35,18"],
    ["28,26,18,35","28,26,35,10","14,13,17,28","23","17,14,13","42","35,13,16","42","28,10","2,35","13,35","15,32,1,13","18,1","25,13","6,9","42","26,2,19","8,32,19","2,32,13","42","28,2,27","23,28","35,10,18,5","35,33","24,28,35,30","35,13","11,27,32","28,26,10,34","28,26,18,23","2,33","2","1,26,13","1,12,34,3","1,35,13","27,4,1,35","15,24,10","34,27,25","41","5,12,35,26"],
    ["35,26,24,37","28,27,15,3","18,4,28,38","30,7,14,26","10,26,34,31","10,35,17,7","2,6,34,10","35,37,10,2","42","28,15,10,36","10,37,14","14,10,34,40","35,3,22,39","29,28,10,18","35,10,2,18","20,10,16,38","35,21,28,10","26,17,19,1","35,10,38,19","1","35,20,10","28,10,29,35","28,10,35,23","13,15,23","42","35,38","1,35,10,38","1,10,34,28","18,10,32,1","22,35,13,24","35,22,18,39","35,28,2,24","1,28,7,10","1,32,10,25","1,35,28,37","12,17,28,24","35,18,27,2","5,12,35,26","41"]

]
/*var FL = [];*/
$(document).ready(function(){
    $("#inputImprovedParameter").html("");
    $("#inputWorsenParameter").html("");
    ParameterList.forEach(function (e, i, a) {
        var option = "<option value='"+i+"'>"+e+"</option>";
        $("#inputImprovedParameter").append($(option));
        $("#inputWorsenParameter").append($(option));
    });
});
//添加技术矛盾
function addData() {
    var datanum = $('#myBootstrapTtable').bootstrapTable('getData').length;
    let improvedParameter = parseInt($("#inputImprovedParameter").val());
    let worsenParameter = parseInt($("#inputWorsenParameter").val());
    //let solutionNumList = new Array();
    let solutionNumList = conflictMatrix[improvedParameter][worsenParameter].split(',');
    let solutionList = [];
    for (let j = 0; j < solutionNumList.length; j++) {
        solutionList.push(SOLUTIONS[solutionNumList[j]]);
    }
    console.log(solutionList.toString());
    var rowdata= {
        procedureIdForDelete:datanum+1,
        partName:$("#inputPartName").val(),
        improvedParameter:ParameterList[$("#inputImprovedParameter").val()],
        worsenParameter:ParameterList[$("#inputWorsenParameter").val()],
        trizSolution:solutionList.toString()
    };
    if($("#inputImprovedParameter").val() == "" ||$("#inputWorsenParameter").val() == ""){
        alert("技术矛盾参数不能为空！");
    }
    else{
        $('#myBootstrapTtable').bootstrapTable('append', rowdata);
    }
    for(var i=0;i<datanum;i++){   //添加样本超过10个时，table自动翻页
        if(datanum=10*i+1){
            $("#myBootstrapTtable").bootstrapTable('nextPage');
        }
    }
    $("#inputPartName").val("");
    $("#inputImprovedParameter").val("");
    $("#inputWorsenParameter").val("");
    $("#getSolution").val("");
}
//冲突解决方案
function conflictSolution() {
    $("#solutionTable").bootstrapTable('removeAll'); //添加项目后，删除原table
    let technicalContradiction = eval(JSON.stringify($('#myBootstrapTtable').bootstrapTable('getData')));
    let trizSolution = new Array();
    let trizNumMap = new Map();
    let introduceMap = new Map();
    for(let i=0;i<SOLUTIONS.length;i++){
        introduceMap.set(SOLUTIONS[i],introduce[i]);
    }
    for(let i=0;i<technicalContradiction.length;i++){
        trizSolution[i] = new Array();
        trizSolution[i] = technicalContradiction[i].trizSolution.split(',');
        for(let j=0;j<trizSolution[0].length;j++){
            if(trizNumMap.has(trizSolution[i][j])){
                let trizNum=trizNumMap.get(trizSolution[i][j]);
                trizNum++;
                trizNumMap.set(trizSolution[i][j],trizNum);
            }else {
                trizNumMap.set(trizSolution[i][j],1);
            }
        }
    }
    let yMin=0;
    let yMax=0;
    let trizData=new Array();
    let numOrder=new Array();
    let trizOrder=new Array();
    let n=0;
    let m=0;
    for(let triz of trizNumMap.keys()){
        if(triz != null && triz != ""){
            let parameter={
                triz:triz,
                citedNumber:trizNumMap.get(triz),
                introduce:introduceMap.get(triz),
            }
            $('#solutionTable').bootstrapTable('append', parameter);
            yMin=yMin>trizNumMap.get(triz)?trizNumMap.get(triz):yMin;
            yMax=yMax<trizNumMap.get(triz)?trizNumMap.get(triz):yMax;
            trizData[n++]=trizNumMap.get(triz);
            trizOrder[m]=triz;
            numOrder[m++]=m;
        }
    }
    let analysisChart = echarts.init(document.getElementById('analysisChart'));
    option = {
        title:{
            text:'TIRZ发明原理引用次数统计',
            left:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        xAxis:[{
            type:'category',
            data:numOrder,
            name:'发明原理序号'
        }],
        yAxis:[{
            type:'value',
            min:yMin,
            max:yMax,
            name:'次数'
        }],
        series:[{
            name:"使用次数",
            type:'bar',
            data: trizData
        }]
    }
    analysisChart.setOption(option);



    /*let parameterMap = new Map();
    for(let i=0;i<ParameterList.length;i++){
        parameterMap.set(ParameterList[i],i);
    }
    let solutionSet = new Set();//发明原理去重
    let frequency = new Array();
    let map = new Map();
    for(let i=0;i<technicalContradiction.length;i++){
        let improvedParameter = technicalContradiction[i].improvedParameter;
        let worsenParameter = technicalContradiction[i].worsenParameter;
        let solutionNumList = [];
        solutionNumList = conflictMatrix[parameterMap.get(improvedParameter)][parameterMap.get(worsenParameter)].split(',');
        if(solutionNumList.length<1){
            solutionNumList.push(conflictMatrix[parameterMap.get(improvedParameter)][parameterMap.get(worsenParameter)]);
        }
        let solutionList = [];
        for(let j=0;j<solutionNumList.length;j++){
            solutionList.push(SOLUTIONS[solutionNumList[j]]);
        }
        let parameter={
            triz:improvedParameter,
            citedNumber:worsenParameter,
            introduce:2,
        }
        $('#solutionTable').bootstrapTable('append', parameter);

        for(let j=0;j<solutionList.length;j++){
            solutionSet.add(solutionList[j]);
            if(map.has(solutionList[j])){
                let num=map.get(solutionList[j]);
                num++;
                map.set(solutionList[j],num);
            }else {
                map.set(solutionList[i],1);
            }
        }
    }
    let solutionArray = Array.from(solutionSet);
    for (let i=0;i<solutionSet.size;i++){
        frequency[i]=map.get(solutionArray[i])/solutionSet.size;
    }
    Array.prototype.min = function(){
        return Math.min.apply({},this)
    }
    Array.prototype.max = function(){
        return Math.max.apply({},this)
    }
    let yMin=parseInt(frequency.min()*100);
    let yMax=parseInt(frequency.max()*100);
    //analysisChart
    let analysisChart = echarts.init(document.getElementById('analysisChart'));
    option = {
        xAxis:[{
            type:'category',
            data:solutionArray
        }],
        yAxis:[{
            type:'value',
            min:yMin,
            max:yMax
        }],
        series:[{
            name:"频率",
            type:'line',
            data: frequency
        }]
    }
    analysisChart.setOption(option);*/
}
//冲突解决方案
function solve(improvedParameter,worsenParameter,getSolution) {
    let solutionNumList = new Array();
    solutionNumList=conflictMatrix[improvedParameter][worsenParameter].length >1 ? conflictMatrix[improvedParameter][worsenParameter].split(','):conflictMatrix[improvedParameter][worsenParameter];
    let solutionList = [];
    for (let j = 0; j < solutionNumList.length; j++) {
        solutionList.push(SOLUTIONS[solutionNumList[j]]);
    }
    console.log(solutionList.toString());
    getSolution.value=solutionList.toString();//solutionList.toString()
}
function solve1() {
    let improvedParameter = parseInt($("#inputImprovedParameter").val());
    let worsenParameter = parseInt($("#inputWorsenParameter").val());
    let getSolution = document.getElementById("getSolution");
    solve(improvedParameter,worsenParameter,getSolution);
}
function solve2() {
    let improvedParameter = parseInt($("#inputImprovedParameter_u").val());
    let worsenParameter = parseInt($("#inputWorsenParameter_u").val());
    let getSolution_u = document.getElementById("getSolution_u");
    solve(improvedParameter,worsenParameter,getSolution_u);
}
//动态生成div
function dynamicDiv(){
    let analysisChart = document.createElement("div");
    analysisChart.id="analysisChart";
    analysisChart.style.cssText = "float:left;width:100%;height:400px;margin-top:0px";
    document.getElementById("dynamicDiv").appendChild(analysisChart);
}
//删除动态生成的div
function removedynamicDiv() {
    let analysisChart = document.getElementById("analysisChart");
    if (analysisChart != null){
        analysisChart.parentNode.removeChild(analysisChart);
    }
}
function conflictAnalysis() {
    dynamicDiv();
    conflictSolution();
    occorPicture();
}