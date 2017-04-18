<head>    
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/mastermind.css" />
</head>

<div class="container">
    <h1>Mastermind</h1>
    <div class="box">

        <!-- echo out the system feedback (error and success messages) -->
        <?php $this->renderFeedbackMessages(); ?>

            <div class="game">
                <div class="input-buttons">
                    <button class="button" id="yellow" onclick="getUserInput('yellow')"></button>
                    <button class="button" id="green" onclick="getUserInput('green')"></button>
                    <button class="button" id="blue" onclick="getUserInput('blue')"></button>
                    <button class="button" id="red" onclick="getUserInput('red')"></button>
                    <button class="button" id="purple" onclick="getUserInput('purple')"></button>
                    <button class="button" id="white" onclick="getUserInput('white')"></button>
                    <button class="button" id="black" onclick="getUserInput('black')"></button>
                    <button class="button" id="orange" onclick="getUserInput('orange')"></button>
                    <div id="grid">

                    </div>
                </div>
            </div>
        <script src="<?php echo Config::get('URL');?>js/mastermind.js"></script>
    </div>
</div>
