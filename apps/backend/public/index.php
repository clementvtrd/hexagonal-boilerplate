<?php

declare(strict_types=1);

use Infrastructure\Symfony\Kernel;

require_once dirname(__DIR__).'/vendor/autoload.php';

return function (array $context) {
    $env = (string) $context['APP_ENV'];
    $debug = (bool) $context['APP_DEBUG'];

    return new Kernel($env, $debug);
};
