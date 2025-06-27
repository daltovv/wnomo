<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wnomo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e*OcfadBg}Tr;u) 3(<UOJ_NY@x-ar4?*]T)9?ex(Do?HWmI:*XyMKYhn&=I`}X0' );
define( 'SECURE_AUTH_KEY',  'SGWnD*8Va>NrW|@R4O`<]kU{7[#2aUXyv?>Ar,$toUmFt^aT2Q2d%jW0q$ %3~Ph' );
define( 'LOGGED_IN_KEY',    '$YKq<&>?QaOoE~K[kna#) !ma@}Y+Ym<i_jt2[).]4ZT2tNTHRdyTs&vzqd_6/H~' );
define( 'NONCE_KEY',        '5r Ac/JYAk,/;BV2r}aD ]QVgM&YCaj=!0%Y=B0v)Xq_bGD4,k%#vW]+z[WCc rY' );
define( 'AUTH_SALT',        ' SeElA~#T#=$cjxP6wYLX$Wl>J3)D-.5X_ywYk{YGX<BO8L^WVC%U~Q!/)4g7QK:' );
define( 'SECURE_AUTH_SALT', '!uM}Kne>%q8zy&Y?& B^gS1)n16<p/UYN-5^g{- T%7{xhy.x@Zv4XmS~=7&Oc4!' );
define( 'LOGGED_IN_SALT',   'D|]H9#`=v{P*mEC2RM>s{E7E5}Lxf]5fl}q917(ami,t/zEpy4=B)U!|/b5BO*&}' );
define( 'NONCE_SALT',       '`qm0z4$c~]:^L:yN0|V[oU|07>qjhs(wJOtrZ$M{]rE2XGH:)R;B{*p#[kEERy>+' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
