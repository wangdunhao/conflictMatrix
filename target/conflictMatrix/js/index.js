var hot;//定义全局变量，handsontable用
var updateindex = 1;
window.actionEvents = {
    'click .edit': function (e, value, row, index) {
        $('#updatedatainfo').modal('show');
/*        $("#inputImprovedParameter_u").val(row.improvedParameter);
        $("#inputWorsenParameter_u").val(row.worsenParameter);*/
        $("#inputPartName_u").val(row.partName);
        $("#procedureId_u").val(row.procedureId); //不可见，不能改
        updateindex = index;
        // console.log(row);
    }
}

$(document).ready(function(){
    ParameterList.forEach(function (e, i, a) {
        var option = "<option value='"+i+"'>"+e+"</option>";
        $("#inputImprovedParameter_u").append($(option));
        $("#inputWorsenParameter_u").append($(option));
    });
});
//编辑菜单
function actionFormatter(value, row, index) {
    return [
        '<a class="edit ml10" href="javascript:void(0)" title="Edit">',
        '<i class="glyphicon glyphicon-edit"></i> 编辑',
        '</a>'
    ].join('');
}
//删除函数
function deleterow() {
    //遍历数组中的每个元素，并按照return中的计算方式 形成一个新的元素，放入返回的数组中
    var ids = $.map($('#myBootstrapTtable').bootstrapTable('getSelections'), function (row) {
        return row.procedureIdForDelete;
    });
    $('#myBootstrapTtable').bootstrapTable('remove', {field: 'procedureIdForDelete', values: ids});
    // var ids=$("#myBootstrapTtable").bootstrapTable("getSelections");

}
//更改样本数据
function editItem() {
    let solutionNumList = conflictMatrix[improvedParameter][worsenParameter].split(',');
    let solutionList = [];
    for (let j = 0; j < solutionNumList.length; j++) {
        solutionList.push(SOLUTIONS[solutionNumList[j]]);
    }
    $('#updatedatainfo').modal('hide');
    ////更改表格数据
    var partdata= {
        partName:$("#inputPartName_u").val(),
        improvedParameter:ParameterList[$("#inputImprovedParameter_u").val()],
        worsenParameter:ParameterList[$("#inputWorsenParameter_u").val()],
        trizSolution:solutionList.toString()
    };
    $('#myBootstrapTtable').bootstrapTable('updateRow',{index: updateindex, row: partdata});
}
//生成序号自加+1
function generateId(value,row,index) {
    return index+1;
}
//将关系数据保存至数据库
function saveRelaxData() {
    if (projectId == 0) {
        alert("尚未选择与之对应的项目，请另存为一个新项目！");
        $('#saveAsNewProjectModal').modal();
    }
    else {
        let technicalContradiction = $('#myBootstrapTtable').bootstrapTable('getData');
        $.ajax({
            url: "/projectManager/api/v1/project",
            type: "put",
            data: {
                id: projectId,
                projectName: projectName,
                memo: '',
                appResult: '',
                tempProjectID: "",
                appContent: JSON.stringify(technicalContradiction),
                reservation: ""
            },
            success: function (result) {
                if (result.state) {
                    alert("Excel信息保存数据库成功！");  //请求成功
                }
                else {
                    alert("Excel信息保存数据库出现错误！");  //请求错误
                }
            }
        })
    }
}