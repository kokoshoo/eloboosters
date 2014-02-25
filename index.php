<?php include("templates/header.php") ?>




      <div class="jumbotron">
        <h1>We'll boost you with our epic supports</h1>
        <p class="lead">...and feeders</p>
      </div>

      <hr>
      <div id ="regions">
        <h1> Available regions</h1>
        <ul>
          <li>North America</l1>
          <li>Latin America North</li>
          <li>Europe East</li>
        </ul>
      </div>

      <hr>

      <div id = "services">
        <div id= "service_info">
          <h2> Our Service </h2>
          <ul>
            <li>If you can show us the price on another website,
            we will match their price and top it off with a
            10% discount.</li>
            <li>Each division should take a max of 2 days.</li>
            <li>Each placement should take a max of 2 days.</li>
          </ul>
          <h2> Pricing </h2>

        </div>
        <div id = "service_type">
          <a id="perdiv" onclick = "changeView('perdiv');"> Per Division Pricing </a>
          <a id="perwin" onclick = "changeView('perwin');"> Per Win Pricing </a>
          <a id="unranked" onclick = "changeView('unranked');"> Unranked Placement </a>
        </div>

        <div id = "service_view">
          <div id="perdiv_view" >
            <?php include('templates/perdiv_view.php');?>
          </div>
          <div id="perwin_view">
            <?php include('templates/perwin_view.php');?>
          </div>
          <div id="unranked_view">
            <?php include('templates/unranked_view.php');?>
          </div>
        </div>

      </div>


 <?php include('templates/footer.php');