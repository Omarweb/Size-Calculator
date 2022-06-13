<?php 
/**
 * Plugin Name: Size Calculator
 */

add_action( 'woocommerce_after_add_to_cart_button', 'calcBtn', 10, 0 );
add_action('wp_enqueue_scripts','sizeCalAssests');

add_action( 'wp_footer', 'model', 10 );


function sizeCalAssests() {
    wp_enqueue_script( 'calc-module', plugins_url( '/assests/index.js', __FILE__ ), '', '', true);
    wp_enqueue_style('calc-style', plugins_url( '/assests/plugin.css', __FILE__ ), '', '', false);


}

function calcBtn() { 
    echo '<button class="btn-calc" >' . __( "Size Calcutor", "sizecal" )  . '</button>';
    
}

function model(){
    echo    '<div class="size-model">
        <div class="model-body">
        <form class="size-form">

         

            <label for="lname">Height:</label>
            <input type="text" id="height" name="height" value="180">

            <label for="lname">Chest:</label>
            <input type="text" id="chest" name="chest" value="100" >
            <label for="lname">Waist:</label>
            <input type="text" id="waist" name="waist" value="84">
            <label for="lname">Hip:</label>
            <input type="text" id="hip" name="hip" value="98">

            <input type="submit" value="Submit">
        </from>
        <div class="size"></div>
        </div>
    </div>';
}



?>