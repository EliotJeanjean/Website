<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Eliot Jeanjean'; ?></title>
    <link rel="stylesheet" href="/css/main.css">
    <link rel="stylesheet" href="/css/menu.css">
    <?php if(isset($extraCSS)) echo $extraCSS; ?>
</head>
<body>

<!-- HEADER DYNAMIQUE -->
<div class="header">
    <div class="row2">
        <div class="header-left">
            <div class="bar2"></div>
            <p>
                <span class="highlight"><em><em>✲</em> <?php echo $headerTitle ?? 'Titre par défaut'; ?></em></span>
                <br>
                <em><?php echo $headerDesc ?? 'Description par défaut'; ?></em>
            </p>
        </div>
        <div class="header-right">
            <div class="circlezoom hoverzoom">
                <div class="circle button1">
                    <div class="icon-menu"></div>
                </div>
            </div>
            <a href="https://www.eliotjeanjean.fr">
                <div class="circlezoom1 hoverzoom">
                    <div class="circle button1">
                        <div class="icon-home"></div>
                    </div>
                </div>
            </a>
        </div>
    </div>
      <div class="page2 contact">
    <div class="contactgrid">
        <div class="circlezoom3">
          <div class="circle2 button2">
            <div class="close"></div>
          </div>
        </div>
        <div class="boxcv">
        <div id="menu">
        </div>
      </div>
      </div>
    </div>
</div>
