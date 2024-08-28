<?php

/**
 * Plugin Name:    First Template Ashari 
 * Description:       Wordpress ecomerce .
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:           Ashari Midana 
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:      jcomerce 
 */

// === Start Sub menu ==========
add_action('admin_enqueue_scripts', 'jobplace_admin_enqueue_scripts');
function jobplace_admin_enqueue_scripts()
{
	wp_enqueue_style('jobplace-style', plugin_dir_url(__FILE__) . 'build/index.css');
	wp_enqueue_script('jobplace-script', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-element'), '1.0.0', true);
	wp_enqueue_script('custom-stript', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array('wp-element'), null, true);
}

add_action('admin_menu', 'jobplace_init_menu');
function jobplace_init_menu()
{
	add_menu_page(
		__('Dashboard', 'dashboard'), //Title
		__('Dashboard', 'dashboard'), //Sidebar Title
		'manage_options',
		'dashboard', // slug
		'jobplace_admin_page', // Function 
		'dashicons-admin-post', // Icon
		3 // Urutan link dari atas
	);
}

function jobplace_admin_page()
{
	require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}


// GET /product 
add_action('admin_menu', 'register_product');
function register_product()
{
	add_submenu_page(
		'dashboard',
		'slug',
		'Daftar Harga2',  // menu di sidebar
		'administrator',
		'product2',
		'harga_2'
	);
}
function harga_2()
{
	require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}

// Product page
add_action('admin_menu', 'product_init_menu');
function product_init_menu()
{
	add_menu_page(
		__('Products', 'products'), //Title
		__('Product', 'product'), //Sidebar Title
		'manage_options',
		'products', // slug
		'product_admin_page', // Function 
		'dashicons-admin-post', // Icon
		4 // Urutan link dari atas
	);
}

function product_admin_page()
{
	require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}

add_action('admin_menu', 'orders_init_menu');
function orders_init_menu()
{
	add_submenu_page(
		'products',
		'add_product',
		'Tambah Produk Baru',  // menu di sidebar
		'administrator',
		'add_product', // slug
		'order_submenu_page'
	);
}

function order_submenu_page()
{
	require_once plugin_dir_path(__FILE__) . 'templates/app.php';
}
// === End Sub menu ==========


//=======================================Start Backend===============================
require_once plugin_dir_path(__FILE__) . 'backend/Controllers/session_controllers.php';
require_once plugin_dir_path(__FILE__) . 'backend/Controllers/wp_custom_register.php';
//=======================================End Backend===============================
