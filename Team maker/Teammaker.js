<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ramdom Team Selector</title>
        <link rel="stylesheet" href="main.css"> <!--Link Stylesheet-->
        <meta name="viewport" content="width= device-width , initial-scale=1.0">
    </head>
    <body >
        <!--Header-->
        <div id="header">            
           <h1>Random Team Selector</h1>
        </div>
        
         <!--Navigation Bar-->
        <div class="navbar">
            <input type="text" placeholder="Search.." name="Search">
            <a href="index.html"><h2>Home</h2></a>
            <a href="#" onclick="reset();" ><h2>Reset</h2></a>
            <a href="#"><h2>Contact Us</h2> </a> 
      </div> 
       <!--Parent container for participant, team and ParticipantTeamList-->
      <div id="main">

            <!--ParticipantList container-->
             <div id= participant  >
                <div id="inputlabel"> <h2 >1. Add Participant</h2></div>
                <input  type="text" id="text" class="input" placeholder="Participant's name" onchange="add()">
                <button id="add_btn" class ="add" onclick="add()" >Add</button>
                <div id="ulList"></div>
             </div>
            
            <!--Generate Button and note container-->
            <div id=chooseteam>              
                    <button id="create" onclick="onstart()"> <h2> 3. Generate Teams</h2></button><br>
                    <span id="note">Scroll down for Results</span>
                </div> 
            
            <!--TeamList container-->
             <div id="team">
                <div id="inputlabel"> <h2 >2. Add Team</h2></div>
                 <input  type="text" id="teamText" class="input" placeholder="Team Title" onchange="onAdd()">
                 <input type="button" id="add_btn"  value="Add" onclick="addteam()">
                 <div id="ulTeam"></div>
             </div>

             <!--ParticipantTeamList container-->
             <div id="ParticipantTeamList" >
                 <div id="inputlabel"><h2>4. Assigned Teams</h2></div>
                 <div id="teamresult">
                     <div id="participantTeamListHead"><h3>Team No. 1</h3>
                      <div id="partTeam1List" class="randomlist"></div>
                     </div></div>
                 <div id="teamresult">
                     <div id="participantTeamListHead"><h3>Team No. 2<h3></div>
                     <div id="partTeam2List" class="randomlist"></div>
                  </div>
                 <div id="teamresult"><div id="participantTeamListHead"><h3>Team No. 3</h3></div></div>
                 <div id="teamresult"><div id="participantTeamListHead"><h3>Team No. 4</h3></div></div>
             </div>
        
            </div>
        
    <script src="Teammaker.js"></script>  <!--Link JavaScript-->
</body>
</html>




