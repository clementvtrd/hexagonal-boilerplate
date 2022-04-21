<?php

use App\Kernel;

require_once dirname(__DIR__).'/vendor/autoload.php';

return function (array $context) {
    $env = (string) $context['APP_ENV'];
    $debug = (bool) $context['APP_DEBUG'];

    return new Kernel($env, $debug);
};
