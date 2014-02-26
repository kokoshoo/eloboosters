<h2> Per Division Pricing </h2>
<div id="current_div">
  <h4> Current Rank </h4>
  <img id="current_picture" src="assets/img/bronze.jpg">

  <select id="current_selected_division" onchange="changeDivision();">
    <option class="bronze">Bronze</option>
    <option class="silver">Silver</option>
    <option class="gold">Gold</option>
    <option class="platinum">Platinum</option>
    <option class="diamond">Diamond</option>
  </select>
   <select id="current_selected_rank" onchange="calcPrice();">
    <option class="1">5</option>
    <option class="2">4</option>
    <option class="3">3</option>
    <option class="4">2</option>
    <option class="5">1</option>
  </select>
  <select id="current_selected_lp" onchange="calcPrice();">
  	<option class="0-20">0-20 LP </option>
  	<option class="20-40">20-40 LP </option>
  	<option class="40-60">40-60 LP </option>
  	<option class="60-80">60-80 LP </option>
  	<option class="80-99">80-99 LP </option>
  	<option class="100">100 LP </option>
  </select>
</div>
<div id="desired_div">
  <h4> Desired Rank </h4>
  <img id="desired_picture" src="assets/img/bronze.jpg">
  <select id="desired_selected_division" onchange="changeDivision();">
    <option class="bronze">Bronze</option>
    <option class="silver">Silver</option>
    <option class="gold">Gold</option>
    <option class="platinum">Platinum</option>
    <option class="diamond">Diamond</option>
  </select>
   <select id="desired_selected_rank" onchange="calcPrice();">
    <option class="1">5</option>
    <option selected="selected" class="2">4</option>
    <option class="3">3</option>
    <option class="4">2</option>
    <option class="5">1</option>
  </select>
</div>

  <h3 id='perdiv_price'></h3>