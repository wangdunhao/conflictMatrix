var projectId = 0;//项目Id
var projectName;//项目名
var appResult = null;//word报告
var appNameChinese = '矛盾矩阵';//app中文名（必填）
var USER_NAME = '';//当前登录用户名

// 添加项目后，自定义操作
function addSelfDefine(result) {
    //上一层函数查看basicAction.js中addProject()函数
    /*
    * your code.....
    **/
    removedynamicDiv();
    $("#myBootstrapTtable").bootstrapTable('removeAll'); //添加项目后，删除原table
    $("#solutionTable").bootstrapTable('removeAll'); //添加项目后，删除原table
    console.log("add project successful");
}

// 查看项目后，自定义操作
function checkSelfDefine(node, result) {
    // 上一层函数查看basicAction.js中checkProject()函数
    removedynamicDiv();
    $("#myBootstrapTtable").bootstrapTable('removeAll'); //添加项目后，删除原table
    $("#solutionTable").bootstrapTable('removeAll'); //添加项目后，删除原table
    let getChnicalContradiction = new Array();
    if(result.state && result.content.appContent != null){
        let getChnicalContradiction= JSON.parse(result.content.appContent);
        console.log(getChnicalContradiction);
        for(let i=0; i<getChnicalContradiction.length; i++){
            let partName = getChnicalContradiction[i].partName;
            let improvedParameter = getChnicalContradiction[i].improvedParameter;
            let worsenParameter = getChnicalContradiction[i].worsenParameter;
            let trizSolution = getChnicalContradiction[i].trizSolution;
            let ChnicalContradiction = {
                procedureIdForDelete: i,
                partName,
                improvedParameter,
                worsenParameter,
                trizSolution
            };
            $('#myBootstrapTtable').bootstrapTable('append', ChnicalContradiction);
        }
        console.log("check project successful");
    }else {
        console.log(result.error);
    }
}

//删除项目后，自定义操作
function removeSelfDefine(result) {
    // 上一层函数查看basicAction.js中removeProject()函数
    /*
    * your code.....
    **/
    console.log("remove project successful");
}
// 生成图片函数
function occorPicture(){
    const content0 = document.getElementById("myBootstrapTtable");
    const content1 = document.getElementById("solutionTable");
    html2canvas(content0, {
        onrendered: function(canvas) {
            //添加属性
            canvas.setAttribute('id','thecanvas0');
            //读取属性值
            // var value= canvas.getAttribute('id');
            document.getElementById('images0').innerHTML = '';
            document.getElementById('images0').appendChild(canvas);
        }
    });
    html2canvas(content1, {
        onrendered: function(canvas) {
            //添加属性
            canvas.setAttribute('id','thecanvas1');
            //读取属性值
            // var value= canvas.getAttribute('id');
            document.getElementById('images1').innerHTML = '';
            document.getElementById('images1').appendChild(canvas);
        }
    });
}
//定制初始化内容
function setCustomContext() {
    $("#WYeditor").html("");   //加载前先清空
    var title = "矛盾矩阵App使用结果";
    var chap1 = "矛盾矩阵分析结果";
    title = "<h2>1 " + title + "</h2>";
    chap1 = "<h3>1.1 " + chap1 + "</h3>";
    chap2 = "<h3>1.2  结论： <br></h3>";
    canvg();  //将SVG格式的图片转化成canvas格式
    let canv0 = document.getElementsByTagName("canvas")[0];
    let conv1 = document.getElementsByTagName("canvas")[1];
    let conv2 = document.getElementsByTagName("canvas")[2];
    let image0 = new Image();
    let image1 = new Image();
    let image2 = new Image();

    if (canv0 != null) {
        image0.src = canv0.toDataURL("image/png");
    }
    if (conv1 != null) {
        image1.src = conv1.toDataURL("image/png");
    }
    if (conv2 != null) {
        image2.src = conv2.toDataURL("image/png");
    }

    let editor = $("#WYeditor");
    editor.append(title,chap1,image1,image2,chap2);
}