<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="tableclass" style="float:left;width:100%;margin-top:0px">   <%--表格初始化--%>
    <table id="myBootstrapTtable" data-toggle="table" data-search="true" data-show-refresh="true"
           data-show-toggle="true" data-toolbar="#toolbar" data-pagination="true"
           class="table table-striped table-bordered"
           data-side-pagination="client">
        <thead>
        <tr>
            <th class="col-sm-1 center" data-field="state" data-checkbox="true"></th>
            <th data-field="procedureIdForDelete" data-visible="false">procedureId</th>
            <th class="col-sm-1 center" data-field="procedureId" data-formatter="generateId">序号</th>
            <th class="col-sm-1 center" data-field="partName">零部件名称</th>
            <th class="col-sm-1 center" data-field="improvedParameter">改善的参数</th>
            <th class="col-sm-1 center" data-field="worsenParameter">恶化的参数</th>
            <th class="col-sm-6 center" data-field="trizSolution">TRIZ发明原理</th>
            <th class="col-sm-1 center" data-field="action" data-formatter="actionFormatter" data-events="actionEvents">编&nbsp辑</th>
        </tr>
        </thead>
    </table>
    <br>
    <div id="images0" style="display: none"></div>
</div>




