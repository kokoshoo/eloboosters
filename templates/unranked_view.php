<h2>Unranked Placement</h2>
<img id="unranked_picture" src="assets/img/unranked.jpg">
  <h4> Your previous season rank </h4>
  <select id="unranked_selected_division" onchange="changeDivision();">
    <option class="unranked">Unranked</option>
    <option class="bronze">Bronze</option>
    <option class="silver">Silver</option>
    <option class="gold">Gold</option>
    <option class="platinum">Platinum</option>
    <option class="diamond">Diamond</option>
  </select>
  <h4> Number of games to be purchased </h4>
  <p id="unranked_games_purchased">5</p>
  <input id="unranked_games_purchased_slider" type="range" min="1" max="20" 
    step="1" value="5" onchange="changeNumOfGames();">
  <h3 id='unranked_price'></h3>
