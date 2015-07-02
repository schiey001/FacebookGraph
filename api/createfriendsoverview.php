<script type="text/javascript" src="../includes/js/vis.min.js"></script>
<link type="text/css" href="../includes/css/vis.min.css" rel="stylesheet" />    
<style type="text/css">
	#network {
		width: 100%;
		height: 800px;
	}

	p {
		max-width:600px;
	}

	h4 {
		margin-bottom:3px;
	}
</style>
<div id="network"></div>
<script type="text/javascript">
    var nodeIds, shadowState, nodesArray, nodes, edgesArray, edges, network;

    function startNetwork() {
        // this list is kept to remove a random node.. we do not add node 1 here because it's used for changes
        nodeIds = [2, 3, 4, 5];
		nodesArray = [];
		edgesArray = [];
        shadowState = false;
		
		users = [];
		
		$.ajax({
			dataType: "json",
			url: "data/data.json",
			async: false,
			success: function(data){
				$.each(data, function(key, val){
					if ("friends" in val){
						users.push(val);
					}
				});
			}
		});

		//$.getJSON("data/data.json", function(data){
		//	$.each(data, function(key, val){
		//		if ("friends" in val){
		//			users.push(val);
		//		}
		//	});
		//});
		
		$.each(users, function(key, val){
			nodesArray.push({id: val["id"], label: val["name"]})
		});
		
        nodes = new vis.DataSet(nodesArray);

        // create an array with edges
		$.each(users, function(key, val){
			// Not all of our dummy profiles have friends! (aww)
			if ("friends" in val){
				$.each(val["friends"], function(key2, val2){
					console.log(val["id"] + ":" + val2);
					edgesArray.push({from: val["id"], to: val2});
				});
			}
		});
		
        //edgesArray = [
        //    {from: 1, to: 3},
        //    {from: 1, to: 2},
        //    {from: 2, to: 4},
        //    {from: 2, to: 5}
        //];
        edges = new vis.DataSet(edgesArray);

        // create a network
        var container = document.getElementById('network');
        var data = {
            nodes: nodes,
            edges: edges
        };
        var options = {};
        network = new vis.Network(container, data, options);
    }

    function setTheData() {
        nodes = new vis.DataSet(nodesArray);
        edges = new vis.DataSet(edgesArray);
        network.setData({nodes:nodes, edges:edges})
    }

    startNetwork();
</script>