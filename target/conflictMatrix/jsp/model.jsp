<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--手动添加数据模态框-->
<div class="modal fade" id="addInfoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="newProjectModalTitle">
                    冲突矩阵：
                </h4>
            </div>
            <div class="modal-body">
                <!-- <%--输入框组--%> -->
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">零部件名称：</span>
                     <input type="text"id="inputPartName" class="form-control" style="width: 460px"placeholder="请输入零部件名称" >
                </div>
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">改善的参数：</span>
                    <select class="form-control" id="inputImprovedParameter"class="form-control" style="width: 460px"onchange="solve1()"></select>
                </div>
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">恶化的参数：</span>
                    <select class="form-control" id="inputWorsenParameter"class="form-control" style="width: 460px"onchange="solve1()"></select>
                </div>
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">TRIZ发明原理：</span>
                     <input type="text" id="getSolution"class="form-control" style="width: 445px;">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-xs btn-success" data-toggle="modal" data-dismiss="modal" onclick="">
                    <i class="glyphicon glyphicon-import">关闭</i>
                </button>
                <button type="button" class="btn btn-xs btn-info" onclick="addData()">
                    引用
                </button>
            </div>
        </div>
    </div>
</div>
<!--修改模态框-->
<div class="modal fade" id="updatedatainfo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"
                        aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">修改零件信息</h4>
            </div>
            <div class="modal-body">
                <!-- <%--输入框组--%> -->
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">零部件名称：</span>
                    <input type="text"id="inputPartName_u" class="form-control" style="width: 460px"placeholder="修改矛盾参数" >
                </div>
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">改善的参数：</span>
                    <select class="form-control" id="inputImprovedParameter_u"class="form-control" style="width: 460px"onchange="solve2()"></select>
                </div>
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">恶化的参数：</span>
                    <select class="form-control" id="inputWorsenParameter_u"class="form-control" style="width: 460px"onchange="solve2()"></select>
                </div>
                <div class="input-group">
                    <span class="input-group-addon"style="width: 85px;height: 34px">TRIZ发明原理：</span>
                    <input type="text" id="getSolution_u"class="form-control" style="width: 445px;">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-xs btn-info" onclick="editItem()">
                        提交
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>