<%--
  Created by IntelliJ IDEA.
  User: wangdunhao
  Date: 2018/11/16
  Time: 9:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>创新方法工作平台</title>
    <!--添加页面框架-->
    <link rel="import" id="frame" href="/webresources/common/html/appFrame.html">
    <script type="text/javascript" src="js/buttonAction.js"></script>
    <%--<!-- 添加handsontable插件 -->
    <script src="js/handsontable/handsontable.full.min.js"></script>
    <script src="js/handsontable/all.js"></script>
    <link href="js/handsontable/handsontable.full.min.css" rel="stylesheet" media="screen">--%>
    <%--bootstraptable--%>
    <link rel="stylesheet" href="/webresources/bootstrap/bootstrap-table/bootstrap-table.css">
    <script type="text/javascript" src="/webresources/ace-master/assets/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="/webresources/bootstrap/bootstrap-table/bootstrap-table.js"></script>
    <script type="text/javascript" src="/webresources/bootstrap/bootstrap-table/locale/bootstrap-table-zh-CN.js"></script>
    <!-- echarts -->
    <script type="text/javascript" src="js/echarts/echarts.min.js"></script>
    <script type="text/javascript" src="js/echarts/echarts-stat.min.js"></script>
    <!-- 截图 -->
    <script type="text/javascript" src="js/canvg/canvg.min.js"></script>
    <script type="text/javascript" src="js/dom-to-image/base64.js"></script>
    <script type="text/javascript" src="js/dom-to-image/canvas2image.js"></script>
    <script type="text/javascript" src="js/dom-to-image/dom-to-image.js"></script>
    <script type="text/javascript" src="js/dom-to-image/html2canvas.min.js"></script>
    <!-- 前端主功能 -->
    <script type="text/javascript" src="js/index.js"></script>
    <script type="text/javascript" src="js/conflictMatrix.js"></script>
</head>
<body class="no-skin">
<div id="mainFunctionHtml">
    <div id="myCustomLi">
        <li class="active">
            <a data-toggle="tab" href="#abc">
                <i class="green ace-icon fa fa-desktop bigger-120"></i>矛盾矩阵</a>
        </li>
        <li class="">
            <a data-toggle="tab" href="#def">
                <i class="purple ace-icon fa fa-pencil-square-o bigger-120"></i>统计</a>
        </li>
    </div>
    <div id="myCustomTab">
        <div class="tab-pane active" id="abc">
            <div id="dataInfo" class="tab-pane active">
                <div id="toolbar" style="float:left" class="btn-group">
                    <a class="btn btn-xs btn-info" onclick="" data-toggle="modal" data-target="#addInfoModal">
                        <i class="ace-icon glyphicon glyphicon-plus"></i>
                        添加技术矛盾
                    </a>
                    <button type="button" class="btn btn-xs btn-danger" style="margin-right: 40px" onclick="deleterow()">
                        <i class="glyphicon glyphicon-trash"></i>
                        删除
                    </button>
                    <button type="button" class="btn btn-xs btn-info" onclick="saveRelaxData()">
                        <i class="ace-icon fa fa-save bigger-120"></i>保存
                    </button>
                    <button type="button" class="btn btn-xs btn-info" onclick="saveAsNewProject()">
                        <i class="ace-icon fa fa-random bigger-120"></i>另存为
                    </button>
                </div>
            </div>
            <!-- 主界面区1 -->
            <div id="main"style="height:700px" >
                <jsp:include page="jsp/start.jsp"/>
            </div>
        </div>
        <%--界面2--%>
        <jsp:include page="jsp/after.jsp"/>
        <%--界面2完--%>
    </div>
</div>
<%--模态框--%>
<jsp:include page="jsp/model.jsp"/>
<!--帮助页面-->
<jsp:include page="jsp/help.jsp"/>
</body>
</html>

