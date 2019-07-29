<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="tab-pane" id="def">
    <div>
        <a class="btn btn-xs btn-primary" style="" onclick="conflictAnalysis()" data-toggle="modal">
            <i class="ace-icon fa fa-gears bigger-120"></i>TRIZ发明原理使用统计
        </a>
    </div>
    <div id="main1"style="height:900px" >
        <%--计算结果显示--%>
        <div id="solution" style="float:left;width:100%;margin-top:10px;"><%--display:none--%>
            <table id="solutionTable" data-toggle="table"  data-pagination="true" class="table table-striped table-bordered" data-side-pagination="client">
                <thead>
                <tr>
                    <th class="col-sm-1 center" data-field="procedureId" data-formatter="generateId">序号</th>
                    <th class="col-sm-3 center" data-field="triz">TRIZ发明原理</th>
                    <th class="col-sm-1 center" data-field="citedNumber">引用次数</th>
                    <th class="col-sm-10 center" data-field="introduce">介绍</th>
                </tr>
                </thead>
            </table>
        </div>
            <div id="images1" style="display: none"></div>
            <div id ="dynamicDiv">
                <%-- <div id="analysisChart" style="float:left;width:100%;height:400px;margin-top:0px"></div>--%>
            </div>
    </div>
</div>

