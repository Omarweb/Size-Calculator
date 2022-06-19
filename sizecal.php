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
    echo '<button class="btn-calc button " >' . __( "Size Calcutor", "sizecal" )  . '</button>';
    
}

function model(){
    echo    '<div class="size-model hide">
        <div class="model-body">
        <button class="close-size">x</button>
        <h3>Your ideal size a few steps!</h3>
        <div class="form-container">
        <div class="content">
        <img src="'. plugin_dir_url( __FILE__ )."/img/body.png".'" />
        </div>
        <form class="size-form">

         
        <div class="row">
            <label for="lname">Height:</label>
            <div class="field">
            <input type="text" id="height" name="height" placeholder="171" value="194">
            </div>
</div>
<div class="row">
            <label for="lname">Chest:</label>
            <div class="field">
            <input type="text" id="chest" name="chest" placeholder="100" value="113">
            </div>
            </div>
            <div class="row">
            <label for="lname">Waist:</label>
            <div class="field">
            <input type="text" id="waist" name="waist" " placeholder="84" value="102">
            </div>
            </div>
<div class="row">
            <label for="lname">Hip:</label>
            <div class="field">
            <input type="text" id="hip" name="hip"  placeholder="92" value="113">
            </div>
            </div>

            <input type="submit" class="submit" value="Submit">
        </from>
        </div>
        <div class="size"><span></span></div>
        </div>
    </div>';
}



?>