<h2> Per Win Pricing </h2>
<img id="perwin_picture" src="assets/img/bronze.jpg">
  <h4> Your previous season rank </h4>
  <select id="perwin_selected_division" onchange="changeDivision();">
    <option class="bronze">Bronze</option>
    <option class="silver">Silver</option>
    <option class="gold">Gold</option>
    <option class="platinum">Platinum</option>
    <option class="diamond">Diamond</option>
  </select>
   <select id="perwin_selected_rank" onchange="calcPrice();">
    <option class="5">5</option>
    <option class="4">4</option>
    <option class="3">3</option>
    <option class="2">2</option>
    <option class="1">1</option>
  </select>
  <h4> Number of wins to be purchased </h4>
  <p id="perwin_games_purchased">5</p>
  <input id="perwin_games_purchased_slider" type="range" min="1" max="20" 
    step="1" value="5" onchange="changeNumOfGames();">
  <h3 id='perwin_price'></h3>
