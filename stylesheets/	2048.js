html, body {
			  margin: 0;
			  padding: 10px;
			  background: #D63B71;
			  color: #A020F0;
			  font-family: "Helvetica Neue", Arial, sans-serif;
			  font-size: 36px; 
			  font-weight: bolder;
			}

			.grid-container {
			  position: absolute;
			  z-index: 1; 
			}

			.grid-row {
			  margin-bottom: 15px; 
			}

  			.grid-row:last-child {
    			margin-bottom: 0; 
			}	

			.grid-row:after {
				content: "";
			    display: block;
			    clear: both;
			}

			.grid-cell {
			  width: 106.25px;
			  height: 106.25px;
			  margin-right: 15px;
			  float: left;
			  border-radius: 3px;
			  text-align: center;
			  background: rgba(238, 228, 218, 0.35); 
			}

			.grid-cell:last-child {
			    margin-right: 0; 
			}

			.game-container {
				  margin-top: 40px;
				  position: relative;
				  padding: 15px;
				  cursor: default;
				  background: #088DA5;
				  border-radius: 6px;
				  width: 500px;
				  height: 500px;
				  -webkit-box-sizing: border-box;
				  -moz-box-sizing: border-box;
				  box-sizing: border-box; 
			}
		h1	{
			  color: #580444;
			  font-family: "Helvetica Neue", Arial, sans-serif;
			  font-size: 40px; 
			  font-weight: bolder;
			}
