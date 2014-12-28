<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Restaurant Database</title>
<meta charset="utf-8" />
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Latest compiled and minified CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<link rel="stylesheet" href="css/custom.css">
</head>
<body>

	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation" >
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse"
				data-target=".navbar-collapse">
				<span class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="index.jsp">Restaurant Database</a>
		</div>
		<div class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li class="active"><a href="index.jsp">Home</a></li>
			</ul>
		</div>
		<!--/.nav-collapse -->
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<form id="restaurantForm" class="blackback white">
                    <h2 class="center">Search Restaurants</h2>
					<div class="form-group">
						<p class="lead center">Restaurant Types</p>
						<label class="radio-inline"> <input type="radio"
							name="Cuisine" value="Asian"> Asian
						</label> <label class="radio-inline"> <input type="radio"
							name="Cuisine" value="Mediterranian"> Mediterranian
						</label> <label class="radio-inline"> <input type="radio"
							name="Cuisine" value="Latin American">Latin American
						</label> <label class="radio-inline"> <input type="radio"
							name="Cuisine" value="American">American
						</label> <label class="radio-inline"> <input type="radio"
							name="Cuisine" value="Italian">Italian
						</label>

						<p class="lead center">Ratings</p>
						<label class="radio-inline"> <input type="radio"
							name="Stars" value="4">4 star or more
						</label> <label class="radio-inline"> <input type="radio"
							name="Stars" value="3"> 3 star or
							more
						</label> <label class="radio-inline"> <input type="radio"
							name="Stars" value="2">2 star or
							more
						</label> <label class="radio-inline"> <input type="radio"
							name="Stars" value="1">1 star or more
						</label>

						<p class="lead center">Average Price</p>
						<label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" class="class1" value="15" name="AvgPrice">$15 or less
                         </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox2" class="class2" value="20" name="AvgPrice">$20 or less
                         </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox3"  class="class3" value="25" name="AvgPrice">$25 or less
                          </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox5" class="class4" value="30" name="AvgPrice">$30 or less
                         </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox6"  class="class5"value="35" name="AvgPrice">$35 or less
                          </label>
                          <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox7"  class="class6"value="40" name="AvgPrice">$40 or less
                          </label>
						
						<p class="lead center">Distance from city</p>
						<label class="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox8"  class="class7"value="4" name="DstFrmCty">4 miles or less
                         </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox9"  class="class8"value="8" name="DstFrmCty">8 miles or less
                         </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox10"  class="class9"value="12" name="DstFrmCty">12 miles or less
                          </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox11" class="class10" value="16" name="DstFrmCty">16 miles or less
                         </label>
                         <label class="checkbox-inline">
                         <input type="checkbox" id="inlineCheckbox12"  class="class11" value="20" name="DstFrmCty">20 miles or less
                          </label>

  				
						
						

						<p class="lead center">Open time</p>
						<label class="radio-inline"> <input type="radio"
							name="OPEN" value="06:00:00">6am
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="07:00:00">7am
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="08:00:00">8am
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="09:00:00">9am
						</label><label class="radio-inline"> <input type="radio"
							name="OPEN" value="10:00:00">10am
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="11:00:00">11am
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="12:00:00">12pm
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="13:00:00">1pm
						</label><label class="radio-inline"> <input type="radio"
							name="OPEN" value="14:00:00">2pm
						</label> <label class="radio-inline"> <input type="radio"
							name="OPEN" value="15:00:00">3pm
						</label>						
						
						<p class="lead center">Close time</p>
						<label class="radio-inline"> <input type="radio"
							name="CLOSE" value="23:00:00">11pm
						</label> <label class="radio-inline"> <input type="radio"
							name="CLOSE" value="00:00:00">12am
						</label> <label class="radio-inline"> <input type="radio"
							name="CLOSE" value="01:00:00">1am
						</label> <label class="radio-inline"> <input type="radio"
							name="CLOSE" value="02:00:00">2am
						</label>


					</div>


					<button id="Search" class="btn btn-success btn-lg" disabled="disabled">Search</button>


				</form>
			</div>	
			<div class="col-md-6" >
		<form id="servesForm" class="blackback white">
		<p class="lead center">Search different items which is served in different restaurants</p>
		<p class="lead center">Search by item</p>
		<input type="text" class="form-control" name="Item" placeholder="Eg Apple pie,Cannoli,Lobster Soup" id="textt">
		<button id="Searchserves" class="btn btn-success btn-lg" disabled="disabled">Search</button>
		</form> 
		<br>
		</div>
	    <div class="col-md-6" >
		   <div id="resultDiv"></div>
		</div>  
		</div>
	</div>
		
	<script src="js/jquery-1.11.0.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/app.js"></script>
	<script>
	//Stops the submit request
    $("#restaurantForm").submit(function(e){
           e.preventDefault();
    });
    
    

		$("#Search").click(function(e) {
			dataString = $("#restaurantForm").serialize();
			
			$.ajax({
				type : "GET",
				url : "Doquery",
				data : dataString,
				dataType : "json",
				success : function(restaurants, textStatus, jqXHR) {
					var res1="<h1 class='white center'>Result</h1>";
					var white = "<div class='blackback'>";
					var res="<h1 class=' white center'>Sorry no result found!!!</h1>";
					var divid="<div id='tabled2'>";
					var table = "<table class='table blackback white'>";
					var rows = "";
					var head="<tr><th>ID</th><th>Name</th><th>Address</th><th>Phone</th><th>Website</th><th>Cuisine</th><th>Distance</th><th>Ratings</th><th>Average Price</th><th>OPEN TIME</th><th>CLOSE TIME</th></tr>";
					if(restaurants.length == 0){
						$("#resultDiv").html(white+res+"</div>");
					console.log(restaurants.length);
					}else{
					for(var index in restaurants){
						var row = "<tr>";
						var restaurant = restaurants[index];
						var coloumns ="";
						var objectKeys = Object.keys(restaurant);
						for(var key in objectKeys){
							coloumns += "<td>"+restaurant[objectKeys[key]]+"</td>";	
						}
						
					    row=row+coloumns+"</tr>";
						rows +=row;
					}
					
					$("#resultDiv").html(divid+res1+table+head+rows+"</table>"+"</div>");	
					}
					}
				
			});
		});
		
		
		$("#servesForm").submit(function(l){
	           l.preventDefault();
	    });
	    
	    

			$("#Searchserves").click(function(l) {
				dataString = $("#servesForm").serialize();
				
				$.ajax({
					type : "GET",
					url : "Doserves",
					data : dataString,
					dataType : "json",
					success : function(serves, textStatus, jqXHR) {
						var res1="<h1 class='white center'>Result</h1>";
						var white = "<div class='blackback'>";
						var res="<h1 class=' white center'>Sorry no result found!!!</h1>";
						var divid="<div id='tabled2'>";
						var table = "<table class='table blackback white'>";
						var rows = "";
						var head="<tr><th>ID</th><th>Name</th><th>Address</th><th>Phone</th><th>Website</th><th>Cuisine</th><th>Distance</th><th>Ratings</th><th>Average Price</th><th>OPEN TIME</th><th>CLOSE TIME</th></tr>";
						if(serves.length == 0){
							$("#resultDiv").html(white+res+"</div>");
						}else{
						for(var index in serves){
							var row = "<tr>";
							var serve = serves[index];
							var coloumns ="";
							var objectKeys = Object.keys(serve);
							for(var key in objectKeys){
								coloumns += "<td>"+serve[objectKeys[key]]+"</td>";	
							}
							
						    row=row+coloumns+"</tr>";
							rows +=row;
						}
						
						$("#resultDiv").html(divid+res1+table+head+rows+"</table>"+"</div>");	
						}
						}
					
				});
			});
	</script>
</body>
</html>
